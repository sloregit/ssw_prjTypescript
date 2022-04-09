import { fromEvent, Observable, Subscriber } from 'rxjs';
import { ajax, AjaxResponse, AjaxRequest, AjaxError } from 'rxjs/ajax';
import { AjaxCreationMethod } from 'rxjs/internal/ajax/ajax';
// Import stylesheets
import './style.css';
//e3ce9512
// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');

const getValueButton: HTMLElement = document.getElementById('getValue');
const inputKey: HTMLElement = document.getElementById('inputKey');
const parShowValue: HTMLElement = document.getElementById('showValue');

const URL: string =
  'https://eu-central-1.aws.data.mongodb-api.com/app/kvaas-giwjg/endpoint/get?key=';

/*const ObsKey: Observable<Event> = fromEvent(inputKey, 'input');
ObsInput.subscribe({
  next: (val) => {
    console.log();
  },
});
*/
const request: AjaxRequest = {
  url: URL + 'e3ce9512',
  crossDomain: true,
};

//Il pulsante
const ObsButton: Observable<Event> = fromEvent(getValueButton, 'click');
ObsButton.subscribe({
  next: (res) => view(),
  error: (err: AjaxError) => {
    console.log(err);
  },
  complete: () => {},
});

//la funzione chiamata genera un Observable che gestisce le chiamate Ajax
function view() {
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


