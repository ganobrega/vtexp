console.log("hello from devtools");
chrome.devtools.panels.create("ColdFire", "icons/icon.png", "devltools-panel.html", function(panel) { console.log("hello from callback"); });
