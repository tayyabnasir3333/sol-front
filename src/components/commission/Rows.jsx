import React from "react";
import { SingleRow } from "./SingleRow";
import { Loader } from "../shared/loader/Loader";

export const Rows = ({ data, isLoading }) => {
  if (isLoading) return <Loader />;
  return (
    <tbody>
      {data?.map((item, i) => (
        <SingleRow key={item?._id} item={item} i={i} />
      ))}
    </tbody>
  );
};
