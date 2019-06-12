Feature: Insert event type into event_type table

  Scenario Outline: Create an event type with a unique name
    Given a table has been initialized
    When the dao adds an event type with <Name>
    Then the dao should receive an event type with <Name>

    Examples:
      | Name             |
      | issa event       |
      | issanother event |

  Scenario Outline: Create an event type without a unique name
    Given a table has been initialized
    And an event type with name <Name> exist
    When the dao adds an event type with name <Name>
    Then the dao should receive an error explaining that an event with <Name> already exists

    Examples:
      | Name             |
      | issa event       |
      | issanother event |
