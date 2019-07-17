# Problem

A client has hired you to track zoo animals.
For each animal, you must track their name, species, and all zoos in which they have resided (including zoo name and address).

Determine the database tables necessary to track this information.

Label any relationships between table.

# Model

[Front End] <Request> [(endpoints) <> (data access)] <> [DB]

-By splitting endpoints and data access it is easier for developers to grasp and maintain
-Seperation of concern is also better fulfilled by having the data access logic not in the endpoints
-Also the database can be changed out now and the endpoints are not affected, only the data access logic
