export class MessageModel {
  id: number;
  receiver: string;
  title: string;
  text: string;
  createdDate: string;
  imagePath: string;


  constructor(receiver: string, title: string, text: string, createdDate: string, imagePath: string) {
    this.receiver = receiver;
    this.title = title;
    this.text = text;
    this.createdDate = createdDate;
    this.imagePath = imagePath;
  }
}

