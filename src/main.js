import $ from "jquery";
import {getButton} from './button/button'
import images from "./assets/bmw.jpeg";
import './main.css';

getButton();

const pict = document.createElement('img');
pict.setAttribute('src', images)
document.querySelector('body').appendChild(pict);

const testText = document.createElement('span');
testText.textContent = 'HELLO WORLD!!!';
testText.style.fontSize = '24px';
testText.style.color = 'violet';
document.querySelector('body').appendChild(testText);