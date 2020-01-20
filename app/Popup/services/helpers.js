import { VTEX_HOSTS } from './constants';

export const detectVTEX = () => {


  return new Promise((resolve, reject) => {
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

        if (request.source.indexOf('xmlns:vtex') >= 0) {
          resolve(true);
        }
        else {
          resolve(false);
        }
      }
    });

  })

}

export const identifyVTEXEnvironment = (url) => {
  let result;

  VTEX_HOSTS.forEach(x => {
    if (x.indexOf(x.host) >= 0) {
      result = x.label;
    }
  });

  return result;
}
