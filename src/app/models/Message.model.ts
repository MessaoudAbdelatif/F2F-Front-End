export class MessageModel {
  id: string;
  receiver: string;
  title: string;
  text: string;
  createdDate: string;
  receiverName: string;
  imagePathReceiver: string;

  constructor(id: string, receiver: string, title: string, text: string) {
    this.receiver = receiver;
    this.title = title;
    this.text = text;

  }
}

