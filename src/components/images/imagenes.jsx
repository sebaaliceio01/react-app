import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, TextField } from "@mui/material";
import "../styles.css";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Dialog from "../image-dialog/image-dialog";

function Imagenes(props) {
  const [data, setData] = useState([]);

  const [count, setCount] = useState();

  const [totalCount, setTotalCount] = useState();

  const [page, setPage] = useState(1);

  const [open, setOpen] = useState(false);

  const [photographerData, setPhotographerData] = useState()

  const [datos, setDatos] = useState({
    search: "Nature",
  });

  const handleChange = (event, value) => {
    setPage(value);
    fetchData(datos.search, value);
  };

  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  const fetchData = async (value, page) => {
    try {
      axios
        .get(
          `https://api.pexels.com/v1/search?page=${page}&query=${value}&per_page=50`,
          {
            headers: {
              Authorization:
                "563492ad6f9170000100000106a8150250374ebab4133d8ff47561a5",
            },
          }
        )
        .then((response) => {
          setData(response.data.photos);
          setCount(response.data.per_page);
          setTotalCount(response.data.total_results);
        });
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleClickOpen = (result) => {
    setOpen(true);
    setPhotographerData(result)
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  useEffect(() => {
    fetchData(datos.search);
  }, []);

  const items = data.map((result) => (
    <div className="image-grid">
      <img src={result.src.medium} className="imagenes" />
      <div className="info">
        <p>
          Photographer: <b>{result.photographer}</b>
        </p>
      </div>
      <div className="info-button">
        <Button variant="outlined" onClick={() => handleClickOpen(result)}>
          Ver mas
        </Button>
      </div>
    </div>
  ));

  return (
    <div className="image-container">
      <form className="row">
        <h1 className="image-title">Busca tus imagenes favoritas</h1>
        <div className="form">
          <TextField
            type="text"
            placeholder="Busca tu imagen..."
            className="form-control"
            name="search"
            onChange={handleInputChange}
          />
          <Button
            variant="contained"
            onClick={() => fetchData(datos.search)}
            className="button"
          >
            Buscar
          </Button>
        </div>
        <div className="popular">
          <p>Results: {totalCount}</p>
          {/* <p>Popular search:</p> */}
        </div>
      </form>
      <div className="pagination">
        <Stack spacing={2}>
          <Pagination count={count} page={page} onChange={handleChange} />
        </Stack>
      </div>
      <div className="photos">{items}</div>
      <Dialog open={open} onClose={handleClose} result={photographerData} />
    </div>
  );
}

export default Imagenes;
