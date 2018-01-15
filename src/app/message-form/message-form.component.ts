import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../models/message'; 
import { DialogFlowService} from '../dialog-flow.service';
import { FormsModule } from '@angular/forms';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.css']
})
export class MessageFormComponent implements OnInit {

	@Input('message')
	private message: Message;

	@Input('messages')
	private messages : Message[]

  private imgUrl: string = "assets/user.ico";

  	constructor(private dialogFlowService: DialogFlowService) { }

  	ngOnInit() {
  	}

  @ViewChild('listItemRef') contEl: any; 
  	public sendMessage(): void {
      // this.message.timestamp = new Date();
      // this.messages.push(this.message);
      console.log(this.message);
      console.log(this.messages);
      this.dialogFlowService.getResponse(this.message.content).subscribe(res=> {
        this.messages.push(
          new Message(res.result.fulfillment.speech, this.imgUrl, res.timestamp)
        );
      });

      // this.message = new Message('', this.imgUrl);
      let current = this.contEl.scrollTop;
      this.contEl.scrollTop = current;

  	}

}
