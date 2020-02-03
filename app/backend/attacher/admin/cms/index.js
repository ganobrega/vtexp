import { getParsedUrl } from '../../lib/helpers';

import Placeholder from './placeholder';

const CMS = {
  init() {
    if (CMS.detect()) {
      if (!CMS.isIframe()) {
        CMS.implementFeatures();
      } else {
        console.log('CMS.exitIframe:')
        CMS.exitIframe();
      }
    }
  },

  isIframe() {
    let iframe = document.querySelector('iframe');
    let src = iframe.getAttribute('src');

    if (src.indexOf('/admin/a') >= 0) {
      console.log('CMS.isIframe:', true)
      return true
    } else {
      console.log('CMS.isIframe:', false)
      return false
    }

  },

  detect() {
    let url = getParsedUrl();

    if (url.pathname.indexOf('/admin/a') >= 0) {
      console.log('CMS:', true)
    } else {
      console.log('CMS:', false)
    }
  },

  exitIframe() {
    if (confirm('To use VTEXP at CMS go to /admin/a without iframe')) {
      let iframe = document.querySelector('iframe');
      let src = e.getAttribute('src');

      window.location = src;
    }
  },

  implementFeatures() {
    Placeholder.init();
  },


}

export default CMS;
