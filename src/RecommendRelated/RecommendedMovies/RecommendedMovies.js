import { useEffect } from "react";

import RecommendedRow from "../RecommendedRow/RecommendedRow";
import recommendedMoviesObject from "../../Data/recommendedMoviesData";
import "./RecommendedMovies.css";

function RecommendedMovies() {
  useEffect(function () {
    const handleImageClick = (e) => {
      if (e.target.classList.contains("carousel__images-picture")) {
        const degreeExtracted = e.target.style.transform
          .split(" ")[0]
          .replace("rotateY(", "")
          .replace("deg)", "");
        const degreeNumber = Number(degreeExtracted);
        if (degreeNumber === 0) {
          const movieName = e.target.alt;
          console.log(movieName);
        }
      }
    };

    document.addEventListener("click", handleImageClick);
    return function () {
      document.removeEventListener("click", handleImageClick);
    };
  }, []);

  return (
    <section className="recommended-movies-section">
      <div className="recommended-movies-container">
        {recommendedMoviesObject.map((eachActorMovies) => (
          <RecommendedRow
            key={eachActorMovies.name}
            movieNamesObject={eachActorMovies}
          />
        ))}
      </div>
    </section>
  );
}

export default RecommendedMovies;
