import java.time.Duration;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.ElementNotVisibleException;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.FluentWait;
import org.openqa.selenium.support.ui.Wait;

public class ruffWork {


	  public static WebElement waitElement(WebElement element,WebDriver driver) throws InterruptedException {
		  Thread.sleep(3000);
		    Wait<WebDriver> wait = new FluentWait<WebDriver>(driver).withTimeout(Duration.ofSeconds(1000))
		            .pollingEvery(Duration.ofMillis(600))
		            .ignoring(ElementNotVisibleException.class)
		            .ignoring(NoSuchElementException.class);
		    WebElement ele = wait.until(ExpectedConditions.visibilityOf(element));
		    return ele;
		    
	
		}
	  public static List<WebElement> waitElements(List<WebElement> element,WebDriver driver) throws InterruptedException {
		  Thread.sleep(3000);
		    Wait<WebDriver> wait = new FluentWait<WebDriver>(driver).withTimeout(Duration.ofSeconds(1000))
		            .pollingEvery(Duration.ofMillis(1000))
		            .ignoring(ElementNotVisibleException.class);
		           // .ignoring(NoSuchElementException.class);
		    List<WebElement> ele = wait.until(ExpectedConditions.visibilityOfAllElements(element));
		    return ele;
		    
		}
	public static void main(String[] args) throws InterruptedException {
		
		System.setProperty("webdriver.chrome.driver","C:\\Users\\ys\\eclipse-workspace\\CucumberFramwork\\src\\test\\resources\\drivers\\chromedriver.exe");
		WebDriver driver = new ChromeDriver();
		    	
        String baseUrl = "http://www.google.co.in";
        driver.get(baseUrl);
        waitElement(driver.findElement(By.xpath("//input[@title='Search']")),driver).sendKeys("civica");
        
      List<WebElement> totalList= waitElements(driver.findElements(By.xpath("//*[@role='listbox']//span")), driver);
       //List<WebElement> totalList= driver.findElements(By.xpath("//*[@role='listbox']//span"));
    
       System.out.println("list of text:"+totalList.size());
       for(WebElement single:totalList)
       {
    	   System.out.println(single.getText());
       }
        
	}
	
}
