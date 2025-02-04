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
  messages : Array<any>=[];
  constructor() {
    this.init();
  }


  init():void{
      this.insert({
          name: 'mariem',
          email: 'mariem@m.com',
          message: 'hello'
      });
      this.insert({
          name: 'mama',
          email: 'mama@m.com',
          message: 'hello'
      });
      this.insert({
          name: 'mimi',
          email: 'mimi@m.com',
          message: 'hello'
      })
    }
  insert(message:{name: string,email:string,message:string}):void{
    this.messages.push(message);
  }
  getAll():any[]{
    return this.messages;
  }
  deleteMessage(index: number):void{
    this.messages.splice(index,1);
  }
}
