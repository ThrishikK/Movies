import { useEffect, useRef, useState } from "react";
import "./RecommendedRow.css";

function RecommendedRow({ movieNamesObject }) {
  console.log(movieNamesObject);

  const total = movieNamesObject.movies.length;
  const initialPositionsArray = movieNamesObject.movies.map(
    (_, i) => (360 / total) * i
  );

  let filterValue = null;

  const [positionsArray, setPositionsArray] = useState(initialPositionsArray);
  const [radius, setRadius] = useState(window.innerWidth / 4);
  const carouselImagesRef = useRef(null);

  function handleNextClick() {
    setPositionsArray((prevArray) => [
      prevArray[total - 1],
      ...prevArray.slice(0, total - 1),
    ]);
    console.log(positionsArray);
  }

  function handlePreviousClick() {
    setPositionsArray((prevArray) => [
      ...prevArray.slice(1, total),
      prevArray[0],
    ]);
    console.log(positionsArray);
  }

  // RADIUS RESIZING FOR THE CAROUSEL FOR Z-AXIS
  useEffect(() => {
    const handleResize = () => {
      // Update radius based on new window width
      const newRadius = window.innerWidth / 3;
      console.log(newRadius);
      setRadius(newRadius);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  //

  return (
    <div className="recommended-movies-row">
      <h2>{movieNamesObject.name}</h2>
      {/* CAROUSEL */}
      <div className="carousel">
        <div className="carousel__images" ref={carouselImagesRef}>
          {movieNamesObject.movies.map((eachImag, i) => {
            filterValue = positionsArray[i] !== 0 ? "0.5rem" : "0rem";
            return (
              <img
                className="carousel__images-picture"
                key={eachImag.movieName}
                src={`${eachImag.imgAddress}`}
                alt={`${eachImag.movieName}`}
                style={{
                  transform: `rotateY(${positionsArray[i]}deg) translateZ(${radius}px)`,
                  filter: `blur(${filterValue})`,
                }}
              />
            );
          })}
        </div>
      </div>
      {/* BUTTONS */}
      <div className="carousel__buttons">
        <button
          onClick={handlePreviousClick}
          className="carousel__button carousel__button--prev"
        >
          Previous
        </button>
        <button
          className="carousel__button carousel__button--next"
          onClick={handleNextClick}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default RecommendedRow;
