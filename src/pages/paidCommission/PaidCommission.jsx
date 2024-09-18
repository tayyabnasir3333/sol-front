import React from "react";
import "./PaidCommission.css";
import { usepaidCommission } from "../../hooks/useAuth";
import { Loader } from "../../components/shared/loader/Loader";

function PaidCommission() {
  const { data, isLoading } = usepaidCommission();
  // console.log(data);

  if (isLoading) return <Loader />;
  return (
    <div className='main-container'>
      <h4 style={{ marginLeft: "17px", marginTop: "10px" }}>
        Paid Commissions
      </h4>
      <div className='responsive-table-container'>
        <table className='custom-table'>
          <thead>
            <tr>
              <th style={{ width: "10%" }} className='table-header'>
                Payout ID
              </th>
              <th style={{ width: "20%" }} className='table-header'>
                Total Commission
              </th>
              <th style={{ width: "20%" }} className='table-header'>
                Period
              </th>
              <th style={{ width: "30%" }} className='table-header'>
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.returnArr?.map((item, index) => (
              <tr key={item.id}>
                <td className='table-cell'>{index + 1}</td>
                <td className='table-cell'>{item.totalEarnings}</td>
                <td className='table-cell'>{item.date}</td>

                <td className='table-cell'>
                  <div className='actions'>
                    <button className='action-button'>Download</button>
                    <button className='action-button'>
                      Send Payment Alert
                    </button>
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

export default PaidCommission;
