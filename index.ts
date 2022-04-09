import { Observable, Subscriber } from "rxjs";
// Import stylesheets
import './style.css';
//e3ce9512
// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');

const getValueButton: HTMLElement = document.getElementById('getValue');
const inputKey: HTMLElement = document.getElementById('inputKey');
const parShowValue: HTMLElement = document.getElementById('showValue');

let t = 'prova';

const Obs = new Observable()