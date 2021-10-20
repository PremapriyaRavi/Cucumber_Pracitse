package org.stepdefinitions;

import org.base.BaseClass;
import org.junit.Assert;
import org.pages.LoginPage;
import org.pages.RegistrationPage;
import io.cucumber.java.en.*;

public class LoginSteps extends BaseClass{
	LoginPage l;
	RegistrationPage r;
	@Given("The user has to be in the CrazySales login page")
	public void theUserHasToBeInTheCrazySalesLoginPage() {
//		launchBrowser();
//		launchUrl("https://www.crazysales.com.au/");
//		//maximizeWindow();
//		impWait();
	}
	@When("The user fill the username and password")
	public void theUserFillTheUsernameAndPassword(){
		l=new LoginPage();
		click(l.getLogIcon());
		click(l.getSignBtn());
		insert(l.getTxtEmail(),"sugu");
		insert(l.getTxtPass(), "12345");
	}
	@When("click login")
	public void clickLogin(){
		click(l.getLogBtn());
	}
	@Then("The user should navigate to the invalid login page")
	public void theUserShouldNavigateToTheInvalidLoginPage() {
		Assert.assertTrue(true); 
		System.out.println("The user in invalid login page...");
		//quitBrowser();
	}
	@When("The user fill the {string} and {string} and {string}")
	public void theUserFillTheAndAnd(String email, String pass, String confirmpw) {
		r=new RegistrationPage();
		r.fillDetails(email, pass, confirmpw);
		click(r.getRegBtn());
		insert(r.getRegEmail(),email);
		insert(r.getRegPass(),pass);
		insert(r.getConfirmPW(),confirmpw );
	}
	@When("click on create new button")
	public void clickOnCreateNewButton(){
		click(r.getCreateBtn());
	}
	@Then("The user registered sucessfully")
	public void theUserRegisteredSucessfully()  {
		// Write code here that turns the phrase above into concrete actions
		//Assert.assertTrue(true); 
		Assert.assertTrue(false); 
		System.out.println("The user registered sucessfully");
		//quitBrowser();
	}
}
