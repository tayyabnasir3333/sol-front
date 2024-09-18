import React from "react";
import "./Dashboard.css";
import Userlogo from "../../assets/user.png";
import { UserCard } from "../../components/dashboard/UserCard";

function Dashboard() {
  return (
    <div className='main-container'>
      <div className='row'>
        <UserCard />
        <div className='card-dashboard col-lg-2 col-md-2 d-flex align-items-center justify-content-evenly'>
          <div>
            <img className='image-dashboard-card' src={Userlogo} alt='logo' />
          </div>
          <div className='text-area'>
            <div className='heading-dashboard-card'>Total Earnings</div>
            <div className='number-dashboard-card'>23</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
