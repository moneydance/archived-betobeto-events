Feature: Drop event_type table

  Scenario: Drop a table when it does exist
    Given a table has been initialized
    When the dao drops a table
    Then the table should be dropped

  Scenario: Drop a table when it doesn't exist
    Given a table hasn't been initialized
    When the dao drops a table
    Then the dao should receive an error
