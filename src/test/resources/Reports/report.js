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
  "status": "passed"
});
formatter.step({
  "name": "The user has to be in the CrazySales login page",
  "keyword": "Given "
});
formatter.match({
  "location": "org.stepdefinitions.LoginSteps.theUserHasToBeInTheCrazySalesLoginPage()"
});
formatter.result({
  "status": "passed"
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
  "status": "passed"
});
formatter.step({
  "name": "click login",
  "keyword": "And "
});
formatter.match({
  "location": "org.stepdefinitions.LoginSteps.clickLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should navigate to the invalid login page",
  "keyword": "Then "
});
formatter.match({
  "location": "org.stepdefinitions.LoginSteps.theUserShouldNavigateToTheInvalidLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
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
  "status": "passed"
});
formatter.step({
  "name": "The user has to be in the CrazySales login page",
  "keyword": "Given "
});
formatter.match({
  "location": "org.stepdefinitions.LoginSteps.theUserHasToBeInTheCrazySalesLoginPage()"
});
formatter.result({
  "status": "passed"
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
  "status": "passed"
});
formatter.step({
  "name": "click on create new button",
  "keyword": "And "
});
formatter.match({
  "location": "org.stepdefinitions.LoginSteps.clickOnCreateNewButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user registered sucessfully",
  "keyword": "Then "
});
formatter.match({
  "location": "org.stepdefinitions.LoginSteps.theUserRegisteredSucessfully()"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:87)\r\n\tat org.junit.Assert.assertTrue(Assert.java:42)\r\n\tat org.junit.Assert.assertTrue(Assert.java:53)\r\n\tat org.stepdefinitions.LoginSteps.theUserRegisteredSucessfully(LoginSteps.java:54)\r\n\tat ✽.The user registered sucessfully(file:///C:/Users/PREMA/eclipse-workspace/Cucumber_Practice_Junit/src/test/resources/Features/login.feature:14)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
});