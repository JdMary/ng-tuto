import { Component } from '@angular/core';

@Component({
  selector: 'app-my-first-comp',
  templateUrl: './my-first-comp.component.html',
  styleUrls: ['./my-first-comp.component.css']
})
export class MyFirstCompComponent {
  name = '';
  email = '';
  message = '';
  isSubmitted =false;
  messages: Array<any> = [];
  onSubmit() {
    console.log(this.name);
    this.isSubmitted=true;
    this.messages.push({
      'name' : this.name,
      'email' : this.email,
      'message' : this.message
      });
  }

  deleteMessage(index: number) {
    this.messages.splice(index,1);

  }
}
