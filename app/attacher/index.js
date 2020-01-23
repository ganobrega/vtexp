import AdminAttacher from './admin';
import RenderAttachment from './render';



const adminAttacher = () => {
  AdminAttacher.init();
}

const renderAttacher = () => {
  RenderAttachment.init();
}

const isAdmin = () => {
  return document.getElementById('render-admin.container') !== null
}

const isVtexRender = () => {
  if (!isAdmin()) {
    return window.vtexIdVersion !== undefined
  }
}

(() => {
  if (isAdmin()) {
    adminAttacher();
  } else {

    if (isVtexRender()) {
      renderAttacher();
    }
  }
})()
