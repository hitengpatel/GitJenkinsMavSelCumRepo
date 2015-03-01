$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("com/selenium/app/salesforce/login/login.feature");
formatter.feature({
  "id": "login-to-sales-force",
  "description": "As a sales person i want to Login",
  "name": "Login to Sales Force",
  "keyword": "Feature",
  "line": 1
});
formatter.scenario({
  "id": "login-to-sales-force;\u003cscenario-outline\u003e;;2",
  "description": "",
  "name": "Valid Login into SalesForce",
  "keyword": "Scenario Outline",
  "line": 15,
  "type": "scenario"
});
formatter.step({
  "name": "I go to \"loginURL\" on \"chrome\"",
  "keyword": "Given ",
  "line": 6,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "I enter \"loginusername\" as \"emailjobs.to.hiten@gmail.com\"",
  "keyword": "And ",
  "line": 7,
  "matchedColumns": [
    2
  ]
});
formatter.step({
  "name": "I enter \"loginpassword\" as \"10May2012\"",
  "keyword": "And ",
  "line": 8,
  "matchedColumns": [
    3
  ]
});
formatter.step({
  "name": "I Click on \"loginbutton\"",
  "keyword": "And ",
  "line": 9
});
formatter.step({
  "name": "Login Should be \"Success\"",
  "keyword": "Then ",
  "line": 10,
  "matchedColumns": [
    4
  ]
});
formatter.step({
  "name": "CloseBrowser",
  "keyword": "Then ",
  "line": 11
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
formatter.result({
  "duration": 15167361434,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "loginusername",
      "offset": 9
    },
    {
      "val": "emailjobs.to.hiten@gmail.com",
      "offset": 28
    }
  ],
  "location": "LoginTest.I_enter(String,String)"
});
formatter.result({
  "duration": 490804901,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "loginpassword",
      "offset": 9
    },
    {
      "val": "10May2012",
      "offset": 28
    }
  ],
  "location": "LoginTest.I_enter(String,String)"
});
formatter.result({
  "duration": 283916811,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "loginbutton",
      "offset": 12
    }
  ],
  "location": "LoginTest.I_click_on(String)"
});
formatter.result({
  "duration": 2387782101,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Success",
      "offset": 17
    }
  ],
  "location": "LoginTest.Then_login_should_be(String)"
});
formatter.result({
  "duration": 9035796556,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.CloseBrowser()"
});
formatter.result({
  "duration": 52247,
  "status": "passed"
});
formatter.scenario({
  "id": "login-to-sales-force;\u003cscenario-outline\u003e;;3",
  "description": "",
  "name": "Login into SalesForce with Wrong Password",
  "keyword": "Scenario Outline",
  "line": 16,
  "type": "scenario"
});
formatter.step({
  "name": "I go to \"loginURL\" on \"mozila\"",
  "keyword": "Given ",
  "line": 6,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "I enter \"loginusername\" as \"emailjobs.to.hiten@gmail.com\"",
  "keyword": "And ",
  "line": 7,
  "matchedColumns": [
    2
  ]
});
formatter.step({
  "name": "I enter \"loginpassword\" as \"pass1234\"",
  "keyword": "And ",
  "line": 8,
  "matchedColumns": [
    3
  ]
});
formatter.step({
  "name": "I Click on \"loginbutton\"",
  "keyword": "And ",
  "line": 9
});
formatter.step({
  "name": "Login Should be \"Failure\"",
  "keyword": "Then ",
  "line": 10,
  "matchedColumns": [
    4
  ]
});
formatter.step({
  "name": "CloseBrowser",
  "keyword": "Then ",
  "line": 11
});
formatter.match({
  "arguments": [
    {
      "val": "loginURL",
      "offset": 9
    },
    {
      "val": "mozila",
      "offset": 23
    }
  ],
  "location": "LoginTest.I_go_to_salesforce(String,String)"
});
formatter.result({
  "duration": 55140215110,
  "status": "failed",
  "error_message": "org.openqa.selenium.WebDriverException: Failed to connect to binary FirefoxBinary(C:\\Program Files (x86)\\Mozilla Firefox\\firefox.exe) on port 7055; process output follows: \n\nBuild info: version: \u00272.44.0\u0027, revision: \u002776d78cf323ce037c5f92db6c1bba601c2ac43ad8\u0027, time: \u00272014-10-23 13:11:40\u0027\nSystem info: host: \u0027hiten-HP\u0027, ip: \u0027192.168.0.4\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.7.0_71\u0027\nDriver info: driver.version: FirefoxDriver\r\n\tat org.openqa.selenium.firefox.internal.NewProfileExtensionConnection.start(NewProfileExtensionConnection.java:130)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.startClient(FirefoxDriver.java:246)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:114)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:191)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:186)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:182)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:95)\r\n\tat com.selenium.app.salesforce.utils.WebConnector.openBrowser(WebConnector.java:80)\r\n\tat com.selenium.app.salesforce.login.LoginTest.I_go_to_salesforce(LoginTest.java:22)\r\n\tat ✽.Given I go to \"loginURL\" on \"mozila\"(com/selenium/app/salesforce/login/login.feature:6)\r\nCaused by: org.openqa.selenium.firefox.NotConnectedException: Unable to connect to host 127.0.0.1 on port 7055 after 45000 ms. Firefox console output:\n\r\n\tat org.openqa.selenium.firefox.internal.NewProfileExtensionConnection.start(NewProfileExtensionConnection.java:118)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.startClient(FirefoxDriver.java:246)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:114)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:191)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:186)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:182)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:95)\r\n\tat com.selenium.app.salesforce.utils.WebConnector.openBrowser(WebConnector.java:80)\r\n\tat com.selenium.app.salesforce.login.LoginTest.I_go_to_salesforce(LoginTest.java:22)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:34)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:30)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:35)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:298)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:48)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:89)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:40)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:94)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:50)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:675)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\r\n"
});
formatter.match({
  "arguments": [
    {
      "val": "loginusername",
      "offset": 9
    },
    {
      "val": "emailjobs.to.hiten@gmail.com",
      "offset": 28
    }
  ],
  "location": "LoginTest.I_enter(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "loginpassword",
      "offset": 9
    },
    {
      "val": "pass1234",
      "offset": 28
    }
  ],
  "location": "LoginTest.I_enter(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "loginbutton",
      "offset": 12
    }
  ],
  "location": "LoginTest.I_click_on(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Failure",
      "offset": 17
    }
  ],
  "location": "LoginTest.Then_login_should_be(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginTest.CloseBrowser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "id": "login-to-sales-force;\u003cscenario-outline\u003e;;4",
  "description": "",
  "name": "Login into SalesForce with Wrong Credential",
  "keyword": "Scenario Outline",
  "line": 17,
  "type": "scenario"
});
formatter.step({
  "name": "I go to \"loginURL\" on \"chrome\"",
  "keyword": "Given ",
  "line": 6,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "I enter \"loginusername\" as \"hello@gmail.com\"",
  "keyword": "And ",
  "line": 7,
  "matchedColumns": [
    2
  ]
});
formatter.step({
  "name": "I enter \"loginpassword\" as \"hello\"",
  "keyword": "And ",
  "line": 8,
  "matchedColumns": [
    3
  ]
});
formatter.step({
  "name": "I Click on \"loginbutton\"",
  "keyword": "And ",
  "line": 9
});
formatter.step({
  "name": "Login Should be \"Failure\"",
  "keyword": "Then ",
  "line": 10,
  "matchedColumns": [
    4
  ]
});
formatter.step({
  "name": "CloseBrowser",
  "keyword": "Then ",
  "line": 11
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
formatter.result({
  "duration": 1713383111,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "loginusername",
      "offset": 9
    },
    {
      "val": "hello@gmail.com",
      "offset": 28
    }
  ],
  "location": "LoginTest.I_enter(String,String)"
});
formatter.result({
  "duration": 479387416,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "loginpassword",
      "offset": 9
    },
    {
      "val": "hello",
      "offset": 28
    }
  ],
  "location": "LoginTest.I_enter(String,String)"
});
formatter.result({
  "duration": 229352662,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "loginbutton",
      "offset": 12
    }
  ],
  "location": "LoginTest.I_click_on(String)"
});
formatter.result({
  "duration": 1205155525,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Failure",
      "offset": 17
    }
  ],
  "location": "LoginTest.Then_login_should_be(String)"
});
