import React from "react";
import axios from "axios";

function Home({ products }) {
  console.log(products);
  // React.useEffect(() => {
  //   getProducts();
  //   //were executing getProducts which is run after componentsMount
  // }, []);

  // async function getProducts() {
  //   const url = "http://localhost:3000/api/products";
  //   const response = await axios.get(url);
  //   console.log(response.data);
  //   //data is found within js/ not a variable
  // }
  return <>home</>;
}

Home.getInitialProps = async () => {
  //check getInitialProps in app.js
  //fetch data on server
  const url = "http://localhost:3000/api/products";
  const response = await axios.get(url);
  return { products: response.data };
  //return repsonse data as an object

  //note.this object will be merger with existing props
};

export default Home;
