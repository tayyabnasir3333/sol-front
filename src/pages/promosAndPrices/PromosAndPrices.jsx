import React from "react";
import "./PromosAndPrices.css";
import { Header } from "../../components/promos/Header";
import { Columns } from "../../components/promos/Columns";
import { Rows } from "../../components/promos/Rows";
import { usePromos } from "../../hooks/usePromos";

function PromosAndPrices() {
  const { promos, isLoading } = usePromos();

  return (
    <div className='main-container'>
      <h4 style={{ marginLeft: "17px", marginTop: "10px" }}>Promos and Prices</h4>
      <Header />
      <div className='responsive-table-container'>
        <table className='custom-table'>
          <Columns />
          <Rows data={promos} isLoading={isLoading} />
        </table>
      </div>
    </div>
  );
}

export default PromosAndPrices;
