package stepDefinitions;

import config.CapabilitiesConfig;
import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.MobileElement;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

import static org.junit.jupiter.api.Assertions.assertTrue;

public class FacebookSteps {

    private AndroidDriver driver;
    private String postMessage = "Este es un post de prueba";

    @Before
    public void setUp() throws Exception {
        driver = CapabilitiesConfig.getDriver();
    }

    @After
    public void tearDown() {
        if (driver != null) {
            driver.quit();
        }
    }

    @Given("la aplicación está abierta")
    public void laAplicacionEstaAbierta() {
        // Ya se inicializó la app en Before
    }

    @When("el usuario inicia sesión con {string} y {string}")
    public void elUsuarioIniciaSesionCon(String username, String password) {
        MobileElement usernameField = (MobileElement) driver.findElementById("com.facebook.katana:id/login_username");
        MobileElement passwordField = (MobileElement) driver.findElementById("com.facebook.katana:id/login_password");
        MobileElement loginButton = (MobileElement) driver.findElementById("com.facebook.katana:id/login_login");

        usernameField.sendKeys(username);
        passwordField.sendKeys(password);
        loginButton.click();
    }

    @Then("debería ver la pantalla principal")
    public void deberiaVerLaPantallaPrincipal() {
        MobileElement homeElement = (MobileElement) driver.findElementByAccessibilityId("home");
        assertTrue(homeElement.isDisplayed(), "El usuario no pudo iniciar sesión correctamente.");
    }

    @When("el usuario intenta iniciar sesión con {string} y {string}")
    public void elUsuarioIntentaIniciarSesionCon(String username, String password) {
        elUsuarioIniciaSesionCon(username, password);
    }

    @Then("debería ver un mensaje de error")
    public void deberiaVerUnMensajeDeError() {
        MobileElement errorMessage = (MobileElement) driver.findElementById("com.facebook.katana:id/login_error_message");
        assertTrue(errorMessage.isDisplayed(), "El mensaje de error no se mostró correctamente.");
    }

    @Given("el usuario ha iniciado sesión correctamente")
    public void elUsuarioHaIniciadoSesionCorrectamente() {
        elUsuarioIniciaSesionCon("usuario_valido@example.com", "password_valido");
        deberiaVerLaPantallaPrincipal();
    }

    @When("el usuario crea un post con el mensaje {string}")
    public void elUsuarioCreaUnPostConElMensaje(String mensaje) {
        MobileElement postButton = (MobileElement) driver.findElementByAccessibilityId("new_post_button");
        postButton.click();

        MobileElement postTextField = (MobileElement) driver.findElementById("com.facebook.katana:id/post_text");
        postTextField.sendKeys(mensaje);

        MobileElement publishButton = (MobileElement) driver.findElementById("com.facebook.katana:id/post_button");
        publishButton.click();
    }

    @Then("debería ver el post en la línea de tiempo")
    public void deberiaVerElPostEnLaLineaDeTiempo() {
        MobileElement postElement = (MobileElement) driver.findElementByXPath("//*[contains(@text, '" + postMessage + "')]");
        assertTrue(postElement.isDisplayed(), "El post no se encontró en la línea de tiempo.");
    }

    @Given("el usuario está en la línea de tiempo")
    public void elUsuarioEstaEnLaLineaDeTiempo() {
        deberiaVerLaPantallaPrincipal();
    }

    @Then("debería ver el post {string}")
    public void deberiaVerElPost(String mensaje) {
        MobileElement postElement = (MobileElement) driver.findElementByXPath("//*[contains(@text, '" + mensaje + "')]");
        assertTrue(postElement.isDisplayed(), "El post no se encontró en la línea de tiempo.");
    }
}