// import { ThemeContext } from "@emotion/react";
// import axios from "axios";
// import React, { useContext, useEffect, useState } from "react";

// function Imagenes(props) {
//   const styles = {
//     photos: {
//       display: "grid",
//       gridTemplateColumns: "repeat(4,1fr)",
//       gap: "20px",
//     },
//     img: {
//       width: "100%",
//       maxHeight: "280px",
//     },
//     container: {
//       margin: "25px",
//     },
//   };

//   const [data, setData] = useState([]);

//   const value = useContext(props.fieldValue);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         axios
//           .get(`https://api.pexels.com/v1/search?query=${value}&per_page=25`, {
//             headers: {
//               'Authorization' : '563492ad6f9170000100000106a8150250374ebab4133d8ff47561a5'
//             }
//           })
//           .then((response) => {
//             setData(response.data.photos);
//             // console.log(response.data.photos);
//           });

//           // const { data: response } = await axios.get("https://api.pexels.com/v1/search?query=nature&per_page=10");
//         } catch (error) {
//           console.error(error.message);
//         }
//       };
//       fetchData();
//   }, []);

//   const items = data.map((result) => (
//     <img style={styles.img} src={result.src.small}></img>
//   ));

//   return (
//     <div className="container" style={styles.container}>
//       <div className="photos" style={styles.photos}>
//         {items}
//       </div>
//     </div>
//   );
// }

// export default Imagenes;
