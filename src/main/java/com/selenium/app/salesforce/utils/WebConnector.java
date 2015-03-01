package com.selenium.app.salesforce.utils;

import java.io.FileInputStream;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;

import com.thoughtworks.selenium.Selenium;

public class WebConnector 
{
	//logging
	//Initialize property files
	
	//selenium implementation
	Properties OR = null;
	Properties CONFIG = null;
	WebDriver driver = null;
	WebDriver mozila = null;
	WebDriver chrome = null;
	WebDriver IE = null;
	static WebConnector W = null;
	
	private  WebConnector()
	{
		if(OR==null)
		{
			try
			{
				//OR
				OR = new Properties();
				FileInputStream fs = new FileInputStream(System.getProperty("user.dir") +
						"\\src\\main\\java\\com\\selenium\\app\\salesforce\\config\\OR.properties");
				OR.load(fs);
				
				//Congig
				CONFIG = new Properties();
				fs = new FileInputStream(System.getProperty("user.dir") +
						"\\src\\main\\java\\com\\selenium\\app\\salesforce\\config\\" + 
						OR.getProperty("testENV") + "_config.properties");
				CONFIG.load(fs);
				
				System.out.println("username" + OR.getProperty("loginusername"));
				System.out.println("password" + OR.getProperty("loginpassword"));
			}
			catch(Exception e)
			{
				System.out.println("Errror Intialise!!!");
			}
		}
		else
		{
			
		}
	}
	
	
	
	public void openBrowser(String browserType)
	{
		if(browserType.equals("chrome") && (chrome==null))
		{
			System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir") +"\\chrome\\chromedriver.exe");
			if(driver!=null)
				{closeBrowser();}
			driver = new ChromeDriver();
			chrome= driver;
		}
		else if(browserType.equals("chrome") && (chrome!=null))
		{
			driver= chrome;
		}
		else if(browserType.equals("mozila") && (mozila==null))
		{
			driver = new FirefoxDriver();
			driver =mozila;
		}
		else if(browserType.equals("mozila") && (mozila!=null))
		{
			mozila =driver;
		}
		else if(browserType.equals("IE") && (IE==null))
		{
			driver = new InternetExplorerDriver();
			driver =IE;
		}
		else if(browserType.equals("IE") && (IE!=null))
		{
			IE =driver;
		}
		
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
	}
	public void navigate(String URL)
	{
		driver.get(CONFIG.getProperty(URL));
	}
	public void type(String objectName,String text)
	{
		driver.findElement(By.xpath(OR.getProperty(objectName))).sendKeys(text);
	}
	public void click(String objectName)
	{
		driver.findElement(By.xpath(OR.getProperty(objectName))).click();
	}
	public void select	(String objectName,String text)
	{
		driver.findElement(By.xpath(OR.getProperty(objectName))).sendKeys(text);
	}
	public boolean isElementPresent(String objectName)
	{
		int count = driver.findElements(By.xpath(OR.getProperty(objectName))).size();
		if (count ==0) return false; else return true;
	}
	
	public void closeBrowser()
	{
		driver.close();
		driver.quit();
	}
	
	//Single-ton
			public static WebConnector getInstance()
			{
				if(W==null)
				{
					W= new WebConnector();
				}
				return W;
			}
}
