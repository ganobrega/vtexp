import parseUrl from 'url-parse';

export const getParsedUrl = () => {
  return parseUrl(window.location);
}
