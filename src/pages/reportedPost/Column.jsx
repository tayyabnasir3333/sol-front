import React from "react";

function Column() {
  return (
    <thead>
      <tr>
        <th style={{ width: "10%" }} className='table-header'>
          Post ID
        </th>
        <th style={{ width: "20%" }} className='table-header'>
          User
        </th>
        <th style={{ width: "20%" }} className='table-header'>
          N° of Reports
        </th>
        <th style={{ width: "20%" }} className='table-header'>
          Previous report from this User
        </th>
        <th style={{ width: "30%" }} className='table-header'>
          Actions
        </th>
      </tr>
    </thead>
  );
}

export default Column;
