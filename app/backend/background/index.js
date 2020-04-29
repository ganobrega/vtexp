chrome.extension.onMessage.addListener((request, sender) => {
  // console.log(sender.tab);
  console.log(request);

  // if (sender.tab) {
  //   chrome.browserAction.setPopup({
  //     tabId: sender.tab.id,
  //     popup: 'popup.disabled.html',
  //   });
  // }
});

console.log('VTEXP - Background');

chrome.extension.onMessage.addListener((request, sender, sendResponse) => {
  console.log(request.source);
});
