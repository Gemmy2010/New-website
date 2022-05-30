import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { t } from "i18next";

function Search() {
  const [searchQuery, setSearchQuery] = useState("");

  let navigate = useNavigate();

  const handleSearch = () => {
    if (searchQuery === "") {
      alert("Search field empty");
      return;
    }
    navigate(`/blog/search/${searchQuery}`, { replace: true });

    searchQuery("");
  };
  return (
    <div>
      {/* <div className="categories_header">
        <h2>{t("search")}</h2>
      </div> */}

      <form>
        <div className="search_input">
          <input
            placeholder="Blog title"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="btn_search"onClick={handleSearch}>Search</button>
        </div>
      </form>
    </div>
  );
}

export default Search;
