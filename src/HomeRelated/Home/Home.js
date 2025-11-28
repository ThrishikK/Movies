import HeadingH1 from "../../HeadingH1/HeadingH1";
import "./Home.css";

function Home() {
  return (
    <section>
      <HeadingH1 text="Welcome to the Movie App" />
      <div className="home-container">
        <p>Filter By</p>
        <div className="filter-btns">
          <button>Actor</button>
          <button>Genre</button>
          <button>Year</button>
        </div>
        {/* holder */}
        <div className="main-holder">
          <div className="filter-holder">
            <h2>Brad Pitt</h2>
            <div className="img-holder">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Brad_Pitt_2019_by_Glenn_Francis.jpg/330px-Brad_Pitt_2019_by_Glenn_Francis.jpg"
                alt="brad-pitt"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
