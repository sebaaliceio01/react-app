import React, { useEffect, useState } from "react";
import Buscador from "./buscador";
import Button from "@mui/material/Button";

const styles = {
  paragraph: {
    padding: 20,
  },
  jumbotron: {
    display: "flex",
    justifyContent: "center",
    margin: 60,
  },
};

function Home() {
  // Podemos usar mas de un useState en mas de un mismo componente
  // Declara una nueva variable de estado, que llamaremos "count".
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(count)
  })

  return (
    <div className="container">
      <div className="jumbotron" style={styles.jumbotron}>
        <div className="paragraph" style={styles.paragraph}>
          <Buscador />
        </div>
      </div>
      <Button variant="outlined" onClick={() => setCount(count + 1)}>
        Contador
      </Button>
      {count}
    </div>
  );
}

export default Home;
