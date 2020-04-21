export class DealModel {
  company: string;
  influencer: string;
  title: string;
  text: string;
  createdDate: string;


  constructor(company: string, influencer: string, title: string, text: string, createdDate: string) {
    this.company = company;
    this.influencer = influencer;
    this.title = title;
    this.text = text;
    this.createdDate = createdDate;
  }
}
