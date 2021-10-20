package org.stepdefinitions;

import java.io.IOException;
import org.base.BaseClass;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.Scenario;


public class Hooks extends BaseClass{
	@Before
	public void beforeScenario1() {
		System.out.println("Before scenario");
		launchBrowser();
		launchUrl("https://www.crazysales.com.au/");
		//maximizeWindow();
		impWait();
	}
	@After
	public void afterScenario1(Scenario s) throws IOException {
		//only for failed scenario
		if(s.isFailed()) {
			System.out.println("After scenario");
			TakesScreenshot tk=(TakesScreenshot)driver;
			byte[] b = tk.getScreenshotAs(OutputType.BYTES);		
			s.embed(b,"image/png");
		}
		quitBrowser();
	}
}
