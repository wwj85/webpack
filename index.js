import createHeader from './common/header/js/header.js';

(() => {
  // console.dir(new  createHeader().init());
  document.body.innerHTML += new createHeader().init()
})()