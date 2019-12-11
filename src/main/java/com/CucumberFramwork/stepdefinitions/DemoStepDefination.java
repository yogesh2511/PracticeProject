package com.CucumberFramwork.stepdefinitions;

import org.openqa.selenium.By;

import com.CucumberFramwork.testBase.TestBase;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class DemoStepDefination {
	
	@Given("^I am on the Login page URL \"([^\"]*)\"$")
	public void i_am_on_the_Login_page_URL(String arg1) throws Throwable {
	  TestBase.driver.get(arg1);;
	}

	@Then("^I should see Log In Page$")
	public void i_should_see_Log_In_Page() throws Throwable {
		TestBase.driver.findElement(By.xpath("//*[@id='content-area']/div[1]/a")).isDisplayed();
	}

	@When("^I enter username as \"([^\"]*)\"$")
	public void i_enter_username_as(String arg1) throws Throwable {
	  TestBase.driver.findElement(By.xpath("//*[@id='ctl00_ContentPlaceHolder1_usernm']")).sendKeys(arg1);
	}

	@When("^I enter password as \"([^\"]*)\"$")
	public void i_enter_password_as(String arg1) throws Throwable {
		 TestBase.driver.findElement(By.xpath("//*[@id='ctl00_ContentPlaceHolder1_adminpassword']")).sendKeys(arg1);
	}

	@When("^click on login button$")
	public void click_on_login_button() throws Throwable {
		 TestBase.driver.findElement(By.xpath("//*[@id='ctl00_ContentPlaceHolder1_btn_go']")).click();;
	}

	@Then("^I sould see application homepage$")
	public void i_sould_see_application_homepage() throws Throwable {
	  System.out.println("Login Failed");
	  
	}

	@Then("^I sould see administrator text message on home Page$")
	public void i_sould_see_administrator_text_message_on_home_Page() throws Throwable {
	 
	}


}
