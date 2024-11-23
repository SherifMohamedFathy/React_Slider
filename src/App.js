import "./App.css";

import ImageSlider from "./ImageSlider";
const App = () => {
  const slides = [
    { url: "http://localhost:3000/image-1.jpg", title: "beach" },
    { url: "http://localhost:3000/image-2.jpg", title: "boat" },
    { url: "http://localhost:3000/image-3.jpg", title: "forest" },
    { url: "http://localhost:3000/image-4.jpg", title: "city" },
    { url: "http://localhost:3000/image-5.jpg", title: "italy" },
  ];
  const containerStyles = {
    width: "500px",
    height: "280px",
    margin: "0 auto",
  };

  return (
    <>
      <h1 style={{ textAlign: "center", marginBottom: "30px", marginTop: "30px", fontWeight: "bold", color: "#777" }}>
        Slider
      </h1>
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
    </>
  );
};
export default App;
