import parseUrl from 'url-parse';

export const getParsedUrl = () => {
  return parseUrl(window.location);
}

export const kindOfPage = () => {
  if (document.getElementById('render-admin.container') !== null) {
    return 'admin'
  }

  if (window.vtexIdVersion !== undefined) {
    return 'render'
  }
}
