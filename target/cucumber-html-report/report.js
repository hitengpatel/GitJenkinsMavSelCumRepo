$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("main/resources/com/selenium/app/salesforce/login/login.feature");
formatter.feature({
  "id": "login-to-sales-force",
  "description": "As a sales person i want to Login",
  "name": "Login to Sales Force",
  "keyword": "Feature",
  "line": 1
});
formatter.scenarioOutline({
  "id": "login-to-sales-force;\u003cscenario-outline\u003e",
  "tags": [
    {
      "name": "@login",
      "line": 4
    }
  ],
  "description": "",
  "name": "\u003cScenario_Outline\u003e",
  "keyword": "Scenario Outline",
  "line": 5,
  "type": "scenario_outline"
});
formatter.step({
  "name": "I go to \"loginURL\" on \"\u003cBrowser\u003e\"",
  "keyword": "Given ",
  "line": 7
});
formatter.step({
  "name": "I enter \"loginusername\" as \"\u003cUserName\u003e\"",
  "keyword": "And ",
  "line": 8
});
formatter.step({
  "name": "I enter \"loginpassword\" as \"\u003cPassword\u003e\"",
  "keyword": "And ",
  "line": 9
});
formatter.step({
  "name": "I Click on \"loginbutton\"",
  "keyword": "And ",
  "line": 10
});
formatter.step({
  "name": "Login Should be \"\u003cExpected_Result\u003e\"",
  "keyword": "Then ",
  "line": 11
});
formatter.step({
  "name": "CloseBrowser",
  "keyword": "Then ",
  "line": 12
});
formatter.examples({
  "id": "login-to-sales-force;\u003cscenario-outline\u003e;",
  "description": "",
  "name": "",
  "keyword": "Examples",
  "line": 14,
  "rows": [
    {
      "id": "login-to-sales-force;\u003cscenario-outline\u003e;;1",
      "cells": [
        "Scenario_Outline",
        "Browser",
        "UserName",
        "Password",
        "Expected_Result"
      ],
      "line": 15
    },
    {
      "id": "login-to-sales-force;\u003cscenario-outline\u003e;;2",
      "cells": [
        "Valid Login into SalesForce",
        "chrome",
        "emailjobs.to.hiten@gmail.com",
        "10May2012",
        "Success"
      ],
      "line": 16
    },
    {
      "id": "login-to-sales-force;\u003cscenario-outline\u003e;;3",
      "cells": [
        "Login into SalesForce with Wrong Password",
        "chrome",
        "emailjobs.to.hiten@gmail.com",
        "pass1234",
        "Failure"
      ],
      "line": 17
    },
    {
      "id": "login-to-sales-force;\u003cscenario-outline\u003e;;4",
      "cells": [
        "Login into SalesForce with Wrong Credential",
        "chrome",
        "hello@gmail.com",
        "hello",
        "Failure"
      ],
      "line": 18
    }
  ]
});
formatter.scenario({
  "id": "login-to-sales-force;\u003cscenario-outline\u003e;;2",
  "tags": [
    {
      "name": "@login",
      "line": 4
    }
  ],
  "description": "",
  "name": "Valid Login into SalesForce",
  "keyword": "Scenario Outline",
  "line": 16,
  "type": "scenario"
});
formatter.step({
  "name": "I go to \"loginURL\" on \"chrome\"",
  "keyword": "Given ",
  "line": 7,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "I enter \"loginusername\" as \"emailjobs.to.hiten@gmail.com\"",
  "keyword": "And ",
  "line": 8,
  "matchedColumns": [
    2
  ]
});
formatter.step({
  "name": "I enter \"loginpassword\" as \"10May2012\"",
  "keyword": "And ",
  "line": 9,
  "matchedColumns": [
    3
  ]
});
formatter.step({
  "name": "I Click on \"loginbutton\"",
  "keyword": "And ",
  "line": 10
});
formatter.step({
  "name": "Login Should be \"Success\"",
  "keyword": "Then ",
  "line": 11,
  "matchedColumns": [
    4
  ]
});
formatter.step({
  "name": "CloseBrowser",
  "keyword": "Then ",
  "line": 12
});
formatter.match({
  "arguments": [
    {
      "val": "loginURL",
      "offset": 9
    },
    {
      "val": "chrome",
      "offset": 23
    }
  ],
  "location": "LoginTest.I_go_to_salesforce(String,String)"
});
