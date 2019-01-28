import { expect } from "chai";
import * as faker from "faker";

describe("Guest", function() {
  it.only("should be able to buy item", function() {
    browser.url("/");
    const popularTab = $('a[href*="popular-products"]');
    popularTab.click();
    expect($("#box-popular-products").isVisible()).to.be.true;

    const redDuck = $('a[title="Red Duck"]');
    redDuck.click();
    browser.waitUntil(
      () => {
        return $("#box-product").isVisible();
      },
      5000,
      "Element #box-product was not displayed in 5 secs"
    );
    expect($("#box-product").isVisible()).to.be.true;
    const redDuckText = $("h1.title").getText();
    expect(redDuckText).to.equal("Red Duck");

    $("button.btn-success").click();
    $(".featherlight-close").click();
    expect($("#box-product").isVisible()).to.be.false;

    //TODO: fix pause
    browser.pause(1000);
    const cartQuantity = $("#cart span.quantity").getText();
    expect(cartQuantity).to.equal("1");
    $("#cart").click();
    browser.waitForVisible('input[name="firstname"]', 5000);
    $('input[name="firstname"]').setValue("TestFirstName");
    $('input[name="lastname"]').setValue("TestLastName");
    $('input[name="address1"]').setValue("address line 1");
    $('input[name="address2"]').setValue("address line 2");
    $('input[name="postcode"]').setValue("239123");
    $('input[name="city"]').setValue("CityName");
    $('input[name="email"]').setValue(faker.internet.email());
    $('input[name="phone"]').setValue(faker.phone.phoneNumber());

    $('button[name="save_customer_details"]').click();
    browser.pause(3000)
    $('button[name="confirm_order"]').click()

    browser.pause(15000)
  });
});
