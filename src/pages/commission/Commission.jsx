import React from "react";
import "./Commission.css";
import { Table } from "../../components/commission/Table";
import { Header } from "../../components/commission/Header";

function Commission() {
  return (
    <div className='main-container'>
      <h4 style={{ marginLeft: "17px", marginTop: "10px" }}>
        Commission
      </h4>
      <Header />
      <div className='responsive-table-container'>
        <Table />
      </div>
    </div>
  );
}

export default Commission;
