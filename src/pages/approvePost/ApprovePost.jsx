import { React, useState } from "react";
import { useAdvertisement } from "../../hooks/useAdvertisement";
import "./ApprovePost.css";
import Columns from "./Columns";
import Rows from "./Rows";

function ApprovePost() {
  const { advertisement, isLoading } = useAdvertisement("Not Approved");

  return (
    <div className='main-container'>
      <h4 style={{ marginLeft: "17px", marginTop: "10px" }}>Pending Posts</h4>
      <div className='responsive-table-container'>
        <table className='custom-table'>
          <Columns />
          <Rows data={advertisement} isLoading={isLoading} />
        </table>
      </div>
      {/* <div className='row'>
        <form className='d-flex justify-content-start align-items-center'>
          <div className='p-4'>
            <p>Set minimum approvals given to a user for permanent approval:</p>
            <div style={{ marginTop: "-30px" }}>
              <input
                style={{ width: "70px" }}
                placeholder='Enter'
                type='text'
              />
              <button
                style={{ marginLeft: "10px" }}
                className='button-primary promo-btn'
              >
                Set
              </button>
            </div>
          </div>
        </form>
      </div> */}
    </div>
  );
}

export default ApprovePost;
