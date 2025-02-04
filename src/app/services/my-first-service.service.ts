import { Injectable } from '@angular/core';

@Injectable({
  //the providedIn value could be :
  //any: providing the service anywhere in the application
  //it can be also a name of a module in order to provide the service in that particular module
  //==>useful for limiting service availability
  //null : disabling the dependency injection for the gservice
  providedIn: 'root'
})
export class MyFirstServiceService {

  constructor() { }
}
