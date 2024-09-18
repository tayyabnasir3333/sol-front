import { React, useEffect, useState } from "react";
import { useAdvertisement } from "../../hooks/useAdvertisement";
import Columns from "./Columns";

import "./Post.css";
import Rows from "./Rows";

export default function PostPage() {
  // const [selectedOption, setSelectedOption] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const { advertisement, isLoading } = useAdvertisement("Approved");

  // const handleOptionChange = (event) => {
  //   setSelectedOption(event.target.value);
  // };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Function to filter advertisement data based on search query
  const filteredData = searchQuery
    ? advertisement.filter((item) =>
        item.postIdIncremental.toString().includes(searchQuery),
      )
    : advertisement;

  return (
    <div className='main-container'>
      <div className='p-3'>
        <div className='d-flex align-items-center gap-4'>
          <div className='d-flex align-items-center gap-2'>
            {/* <h5>Filter:</h5> */}
            {/* <select
              className='dropdown-users'
              id='selectOption'
              value={selectedOption}
              onChange={handleOptionChange}
            >
              <option value=''>Status</option>
              <option value='totalEarned'>Wait Review</option>
              <option value='adsBrought'>Approved</option>
              <option value='dollarsSpent'>Deleted</option>
            </select> */}
          </div>
          <div className='d-flex align-items-center gap-2'>
            <h5>Search:</h5>
            <input
              placeholder='By ID'
              name='discount'
              type='text'
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
        </div>
      </div>
      <h4 style={{ marginLeft: "17px", marginTop: "10px" }}>Approved Posts</h4>
      <div className='responsive-table-container'>
        <table className='custom-table'>
          <Columns />
          <Rows data={filteredData} isLoading={isLoading} />
        </table>
      </div>
    </div>
  );
}
