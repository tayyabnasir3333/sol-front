import { useCommissions } from "../../hooks/useCommission";
import { Columns } from "./Columns";
import { Rows } from "./Rows";

export const Table = () => {
  const { commissions, isLoading } = useCommissions();

  return (
    <table className='custom-table'>
      <Columns />
      <Rows data={commissions} isLoading={isLoading} />
    </table>
  );
};
