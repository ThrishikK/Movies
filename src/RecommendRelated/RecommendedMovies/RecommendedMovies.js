import RecommendedRow from "../RecommendedRow/RecommendedRow";
import "./RecommendedMovies.css";

const recommendedMoviesObject = [
  {
    name: "Leonardo DiCaprio Movies",
    movies: [
      {
        movieName: "Inception",
        imgAddress:
          "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRRyuWmayVBvqjd1MxTKpRgauq2cCtUzb7Q9QvaFTkAuxAU_EYMoCE3wBuJeftxIzf0grreIw",
      },
      {
        movieName: "Shutter Island",
        imgAddress:
          "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRWaASGt5HkTiOySkGsHTkXv4l_SCqlgCdpiCMbai76YykQMsJNGbobjcea6jWH-wvqVE9XGw",
      },
      {
        movieName: "Django Unchained",
        imgAddress:
          "https://ew.com/thmb/O75NgyfC9E809OoqpvUzfNa5MJQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/django-unchained_510-1-9cd4b9ce258e40e599b813493bec985e.jpg",
      },
      {
        movieName: "The Departed",
        imgAddress:
          "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p162564_p_v8_ag.jpg",
      },
      {
        movieName: "Titanic",
        imgAddress:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlcQXin_CNozAFkv_SSihe5eZ_lvDD5nBqCmQT3xPf6KLlqHloIo5cBRGqwuy8pjuIiZrqoA",
      },
    ],
  },
];

function RecommendedMovies() {
  return (
    <div className="recommended-movies-container">
      <RecommendedRow movieNamesObject={recommendedMoviesObject[0]} />
    </div>
  );
}

export default RecommendedMovies;
