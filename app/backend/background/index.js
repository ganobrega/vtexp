import S from 'string';

const VTEX_HOSTS = [
  { label: 'my-vtex', host: 'myvtex.com', },
  { label: 'stable', host: 'vtexcommercestable.com.br', },
  { label: 'beta', host: 'vtexcommercebeta.com.br', },
  { label: 'local', host: 'vtexlocal.com.br', },
];

const detectInUrl = (url) => {
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
};

chrome.extension.onMessage.addListener((request, sender) => {
  if (request.action === 'getSource') {
    // Legacy
    if (request.source.indexOf('xmlns:vtex') >= 0) {
      chrome.browserAction.setIcon({ tabId: sender.tab.id, path: 'icons/icon.png' });
      chrome.browserAction.setPopup({ tabId: sender.tab.id, popup: 'popup.html' });
      chrome.browserAction.onClicked.addListener(() => chrome.browser.runtime.openPopup());
      window.accountName = S(request.source).between('jsnomeLoja', ';').between("'", "'").s;
    }

    // VTEX.io
    if (request.source.indexOf('vtex.render-server@') >= 0) {
      chrome.browserAction.setIcon({ tabId: sender.tab.id, path: 'icons/icon.png' });
      chrome.browserAction.setPopup({ tabId: sender.tab.id, popup: 'popup.html' });
      chrome.browserAction.onClicked.addListener(() => chrome.browser.runtime.openPopup());
      window.accountName = S(request.source).between('"account":"', '","accountId').s;
    }

    if (request.source.indexOf('id="render-admin.signin-legacy"') >= 0 || request.source.indexOf('render-admin.container') >= 0) {
      chrome.browserAction.setIcon({ tabId: sender.tab.id, path: 'icons/icon.png' });
      chrome.browserAction.setPopup({ tabId: sender.tab.id, popup: 'popup.html' });
      chrome.browserAction.onClicked.addListener(() => chrome.browser.runtime.openPopup());
      window.accountName = S(request.source).between('"account":"', '","accountId').s;
    }

  }
});


chrome.browserAction.onClicked.addListener(() => chrome.browser.runtime.openOptionsPage());
