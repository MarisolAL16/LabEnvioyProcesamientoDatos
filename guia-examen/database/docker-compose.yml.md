# database\docker-compose.yml

```js
services: // inicia la lista de servicios de Docker.
  mysql: // linea necesaria para que este archivo cumpla su funcion.
    image: mysql:8.0 // indica que imagen Docker se descargara y ejecutara.
    container_name: mysql_appnode // asigna un nombre al contenedor.
    restart: always // linea necesaria para que este archivo cumpla su funcion.
    environment: // configura variables de entorno del contenedor.
    # contraseÃ±a de root para la base de datos // linea necesaria para que este archivo cumpla su funcion.
      MYSQL_ROOT_PASSWORD: root  // configura variables de entorno del contenedor.
    # nombre de la base de datos que se crearÃ¡ automÃ¡ticamente // linea necesaria para que este archivo cumpla su funcion.
      MYSQL_DATABASE: appnode // configura variables de entorno del contenedor.
    ports: // expone un puerto para acceder al servicio.
      - "3306:3306" // expone un puerto para acceder al servicio.
    volumes: // guarda datos para que no se pierdan al reiniciar contenedores.
      - mysql_appnode_data:/var/lib/mysql // configura variables de entorno del contenedor.
// se deja espacio para separar secciones del codigo.
  phpmyadmin: // linea necesaria para que este archivo cumpla su funcion.
    image: phpmyadmin/phpmyadmin // indica que imagen Docker se descargara y ejecutara.
    container_name: phpmyadmin_appnode // asigna un nombre al contenedor.
    restart: always // linea necesaria para que este archivo cumpla su funcion.
    environment: // configura variables de entorno del contenedor.
      PMA_HOST: mysql // configura variables de entorno del contenedor.
      PMA_PORT: 3306 // configura variables de entorno del contenedor.
    ports: // expone un puerto para acceder al servicio.
      - "8080:80" // expone un puerto para acceder al servicio.
    depends_on: // indica que un servicio depende de otro.
      - mysql // linea necesaria para que este archivo cumpla su funcion.
// se deja espacio para separar secciones del codigo.
volumes: // guarda datos para que no se pierdan al reiniciar contenedores.
  mysql_appnode_data: // configura variables de entorno del contenedor.
```
