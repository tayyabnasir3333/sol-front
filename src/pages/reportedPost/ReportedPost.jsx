import React from "react";
import "./ReportedPost.css";
import Column from "./Column";
import { useAdvertisement } from "../../hooks/useAdvertisement";
import Rows from "./Rows";

function ReportedPost() {
  const { advertisement, isLoading } = useAdvertisement("Rejected");

  return (
    <div className='main-container'>
      <h4 style={{ marginLeft: "17px", marginTop: "10px" }}>Reported Posts</h4>
      <div className='responsive-table-container'>
        <table className='custom-table'>
          <Column />
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

export default ReportedPost;
