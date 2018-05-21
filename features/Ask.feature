Feature: Ability to Ask

Scenario: User Sells for Highest Bid
    Given I am on the homepage
    When I view the first most popular item
    Then I choose to sell now

Scenario: User Asks for Lower than Current Lowest Ask
    Given I am on the homepage
    When I view the first most popular item
    Then I ask for lower than current lowest ask

Scenario: User Asks for Higher than Lowest Ask
    Given I am on the homepage
    When I view the first most popular item
    Then I am warned when I ask for higher than lowest ask

Scenario: User Asks for Equal to Current Ask
    Given I am on the homepage
    When I view the first most popular item
    Then I am warned when I ask for equal to the current ask

