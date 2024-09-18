import React, { useEffect, useState } from "react";
import "./UserDegree.css";
import { UserColumn } from "./UserColumn";
import { UserRows } from "./UserRows";
import { useParams } from "react-router-dom";
import { useGetLevel } from "../../hooks/useLevel";

function UserDegree() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState(1);
  const { mainUserEarn, user, numberOfArrays } = useGetLevel(id, activeTab);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className='main-container'>
      <div className='buttons-usersss d-flex flex-wrap gap-1'>
        {Array.from({ length: numberOfArrays - 1 }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handleTabChange(index + 1)}
            style={{
              background: activeTab === index + 1 ? "#34495e" : "grey",
            }}
          >
            {`${index + 1}° Level Downline`}
          </button>
        ))}
      </div>

      <div>
        {numberOfArrays != 1 && (
          <div className='responsive-table-container'>
            <table className='custom-table'>
              <UserColumn activeTab={activeTab} />
              <UserRows user={user} mainUserEarn={mainUserEarn} />
            </table>
          </div>
        )}
        {numberOfArrays == 1 && (
          <div className='no-downline'>
            <h3>No downlines of that user</h3>
          </div>
        )}
      </div>
    </div>
  );
}

export default UserDegree;
