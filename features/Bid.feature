Feature: Ability to Bid

Scenario: User bids higher than current bid
    Given I am on the homepage
    When I view the first most popular item
    Then I place a higher bid

Scenario: User bids lower than current bid
    Given I am on the homepage
    When I view the first most popular item
    Then I am warned when I enter a lower bid

Scenario: User bids equal to current bid
    Given I am on the homepage
    When I view the first most popular item
    Then I am warned when I enter a bid equal to the current bid

Scenario: User bids lower than acceptable bid amount ($25)
    Given I am on the homepage
    When I view the first most popular item
    Then I am warned when I enter a bid lower than minimum amount