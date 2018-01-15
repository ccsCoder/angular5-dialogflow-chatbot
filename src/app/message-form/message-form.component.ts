import { Component, OnInit, Input } from "@angular/core";
import { Message } from "../models/message";
import { DialogFlowService } from "../dialog-flow.service";
import { FormsModule } from "@angular/forms";
import { ViewChild } from "@angular/core";

@Component({
  selector: "app-message-form",
  templateUrl: "./message-form.component.html",
  styleUrls: ["./message-form.component.css"]
})
export class MessageFormComponent implements OnInit {
  @Input("message") private message: Message;

  @Input("messages") private messages: Message[];

  private userUrl: string = "assets/user.ico";
  private botURL: string = "assets/bot.png";

  constructor(private dialogFlowService: DialogFlowService) {}

  ngOnInit() {}

  // @ViewChild("listItemRef") contEl: any;

  public sendMessage(): void {
    this.message.timestamp = new Date();
    this.message.avatar = this.userUrl;

    this.messages.push(this.message);

    this.dialogFlowService.getResponse(this.message.content).subscribe(res => {
      this.messages.push(
        new Message(res.result.fulfillment.speech, this.botURL, res.timestamp)
      );
    });

    this.message = new Message('', this.userUrl);
    if(this.messages.length > 6) {
      this.messages.splice(0, 6);
    }

    // let current = this.contEl.scrollTop;
    // this.contEl.scrollTop = current;
  }
}
