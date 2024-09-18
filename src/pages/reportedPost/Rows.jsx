import { React, useState } from "react";
import SingleRow from "./SingleRow.jsx";
import { Loader } from "../../components/shared/loader/Loader";

const Rows = ({ data, isLoading }) => {
  if (isLoading) return <Loader />;
  return (
    <tbody>
      {data?.map((item, i) => (
        <SingleRow item={item} i={i} />
      ))}
    </tbody>
  );
};

export default Rows;
