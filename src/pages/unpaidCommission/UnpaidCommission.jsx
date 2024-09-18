import { React, useState, useEffect } from "react";
import "./UnpaidCommission.css";
import { usePayTheCommission, useWalletUsersAmount } from "../../hooks/useAuth";
import { Loader } from "../../components/shared/loader/Loader";

function UnpaidCommission() {
  const { data, isLoading } = useWalletUsersAmount();
  const { mutate } = usePayTheCommission();

  console.log(data);
  const [currentDate, setCurrentDate] = useState("");
  const [latPaymentDate, setLastPaymentDate] = useState("");

  const link = data?.link;

  const handlepayTheCommission = (returnArr) => {
    mutate({
      returnArr: returnArr,
    });
  };

  useEffect(() => {
    const dateObj = new Date();
    const options = { month: "long", day: "numeric", year: "numeric" };
    setCurrentDate(dateObj.toLocaleDateString("en-US", options));
  }, []);

  useEffect(() => {
    if (data && data.paymentDate) {
      // Check if data.paymentDate is a string and convert it to a Date object
      const paymentDate =
        typeof data.paymentDate === "string"
          ? new Date(data.paymentDate)
          : data.paymentDate;

      if (paymentDate instanceof Date && !isNaN(paymentDate)) {
        const options = { month: "long", day: "numeric", year: "numeric" };
        setLastPaymentDate(paymentDate.toLocaleDateString("en-US", options));
      }
    }
  }, [data]);

  if (isLoading) return <Loader />;
  return (
    <div className='main-container'>
      <h4 style={{ marginLeft: "17px", marginTop: "10px" }}>
        Unpaid Commissions
      </h4>

      <div className='row align-with-table'>
        <div className=' d-flex align-items-center justify-content-between'>
          <div className='p-1'>Date: {currentDate}</div>
          <div className='p-1'>Last Payment: {latPaymentDate}</div>
        </div>
      </div>
      <div className='responsive-table-container'>
        <table className='custom-table'>
          <thead>
            <tr>
              <th style={{ width: "50%" }} className='table-header'>
                Wallet
              </th>
              <th style={{ width: "25%" }} className='table-header'>
                Amount
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.returnArr?.map((item) => (
              <tr key={item?.earningId}>
                <td className='table-cell'>{item?.wallet}</td>
                <td className='table-cell'>{item?.totalEarnings}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className='row align-with-table d-flex justify-content-center'>
        {data?.returnArr && data?.returnArr.length > 0 && link && (
          <>
            <button className='button-primary-download mt-4'>
              <a style={{ textDecoration: "none", color: "white" }} href={link}>
                Download CVS
              </a>
            </button>
            <button
              className='button-primary-download mt-4'
              style={{ marginLeft: "10px" }}
              onClick={() => handlepayTheCommission(data?.returnArr)}
            >
              Pay Commission
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default UnpaidCommission;
