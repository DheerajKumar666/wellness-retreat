import React, { useEffect, useState } from "react";
import Data from "./Data";
import Filters from "./Filters";
import axios from "axios";

const DisplaySortData = () => {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [perpage, setperPage] = useState([]);
  const [currentData, setCurrentData] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);

  const apiUrl = "https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats";

  let fetchData = () => {
    axios.get(apiUrl).then((response) => {
      // console.log(data);
      // console.log(response);
      console.log(response.data);
      setData(response.data);
      setFilterData(response.data);
      setperPage(response.data.slice(0, 3));
      console.log(perpage);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const currentItems = filterData?.slice(
      (currentPage - 1) * 3,
      currentPage * 3
    );
    setCurrentData(currentItems);
  }, [currentPage, filterData]);

  const handlePrevious = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, 8));
  };

  return (
    <>
      <div className="filterData">
        <Filters
          apiUrl={apiUrl}
          data={data}
          setData={setData}
          filterData={filterData}
          setFilterData={setFilterData}
        />
      </div>

      <div className="data">
        {data != null ? (
          <Data currentData={currentData} filterData={filterData} />
        ) : (
          "loading...."
        )}
      </div>

      <div className="buttonContainer">
        <button onClick={handlePrevious} disabled={currentPage === 1}>
          Previous
        </button>
        <button
          className="nextContainer"
          disabled={currentPage === 8}
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default DisplaySortData;
