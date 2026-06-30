# frontend\src\pages\Home.jsx

```js
import { useState } from "react"; // importa una dependencia o archivo que se usara aqui.
import ParqueoForm from "../components/ParqueoForm"; // importa una dependencia o archivo que se usara aqui.
import ResultadoCard from "../components/ResultadoCard"; // importa una dependencia o archivo que se usara aqui.
// se deja espacio para separar secciones del codigo.
export default function Home() { // exporta el valor principal de este archivo.
  const [resultado, setResultado] = useState(null); // guarda valores devueltos en forma de arreglo, por ejemplo una consulta o un hook.
// se deja espacio para separar secciones del codigo.
  return ( // devuelve un valor y termina esta parte de la funcion.
    <div className="container mt-5"> // muestra un componente de React.
// se deja espacio para separar secciones del codigo.
      <ParqueoForm // muestra un componente de React.
        onResultado={setResultado} // linea necesaria para que este archivo cumpla su funcion.
      /> // linea necesaria para que este archivo cumpla su funcion.
// se deja espacio para separar secciones del codigo.
      <ResultadoCard // muestra un componente de React.
        resultado={resultado} // linea necesaria para que este archivo cumpla su funcion.
      /> // linea necesaria para que este archivo cumpla su funcion.
// se deja espacio para separar secciones del codigo.
    </div> // muestra un componente de React.
  ); // abre o cierra bloques de codigo.
} // abre o cierra bloques de codigo.
```
