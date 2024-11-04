package runner;

import org.junit.runner.RunWith;
import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/resources/features", // Ruta a tus archivos de características
                glue = "steps", // Paquete donde se encuentran tus definiciones de pasos
                plugin = {
                                "com.aventstack.extentreports.cucumber.adapter.ExtentCucumberAdapter:",

                }, publish = true, // Publica el reporte en el dashboard de Cucumber
                dryRun = false, // Verifica los mapeos de los pasos sin ejecutar las pruebas
                //tags = "@02"// Ejecuta escenarios específicos basados en tags
                //tags = "@Login, @Stock, @Home, @Exhibitions, @Fillrate, @Geolocation"
                tags = "@01"
)
public class TestRunner {
}
