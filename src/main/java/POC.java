import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class POC {

	public static void main(String[] args) {
		System.setProperty("webdriver.chrome.driver","C:\\Users\\ys\\eclipse-workspace\\CucumberFramwork\\src\\test\\resources\\drivers\\chromedriver.exe");
		WebDriver driver = new ChromeDriver();
		    	
        String baseUrl = "http://www.google.co.in";
        driver.get(baseUrl);
        driver.manage().window().maximize();

	}
	
	public static void searchGoogle(String enteredText) 
	{
		
	}
	
	

}
