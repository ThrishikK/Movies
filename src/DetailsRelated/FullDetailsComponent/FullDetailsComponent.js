import "./FullDetailsComponent.css";

function FullDetailsComponent({ details }) {
  console.log(details);
  return (
    <div className="full-details-container">
      <div className="poster-container">
        <img src={`${details.Poster}`} alt={`${details.Title}`} />
      </div>
      {/*  */}
      <div className="full-details-text-container">
        <h2>{details.Title}</h2>
        {/* <p>{details.Plot}</p> */}
        {/* KEY VALUE PAIRS */}
        <div className="f-d-key-value-container">
          <p className="f-d-key">Actors :</p>
          <p className="f-d-value">{details.Actors}</p>
        </div>

        {/*  */}
        <div className="f-d-key-value-container">
          <p className="f-d-key">Plot :</p>
          <p className="f-d-value">{details.Plot}</p>
        </div>
        {/*  */}
        <div className="f-d-key-value-container">
          <p className="f-d-key">Director :</p>
          <p className="f-d-value">{details.Director}</p>
        </div>
        {/*  */}
        <div className="f-d-key-value-container">
          <p className="f-d-key">Released :</p>
          <p className="f-d-value">{details.Released}</p>
        </div>
        {/*  */}
        <div className="f-d-key-value-container">
          <p className="f-d-key">Runtime :</p>
          <p className="f-d-value">{details.Runtime}</p>
        </div>
        {/*  */}
        <div className="f-d-key-value-container">
          <p className="f-d-key">Year :</p>
          <p className="f-d-value">{details.Year}</p>
        </div>
        {/*  */}
        <div className="f-d-key-value-container">
          <p className="f-d-key">Language :</p>
          <p className="f-d-value">{details.Language}</p>
        </div>
        {/*  */}
        <div className="f-d-key-value-container">
          <p className="f-d-key">Country :</p>
          <p className="f-d-value">{details.Country}</p>
        </div>
        {/*  */}
        <div className="f-d-key-value-container">
          <p className="f-d-key">Genre :</p>
          <p className="f-d-value">{details.Genre}</p>
        </div>
        {/*  */}
        <div className="f-d-key-value-container">
          <p className="f-d-key">Writer :</p>
          <p className="f-d-value">{details.Writer}</p>
        </div>
      </div>
    </div>
  );
}

export default FullDetailsComponent;
