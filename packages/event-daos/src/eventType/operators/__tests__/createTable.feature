Feature: Create event_type table

  Scenario: Create a table when it doesn't exist
    Given a table hasn't been initialized
    When the dao creates a table
    Then the table should be created

  Scenario: Create a table when it does exist
    Given a table has been initialized
    When the dao creates a table
    Then the dao should receive an error