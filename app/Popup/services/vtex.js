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
    const me = this;

    return new Promise((resolve, reject) => {
      chrome.tabs.query({ currentWindow: true, active: true }, (tab) => {
        const currentTab = tab[0];
        const currentUrl = currentTab.url;

        if (me.detectInUrl(currentUrl)) {
          resolve(parseUrl(currentUrl).host.split('.')[0]);
        } else {
          function onWindowLoad() {
            chrome.tabs.executeScript(null, {
              file: 'detector.js',
            }, () => {
              // If you try and inject into an extensions page or the webstore/NTP you'll get an error
              if (chrome.runtime.lastError) {
                reject(`There was an error injecting script : \n${chrome.runtime.lastError.message}`);
              }
            });
          }

          window.onload = onWindowLoad;


          chrome.runtime.onMessage.addListener((request, sender) => {
            if (request.action == 'getSource') {
              const { source } = request;

              if (source.indexOf('xmlns:vtex') < 0) resolve(false);

              const accountName = S(source).between('jsnomeLoja', ';').between("'", "'").s;

              resolve(accountName);
            }
          });
        }
      });
    });
  }

  handlerVTEXIO(source) {

  }

  detectInUrl(url) {
    let result;

    VTEX_HOSTS.forEach((x) => {
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
