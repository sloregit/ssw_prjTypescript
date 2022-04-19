import { fromEvent, Observable, Subscriber } from 'rxjs';
import { ajax, AjaxResponse, AjaxRequest, AjaxError } from 'rxjs/ajax';
// Import stylesheets
import './style.css';

// Elementi Html
const inputKey: HTMLElement = document.getElementById('inputKey');
const getValueButton: HTMLElement = document.getElementById('getValue');
const parShowValue: HTMLElement = document.getElementById('showValue');

const setValueButton: HTMLElement = document.getElementById('setValue');
const inputValue: HTMLElement = document.getElementById('insertValue');

// Globali
const URL: string =
  'https://eu-central-1.aws.data.mongodb-api.com/app/kvaas-giwjg/endpoint/';

//Il pulsante GET
const ButtonGet$: Observable<Event> = fromEvent(getValueButton, 'click');
ButtonGet$.subscribe({
  next: () => getValue(inputKey.value),
  error: (err: AjaxError) => {
    console.log(err);
  },
  complete: () => {},
});

//la funzione chiamata genera un Observable che recupera il valore associato alla chiave inserita
function getValue(key) {
  const GetValue$: Observable<AjaxResponse<string>> = ajax({
    url: URL + 'get?key=' + key,
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
  next: () => insertValue(inputValue.value, inputKey.value),
  error: (err: AjaxError) => {
    console.log(err + 'pulsante');
  },
  complete: () => {},
});

//Inserisce l'input in corrispondenza della chiave inserita
function insertValue(myInput: string, selectedKeyValue: string) {
  const SetValue$: Observable<AjaxResponse<string>> = ajax({
    url: URL + 'set?key=' + selectedKeyValue,
    crossDomain: true,
    method: 'POST',
    body: myInput,
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
