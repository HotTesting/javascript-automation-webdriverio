class Checkout {
  proceedOrderWith(customerDetails: ICustomerDetails): any {
    this.typeFirstName(customerDetails.firstName);
    this.typeLastName(customerDetails.lastName);
    this.typeAddress1(customerDetails.address1);
    this.typeAddress2(customerDetails.address2);
    this.typePostCode(customerDetails.postalCode);
    this.typeCity(customerDetails.city);
    this.typeEmail(customerDetails.email);
    this.typePhone(customerDetails.phone);
    // If optional fields needs to be filled
    // if(customerDetails.country) {
    //   this.typeCountry(customerDetails.country)
    // }

    // if (customerDetails.differentShippingAddress) {
    //   this.enterDifferentShippingAddress(customerDetails.differentShippingAddress)
    // }
    this.saveChanges();
    this.confirmOrder();
  }
  confirmOrder(): any {
    browser.waitUntil(
        function() {
          return (
            browser.getAttribute('button[name="confirm_order"]', "disabled") ==
            null
          );
        },
        5000,
        "Confirm order button should become enabled to click, make sure that all required fields are filled"
      );
      $('button[name="confirm_order"]').click();
  }
  saveChanges(): any {
    const saveCustomerBtn = 'button[name="save_customer_details"]';
    browser.waitForEnabled(saveCustomerBtn, 5000);
    $(saveCustomerBtn).click();
  }

  typePhone(phone: string): any {
    $('input[name="phone"]').setValue(phone);
  }
  typeEmail(email: string): any {
    $('input[name="email"]').setValue(email);
  }
  typeCity(city: string): any {
    $('input[name="city"]').setValue(city);
  }
  typePostCode(postCode: string): any {
    $('input[name="postcode"]').setValue(postCode);
  }
  typeAddress2(address2: string): any {
    $('input[name="address2"]').setValue(address2);
  }
  typeAddress1(address1: string): any {
    $('input[name="address1"]').setValue(address1);
  }
  typeLastName(lastName: string): any {
    const lastNameInput = 'input[name="lastname"]'
    browser.waitForVisible(lastNameInput, 5000);
    $(lastNameInput).setValue(lastName);
  }
  typeFirstName(firstName: string): any {
    const firstNameInput = 'input[name="firstname"]';
    browser.waitForVisible(firstNameInput, 5000);
    $(firstNameInput).setValue(firstName);
  }
  open() {
    browser.url("/checkout");
  }
}

export interface ICustomerDetails {
  firstName: string
  lastName: string
  address1: string
  address2: string
  postalCode: string
  city: string
  email: string
  phone: string
  company?: string
  taxID?: string
  country?: string
  state?: string
}

export const checkout = new Checkout()