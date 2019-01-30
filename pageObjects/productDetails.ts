class ProductDetails {
  addToCart(): any {
    $("button.btn-success").click();
    browser.pause(1000);
  }
}

export const productDetails = new ProductDetails()
