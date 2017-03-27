class Header {
	get header() { return $('#header > div.page-header-container'); }
	get logo() { return $('#header > div.page-header-container > div.header-mobile-wrapper > a.logo'); }
	get search() { return $('#search'); }
	get loginLink() { return $('#header > div.skip-links > div > div.account-login > a'); }
	get loginModal() { return $('#login-modal'); }
	get modalLoginForm() { return $('#login > div.col-2.registered-users > form'); }
	get modalEmField() { return $('#mini-login'); }
	get modalPwField() { return $('#mini-password'); }
	get modalLoginButton() { return $('#login > div.col-2.registered-users > form > div > button'); }
	get logOutLink() { return $('#header > div.skip-links > div > div.account-login > a'); }
	get miniCartIcon() { return $(''); }
	get miniCartDropdown() { return $(''); }
	get miniCartCheckoutBtn() { return $(''); }

	modalLogin(un, pw) {
		this.modalEmField.setValue(un);
		this.modalPwField.setValue(pw);

		this.modalLoginForm.submitForm();
	}


}

module.exports = new Header();