package pages;

import java.net.MalformedURLException;
import java.net.URL;
import java.time.Duration;
import java.util.Set;

import org.openqa.selenium.By;
import org.openqa.selenium.Cookie;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.edge.EdgeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxOptions;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;
import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.android.HasNotifications;
import io.appium.java_client.remote.MobileCapabilityType;
import io.cucumber.java.Scenario;

import java.text.Normalizer;
import java.util.regex.Pattern;

import net.coobird.thumbnailator.Thumbnails;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;

import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.remote.MobileCapabilityType;
import org.openqa.selenium.remote.DesiredCapabilities;

import java.net.MalformedURLException;
import java.net.URL;


public class BasePage {
    protected static WebDriver appiumDriver;
    // protected static appiumDriver appiumDriver;
    protected static URL appiumURL;
    protected static WebDriver webDriver;
    protected static WebDriverWait wait;
    private static Actions action;
    protected static DesiredCapabilities capabilities;
    // Set Driver for the test
    protected static String driver = "Appium";
    // If the Driver isn't set as an enviroment variable use:

    // Configure drivers options and capabilities
    static {
        switch (driver) {
            case "Firefox":
                FirefoxOptions firefoxOptions = new FirefoxOptions();
                webDriver = new FirefoxDriver(firefoxOptions);
                wait = new WebDriverWait(webDriver, Duration.ofSeconds(15));
                action = new Actions(webDriver);
                break;
            case "Chrome":
                ChromeOptions chromeOptions = new ChromeOptions();
                chromeOptions.addArguments("--remote-allow-origins=*");
                webDriver = new ChromeDriver(chromeOptions);
                wait = new WebDriverWait(webDriver, Duration.ofSeconds(15));
                action = new Actions(webDriver);
                break;
            case "Edge":
                // If the webDriver isn't set as an enviroment variable use:
                // System.setProperty("webdriver.edge.webDriver", EDGEDRIVER_PATH);
                EdgeOptions edgeOptions = new EdgeOptions();
                webDriver = new EdgeDriver(edgeOptions);
                wait = new WebDriverWait(webDriver, Duration.ofSeconds(15));
                action = new Actions(webDriver);
                break;
            case "Appium":

                capabilities = new DesiredCapabilities();
                capabilities.setCapability(MobileCapabilityType.PLATFORM_NAME, "Android");
                capabilities.setCapability(MobileCapabilityType.DEVICE_NAME, "emulator-5554"); // Cambia según tu dispositivo
                capabilities.setCapability("appPackage", "com.facebook.katana");
                capabilities.setCapability("appActivity", ".LoginActivity");
                capabilities.setCapability(MobileCapabilityType.AUTOMATION_NAME, "UiAutomator2");

                try {
                    appiumURL = new URL("http://localhost:4723/wd/hub");

                    // appiumURL = new URL("http://127.0.0.1:4723/wd/hub");
                    // appiumURL = new URL("http://127.0.0.1:4723");

                } catch (MalformedURLException e) {
                    e.printStackTrace();
                }

                appiumDriver = new AndroidDriver(appiumURL, capabilities);
                wait = new WebDriverWait(appiumDriver, Duration.ofSeconds(15));
                action = new Actions(appiumDriver);
                break;
            default:
                System.out.println("Invalid DRIVER set for the test. Check BasePage.java");
                System.exit(1);
        }
    }

    protected BasePage(WebDriver appiumDriver) {
        //BasePage.appiumDriver = appiumDriver;
      //  wait = new WebDriverWait(appiumDriver, Duration.ofSeconds(5));
    }

    protected static void maximizeWindow() {
        webDriver.manage().window().maximize();
    }

    protected void navigateTo(String url) {
        webDriver.get(url);
    }

   // protected static final Logger LOGGER = Logger.getLogger(Hooks.class.getName());

    protected static WebElement findElement(String locator) {
        return wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(locator)));
    }

    protected WebElement findElementById(String id) {
        return wait.until(ExpectedConditions.visibilityOfElementLocated(By.id(id)));
    }

    protected static void clickElement(String locator) {
        findElement(locator).click();
    }

    protected void clearTextField(String locator) {
        findElement(locator).clear();
    }

    protected void writeInElement(String locator, String textToWrite) {
        clearTextField(locator);
        findElement(locator).sendKeys(textToWrite);
    }

    protected void selectFromDropDownByIndex(String locator, int valueToSelect) {
        Select dropDown = new Select(findElement(locator));
        dropDown.selectByIndex(valueToSelect);
    }

    protected void selectFromDropDownByValue(String locator, String valueToSelect) {
        Select dropDown = new Select(findElement(locator));
        dropDown.selectByValue(valueToSelect);
    }

    protected void selectFromDropDownByText(String locator, String valueToSelect) {
        Select dropDown = new Select(findElement(locator));
        dropDown.selectByVisibleText(valueToSelect);
    }

    protected void dismissAlert() {
        webDriver.switchTo().alert().dismiss();
    }

    protected String textFromElement(String locator) {
        return findElement(locator).getText();
    }

    protected String getURL(String currentURL) {
        return webDriver.getCurrentUrl();
    }

    protected Boolean waitForTitle(String title) {
        return wait.until(ExpectedConditions.titleIs(title));
    }

    public static void quitDriver() {
        if (driver == "Appium") {
            appiumDriver.quit();
        } else {
            webDriver.quit();
        }
        System.out.println("Test End");
    }

    protected void closeTab() {
        webDriver.close();
    }

    protected Set<String> getHandles(Set<String> setWindowHandles) {
        return webDriver.getWindowHandles();
    }

    protected void switchTab(String newTab) {
        webDriver.switchTo().window(newTab);
    }

   /* protected void takeScreenshot(Scenario scenario, String imageName) {
        if (driver == "Appium") {
            byte[] screenshot = ((TakesScreenshot) appiumDriver).getScreenshotAs(OutputType.BYTES);
            scenario.attach(screenshot, "image/jpg", imageName);
        } else {
            byte[] screenshot = ((TakesScreenshot) webDriver).getScreenshotAs(OutputType.BYTES);
            scenario.attach(screenshot, "image/jpg", imageName);
        }
    }*/

    protected void takeScreenshot(Scenario scenario, String imageName) {
        byte[] screenshotBytes;
        if ("Appium".equals(driver)) {
            screenshotBytes = ((TakesScreenshot) appiumDriver).getScreenshotAs(OutputType.BYTES);
        } else {
            screenshotBytes = ((TakesScreenshot) webDriver).getScreenshotAs(OutputType.BYTES);
        }
        
        // Redimensionar la captura de pantalla
        try {
            ByteArrayOutputStream baos = new ByteArrayOutputStream();
            Thumbnails.of(new ByteArrayInputStream(screenshotBytes))
                    .size(1200, 800) // Puedes ajustar el tamaño deseado aquí
                    .outputFormat("jpg")
                    .toOutputStream(baos);
            byte[] resizedScreenshot = baos.toByteArray();
            
            // Adjuntar la captura de pantalla redimensionada al escenario
            scenario.attach(resizedScreenshot, "image/jpg", imageName);
        } catch (Exception e) {
            // Manejar la excepción si algo sale mal durante el redimensionamiento
            e.printStackTrace();
            // Opcional: Adjuntar la captura de pantalla original si el redimensionamiento falla
            scenario.attach(screenshotBytes, "image/jpg", imageName + "_original");
        }
    }

    protected WebElement webElementIsClickable(String locator) {
        return wait.until(ExpectedConditions.elementToBeClickable(findElement(locator)));
    }

    protected Boolean getAttributeOfWebElement(String locator, String attribute, String value) {
        return wait.until(ExpectedConditions.attributeToBe(findElement(locator), attribute, value));
    }

    protected void hoverOverElement(String locator) {
        action.moveToElement(findElement(locator));
    }

    protected void addCookies(String key, String value, String domain) {
        webDriver.manage().addCookie(new Cookie(key, value));
    }

    protected void refreshWebDriver() {
        webDriver.navigate().refresh();
    }

    protected int countList(String locator) {
        return appiumDriver.findElements(By.xpath(locator)).size();
    }

    protected void getNotifications() {
        ((HasNotifications) appiumDriver).openNotifications();
    }

    protected static String normalizeString(String str) {
        String nfdNormalizedString = Normalizer.normalize(str, Normalizer.Form.NFD);
        Pattern pattern = Pattern.compile("\\p{InCombiningDiacriticalMarks}+");
        return pattern.matcher(nfdNormalizedString).replaceAll("");
    }

    public static void navigateBack() {
        appiumDriver.navigate().back();
    }

    protected boolean isElementVisible(String locator) {
        try {
            return findElement(locator).isDisplayed();
        } catch (org.openqa.selenium.NoSuchElementException e) {
            return false;
        }
    }

    protected static boolean isElementNotVisible(String selector) {
        try {
            return !findElement(selector).isDisplayed();
        } catch (org.openqa.selenium.NoSuchElementException e) {
            return true;
        }
    }
}