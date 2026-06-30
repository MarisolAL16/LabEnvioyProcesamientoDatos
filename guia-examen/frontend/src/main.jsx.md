# frontend\src\main.jsx

```js
import { BrowserRouter } from "react-router-dom"; // importa una dependencia o archivo que se usara aqui.
// se deja espacio para separar secciones del codigo.
import { StrictMode } from 'react' // importa una dependencia o archivo que se usara aqui.
import { createRoot } from 'react-dom/client' // importa una dependencia o archivo que se usara aqui.
import "bootstrap/dist/css/bootstrap.min.css"; //npm instal bootstrap // linea necesaria para que este archivo cumpla su funcion.
import "bootstrap-icons/font/bootstrap-icons.css"; //npm instal bootstrap-icons // linea necesaria para que este archivo cumpla su funcion.
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // importa un archivo o libreria por sus efectos, como estilos.
import App from './App.jsx' // importa una dependencia o archivo que se usara aqui.
// se deja espacio para separar secciones del codigo.
createRoot(document.getElementById('root')).render( // linea necesaria para que este archivo cumpla su funcion.
  <StrictMode> // muestra un componente de React.
    <BrowserRouter> // muestra un componente de React.
      <App /> // muestra un componente de React.
    </BrowserRouter> // muestra un componente de React.
  </StrictMode> // muestra un componente de React.
) // abre o cierra bloques de codigo.
```
