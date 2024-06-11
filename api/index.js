// const randomTalk = {
// // Fetch API

// // Fetch data from this API

// // Axios

// // Fetch data from this API
// // https://dummyjson.com/products

// // Advance
// // Axios Instance
// // TimeOut
// // Abort Controller
// }

const getProducts = async (url) => {
  //   fetch(url) (// promise chainig)
  //     .then((d) => d.json()) // Fetch required
  //     .then((result) => console.log({ result }));

  try {
    const d = await fetch(url);
    const result = await d.json();
    console.log({ result });
  } catch (error) {
    console.log(error);
  }
};

getProducts("https://dummyjson.com/products");
