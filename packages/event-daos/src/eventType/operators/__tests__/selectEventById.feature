Feature: Select event type by id from event_type table

  Scenario Outline: Select an event by an id
    Given a table has been initialized
    And an event type with name <Name> and Id <Id> exists
    When the dao requests an event type with Id <Id>
    Then the dao should receive an event type with name <Name> and <Id>

    Examples:
      | Name       | Id |
      | issa event | 1  |

  Scenario Outline: Create an event type without a unique name
    Given a table has been initialized
    And an event type with name <Name> and Id <Id> doesn't exist
    When the dao requests an event type with Id <Id>
    Then the dao should receive an error explaining that the event doesn't exist

    Examples:
      | Name       | Id |
      | issa event | 1  |
