export class ProductModel {
  constructor(createdDate: string, description: string, link: string, name: string, picture: string) {
    this.createdDate = createdDate;
    this.description = description;
    this.link = link;
    this.name = name;
    this.picture = picture;
  }

  id: number;
  createdDate: string;
  description: string;
  link: string;
  name: string;
  picture: string;


}
