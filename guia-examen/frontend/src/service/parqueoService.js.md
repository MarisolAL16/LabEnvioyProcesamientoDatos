# frontend\src\service\parqueoService.js

```js
const API_URL = `${import.meta.env.VITE_API_URL}/parqueo/calcular`; // declara una variable o constante para guardar un dato.
// se deja espacio para separar secciones del codigo.
async function manejarRespuesta(response) { // declara una funcion reutilizable.
  const data = await response.json().catch(() => null); // declara una variable o constante para guardar un dato.
// se deja espacio para separar secciones del codigo.
  if (!response.ok) { // valida una condicion antes de continuar.
    const error = new Error( // declara una variable o constante para guardar un dato.
      data?.error || "OcurriÃ³ un error en la solicitud" // parte de un servicio que comunica frontend y backend.
    ); // abre o cierra bloques de codigo.
// se deja espacio para separar secciones del codigo.
    error.status = response.status; // parte de un servicio que comunica frontend y backend.
    error.errores = data?.errores; // parte de un servicio que comunica frontend y backend.
// se deja espacio para separar secciones del codigo.
    throw error; // parte de un servicio que comunica frontend y backend.
  } // abre o cierra bloques de codigo.
// se deja espacio para separar secciones del codigo.
  return data; // devuelve un valor y termina esta parte de la funcion.
} // abre o cierra bloques de codigo.
// se deja espacio para separar secciones del codigo.
// POST /api/parqueo // comentario escrito para explicar el codigo.
export async function calcularParqueo(parqueoData) { // crea y exporta una funcion asincrona para usarla en rutas o componentes.
  const response = await fetch(API_URL, { // declara una variable o constante para guardar un dato.
    method: "POST", // parte de un servicio que comunica frontend y backend.
    headers: { // parte de un servicio que comunica frontend y backend.
      "Content-Type": "application/json", // parte de un servicio que comunica frontend y backend.
    }, // abre o cierra bloques de codigo.
    body: JSON.stringify(parqueoData), // parte de un servicio que comunica frontend y backend.
  }); // abre o cierra bloques de codigo.
// se deja espacio para separar secciones del codigo.
  return manejarRespuesta(response); // devuelve un valor y termina esta parte de la funcion.
} // abre o cierra bloques de codigo.
```
