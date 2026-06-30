# frontend\src\components\ParqueoForm.jsx

```js
import useParqueo from "../hooks/useParqueo"; // importa una dependencia o archivo que se usara aqui.
// se deja espacio para separar secciones del codigo.
export default function ParqueoForm( {onResultado} ) { // exporta el valor principal de este archivo.
// se deja espacio para separar secciones del codigo.
    const { form, error, handleChange, handleSubmit } = useParqueo({onResultado}); // declara una variable o constante para guardar un dato.
// se deja espacio para separar secciones del codigo.
    return ( // devuelve un valor y termina esta parte de la funcion.
        <form // muestra un componente de React.
            onSubmit={handleSubmit} // conecta un evento del usuario con una funcion.
            className="card p-4 shadow" // asigna clases CSS o Bootstrap para dar estilo.
        > // parte de un componente visual reutilizable.
            <h3 className="mb-3"> // muestra un componente de React.
                <i className="bi bi-calculator me-2"></i> // muestra un componente de React.
                Calcular Cobro // parte de un componente visual reutilizable.
            </h3> // muestra un componente de React.
// se deja espacio para separar secciones del codigo.
            <div className="mb-3"> // muestra un componente de React.
                <label className="form-label"> // muestra un componente de React.
                    Placa // parte de un componente visual reutilizable.
                </label> // muestra un componente de React.
// se deja espacio para separar secciones del codigo.
                <input // muestra un componente de React.
                    type="text" // parte de un componente visual reutilizable.
                    name="placa" // parte de un componente visual reutilizable.
                    className="form-control" // asigna clases CSS o Bootstrap para dar estilo.
                    value={form.placa} // parte de un componente visual reutilizable.
                    onChange={handleChange} // conecta un evento del usuario con una funcion.
                /> // parte de un componente visual reutilizable.
            </div> // muestra un componente de React.
// se deja espacio para separar secciones del codigo.
            <div className="mb-3"> // muestra un componente de React.
                <label className="form-label"> // muestra un componente de React.
                    Tipo // parte de un componente visual reutilizable.
                </label> // muestra un componente de React.
// se deja espacio para separar secciones del codigo.
                <select // muestra un componente de React.
                    name="tipo" // parte de un componente visual reutilizable.
                    className="form-select" // asigna clases CSS o Bootstrap para dar estilo.
                    value={form.tipo} // parte de un componente visual reutilizable.
                    onChange={handleChange} // conecta un evento del usuario con una funcion.
                > // parte de un componente visual reutilizable.
                    <option value="carro"> // muestra un componente de React.
                        Carro // parte de un componente visual reutilizable.
                    </option> // muestra un componente de React.
// se deja espacio para separar secciones del codigo.
                    <option value="moto"> // muestra un componente de React.
                        Moto // parte de un componente visual reutilizable.
                    </option> // muestra un componente de React.
                </select> // muestra un componente de React.
            </div> // muestra un componente de React.
// se deja espacio para separar secciones del codigo.
            <div className="row"> // muestra un componente de React.
// se deja espacio para separar secciones del codigo.
                <div className="col-md-6"> // muestra un componente de React.
                    <label className="form-label"> // muestra un componente de React.
                        Horas // parte de un componente visual reutilizable.
                    </label> // muestra un componente de React.
// se deja espacio para separar secciones del codigo.
                    <input // muestra un componente de React.
                        type="number" // parte de un componente visual reutilizable.
                        name="horas" // parte de un componente visual reutilizable.
                        className="form-control" // asigna clases CSS o Bootstrap para dar estilo.
                        value={form.horas} // parte de un componente visual reutilizable.
                        onChange={handleChange} // conecta un evento del usuario con una funcion.
                    /> // parte de un componente visual reutilizable.
                </div> // muestra un componente de React.
// se deja espacio para separar secciones del codigo.
                <div className="col-md-6"> // muestra un componente de React.
                    <label className="form-label"> // muestra un componente de React.
                        Minutos // parte de un componente visual reutilizable.
                    </label> // muestra un componente de React.
// se deja espacio para separar secciones del codigo.
                    <input // muestra un componente de React.
                        type="number" // parte de un componente visual reutilizable.
                        name="minutos" // parte de un componente visual reutilizable.
                        className="form-control" // asigna clases CSS o Bootstrap para dar estilo.
                        value={form.minutos} // parte de un componente visual reutilizable.
                        onChange={handleChange} // conecta un evento del usuario con una funcion.
                    /> // parte de un componente visual reutilizable.
                </div> // muestra un componente de React.
// se deja espacio para separar secciones del codigo.
            </div> // muestra un componente de React.
// se deja espacio para separar secciones del codigo.
            {error && ( // abre o cierra bloques de codigo.
                <div className="alert alert-danger mt-3"> // muestra un componente de React.
                    {error} // abre o cierra bloques de codigo.
                </div> // muestra un componente de React.
            )} // parte de un componente visual reutilizable.
// se deja espacio para separar secciones del codigo.
            <button // muestra un componente de React.
                className="btn btn-primary mt-3" // asigna clases CSS o Bootstrap para dar estilo.
                type="submit" // parte de un componente visual reutilizable.
            > // parte de un componente visual reutilizable.
                <i className="bi bi-send-fill me-2"></i> // muestra un componente de React.
                Calcular // parte de un componente visual reutilizable.
            </button> // muestra un componente de React.
        </form> // muestra un componente de React.
    ); // abre o cierra bloques de codigo.
} // abre o cierra bloques de codigo.
```
