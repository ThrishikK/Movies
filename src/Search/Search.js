import HeadingH1 from "../HeadingH1/HeadingH1";

import "./Search.css";
import "../HelperStyles/HelperStyles.css";

function Search() {
  return (
    <section>
      <HeadingH1 text={"Search"} />
      {/* INPUT FORM */}
      <form>
        <input className="search-input" type="text" />
      </form>
    </section>
  );
}

export default Search;
