import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  error$ = new Subject<string>();

  handle(message:string) {
    return this.error$.next(message)

  }

  clear(){
    return this.error$.next('')
  }
}
