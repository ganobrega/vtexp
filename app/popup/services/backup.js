import parseUrl from 'url-parse';
import queryString from 'query-string';

export default class Backup {
  constructor(accountName) {
    this.storagePath = '';

    this.types = [
      'layout',
      'template',
      'subtemplate',
      'custom-element',
    ];
  }

  push(type, name, form) {

  }
}
