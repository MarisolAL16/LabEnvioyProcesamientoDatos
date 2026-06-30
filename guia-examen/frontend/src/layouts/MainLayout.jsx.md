# frontend\src\layouts\MainLayout.jsx

```js
import { Outlet } from "react-router-dom"; // importa una dependencia o archivo que se usara aqui.
import Navbar from "../components/Navbar.jsx"; // importa una dependencia o archivo que se usara aqui.
import Footer from "../components/Footer.jsx"; // importa una dependencia o archivo que se usara aqui.
// se deja espacio para separar secciones del codigo.
function MainLayout() { // declara una funcion reutilizable.
  return ( // devuelve un valor y termina esta parte de la funcion.
    <div className="d-flex flex-column min-vh-100 bg-light"> // muestra un componente de React.
      <Navbar /> // muestra un componente de React.
      <main className="container flex-grow-1 py-2"> // muestra un componente de React.
        <Outlet /> // muestra un componente de React.
      </main> // muestra un componente de React.
      <Footer /> // muestra un componente de React.
    </div> // muestra un componente de React.
  ); // abre o cierra bloques de codigo.
} // abre o cierra bloques de codigo.
// se deja espacio para separar secciones del codigo.
export default MainLayout; // exporta el valor principal de este archivo.
```
