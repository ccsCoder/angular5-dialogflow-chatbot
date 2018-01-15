import { Component } from '@angular/core';
import { Message } from './models/message';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	public message: Message;
	public messages: Message[];

	private botIcon: string = "assets/bot.png";


	constructor() {
		this.message = new Message('', this.botIcon);
		this.messages = [
			new Message('Welcome to the InsultBot', this.botIcon, new Date());
		];
	}


  title = 'Neo Bot';
}
