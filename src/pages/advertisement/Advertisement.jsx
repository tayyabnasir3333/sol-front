import React from "react";

function Advertisement() {
  const data = [
    { id: 1, title: "Title 1", price: "$100", publications: "20" },
    { id: 2, title: "Title 2", price: "$120", publications: "18" },
    { id: 3, title: "Title 3", price: "$90", publications: "25" },
    { id: 4, title: "Title 4", price: "$80", publications: "15" },
    { id: 5, title: "Title 5", price: "$110", publications: "22" },
    { id: 6, title: "Title 6", price: "$95", publications: "19" },
    { id: 7, title: "Title 7", price: "$130", publications: "28" },
    { id: 8, title: "Title 8", price: "$85", publications: "16" },
    { id: 9, title: "Title 9", price: "$105", publications: "24" },
    { id: 10, title: "Title 10", price: "$75", publications: "12" },
    { id: 11, title: "Title 11", price: "$115", publications: "21" },
    { id: 12, title: "Title 12", price: "$125", publications: "26" },
    { id: 13, title: "Title 13", price: "$88", publications: "17" },
    { id: 14, title: "Title 14", price: "$92", publications: "23" },
    { id: 15, title: "Title 15", price: "$78", publications: "14" },
    { id: 16, title: "Title 16", price: "$98", publications: "29" },
    { id: 17, title: "Title 17", price: "$82", publications: "13" },
    { id: 18, title: "Title 18", price: "$108", publications: "27" },
    { id: 19, title: "Title 19", price: "$94", publications: "18" },
    { id: 20, title: "Title 20", price: "$102", publications: "30" },
  ];

  return (
    <div className='main-container'>
      <h4 style={{ marginLeft: "17px", marginTop: "10px" }}>
        Advertisement Data
      </h4>
      <div className='responsive-table-container'>
        <table className='custom-table'>
          <thead>
            <tr>
              <th style={{ width: "20%" }} className='table-header'>
                No.
              </th>
              <th style={{ width: "20%" }} className='table-header'>
                Title
              </th>
              <th style={{ width: "20%" }} className='table-header'>
                Prices
              </th>
              <th style={{ width: "20%" }} className='table-header'>
                Publications
              </th>
              <th style={{ width: "20%" }} className='table-header'>
                Receipt
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td className='table-cell'>{item.id}</td>
                <td className='table-cell'>{item.title}</td>
                <td className='table-cell'>{item.price}</td>
                <td className='table-cell'>{item.publications}</td>
                <td className='table-cell'>
                  <div className='actions'>
                    <button className='action-button'>Download Receipt</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Advertisement;
