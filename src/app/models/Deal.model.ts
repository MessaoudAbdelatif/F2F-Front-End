export class DealModel {
  company: string;
  receiverName: string;
  title: string;
  offer: string;
  createdDate: string;
  productName: string;
  imageProductPath: string;


  constructor(company: string, receiverName: string, title: string, offer: string, createdDate: string, productName: string, imageProductPath: string) {
    this.company = company;
    this.receiverName = receiverName;
    this.title = title;
    this.offer = offer;
    this.createdDate = createdDate;
    this.productName = productName;
    this.imageProductPath = imageProductPath;
  }
}

