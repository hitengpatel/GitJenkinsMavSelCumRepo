Feature: Login to Sales Force
As a sales person i want to Login

@login
Scenario Outline:<Scenario_Outline> 

Given I go to "loginURL" on "<Browser>"
And I enter "loginusername" as "<UserName>"	
And I enter "loginpassword" as "<Password>"
And I Click on "loginbutton"
Then Login Should be "<Expected_Result>"
Then CloseBrowser

Examples:
|Scenario_Outline                           |Browser |UserName                     |Password  |Expected_Result |
|Valid Login into SalesForce                |chrome  |emailjobs.to.hiten@gmail.com |10May2012 |Success         |
|Login into SalesForce with Wrong Password  |chrome  |emailjobs.to.hiten@gmail.com |pass1234  |Failure         |
|Login into SalesForce with Wrong Credential|chrome  |hello@gmail.com              |hello     |Failure         |