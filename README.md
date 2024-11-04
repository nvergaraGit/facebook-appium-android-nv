
# Proyecto de Automatización de Pruebas para la Aplicación de Facebook en Android

Este proyecto contiene pruebas automatizadas para la aplicación de Facebook en Android. Utiliza **Appium** para interactuar con la aplicación, **Cucumber** para definir los escenarios de prueba en un formato legible y **Java** para el código de implementación.

## Estructura del Proyecto

El proyecto está organizado de la siguiente manera:

src ├── main │ └── java └── test └── java └── config └── CapabilitiesConfig.java # Configuración de capacidades de Appium └── stepDefinitions └── FacebookSteps.java # Definiciones de pasos para Cucumber └── features └── FacebookTests.feature # Escenarios de Cucumber └── runner └── TestRunner.java # Configuración del Runner de Cucumber

## Escenarios de Prueba

1. **Inicio de sesión correcto**: Verifica que el usuario pueda iniciar sesión correctamente con credenciales válidas.
2. **Inicio de sesión incorrecto**: Verifica que se muestre un mensaje de error al iniciar sesión con credenciales inválidas.
3. **Publicación de un post**: Crea y publica un post en la línea de tiempo y verifica su publicación.
4. **Validación de la publicación**: Confirma que el post creado esté visible en la línea de tiempo.

## Prerrequisitos

- **Java** (versión 8 o superior)
- **Maven** (para gestionar dependencias y construir el proyecto)
- **Appium Server** (en ejecución)
- **Android Emulator** o un dispositivo físico con Android (y la aplicación de Facebook instalada)

### Instalación de Appium

Instala Appium globalmente usando `npm`:
```bash
npm install -g appium

Inicia Appium desde la terminal:

appium


Ejecuta las pruebas con Maven:

mvn test
