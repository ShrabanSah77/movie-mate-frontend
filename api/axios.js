// const axios = require("axios");

// const getProducts = async (url) => {
//   try {
//     const { data } = await axios.get(url);
//     console.log({ data });
//   } catch (error) {
//     console.log(error);
//   }
// };

// getProducts("https://dummyjson.com/products");

const axios = require("axios");
const instance = axios.create({
  baseURL: "https://dummyjson.com",
  timeOut: 5000,
});

const getProducts = async (url) => {
  try {
    const controller = new AbortController();
    const { data } = await instance.get(url, { signal: controller.signal }); // URL
    console.log(data);
    controller.abort();
  } catch (e) {
    console.log(e);
  }
};

// List the product name in the Home page (index.html)
