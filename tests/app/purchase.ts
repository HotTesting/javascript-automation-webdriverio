import { expect } from "chai";
import * as faker from "faker";
import { productDetails, checkout, confirmation } from "../../pageObjects";
import { OrderDetailsBuilder } from "../../src/customerBuilder";

describe("Guest", function() {
  it("PO should be able to buy item with builder", function() {
    browser.url("/rubber-ducks-c-1/red-duck-p-3");
    productDetails.addToCart();
    checkout.open();
    checkout.proceedOrderWith(new OrderDetailsBuilder().build());
    expect(confirmation.isLoaded()).to.equal(
      true,
      "Expected that confirmation page appears"
    );
    expect(confirmation.confirmationTitle()).to.match(
      /Your order #.* is successfully completed!/
    );
  });

  it("PO should be able to buy item #23842", function() {
    browser.url("/rubber-ducks-c-1/red-duck-p-3");
    productDetails.addToCart();
    checkout.open();
    checkout.typeFirstName("TestFirstName");
    checkout.typeLastName("TestLastName");
    checkout.typeAddress1("address line 1");
    checkout.typeAddress2("address line 2");
    checkout.typePostCode(faker.address.zipCode());
    checkout.typeCity("CityName");
    checkout.typeEmail(faker.internet.email());
    checkout.typePhone(faker.phone.phoneNumberFormat());
    checkout.saveChanges();
    checkout.confirmOrder();
    expect(confirmation.isLoaded()).to.equal(
      true,
      "Expected that confirmation page appears"
    );
    expect(confirmation.confirmationTitle()).to.match(
      /Your order #.* is successfully completed!/
    );
  });

  it("should be able to buy item", function() {
    browser.url("/rubber-ducks-c-1/red-duck-p-3");
    $("button.btn-success").click();
    browser.pause(1000);
    browser.url("/checkout");
    // Filling checkout page
    browser.waitForVisible('input[name="firstname"]', 5000);
    $('input[name="firstname"]').setValue("TestFirstName");
    $('input[name="lastname"]').setValue("TestLastName");
    $('input[name="address1"]').setValue("address line 1");
    $('input[name="address2"]').setValue("address line 2");
    $('input[name="postcode"]').setValue(faker.address.zipCode());
    $('input[name="city"]').setValue("CityName");
    $('input[name="email"]').setValue(faker.internet.email());
    $('input[name="phone"]').setValue(faker.phone.phoneNumber());
    browser.waitForEnabled('button[name="save_customer_details"]', 5000);
    $('button[name="save_customer_details"]').click();
    browser.waitUntil(
      function() {
        return (
          browser.getAttribute('button[name="confirm_order"]', "disabled") ==
          null
        );
      },
      5000,
      "Confirm order button should become enabled to click"
    );
    // browser.waitForEnabled('button[name="confirm_order"]', 5000);
    $('button[name="confirm_order"]').click();
    browser.waitForVisible("h1.title", 5000);
    const confirmationText = $("h1.title").getText();

    expect(confirmationText).to.match(
      /Your order #.* is successfully completed!/
    );
    // Thank you for your purchase. An order confirmation email has been sent. We will process your order shortly.
  });
});
