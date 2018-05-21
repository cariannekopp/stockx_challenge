var selectors = require('./selectors.js').selectors

exports.methods = {
    iAmOnHomepage: function(){
        browser.url('/');
        browser.waitForExist(selectors.homePage);
    },
    iSelectLoginSignUp: function(){
        browser.waitForExist(selectors.logInSignUpButton);
        browser.click(selectors.logInSignUpButton);
    },
    iSeeLoginSignUpModal: function(){
        browser.waitForExist(selectors.logInOrCreateAccountModal);
    },
    iSelectLoginTab: function(){
        browser.click(selectors.signUpTab);
        browser.click(selectors.logInTab);
    },
    iAmOnLoginTab: function(){
        browser.waitForExist(selectors.logInButton);
    },
    iEnterUsernameForLogin: function(username){
        browser.setValue(selectors.logInEmailAddressField,username);
    },
    iEnterPasswordForLogin: function(password){
        browser.setValue(selectors.logInPasswordField,password);
    },
    iClickLogInButton: function(){
        browser.click(selectors.logInButton);
        if(browser.isExisting('.buttons-set>ladda-button>.ladda-spinner')){
            browser.waitUntil(browser.isExisting('.buttons-set>.ladda-button>.ladda-spinner') == false);
        }
    },
    iAmLoggedIn: function(){
        //browser.waitForExist(selectors.logInButton,[10000],[false]);
        browser.moveToObject(selectors.authenticateButton);
        expect(browser.isVisible(selectors.myAccountDropDown));
        expect(browser.getText(selectors.authenticateButton)).to.equal("My Account");
    },
    iLogOut: function(){
        browser.moveToObject(selectors.authenticateButton);
        browser.waitForVisible(selectors.myAccountDropDown);
        browser.click(selectors.myAccountDropDown);
        expect(browser.getText(selectors.authenticateButton)).to.equal("Login / Sign Up");
    },
    iGetLinksOfMostPopularItems: function(){
        browser.waitForExist(selectors.popularItemTiles);
        browser.waitForEnabled(selectors.popularItemTiles);
        browser.waitForVisible(selectors.popularItemTiles);
        var popularItemLinks = browser.getAttribute(selectors.popularItemTiles,'href');
        return popularItemLinks;
    },
    iGetFirstPopularItem: function(){
        var popularItemLinks = this.iGetLinksOfMostPopularItems();
        var firstPopularItem = popularItemLinks[0];
        var firstPopularItemLink = firstPopularItem.replace('https://stockx.com','');
        return firstPopularItemLink;
    },
    iSelectFirstPopularItem: function(){
        var firstPopularItemLink = this.iGetFirstPopularItem();
        browser.click('a[href="' + firstPopularItemLink + '"]');
        expect(browser.getUrl()).to.equal("https://stockx.com" + firstPopularItemLink);
    },
    iClickBuyBidButton: function(){
        browser.waitForExist(selectors.bidBuyButton);
        browser.click(selectors.bidBuyButton);
        expect(browser.waitForExist(selectors.modalBody)).to.be.true;
        this.iWaitForModalSpinner();
    },
    iWaitForModalSpinner: function(){
        if(browser.isExisting(selectors.dialogSpinner)){
            browser.waitUntil(browser.isExisting(selectors.dialogSpinner) == false);
        }
    },
    iOpenSizeDropdown: function(){
        browser.waitForExist(selectors.shoeSizeDropDown);
        browser.click(selectors.shoeSizeDropDown);
        //TO DO: Verify size select list is set to open
    },
    iSelectSizeForBid: function(){
        if(browser.isExisting(selectors.shoeSizeDropDown) === true){
            expect(browser.isExisting(selectors.disabledBidAskAmountTextField)).to.be.true;
            this.iOpenSizeDropdown();
            browser.click('//*[@id="bid-create-form"]/fieldset/div[2]/div[1]/div[1]/div/div/ul/li[2]/a/div[1]/h3');
            expect(browser.isExisting(selectors.disabledBidAskAmountTextField)).to.be.false;
            expect(browser.isExisting(selectors.bidAskAmountTextField)).to.be.true;
        }
    },
    iSelectiUnderstandBidding: function(){
        this.iWaitForModalSpinner();
        if(browser.isExisting(selectors.productSummary) === false){
            browser.waitForExist(selectors.iUnderstandBiddingButton);
            browser.click(selectors.iUnderstandBiddingButton);
            expect(browser.waitForExist(selectors.bidModal)).to.be.true;
        }
    },
    iGetValueOfHighestBid: function(){
        this.iWaitForModalSpinner();
        browser.waitForEnabled(selectors.highestBidLowestAsktext);
        var highestBidLowestAsk = browser.getText(selectors.highestBidLowestAsktext);
        var highestBid = highestBidLowestAsk[0];
        var highestBidString = highestBid.replace('HIGHEST BID: $','');
        var highestBidNumber = parseInt(highestBidString);
        return highestBidNumber;
    },
    iEnterBidHigherThanCurrent: function(){
        var highestBidNumber = this.iGetValueOfHighestBid();
        var higherBid = highestBidNumber + 10;
        browser.setValue(selectors.bidAskAmountTextField,higherBid);
    },
    iEnterBidLowerThanCurrent: function(){
        var highestBidNumber = this.iGetValueOfHighestBid();
        var lowerBid = highestBidNumber - 10;
        browser.setValue(selectors.bidAskAmountTextField,lowerBid);
    },
    iEnterBidEqualToCurrent: function(){
        var highestBidNumber = this.iGetValueOfHighestBid();
        browser.setValue(selectors.bidAskAmountTextField,highestBidNumber);
    },
    iEnterBidBelowMinimum: function(){
        browser.setValue(selectors.bidAskAmountTextField,20);
    },
    iGetWarningText: function(){
        var warningTextArray = browser.getText(selectors.warningText);
        var warningText = warningTextArray.shift();
        return warningText;
    },
    iSeeWarningForLowBid: function(){
        var warningText = this.iGetWarningText();
        expect(warningText).to.have.string("not the highest bidder");
    },
    iSeeWarningForEqualBid: function(){
        var warningText = this.iGetWarningText();
        expect(warningText).to.have.string("about to match the highest Bid. Their Bid will be accepted first");
    },
    iSeeWarningForBidBelowMinimum: function(){
        var warningText = this.iGetWarningText();
        expect(warningText).to.have.string("You must meet the minimum Bid of $25");
    },
    iClickContinueToBid: function(){
        browser.click(selectors.continueToBidButton);
    },
    iClickAskButton: function(){
        browser.waitForExist(selectors.askButton);
        browser.click(selectors.askButton);
        expect(browser.waitForExist(selectors.modalBody)).to.be.true;
    },
    iSelectiUnderstandAsking: function(){
        this.iWaitForModalSpinner();
        if(browser.isExisting(selectors.productSummary) === false){
            browser.waitForText(selectors.askModalTitle);
            browser.waitForText(selectors.modalBody);
            var modalTitleText = browser.getText(selectors.askModalTitle);
                if(modalTitleText == "how it works"){
                    browser.click(selectors.iUnderstandAskingButton);
                }
            }
    },
    iSelectProductIfDopplegangerExists: function(){
        this.iWaitForModalSpinner();
        if(browser.isExisting(selectors.productSummary) === false){
            browser.waitForText(selectors.askModalTitle);
            browser.waitForText(selectors.modalBody);
            var modalTitleText = browser.getText(selectors.askModalTitle);
                if(modalTitleText == "Doppelganger"){
                    browser.click(selectors.doppelgangerButton);
                }
            }
    },
    iAmOnAskDialogue: function(){
        this.iWaitForModalSpinner();
        browser.waitForText(selectors.modalBody);
        var modalTitleText = browser.getText(selectors.askModalTitle);
        if(modalTitleText == "how it works"){
            this.iSelectiUnderstandAsking();
        } else if(modalTitleText == "Doppelganger"){
            this.iSelectProductIfDopplegangerExists();
        } else if(modalTitleText == "ask"){
            if(browser.waitForExist(selectors.productSummary,[5000]) == false){
                this.iSelectiUnderstandAsking();
                this.iSelectProductIfDopplegangerExists();
            }
        }
    },
    iSelectSizeForAsk: function(){
        if(browser.isExisting(selectors.shoeSizeDropDown) === true){
            expect(browser.isExisting(selectors.disabledBidAskAmountTextField)).to.be.true;
            this.iOpenSizeDropdown();
            browser.click('//*[@id="ask-create-form"]/fieldset/div/div[2]/div[1]/div[1]/div/div/ul/li[1]/a');
            expect(browser.isExisting(selectors.disabledBidAskAmountTextField)).to.be.false;
            expect(browser.isExisting('.amount-div')).to.be.true;
        }
    },
    iSelectSellNowTab: function(){
        browser.waitForExist(selectors.sellNowTab);
        browser.click(selectors.sellNowTab);
        var valueOfHighestBid = "$" + this.iGetValueOfHighestBid();
        expect(browser.getText(selectors.disabledBidAskAmountTextField)).to.equal(valueOfHighestBid);
    },
    iGetValueOfLowestAsk: function(){
        this.iWaitForModalSpinner();
        browser.waitForEnabled(selectors.highestBidLowestAsktext);
        var highestBidLowestAsk = browser.getText(selectors.highestBidLowestAsktext);
        var lowestAsk = highestBidLowestAsk[2];
        var lowestAskString = lowestAsk.replace('LOWEST ASK: $','');
        var lowestAskNumber = parseInt(lowestAskString);
        return lowestAskNumber;
    },
    iEnterAskLowerThanCurrentAsk: function(){
        var lowestAskValue = this.iGetValueOfLowestAsk();
        var lowerAsk = lowestAskValue - 10;
        browser.setValue(selectors.bidAskAmountTextField,lowerAsk);
    },
    iEnterAskHigherThanLowestAsk: function(){
        var lowestAskValue = this.iGetValueOfLowestAsk();
        var higherAsk = lowestAskValue + 10;
        browser.setValue(selectors.bidAskAmountTextField,higherAsk);
    },
    iEnterAskEqualToCurrent: function(){
        var lowestAskValue = this.iGetValueOfLowestAsk();
        browser.setValue(selectors.bidAskAmountTextField,lowestAskValue);
    },
    iSelectContinueToAsk: function(){
        browser.click(selectors.continueToAskButton);
    },
    iSeeWarningForHigherAsk: function(){
        var warningText = this.iGetWarningText();
        expect(warningText).to.have.string("not the lowest Ask");
    },
    iSeeWarningForEqualAsk: function(){
        var warningText = this.iGetWarningText();
        expect(warningText).to.have.string("about to match the lowest Ask. Their Ask will be accepted before yours");
    }
}