# backend\config\db.js

```js
import mysql from "mysql2/promise"; // importa una dependencia o archivo que se usara aqui.
import dotenv from "dotenv"; // importa una dependencia o archivo que se usara aqui.
// se deja espacio para separar secciones del codigo.
dotenv.config(); // carga las variables del archivo .env.
// se deja espacio para separar secciones del codigo.
const pool = mysql.createPool({ // crea el grupo de conexiones hacia MySQL.
  host: process.env.DB_HOST, // linea necesaria para que este archivo cumpla su funcion.
  port: process.env.DB_PORT, // linea necesaria para que este archivo cumpla su funcion.
  user: process.env.DB_USER, // linea necesaria para que este archivo cumpla su funcion.
  password: process.env.DB_PASSWORD, // linea necesaria para que este archivo cumpla su funcion.
  database: process.env.DB_NAME, // linea necesaria para que este archivo cumpla su funcion.
  waitForConnections: true, // linea necesaria para que este archivo cumpla su funcion.
  connectionLimit: 10 // linea necesaria para que este archivo cumpla su funcion.
}); // abre o cierra bloques de codigo.
// se deja espacio para separar secciones del codigo.
export default pool; // exporta el valor principal de este archivo.
```
