import scrollSpy from '../js/scrollSpy.js';
import smoothScroll from '../js/smoothScroll.js';
import devTime from '../js/devTime.js';

window.addEventListener('DOMContentLoaded', () => {
    scrollSpy();
    smoothScroll();
    devTime();
    const copyright = () => {
        const date = new Date();
        const copyYear = document.querySelector('.copyright span');
        copyYear.innerText = date.getFullYear();
    }
    copyright();
});