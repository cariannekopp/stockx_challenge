module.exports = function(){
    this.Before(function (scenario) {
        this.methods = Object.create(require('./methods.js').methods)
    });
    this.After(function (scenario) {
        this.methods = null;
    });
    this.Given(/^I am on the homepage$/, function(callback){
        this.methods.iAmOnHomepage();
        callback();
    });
    this.Given(/^I log in with username "(.*)" and password "(.*)"$/, function(username, password, callback){
        this.methods.iSelectLoginSignUp();
        this.methods.iSeeLoginSignUpModal();
        this.methods.iSelectLoginTab();
        this.methods.iAmOnLoginTab();
        this.methods.iEnterUsernameForLogin(username);
        this.methods.iEnterPasswordForLogin(password);
        this.methods.iClickLogInButton();
        this.methods.iAmLoggedIn();
        callback();
    });
    this.Given(/^I log out$/, function(callback){
        this.methods.iLogOut();
        callback();
    });
    this.When(/^I view the first most popular item$/, function(callback){
        this.methods.iSelectFirstPopularItem();
        callback();
    });
    this.Then(/^I place a higher bid$/, function(callback){
        this.methods.iClickBuyBidButton();
        this.methods.iSelectiUnderstandBidding();
        this.methods.iSelectSizeForBid();
        this.methods.iEnterBidHigherThanCurrent();
        this.methods.iClickContinueToBid();
        callback();
    });
    this.Then(/^I am warned when I enter a lower bid$/, function(callback){
        this.methods.iClickBuyBidButton();
        this.methods.iSelectiUnderstandBidding();
        this.methods.iSelectSizeForBid();
        this.methods.iEnterBidLowerThanCurrent();
        this.methods.iSeeWarningForLowBid();
        callback();
    });
    this.Then(/^I am warned when I enter a bid equal to the current bid$/, function(callback){
        this.methods.iClickBuyBidButton();
        this.methods.iSelectiUnderstandBidding();
        this.methods.iSelectSizeForBid();
        this.methods.iEnterBidEqualToCurrent();
        this.methods.iSeeWarningForEqualBid();
        callback();
    });
    this.Then(/^I am warned when I enter a bid lower than minimum amount$/, function(callback){
        this.methods.iClickBuyBidButton();
        this.methods.iSelectiUnderstandBidding();
        this.methods.iSelectSizeForBid();
        this.methods.iEnterBidBelowMinimum();
        this.methods.iSeeWarningForBidBelowMinimum();
        callback();
    });
    this.Then(/^I choose to sell now$/, function(callback){
        this.methods.iClickAskButton();
        this.methods.iSelectiUnderstandAsking();
        this.methods.iSelectProductIfDopplegangerExists();
        this.methods.iAmOnAskDialogue();
        this.methods.iSelectSizeForAsk();
        this.methods.iSelectSellNowTab();
        this.methods.iSelectContinueToAsk();
        callback();
    });
    this.Then(/^I ask for lower than current lowest ask$/, function(callback){
        this.methods.iClickAskButton();
        this.methods.iSelectiUnderstandAsking();
        this.methods.iSelectProductIfDopplegangerExists();
        this.methods.iAmOnAskDialogue();
        this.methods.iSelectSizeForAsk();
        this.methods.iEnterAskLowerThanCurrentAsk();
        this.methods.iSelectContinueToAsk();
        callback();
    });
    this.Then(/^I am warned when I ask for higher than lowest ask$/, function(callback){
        this.methods.iClickAskButton();
        this.methods.iSelectiUnderstandAsking();
        this.methods.iSelectProductIfDopplegangerExists();
        this.methods.iAmOnAskDialogue();
        this.methods.iSelectSizeForAsk();
        this.methods.iEnterAskHigherThanLowestAsk();
        this.methods.iSeeWarningForHigherAsk();
        callback();
    });
    this.Then(/^I am warned when I ask for equal to the current ask$/, function(callback){
        this.methods.iClickAskButton();
        this.methods.iSelectiUnderstandAsking();
        this.methods.iSelectProductIfDopplegangerExists();
        this.methods.iAmOnAskDialogue();
        this.methods.iSelectSizeForAsk();
        this.methods.iEnterAskEqualToCurrent();
        this.methods.iSeeWarningForEqualAsk();
        callback();
    });

}