import React, { useEffect, useState } from "react";
import Imagenes from "../images/imagenes";

function Home() {
  return (
    <div className="container">
      <div className="jumbotron">
        <div className="paragraph">
          <Imagenes />
        </div>
      </div>
    </div>
  );
}

export default Home;
