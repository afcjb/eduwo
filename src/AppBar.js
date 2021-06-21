import React from "react";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import Switch from "@material-ui/core/Switch";
import "./styles.css"

export default function SearchBar({
  namePrefix,
  handleSearch,
  sorted,
  toggleSorted,
  newSearch,
}) {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      newSearch(namePrefix, sorted);
    }
  };

  return (
    <div className="container-fluid mx-auto">
      <div className="row">
        <div className="mt-4 col-12 gradient rounded">
          <SearchIcon style={{ marginRight: 10 }} />
          <TextField
            id="searchBar"
            className="bg-white mt-1 mb-1"
            placeholder=" Search City…"
            value={namePrefix}
            onChange={(e) => {
              handleSearch(e);
            }}
            onKeyDown={handleKeyDown}
          />
          <span className="text-white ml-4 mr-2">{`Sort A-Z`}</span>
          <Switch
            checked={sorted}
            onChange={(e) => {
              toggleSorted(e);
            }}
            name="sorted"
          />
          <span className="text-white ml-2">{`Sort Z-A`}</span>
        </div>
      </div>
    </div>
  );
}
