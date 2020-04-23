export class MessageModel {
  receiver: string;
  title: string;
  text: string;
  createdDate: string;


  constructor(receiver: string, title: string, text: string, createdDate: string) {
    this.receiver = receiver;
    this.title = title;
    this.text = text;

  }
}

