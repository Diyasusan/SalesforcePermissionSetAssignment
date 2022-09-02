# SalesforcePermissionSetAssignment
Automate the permission set assignments for Users

This project was created for the tech arena hackathon. The project helps the Salesforce Admin to create users, the project takes care of permission set assignments based on the permission set mapping already created by the Admin for the respective profiles. 

The input from the Admin consists of Profile name and Permission set Ids(semicolon seperated) in a lightning web component. This mapping is saved as a custom metadata record in the org. Then there is Apex trigger and handler that takes care of permission set assignments thereafter.
So once the Admin creates new user, permission sets are automatically added to the user.
