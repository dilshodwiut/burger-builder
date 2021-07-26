import axios from "axios";

const instance = axios.create({
  baseURL:
    "https://burger-builder-react-64b70-default-rtdb.asia-southeast1.firebasedatabase.app/",
});

export default instance;
