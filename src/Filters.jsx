import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import moment from "moment";

const Filters = ({ data, setData, filterData, setFilterData, apiUrl }) => {
  const [selectDate, setSelectDate] = useState("");

  const [selectType, setSelectType] = useState("");

  const [searchTerm, setSearchTerm] = useState("");


  const handleDate = (e) => {
    setSelectDate(e.target.value);

    const date = e.target.value;

    axios.get(`${apiUrl}`, { params: { date } });

    if (e.target.value === "Filter by Date") {
      console.log("hello");
      console.log(data);
      setFilterData(data);
      return;
    }

    const years = e.target.value.split("-");
    console.log(years);
    const filteredData = data.filter((value) => {
      return (
        moment(years[1]).isAfter(moment(value.date * 1000)) &&
        moment(value.date * 1000).isAfter(moment(years[0]))
      );
    });

    setFilterData(filteredData);
  };

  const handleType = (e) => {
    console.log(e);
    setSelectType(e.target.value);

    const type = e.target.value;

    axios.get(`${apiUrl}`, { params: { type } });

    // console.log(e.target.value, "value of selecting type");
    if (e.target.value === "Filter by Type") {
      console.log("hello");
      console.log(data);
      setFilterData(data);
      return;
    }

    const filterDataType = data.filter((value) => {
      return value.tag.includes(e.target.value.toLowerCase());
    });
    console.log(filterDataType);
    console.log(e.target.name);
    setFilterData(filterDataType);
  };

  let handleSearch = (e) => {
    setSearchTerm(e.target.value);

    const type = e.target.value;

    axios.get(`${apiUrl}`, { params: { type } });

    let searchData = data.filter((value) => {
      return value.title.toLowerCase().includes(e.target.value.toLowerCase());
    });
    console.log(searchData);
    setFilterData(searchData);
  };

  return (
    <>
      <div className="filtercontainer">
        <div className="filterDateAndTypeContainer">
          <select
            className="dateContainer"
            onChange={handleDate}
            value={selectDate}
          >
            <option className="dateLabel" value="Filter by Date">
              Filter by Date
            </option>
            <option value="2023-2024"> 2023-2024 </option>
            <option value="2024-2025">2024-2025</option>
          </select>

          <select
            className="typeContainer"
            onChange={handleType}
            value={selectType}
          >
            <option value="Filter by Type">Filter by Type</option>
            <option value="Yoga" name="yoga">
              Yoga
            </option>
            <option value="Meditation" name="meditation">
              Meditation
            </option>
            <option value="Detox" name="detox">
              Detox
            </option>
          </select>
        </div>
         
         <div className="filterBySearch">
         <div className="searchField">
          <input
            value={searchTerm}
            onChange={handleSearch}
            className="searchcontainer"
            type="text"
            placeholder="Search retreats by title"
          />
         </div>
        
        </div>
      </div>
    </>
  );
};

export default Filters;
