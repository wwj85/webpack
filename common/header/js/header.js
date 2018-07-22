import '../css/header.css';

export default class createHeader {
  constructor (title = '我是头部') {
    this.title = title
  }
  init() {
    return this.create();
  }
  create () {
    let str = `
      <div id='header'>
        <span class="text">${this.title}</span>
      </div>`;
    return str;
  }
}