let url =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5000/api/"
    : "https://rocky-peak-18231.herokuapp.com/api/";
export default url;
