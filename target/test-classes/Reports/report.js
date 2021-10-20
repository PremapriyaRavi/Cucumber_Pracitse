$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/login.feature");
formatter.feature({
  "name": "To validate the login functionality of CrazySales Application",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "error_message": "java.lang.IllegalStateException: The driver executable does not exist: C:\\Users\\PREMA\\eclipse-workspace\\CucumberExample\\Drivers\\chromedriver.exe\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:585)\r\n\tat org.openqa.selenium.remote.service.DriverService.checkExecutable(DriverService.java:146)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:141)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.access$000(ChromeDriverService.java:35)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService$Builder.findDefaultExecutable(ChromeDriverService.java:159)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:355)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.createDefaultService(ChromeDriverService.java:94)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat org.base.BaseClass.launchBrowser(BaseClass.java:14)\r\n\tat org.stepdefinitions.Hooks.beforeScenario1(Hooks.java:16)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "The user has to be in the CrazySales login page",
  "keyword": "Given "
});
formatter.match({
  "location": "org.stepdefinitions.LoginSteps.theUserHasToBeInTheCrazySalesLoginPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "To validate the login functionality with invalid credentials",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "The user fill the username and password",
  "keyword": "When "
});
formatter.match({
  "location": "org.stepdefinitions.LoginSteps.theUserFillTheUsernameAndPassword()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click login",
  "keyword": "And "
});
formatter.match({
  "location": "org.stepdefinitions.LoginSteps.clickLogin()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The user should navigate to the invalid login page",
  "keyword": "Then "
});
formatter.match({
  "location": "org.stepdefinitions.LoginSteps.theUserShouldNavigateToTheInvalidLoginPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "java.lang.NullPointerException\r\n\tat org.stepdefinitions.Hooks.afterScenario1(Hooks.java:27)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "name": "To validate the registration functionality",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "The user fill the \"\u003cemail\u003e\" and \"\u003cpassword\u003e\" and \"\u003cconfirmpw\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "click on create new button",
  "keyword": "And "
});
formatter.step({
  "name": "The user registered sucessfully",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email",
        "password",
        "confirmpw"
      ]
    },
    {
      "cells": [
        "Shobi",
        "123456",
        "123456"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "error_message": "java.lang.IllegalStateException: The driver executable does not exist: C:\\Users\\PREMA\\eclipse-workspace\\CucumberExample\\Drivers\\chromedriver.exe\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:585)\r\n\tat org.openqa.selenium.remote.service.DriverService.checkExecutable(DriverService.java:146)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:141)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.access$000(ChromeDriverService.java:35)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService$Builder.findDefaultExecutable(ChromeDriverService.java:159)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:355)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.createDefaultService(ChromeDriverService.java:94)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat org.base.BaseClass.launchBrowser(BaseClass.java:14)\r\n\tat org.stepdefinitions.Hooks.beforeScenario1(Hooks.java:16)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "The user has to be in the CrazySales login page",
  "keyword": "Given "
});
formatter.match({
  "location": "org.stepdefinitions.LoginSteps.theUserHasToBeInTheCrazySalesLoginPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "To validate the registration functionality",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "The user fill the \"Shobi\" and \"123456\" and \"123456\"",
  "keyword": "When "
});
formatter.match({
  "location": "org.stepdefinitions.LoginSteps.theUserFillTheAndAnd(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on create new button",
  "keyword": "And "
});
formatter.match({
  "location": "org.stepdefinitions.LoginSteps.clickOnCreateNewButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The user registered sucessfully",
  "keyword": "Then "
});
formatter.match({
  "location": "org.stepdefinitions.LoginSteps.theUserRegisteredSucessfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "java.lang.NullPointerException\r\n\tat org.stepdefinitions.Hooks.afterScenario1(Hooks.java:27)\r\n",
  "status": "failed"
});
});