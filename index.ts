import { fromEvent, Observable, Subscriber } from 'rxjs';
import { ajax, AjaxResponse, AjaxRequest, AjaxError } from 'rxjs/ajax';
import { AjaxCreationMethod } from 'rxjs/internal/ajax/ajax';
// Import stylesheets
import './style.css';
//e3ce9512,,,,,4d4a3802

const inputKey: HTMLElement = document.getElementById('inputKey');
const getValueButton: HTMLElement = document.getElementById('getValue');
const parShowValue: HTMLElement = document.getElementById('showValue');

const setValueButton: HTMLElement = document.getElementById('setValue');
const inputValue: HTMLElement = document.getElementById('insertValue');

const newKeyButton: HTMLElement = document.getElementById('newKey');
const parkey: HTMLElement = document.getElementById('parKey');

//I dati per la chiamata ajax
const URL: string =
  'https://eu-central-1.aws.data.mongodb-api.com/app/kvaas-giwjg/endpoint/';

const requestNew: AjaxRequest = {
  url: URL + 'new?secret=ssw2022',
  crossDomain: true,
  method: 'GET',
};

//Il pulsante GET
const ButtonGet$: Observable<Event> = fromEvent(getValueButton, 'click');
ButtonGet$.subscribe({
  next: (res) => getValue(),
  error: (err: AjaxError) => {
    console.log(err);
  },
  complete: () => {},
});

//la funzione chiamata genera un Observable che recupera il valore associato alla chiave
function getValue() {
  const GetValue$: Observable<AjaxResponse<any>> = ajax({
    url: URL + 'get?key=e3ce9512',
    crossDomain: true,
    method: 'GET',
  });
  GetValue$.subscribe({
    next: (res: AjaxResponse<any>) => {
      parShowValue.innerHTML = res.response;
    },
    error: (err) => {
      console.log(err);
    },
    complete: () => {},
  });
}
//Il pulsante SET
const ButtonSet$: Observable<Event> = fromEvent(setValueButton, 'click');
ButtonSet$.subscribe({
  next: () => insertValue(inputValue.value),
  error: (err: AjaxError) => {
    console.log(err + 'pulsante');
  },
  complete: () => {},
});

function insertValue(value) {
  const SetValue$: Observable<AjaxResponse<any>> = ajax({
    url: URL + 'set?key=e3ce9512',
    crossDomain: true,
    method: 'POST',
    body: value,
  });
  SetValue$.subscribe({
    next: (res) => {
      parShowValue.innerHTML = res.response;
    },
    error: (err: AjaxError) => {
      console.log(err);
    },
    complete: () => {},
  });
}

/*const ObsKey: Observable<Event> = fromEvent(inputKey, 'input');
ObsInput.subscribe({
  next: (val) => {
    console.log();
  },
});
*/
