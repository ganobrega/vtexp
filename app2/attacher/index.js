import AdminAttacher from './admin';
import RenderAttachment from './render';
import Detector from './lib/detector';


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
  Detector.init();

  if (isAdmin()) {
    adminAttacher();
  } else {

    if (isVtexRender()) {
      renderAttacher();
    }
  }
})()
