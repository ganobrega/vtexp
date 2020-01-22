import parseUrl from 'url-parse';
import S from 'string';
import cheerio from 'cheerio';
import { VTEX_HOSTS } from './constants';

export default class Vtex {


  constructor() {
    this.account = '';
    this.environment = '';

  }

  detect() {
    let me = this;

    return new Promise((resolve, reject) => {

      chrome.tabs.query({ currentWindow: true, active: true }, function (tab) {
        let currentTab = tab[0];
        let currentUrl = currentTab.url;

        if (me.detectInUrl(currentUrl)) {
          resolve(parseUrl(currentUrl).host.split('.')[0])
        } else {


          function onWindowLoad() {

            chrome.tabs.executeScript(null, {
              file: "detector.js"
            }, function () {
              // If you try and inject into an extensions page or the webstore/NTP you'll get an error
              if (chrome.runtime.lastError) {
                reject('There was an error injecting script : \n' + chrome.runtime.lastError.message)
              }
            });

          }

          window.onload = onWindowLoad;


          chrome.runtime.onMessage.addListener(function (request, sender) {
            if (request.action == "getSource") {
              let source = request.source;

              if (source.indexOf('xmlns:vtex') < 0) resolve(false);

              let accountName = S(source).between("jsnomeLoja", ";").between("'", "'").s;

              resolve(accountName);
            }
          });


        }


      });


    })
  }

  handlerVTEXIO(source){
    
  }

  detectInUrl(url) {
    let result;

    VTEX_HOSTS.forEach(x => {
      if (url.indexOf(x.host) >= 0) {
        result = x.label;
      }
    });

    if (result === undefined) {
      return false;
    }

    return result;
  }

}
