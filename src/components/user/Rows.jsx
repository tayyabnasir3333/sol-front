import { Loader } from "../shared/loader/Loader";
import { SingleRow } from "./SingleRow";

export const Rows = ({ data, isLoading }) => {
  if (isLoading) return <Loader />;

  return (
    <tbody>
      {data?.map((item, i) => (
        <SingleRow item={item} i={i} />
      ))}
    </tbody>
  );
};
