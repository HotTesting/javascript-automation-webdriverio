import { checkout, ICustomerDetails } from '../pageObjects/checkout';
import * as faker from "faker";

export class OrderDetailsBuilder {
    // TODO: Add comments
    private overriden = {
  
    }
    private default = {
      firstName: "TestFirstName",
      lastName: "TestLastName",
      address1: "address line 1",
      address2: "address line 2",
      postalCode: faker.address.zipCode(),
      city: "CityName",
      email: faker.internet.email(),
      phone: faker.phone.phoneNumberFormat(),
    }
  
    withFirstName(name: string) {
      this.overriden['firstName'] = name
      return this
    } 
  
    withLastName(name: string) {
      this.overriden['lastName'] = name
      return this
    } 
  
    withInvalidUser() {
      this.overriden = {
        lastName: '',
        firstName: '',
        phone: ''
      }
      return this
    }
  
    build(): ICustomerDetails {
      return Object.assign({}, this.default, this.overriden)
    } 
  }