@01

Feature: FacebookTest

Feature: Facebook App - Testing

  Scenario: Iniciar sesión correctamente
    Given la aplicación está abierta
    When el usuario inicia sesión con "usuario_valido@example.com" y "password_valido"
    Then debería ver la pantalla principal

  Scenario: Intento de inicio de sesión incorrecto
    Given la aplicación está abierta
    When el usuario intenta iniciar sesión con "usuario_incorrecto@example.com" y "password_incorrecto"
    Then debería ver un mensaje de error

  Scenario: Publicar un post
    Given el usuario ha iniciado sesión correctamente
    When el usuario crea un post con el mensaje "Este es un post de prueba"
    Then debería ver el post en la línea de tiempo

  Scenario: Validar la publicación en la línea de tiempo
    Given el usuario está en la línea de tiempo
    Then debería ver el post "Este es un post de prueba"
             
