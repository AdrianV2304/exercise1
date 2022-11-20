import React from "react";
import { RiPencilLine } from "react-icons/ri";
import { RiDeleteBinLine } from "react-icons/ri";
import { GoSearch } from "react-icons/go";

const Search = () => {
  return (
    <div className="search">
      <div className="search__parameters">
        <span className="search__parameters--title">My Parameters</span>

        <div className="search__parameters--buttons">
          <button className="search__parameters--button">
            <RiPencilLine size={32} />
            <span className="search__parameters--text">Edit</span>
          </button>

          <button className="search__parameters--button">
            <RiDeleteBinLine size={32} />
            <span className="search__parameters--text">Delete</span>
          </button>

          <button className="search__parameters--button">
            <span className="search__parameters--text">Create Parameter</span>
          </button>
        </div>
      </div>

      <div className="search__bar">
        <div className="search__bar--icon">
          <GoSearch size={32} />
        </div>
        <input
          type="search"
          className="search__bar--input"
          placeholder="Search"
        ></input>
      </div>
    </div>
  );
};

export default Search;
