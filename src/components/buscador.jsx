import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { Button, TextField } from "@mui/material";

function Buscador(props) {
  const [datos, setDatos] = useState({
    search: "Random",
  });

  const [dataValue, setDataValue] = useState('')

  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  const enviarDatos = (event) => {
    event.preventDefault();
    setDataValue(datos.search)
    console.log(datos.search)
  };

  return (
    <Fragment>
      <h1>Formulario</h1>
      <form className="row" onSubmit={enviarDatos}>
        <div className="col-md-3">
          <TextField 
            type="text"
            placeholder="Nombre"
            className="form-control"
            onChange={handleInputChange}
            name="search"
          />
        </div>
        <Button type="submit" variant="outline" className="btn btn-primary">
          Enviar
        </Button>
      </form>
    </Fragment>
  );
}

export default Buscador;

function Imagenes(props) {
  const styles = {
    photos: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: "20px",
    },
    img: {
      width: "100%",
      maxHeight: "280px",
    },
    container: {
      margin: "25px",
    },
  };

  const [data, setData] = useState([]);

  const [value, setValue] = useState(props.searchImage.search);

  useEffect(() => {
    const fetchData = async () => {
      try {
        axios
          .get(`https://api.pexels.com/v1/search?query=${value}&per_page=25`, {
            headers: {
              Authorization:
                "563492ad6f9170000100000106a8150250374ebab4133d8ff47561a5",
            },
          })
          .then((response) => {
            setData(response.data.photos);
            // console.log(response.data.photos);
          });
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchData();
    console.log(props.searchImage.search, "<--- Imagenes useEffect");
    setValue(props.searchImage.search);
  });

  const items = data.map((result) => (
    <img style={styles.img} src={result.src.small}></img>
  ));

  return (
    <div className="container" style={styles.container}>
      <p>{props.searchImage.search}</p>
      <div className="photos" style={styles.photos}>
        {items}
      </div>
    </div>
  );
}
