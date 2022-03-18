import React, { Fragment, useEffect, useState } from "react";
import { Button, TextField } from "@mui/material";
import Imagenes from "./imagenes";

function Buscador(props) {
  const [datos, setDatos] = useState({
    search: "Random",
  });

  // const [dataValue, setDataValue] = useState('Random')

  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  // const enviarDatos = (event) => {
  //   event.preventDefault()
  //   setDataValue(datos.search)
  //   console.log(datos.search)
  // };

  // const enviarDatos = () => {
  //   setDataValue(datos.search)
  //   console.log(datos.search)
  // };

  return (
    <Fragment>
      <h1>Formulario</h1>
      <form className="row">
        <div className="col-md-3">
          <TextField 
            type="text"
            placeholder="Nombre"
            className="form-control"
            name="search"
            onChange={handleInputChange}
          />
        </div>
        {/* <Button variant="outline" onClick={() => enviarDatos()} className="btn btn-primary">
          Enviar
        </Button> */}
      </form>
      <Imagenes searchImage={datos.search} />
    </Fragment>
  );
}

export default Buscador;
