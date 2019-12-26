// chrome.webNavigation.onCompleted.addListener(function () {
//     alert("This is my favorite website!");
// }, { url: [{ urlMatches: 'https://www.google.com/' }] });

// chrome.runtime.onMessage.addListener(function (message, callback) {
//     if (message == 'hello') {
//         sendResponse({ greeting: 'welcome!' })
//     } else if (message == 'goodbye') {
//         chrome.runtime.Port.disconnect();
//     }
// });

chrome.commands.onCommand.addListener(function (command) {
    console.log('Command:', command);
});
