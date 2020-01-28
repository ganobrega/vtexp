export default {
  check() {
    chrome.devtools.inspectedWindow.eval(`
      return (document.getElementById('render-admin.container') ||  window.vtexIdVersion !== undefined)
    `, (success, error) => {
        if (error) {
          console.error(error);
        }
      })
  },
  init() {
    chrome.devtools.network.onNavigated.addListener(this.check);
  }
}
