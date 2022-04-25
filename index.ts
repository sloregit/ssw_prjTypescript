import { fromEvent, Observable, Subscriber } from 'rxjs';
import { ajax, AjaxResponse, AjaxRequest, AjaxError } from 'rxjs/ajax';
import { of, pipe, from } from 'rxjs';
import { filter, map } from 'rxjs/operators';
// Import stylesheets
import './style.css';

// Elementi Html
const inputKey: HTMLElement = document.getElementById('inputKey');
const getValueButton: HTMLElement = document.getElementById('getValue');
const parShowValue: HTMLElement = document.getElementById('showValue');

const setValueButton: HTMLElement = document.getElementById('setValue');
const inputValue: HTMLElement = document.getElementById('insertValue');

const newKeyButton: HTMLElement = document.getElementById('newKey');
const parkey: HTMLElement = document.getElementById('parKey');

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
      console.log(res.response);
    },
    error: (err) => {
      console.log(err);
    },
    complete: () => {},
  });
}
///////////////////////////////////////

//CHIAVE:  0ef3f513
const pr = from([]);
const prenotazioni: Array<any> = new Array(
  new Array<string>(10),
  new Array<string>(4)
);

//Il pulsante SET
const ButtonSet$: Observable<Event> = fromEvent(setValueButton, 'click');
ButtonSet$.subscribe({
  next: () => insertValue(prenotazioni, inputKey.value),
  error: (err: AjaxError) => {
    console.log(err + 'pulsante');
  },
  complete: () => {},
});

//Inserisce l'input in corrispondenza della chiave inserita
function insertValue(prenotazioni: any, selectedKeyValue: string) {
  const SetValue$: Observable<AjaxResponse<string>> = ajax({
    url: URL + 'set?key=' + selectedKeyValue,
    crossDomain: true,
    method: 'POST',
    body: prenotazioni,
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
/*
//Il pulsante NEW
const ButtonNewKey$: Observable<Event> = fromEvent(newKeyButton, 'click');
ButtonNewKey$.subscribe({
  next: () => {
    getNewKey();
  },
  error: (err: AjaxError) => {
    console.log(err);
  },
  complete: () => {},
});

//Genera una nuova chiave (da inserire comunque nel campo adibito per accedere al valore)
function getNewKey() {
  const GetNewKey$: Observable<AjaxResponse<string>> = ajax({
    url: URL + 'new?secret=ssw2022',
    crossDomain: true,
    method: 'GET',
  });
  GetNewKey$.subscribe({
    next: (res) => {
      parkey.innerHTML = res.response;
    },
    error: (err: AjaxError) => {
      console.log(err);
    },
    complete: () => {},
  });
}
*/
