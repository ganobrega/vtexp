import { selector } from 'utils/Selector.js';
import { runtime } from 'utils/Runtime.js';
import parseUrl from 'url-parse';

import 'styles/popup.scss'

class Popup {
  constructor () {
    selector(document).ready(this.bind())
  }

  bind () {
    /**
     * Open options dropown list.
     */
    // selector('.open-options').click(() => {
    //   // Toggle options list with 'show' class.
    //   selector('.menu-options').toggle('show')
    // })

    /**
     * Open the settings page.
     */
    // selector('.open-settings').click(() => {
    //   if (runtime.api('runtime').openOptionsPage) {
    //     // New way to open options pages, if supported (Chrome 42+).
    //     runtime.api('runtime').openOptionsPage()
    //   } else {
    //     // Reasonable fallback.
    //     window.open(runtime.api('runtime').getURL('options.html'))
    //   }
    // })

    /**
     * Open the current url with device params
     */
    document.querySelectorAll('.header .devices .device .action').forEach(el => {

      el.addEventListener('click', (e) => {
        let value = e.currentTarget.getAttribute('data-value');

        let params = {
          desktop() {
            return {
              uam: false,
            }
          },
          mobile() {
            return {
              uam: true,
              mobile: 4
            }
          }
        }
  
        if(params[value] === undefined){
          console.error('Device value not found');
          return;
        }
  
        chrome.tabs.query({ currentWindow: true, active: true }, function (tab) {
          let currentTab = tab[0];
          let currentUrl = currentTab.url;
  
          let newUrl = parseUrl(currentUrl);
          let query = Object.entries(params[value]()).map(el => el.join('=')).join('&');
  
          newUrl.set('query', query);
  
          chrome.tabs.update(tab.id, { url: newUrl.href });
        });
  
      }, false)
    })

    /**
     * Enviroments
     */
    document.querySelectorAll('.environments .environment .action').forEach(el => {

      el.addEventListener('click', (e) => {
        let value = e.currentTarget.getAttribute('data-value');

        chrome.tabs.query({ currentWindow: true, active: true }, function (tab) {
          let currentTab = tab[0];
          let currentUrl = currentTab.url;

          let newUrl = parseUrl(currentUrl);

          let storeName = newUrl.hostname.split('.')[0];

          let params = {
            'myvtex': (url) => {
              url.set('host', `${storeName}.myvtex.com`)
              return url;
            },
            'stable': (url) => {
              url.set('host', `${storeName}.vtexcommercestable.com.br`)
              return url;
            },
            'beta': (url) => {
              url.set('host', `${storeName}.vtexcommercebeta.com.br`)
              return url;
            },
            
            'local': (url) => {
              url.set('host', `${storeName}.vtexlocal.com.br`)
              return url;
            },
            
          }

          if (params[value] === undefined) {
            console.error('Invalid shortcut value');
            return;
          }

          let parsedUrl = params[value](newUrl);
          
          console.log(parsedUrl)
          
          chrome.tabs.update(tab.id, { url: parsedUrl.href });
        });

      }, false)
    })


    /**
     * Shortcuts
     */
    document.querySelectorAll('.shortcuts .shortcut .action').forEach(el => {

      el.addEventListener('click', (e) => {
        let value = e.currentTarget.getAttribute('data-value');

        chrome.tabs.query({ currentWindow: true, active: true }, function (tab) {
          let currentTab = tab[0];
          let currentUrl = currentTab.url;

          let newUrl = parseUrl(currentUrl);

          let params = {
            'admin-control': (url) => {
              url.set('pathname', '/admin')
              return url;
            },
            'file-system': (url) => {
              url.set('pathname', '/admin/a')
              return url;
            },
            'cms': (url) => {
              url.set('pathname', '/admin/a')
              return url;
            },
            
            'current-layout-placeholder': (url) => {
              url.set('pathname', '/admin/a')
              return url;
            },
            
          }

          if (params[value] === undefined) {
            console.error('Invalid shortcut value');
            return;
          }

          let parsedUrl = params[value](newUrl);
          
          console.log(parsedUrl)
          
          chrome.tabs.update(tab.id, { url: parsedUrl.href });
        });

      }, false)
    })
    
  }
}

export const popup = new Popup()
