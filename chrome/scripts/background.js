chrome.extension.onMessage.addListener(function(request, sender) {
  // console.log(sender.tab);
  console.log(request);

  // if (sender.tab) {
  //   chrome.browserAction.setPopup({
  //     tabId: sender.tab.id,
  //     popup: 'popup.disabled.html',
  //   });
  // }
});

console.log('teste')

chrome.extension.onMessage.addListener(
  function (request, sender, sendResponse) {
    console.log(request.source);
  }
);
