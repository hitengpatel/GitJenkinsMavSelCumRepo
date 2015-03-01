package com.selenium.app.salesforce.login;


import junit.framework.Assert;

import com.selenium.app.salesforce.utils.WebConnector;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;


public class LoginTest
{
	WebConnector selenium = WebConnector.getInstance();
	
	
	@Given("^I go to \"([^\"]*)\" on \"([^\"]*)\"$")
	public void I_go_to_salesforce(String URL, String BROWSER)
	{
		System.out.println("I go to " + URL + " on " + BROWSER);
		selenium.openBrowser(BROWSER);
		selenium.navigate(URL);
	}
	
	@And("^I enter \"([^\"]*)\" as \"([^\"]*)\"$")
	public void I_enter(String object, String text)
	{
		System.out.println("Enter " + object + " as " + text);
		selenium.type(object, text);
	}
	
	@And("^I Click on \"([^\"]*)\"$")
	public void I_click_on(String object)
	{
		System.out.println("I Click on " + object);
		selenium.click(object);
	}
	
	@Then("^Login Should be \"([^\"]*)\"$")
	public void Then_login_should_be(String expectedResult)
	{
		String actualResult =null;
		
		if(selenium.isElementPresent("searchText"))
		{
			actualResult="Success";
			System.out.println("Login - " + actualResult);
		}
		else
		{
			actualResult="Failure";
			System.out.println("Login - " + actualResult);
		}
		
		Assert.assertEquals(expectedResult, actualResult);
	}
	
	@Then("^CloseBrowser$")
	public void CloseBrowser()
	{
		//selenium.closeBrowser();
	}
}
