class Cart {
	get checkoutBtn() { return $('body > div.wrapper > div > div.main-container.col2-right-layout > div > div.col-main > div.cart.display-single-price > div.page-title.title-buttons > ul > li > button'); }
}

module.exports = new Cart();