import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, TextField } from "@mui/material";

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

  const fetchData = async (value) => {
    try {
      axios
        .get(`https://api.pexels.com/v1/search?query=${value}&per_page=15`, {
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
  
  useEffect(() => {
    fetchData(props.searchImage);
  }, []);

  const items = data.map((result) => (
    <img style={styles.img} src={result.src.small}></img>
  ));

  return (
    <div className="container" style={styles.container}>
       <Button variant="primary" onClick={() => fetchData(props.searchImage)} className="btn btn-primary">
          Buscar
        </Button>
      <p>Lo que busque: {props.searchImage}</p>
      <div className="photos" style={styles.photos}>
        {items}
      </div>
    </div>
  );
}

export default Imagenes;