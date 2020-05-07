import AdminAttacher from './admin';
import RenderAttachment from './render';
import { kindOfPage } from './lib/helpers';


const adminAttacher = () => {
  AdminAttacher.init();
}

const renderAttacher = () => {
  RenderAttachment.init();
}


(() => {

  switch (kindOfPage()) {
    case 'admin':
      adminAttacher();
      break;
    case 'render':
      renderAttacher();
      break;
  }

})()
