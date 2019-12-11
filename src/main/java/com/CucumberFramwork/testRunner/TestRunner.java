package com.CucumberFramwork.testRunner;

import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;
import cucumber.api.CucumberOptions;
import cucumber.api.testng.CucumberFeatureWrapper;
import cucumber.api.testng.TestNGCucumberRunner;

//@RunWith(Cucumber.class)
@CucumberOptions(features = "C:\\Users\\ys\\eclipse-workspace\\CucumberFramwork\\src\\test\\resources\\featuresFiles", glue = {
		"com/CucumberFramwork/stepdefinitions" }, plugin = { "pretty", "html:target/cucumber-reports/cucumber-pretty",
				"json:target/cucumber-reports/cucumberTetReport.json", "rerun:target/cucumber-reports/rerun.txt" })
public class TestRunner {

	private TestNGCucumberRunner testNGCucumberRunner;

	@BeforeClass(alwaysRun = true)
	public void setUpClass() {
		testNGCucumberRunner = new TestNGCucumberRunner(this.getClass());
	}

	@Test(groups = "cucumber", description = "Runs cucumber Featurs", dataProvider = "features")
	public void OpenBrowser(CucumberFeatureWrapper cucumberfeature) {
		testNGCucumberRunner.runCucumber(cucumberfeature.getCucumberFeature());
	}

	@DataProvider
	public Object[][] features() {
		return testNGCucumberRunner.provideFeatures();
	}

	@AfterClass(alwaysRun = true)
	public void tearDownClass() {

	}
}
