export class Influencer {
  id: string;
  createdDate: string;
  lastModifiedDate: string;
  description: string;
  address: string;
  email: string;
  isActive: boolean;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  niche: string;
  links: string;

  constructor(email: string, firstName: string, lastName: string) {
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
