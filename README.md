![Coderio](./assets/logo.svg "Coderio")

# Coderio fullstack challenge: World clock
Tenemos que crear una aplicación que muestre diferentes timezones elegidos por el usuario. Esos timezones se obtienen desde [la siguiente API](http://worldtimeapi.org/) y se agregan a la app desde un search box.

## API
Se debe desarrollar una api con:

* GET /timezones -> Obtiene todos los timezones.
* GET /timezones/:name -> Obtiene un timezone específico.
* PUT /timezones/:name -> Agrega un timezone específico al usuario.
* DELETE /timezones/:name -> Elimina un timezone específico del usuario.

## Frontend
Debe tener un search box con auto complete. Debajo todos los timezones seleccionados, cada uno con su respectivo botón de borrar.

![Ejemplo](./assets/spec.png "Ejemplo")

## Corriendo el proyecto
```bash
# Instalar dependencias del proyecto
yarn

# Instalar dependencias de los paquetes
yarn bootstrap

# Correr el servidor de desarrollo
yarn start
```

## Modalidad de entrega
* Repositorio público subido a GitHub, Gitlab, Bitbucket.
* Link a la aplicación funcionando.
