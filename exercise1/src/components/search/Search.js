import React from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { GoSearch } from "react-icons/go";
import { RiPencilLine } from "react-icons/ri";
import Button from "../button";

const duCeva = () => console.log("pula mea");

const Search = (props) => {
  console.log(props.adi);

  return (
    <div className="search">
      <div className="search__parameters">
        <span className="search__parameters--title">{props.adi}</span>

        <div className="search__parameters--buttons">
          <Button label="Edit" ceva="flip" functie={duCeva}><RiPencilLine size={32} /></Button>

          <button className="search__parameters--button">
            <RiDeleteBinLine size={32} />
            <span className="search__parameters--text">Delete</span>
          </button>

          <button className="search__parameters--button flip">
            Create Parameter
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
