import axios from "axios";

const addImageToAws = (data) => {
  return axios.post("/upload", data, {
    headers: {
      'accept': 'application/json',
      'Accept-Language': 'en-US,en;q=0.8',
      'Content-Type': `multipart/form-data`,
    }
  })
    .then((response) => {
      console.log("seems to have worked");
      console.log(response);
    }).catch((error) => {
      console.log(error);
    });
};

export default addImageToAws;