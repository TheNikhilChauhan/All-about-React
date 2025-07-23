const Temperature = ({ temp }) => {
  if (temp < 15) {
    return <h3>It's cold outside</h3>;
  } else if (temp >= 15 && temp <= 25) {
    return <h3>It's nice outside</h3>;
  } else {
    return <h3>It's hot outside</h3>;
  }
};

export default Temperature;
