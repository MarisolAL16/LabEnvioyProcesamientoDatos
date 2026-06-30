# frontend\src\components\ResultadoCard.jsx

```js
export default function ResultadoCard({ resultado }) { // exporta el valor principal de este archivo.
  if (!resultado) return null; // valida una condicion antes de continuar.
// se deja espacio para separar secciones del codigo.
  return ( // devuelve un valor y termina esta parte de la funcion.
    <div className="card mt-4 shadow"> // muestra un componente de React.
      <div className="card-header bg-success text-white"> // muestra un componente de React.
        Resultado del Cobro // parte de un componente visual reutilizable.
      </div> // muestra un componente de React.
// se deja espacio para separar secciones del codigo.
      <div className="card-body"> // muestra un componente de React.
// se deja espacio para separar secciones del codigo.
        <p> // muestra un componente de React.
          <strong>Placa:</strong> {resultado.placa} // muestra un componente de React.
        </p> // muestra un componente de React.
// se deja espacio para separar secciones del codigo.
        <p> // muestra un componente de React.
          <strong>Tipo:</strong> {resultado.tipo} // muestra un componente de React.
        </p> // muestra un componente de React.
// se deja espacio para separar secciones del codigo.
        <p> // muestra un componente de React.
          <strong>Tarifa:</strong> â‚¡{resultado.tarifa} // muestra un componente de React.
        </p> // muestra un componente de React.
// se deja espacio para separar secciones del codigo.
        <p> // muestra un componente de React.
          <strong>Tiempo:</strong> {resultado.tiempo} // muestra un componente de React.
        </p> // muestra un componente de React.
// se deja espacio para separar secciones del codigo.
        <p> // muestra un componente de React.
          <strong>Horas cobradas:</strong> {resultado.horasCobradas} // muestra un componente de React.
        </p> // muestra un componente de React.
// se deja espacio para separar secciones del codigo.
        <h4 className="text-primary"> // muestra un componente de React.
          Total: â‚¡{resultado.total} // parte de un componente visual reutilizable.
        </h4> // muestra un componente de React.
// se deja espacio para separar secciones del codigo.
      </div> // muestra un componente de React.
    </div> // muestra un componente de React.
  ); // abre o cierra bloques de codigo.
} // abre o cierra bloques de codigo.
```
