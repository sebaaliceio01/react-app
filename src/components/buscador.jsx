import React, { Component, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import axios from 'axios'

function Buscador(props) {

  const style = {
    fields: {
      display: "Flex",
      alignItems: "center",
      gap: 10,
    },
  };

  const [data, setData] = useState({
    search: "Default Input",
  });

  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const sendData = (event) => {
    event.preventDefault();
    console.log(data.search);
  };

  return (
    <div className="container">
      <p>{props.mensaje}</p>
      <form onSubmit={sendData}>
        <div className="fields" style={style.fields}>
          <TextField
            onChange={handleInputChange}
            name="search"
            id="outlined-basic"
            label="Buscar..."
            variant="outlined"
          />
          <Button variant="contained" size="large" type="submit">
            Buscar
          </Button>
        </div>
      </form>
      <p>{data.search}</p>
    </div>
  );
}

export default Buscador;
