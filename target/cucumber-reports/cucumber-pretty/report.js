$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 2,
  "name": "Sign In",
  "description": "As an employee of the company\nI want to login to application with my credentails\nIn order to use the application features.",
  "id": "sign-in",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.before({
  "duration": 1650039700,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "User navigates to Application URL",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I am on the Login page URL \"http://login.globalglaze.in/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I should see Log In Page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://login.globalglaze.in/",
      "offset": 28
    }
  ],
  "location": "DemoStepDefination.i_am_on_the_Login_page_URL(String)"
});
formatter.result({
  "duration": 3720865700,
  "status": "passed"
});
formatter.match({
  "location": "DemoStepDefination.i_should_see_Log_In_Page()"
});
formatter.result({
  "duration": 48847200,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Sign In with valid credential",
  "description": "",
  "id": "sign-in;sign-in-with-valid-credential",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I enter username as \"admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I enter password as \"password\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I sould see application homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "I sould see administrator text message on home Page",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 21
    }
  ],
  "location": "DemoStepDefination.i_enter_username_as(String)"
});
formatter.result({
  "duration": 48531600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 21
    }
  ],
  "location": "DemoStepDefination.i_enter_password_as(String)"
});
formatter.result({
  "duration": 74371500,
  "status": "passed"
});
formatter.match({
  "location": "DemoStepDefination.click_on_login_button()"
});
formatter.result({
  "duration": 737941400,
  "status": "passed"
});
formatter.match({
  "location": "DemoStepDefination.i_sould_see_application_homepage()"
});
formatter.result({
  "duration": 61400,
  "status": "passed"
});
formatter.match({
  "location": "DemoStepDefination.i_sould_see_administrator_text_message_on_home_Page()"
});
formatter.result({
  "duration": 8500,
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 1104404400,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 20,
  "name": "Sign In with valid credentials",
  "description": "",
  "id": "sign-in;sign-in-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I enter username as \"\u003cuserName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I enter password as \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I sould see application homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "I sould see administrator text message on home Page",
  "keyword": "And "
});
formatter.examples({
  "line": 27,
  "name": "",
  "description": "",
  "id": "sign-in;sign-in-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "userName",
        "password"
      ],
      "line": 28,
      "id": "sign-in;sign-in-with-valid-credentials;;1"
    },
    {
      "cells": [
        "admin",
        "password"
      ],
      "line": 29,
      "id": "sign-in;sign-in-with-valid-credentials;;2"
    },
    {
      "cells": [
        "admin",
        "password"
      ],
      "line": 30,
      "id": "sign-in;sign-in-with-valid-credentials;;3"
    },
    {
      "cells": [
        "admin",
        "password"
      ],
      "line": 31,
      "id": "sign-in;sign-in-with-valid-credentials;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1199910100,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "User navigates to Application URL",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I am on the Login page URL \"http://login.globalglaze.in/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I should see Log In Page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://login.globalglaze.in/",
      "offset": 28
    }
  ],
  "location": "DemoStepDefination.i_am_on_the_Login_page_URL(String)"
});
formatter.result({
  "duration": 2503679200,
  "status": "passed"
});
formatter.match({
  "location": "DemoStepDefination.i_should_see_Log_In_Page()"
});
formatter.result({
  "duration": 39974600,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Sign In with valid credentials",
  "description": "",
  "id": "sign-in;sign-in-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    },
    {
      "line": 19,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I enter username as \"admin\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I enter password as \"password\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I sould see application homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "I sould see administrator text message on home Page",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 21
    }
  ],
  "location": "DemoStepDefination.i_enter_username_as(String)"
});
formatter.result({
  "duration": 75722600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 21
    }
  ],
  "location": "DemoStepDefination.i_enter_password_as(String)"
});
formatter.result({
  "duration": 67656900,
  "status": "passed"
});
formatter.match({
  "location": "DemoStepDefination.click_on_login_button()"
});
formatter.result({
  "duration": 948780200,
  "status": "passed"
});
formatter.match({
  "location": "DemoStepDefination.i_sould_see_application_homepage()"
});
formatter.result({
  "duration": 45400,
  "status": "passed"
});
formatter.match({
  "location": "DemoStepDefination.i_sould_see_administrator_text_message_on_home_Page()"
});
formatter.result({
  "duration": 6600,
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 1072867400,
  "status": "passed"
});
formatter.before({
  "duration": 1235858600,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "User navigates to Application URL",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I am on the Login page URL \"http://login.globalglaze.in/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I should see Log In Page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://login.globalglaze.in/",
      "offset": 28
    }
  ],
  "location": "DemoStepDefination.i_am_on_the_Login_page_URL(String)"
});
formatter.result({
  "duration": 3876451600,
  "status": "passed"
});
formatter.match({
  "location": "DemoStepDefination.i_should_see_Log_In_Page()"
});
formatter.result({
  "duration": 30309400,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Sign In with valid credentials",
  "description": "",
  "id": "sign-in;sign-in-with-valid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    },
    {
      "line": 19,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I enter username as \"admin\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I enter password as \"password\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I sould see application homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "I sould see administrator text message on home Page",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 21
    }
  ],
  "location": "DemoStepDefination.i_enter_username_as(String)"
});
formatter.result({
  "duration": 38779800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 21
    }
  ],
  "location": "DemoStepDefination.i_enter_password_as(String)"
});
formatter.result({
  "duration": 53695200,
  "status": "passed"
});
formatter.match({
  "location": "DemoStepDefination.click_on_login_button()"
});
formatter.result({
  "duration": 811164200,
  "status": "passed"
});
formatter.match({
  "location": "DemoStepDefination.i_sould_see_application_homepage()"
});
formatter.result({
  "duration": 33800,
  "status": "passed"
});
formatter.match({
  "location": "DemoStepDefination.i_sould_see_administrator_text_message_on_home_Page()"
});
formatter.result({
  "duration": 7800,
  "status": "passed"
});
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "duration": 1037028500,
  "status": "passed"
});
formatter.before({
  "duration": 1168090900,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "User navigates to Application URL",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I am on the Login page URL \"http://login.globalglaze.in/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I should see Log In Page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://login.globalglaze.in/",
      "offset": 28
    }
  ],
  "location": "DemoStepDefination.i_am_on_the_Login_page_URL(String)"
});
formatter.result({
  "duration": 2734791300,
  "status": "passed"
});
formatter.match({
  "location": "DemoStepDefination.i_should_see_Log_In_Page()"
});
formatter.result({
  "duration": 50146800,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Sign In with valid credentials",
  "description": "",
  "id": "sign-in;sign-in-with-valid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    },
    {
      "line": 19,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I enter username as \"admin\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I enter password as \"password\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I sould see application homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "I sould see administrator text message on home Page",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 21
    }
  ],
  "location": "DemoStepDefination.i_enter_username_as(String)"
});
formatter.result({
  "duration": 43168700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 21
    }
  ],
  "location": "DemoStepDefination.i_enter_password_as(String)"
});
formatter.result({
  "duration": 63951700,
  "status": "passed"
});
formatter.match({
  "location": "DemoStepDefination.click_on_login_button()"
});
formatter.result({
  "duration": 830750200,
  "status": "passed"
});
formatter.match({
  "location": "DemoStepDefination.i_sould_see_application_homepage()"
});
formatter.result({
  "duration": 32400,
  "status": "passed"
});
formatter.match({
  "location": "DemoStepDefination.i_sould_see_administrator_text_message_on_home_Page()"
});
formatter.result({
  "duration": 5600,
  "status": "passed"
});
formatter.embedding("image/png", "embedded3.png");
formatter.after({
  "duration": 1094890700,
  "status": "passed"
});
