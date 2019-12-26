class Main { }

export const main = new Main()

chrome.runtime.sendMessage({ type: 'showPageAction' });
