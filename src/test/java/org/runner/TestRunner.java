package org.runner;

import org.base.JVMReport;
import org.junit.AfterClass;
import org.junit.runner.RunWith;
import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import io.cucumber.junit.CucumberOptions.SnippetType;

@RunWith(Cucumber.class)
@CucumberOptions(features="src/test/resources",
glue="org.stepdefinitions",
dryRun=false,
monochrome=true,
plugin={"pretty",
		//location 
		"html:src\\test\\resources\\Reports",
		"json:src\\test\\resources\\Reports\\report.json",
		"junit:src\\test\\resources\\Reports\\output.xml",
		// rerun capture the failed scenario
		"rerun:src\\test\\resources\\FailedScenarios\\failed.txt"
},snippets=SnippetType.CAMELCASE,strict=false)
public class TestRunner {
	@AfterClass
	public static void report() {
		JVMReport.generateJVMReport("src\\test\\resources\\Reports\\report.json");
		System.out.println("Done!!!....");
	}
}
