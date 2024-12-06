import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { faker } from "@faker-js/faker";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'typing-game';
  randomText = faker.lorem.sentence();
  enteredText = '';
  isSameText = false;

  onInput(target: EventTarget) {
    this.enteredText = (<HTMLInputElement>target).value;
    console.log("entered value: ", this.enteredText);
    if (this.enteredText === this.randomText) {
      this.isSameText = true;
      console.log("isSameText: ", this.isSameText);
    } else {
      this.isSameText = false;
    }
  }

  getCssClass(randomLetter: string, enteredLetter: string) {
    if(!enteredLetter ){
      return 'pending';
    } 
      return randomLetter === enteredLetter ? 'correct' : 'incorrect';
    
  }
}
