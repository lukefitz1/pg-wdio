class ProductPage {
	get addToCart() { return $('#product_addtocart_form > div.product-shop > div.add-to-cart-wrapper > div > div.add-to-cart-buttons > button'); }
	get colorSelector() { return $('#swatch1234'); }
	get swatchContainer() { return $('#swatch1234_input'); }
	get swatchInput() { return $('#swatch1234_input > div.right > ul > li > span > input'); }
	get successMessage() { return $('#messages_product_view > ul > li'); }
	get successMessageText() { return $('#messages_product_view > ul > li > ul > li > span'); } 
}

module.exports = new ProductPage();