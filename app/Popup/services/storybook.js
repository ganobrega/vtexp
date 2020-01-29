import parseUrl from 'url-parse';
import queryString from 'query-string';
import S from 'string';

export default class StoryBook {
  constructor(accountName) {
    this.storagePath = '';


    chrome.storage.sync.set({ key: value }, () => {
      console.log(`Value is set to ${value}`);
    });
  }

  push(url) {

  }
}
