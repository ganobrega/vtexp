// import elementChange from 'element-change';

// elementChange('body', () => {
//   console.log('teste')
//   var links = document.querySelectorAll('a');

//   links.forEach(function (e) {
//     let href = e.getAttribute('href');
//     href.replace('https://sestini.vtexcommercestable.com.br');
//     e.setAttribute('href', href);
//   })
// })

const adminAttacher = () => {
  console.log('adminAttacher');
}

const renderAttacher = () => {
  console.log('renderAttacher');
}

const isAdmin = () => {
  return document.getElementById('render-admin.container') !== null
}

(() => {
  if (isAdmin()) {
    adminAttacher();
  } else {
    renderAttacher();
  }
})()
