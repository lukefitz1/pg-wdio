/*
* NOT DONE
*/

class Checkout {
	get billingAddressForm() { return $('#co-billing-form'); }
	get billingFName() { return $('//*[@id="billing:firstname"]'); }
	get billingLName() { return $('//*[@id="billing:lastname"]'); }
	get billingEmail() { return $('//*[@id="billing:email"]'); }
	get billingAddress() { return $('//*[@id="billing:street1"]'); }
	get billingCity() { return $('//*[@id="billing:city"]'); }
	get billingState() { return $('//*[@id="billing:region_id"]'); }
	get billingZip() { return $('//*[@id="billing:postcode"]'); }
	get billingTelephone() { return $('//*[@id="billing:telephone"]'); }
	get billingPw() { return $('//*[@id="billing:customer_password"]'); }
	get billingConfirmPw() { return $('//*[@id="billing:confirm_password"]'); }
	get billingContinueBtn() { return $('#billing-buttons-container > button'); }
	get shippingAddressForm() { return $('#co-shipping-form'); }
	get shippingMethodForm() { return $('#co-shipping-method-form'); }
	get shipDate() {return $('#dealer_ship_date'); }
	get requiredDate() {return $('#dealer_cancel_date'); }
	get datePickerCalendar() { return $('#ui-datepicker-div > table'); }
	get shippingMethodContinueBtn() { return $('#shipping-method-buttons-container > button.button.continue'); }
	get paymentMethodForm() { return $('#co-payment-form'); }
	get paymentContinueBtn() { return $('#payment-buttons-container > button.button.continue'); }
	get payFullLabel() { return $('#partial-payment-full-label'); }
	get ccTypeLabel() { return $('#payment_form_authnetcim > li:nth-child(3) > label'); }
	get ccVLabel() { return $('#authnetcim_cc_type_cvv_div > label'); }
	get ccType() { return $('#authnetcim_cc_type'); }
	get ccNum() { return $('#authnetcim_cc_number'); }
	get ccExpMon() { return $('#authnetcim_expiration'); }
	get ccExpYr() { return $('#authnetcim_expiration_yr'); }
	get ccV() { return $('#authnetcim_cc_cid'); }
	get orderReview() { return $('#checkout-step-review'); }
	get termsBlock() { return $('#checkout-agreements > ol > li > div'); }
	get termsLabel() {return $('#checkout-agreements > ol > li > p > label'); }
	get placeOrderButton() { return $('#review-buttons-container > button'); }

	//order success page elements
	get orderSuccessPageHeading() { return $('body > div.wrapper > div.page > div > div > div.col-main > div.page-title > h1'); }
	get orderNumText() { return $('body > div.wrapper > div.page > div > div > div.col-main > div.address-order-info > div:nth-child(4)'); }

	//logged in customer 
	submitBillingForm(fn, ln, em, add, city, st, zip, phone, type, pw) {
		this.billingFName.setValue(fn);
		this.billingLName.setValue(ln);
		this.billingEmail.setValue(em);
		this.billingAddress.setValue(add);
		this.billingCity.setValue(city);
		this.billingState.selectByVisibleText(st);
		this.billingZip.setValue(zip);
		this.billingTelephone.setValue(phone);

		if (type && pw) {
			this.billingPw.setValue(pw);
			this.billingConfirmPw.setValue(pw);
		}

		this.billingAddressForm.submitForm();
	}

	submitShippingMethodForm() {
		this.shippingMethodForm.submitForm();
	}

	submitPaymentMethodForm() {
		this.paymentMethodForm.submitForm();
	}

	fillCCForm(type, num, expmon, expyr, ccv) {
		this.ccType.selectByVisibleText(type);
		this.ccNum.setValue(num);
		this.ccExpMon.selectByVisibleText(expmon);
		this.ccExpYr.selectByVisibleText(expyr);
		this.ccV.setValue(ccv);	
	}

	loginAtCheckout(un, pw) {
		this.email.setValue(un);
		this.pw.setValue(pw);

		this.loginForm.submitForm();
	}

	getFirstAvailableDateSelector() {
		this.days = browser.elements('#ui-datepicker-div > table > tbody > tr > td:not(.ui-datepicker-unselectable)');
		return this.days.value[0].selector;
	}

}

module.exports = new Checkout();