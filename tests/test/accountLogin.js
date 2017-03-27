describe("Sign in to customer account", function () {
    this.timeout(20000);

    it("should login to PG customer account successfully from customer login page", function () {
        browser.url("/customer/account/login");

        //wait for login form is visible
        account.loginForm.waitForVisible();

        //assert that the login form is displayed on page load
        expect(account.loginForm.isVisible()).to.be.true;
        expect(account.loginBtn.isVisible()).to.be.true;

        //login
        account.login('ryan.barrineau@blueacorn.com', 'pass4ryan');

        //assert that you made it to the dashboard page
        expect(account.dashboard.isVisible()).to.be.true;
    });

    it.only("should login to PG customer account successfully from login modal on homepage", function () {
        browser.url("/");

        //wait for login form is visible
        header.loginLink.waitForVisible();

        //assert that the login form is displayed on page load
        expect(header.header.isVisible()).to.be.true;
        expect(header.loginLink.isVisible()).to.be.true;

        //click login link to open modal
        header.loginLink.click();

        //assert modal is displayed
        header.loginModal.waitForVisible();
        expect(header.loginModal.isVisible()).to.be.true;
        expect(header.modalLoginForm.isVisible()).to.be.true;

        //login
        header.modalLogin('ryan.barrineau@blueacorn.com', 'pass4ryan');
        //header.loginModal.waitForVisible();
        browser.waitForVisible('#login-modal', 5000, true);
        
        //wait for login form is visible
        header.loginLink.waitForVisible();

        //assert that, after page reloads, modal is not displayed
        expect(header.loginModal.isVisible()).to.be.false;
        expect(header.logOutLink.isVisible()).to.be.true;
        expect(header.logOutLink.getText()).to.equal('LOGOUT');
        
        //browser.debug();
    });
});