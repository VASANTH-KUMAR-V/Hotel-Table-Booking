import React from "react";
import { Input } from "antd";
import { SearchOutlined, FilterOutlined } from "@ant-design/icons";
import "./Searchbar.css"; // Import CSS for styling

const SearchBar = () => {
  return (
    <div className="search-bar">
      <SearchOutlined className="search-icon" />
      <Input 
        placeholder="What would you like to buy?" 
        className="search-input" 
      />
      <FilterOutlined className="filter-icon" />
    </div>
  );
};

export default SearchBar;
