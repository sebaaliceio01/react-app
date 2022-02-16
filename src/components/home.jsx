import Buscador from "./buscador";

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
  return (
    <div className="container">
      <div className="jumbotron" style={styles.jumbotron}>
        <div className="paragraph" style={styles.paragraph}>
          <Buscador mensaje="Esto es un prop" />
        </div>
      </div>
    </div>
  );
}

export default Home;
