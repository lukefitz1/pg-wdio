describe("Checkout steps - ", function () {
    //set custom timeout for these tests, since they have multiple steps
    this.timeout(30000)

    describe("Customer checkout - should login, add product to cart, then complete checkout", function() {
        it("login to customer account", function() {
            browser.url("/customer/account/login");

            //assert that the login form is displayed on page load
            expect(account.loginForm.isVisible()).to.be.true;
            expect(account.loginBtn.isVisible()).to.be.true;

            //login
            account.login('ryan.barrineau@blueacorn.com', 'pass4ryan');

            //assert that you made it to the dashboard page
            expect(account.dashboard.isVisible()).to.be.true;
        });

        it("should add product to cart, click checkout button", function () {
            browser.url("/oversized-lollipop-prop-1");

            //make sure swatch option is displayed
            prod.colorSelector.waitForVisible();
            
            //select swatch option, input Qty
            prod.colorSelector.click();
            prod.swatchContainer.waitForVisible();
            prod.swatchInput.setValue(1);
            
            //add to cart
            prod.addToCart.waitForVisible();
            prod.addToCart.click();
            
            //wait for page to reload and make sure success message is displayed
            prod.successMessage.waitForVisible();
            expect(prod.successMessageText.getText()).to.equal("Oversized Lollipop Prop was added to your shopping cart.");

            //open mini cart, click view cart button to go to cart page
            expect(header.miniCartIcon.isVisible()).to.be.true;
            header.miniCartIcon.click();
            header.miniCartViewCartBtn.waitForVisible();
            header.miniCartViewCartBtn.click();
        });

        it("should click checkout button on cart page", function() {
            //wait for checkout button to display on cart page, click it
            cart.checkoutBtn.waitForVisible();
            cart.checkoutBtn.click();
        });

        it("should submit billing address form with already saved address", function() {
            //submit billing address form
            checkout.billingAddressForm.waitForVisible();
            checkout.billingAddressForm.submitForm();
        });

        it("should submit shipping method form", function() {
            //make sure all shipping method elements are displayed
            checkout.shippingMethodForm.waitForVisible();
            checkout.shippingMethodContinueBtn.waitForVisible();
            checkout.shipDate.waitForVisible();
            checkout.requiredDate.waitForVisible();

            //fill out ship date input field
            checkout.shipDate.click();
            checkout.datePickerCalendar.waitForVisible();
            shipDate = checkout.getFirstAvailableDateSelector();
            browser.click(shipDate);

            //fill out required date input field
            checkout.requiredDate.click();
            checkout.datePickerCalendar.waitForVisible();
            requiredDate = checkout.getFirstAvailableDateSelector();
            browser.click(requiredDate);

            //submit form
            checkout.submitShippingMethodForm();
        });

        it("should submit payment method form", function() {
            checkout.paymentMethodForm.waitForVisible();
            checkout.payFullLabel.waitForVisible();
            checkout.payFullLabel.click();
            
            //fill out cc form
            checkout.ccTypeLabel.waitForVisible();
            checkout.ccVLabel.waitForVisible();
            checkout.paymentContinueBtn.waitForVisible();
            checkout.fillCCForm('Visa', '4111111111111111', '03 - March', '2019', '123');
            //checkout.fillCCForm('MasterCard', '', '08 - August', '2019', '158');

            //submit form
            checkout.submitPaymentMethodForm();
        });

        it("should submit order", function() {
            //wait for stuff
            checkout.orderReview.waitForVisible();
            checkout.placeOrderButton.waitForVisible();
            checkout.termsBlock.waitForVisible();
            checkout.termsLabel.waitForVisible();

            //place order
            expect(checkout.placeOrderButton.isVisible()).to.be.true;
            checkout.termsLabel.click();
            checkout.placeOrderButton.click();
        });

        it("should review order success page", function() {
            //order success page
            checkout.orderSuccessPageHeading.waitForVisible(25000);
            checkout.orderNumText.waitForVisible();
            console.log(checkout.orderNumText.getText());
        });

        it("should log out of account", function() {
            browser.url("/customer/account/logout");
        });
    });
});