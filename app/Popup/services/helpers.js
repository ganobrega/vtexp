
import parseUrl from 'url-parse';
import { VTEX_HOSTS } from './constants';

export const detectVTEX = () => {


  return new Promise((resolve, reject) => {

    chrome.tabs.query({ currentWindow: true, active: true }, function (tab) {
      let currentTab = tab[0];
      let currentUrl = currentTab.url;

      if (identifyVTEXEnvironment(currentUrl)) {
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

            if (source.indexOf('xmlns:vtex') >= 0) {
              let accountName = new RegExp(/jsnomeLoja = '.*?';/).exec(source)[0];
              accountName = new RegExp(/(')(.*?)(')/).exec(accountName)[0].replace("\'", "").replace("\'", "");

              resolve(accountName);
            }
            else {
              resolve(false);
            }
          }
        });


      }


    });


  })

}

export const identifyVTEXEnvironment = (url) => {
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
