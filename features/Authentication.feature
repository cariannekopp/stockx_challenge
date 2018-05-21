Feature: Authentication

Scenario: Ability to Log in with Existing Account
    Given I am on the homepage
    Then I log in with username "testbuyerstock@gmail.com" and password "ButterNut90!"

Scenario: Ability to Log Out
    Given I am on the homepage
    When I log in with username "testbuyerstock@gmail.com" and password "ButterNut90!"
    Then I log out