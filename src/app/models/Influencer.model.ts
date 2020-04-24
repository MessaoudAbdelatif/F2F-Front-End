export class Influencer {
  id: string;
  description: string;
  address: string;
  email: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  niche: string;
  links: string;
  imagePath: string;

  constructor(email: string, firstName: string, lastName: string) {
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
