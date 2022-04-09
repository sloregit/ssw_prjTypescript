import { fromEvent, Observable, Subscriber } from 'rxjs';
import { ajax, AjaxResponse, AjaxRequest, AjaxError } from 'rxjs/ajax';
import { AjaxCreationMethod } from 'rxjs/internal/ajax/ajax';
// Import stylesheets
import './style.css';
//e3ce9512

const inputKey: HTMLElement = document.getElementById('inputKey');
const getValueButton: HTMLElement = document.getElementById('getValue');
const parShowValue: HTMLElement = document.getElementById('showValue');

const setValueButton: HTMLElement = document.getElementById('setValue');
const inputValue: HTMLAppletElement = document.getElementById('insertValue');
console.log(inputValue)  
//I dati per la chiamata ajax
const URL: string =
  'https://eu-central-1.aws.data.mongodb-api.com/app/kvaas-giwjg/endpoint/get?key=';
const request: AjaxRequest = {
  url: URL + 'e3ce9512',
  crossDomain: true,
};

//Il pulsante GET
const ObsButtonGet: Observable<Event> = fromEvent(getValueButton, 'click');
ObsButtonGet.subscribe({
  next: (res) => getValue(),
  error: (err: AjaxError) => {
    console.log(err);
  },
  complete: () => {},
});

//la funzione chiamata genera un Observable che gestisce le chiamate Ajax
function getValue() {
  const ObsGet: Observable<AjaxResponse<any>> = ajax(request);
  ObsGet.subscribe({
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
const ObsButtonSet: Observable<Event> = fromEvent(setValueButton, 'click');
ObsButtonSet.subscribe({
  next: (res) => insertValue(),
  error: (err: AjaxError) => {
    console.log(err);
  },
  complete: () => {},
});

function insertValue() {
  const ObsSet: Observable<AjaxCreationMethod> = ajax(request);
  ObsSet.subscribe ({
    next: (res)
  })
}

/*const ObsKey: Observable<Event> = fromEvent(inputKey, 'input');
ObsInput.subscribe({
  next: (val) => {
    console.log();
  },
});
*/
