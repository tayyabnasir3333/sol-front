import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSingleAdvertisementDetailByUserId } from "../../hooks/useAdvertisement";
import { Loader } from "../shared/loader/Loader";
import { useDeleteUser, useUpdateComissionServed } from "../../hooks/useAuth";
import { ConfirmModal } from "../modals/ConfirmModal";

export const SingleRow = ({ item, i }) => {
  const [showDelete, setShowDelete] = useState(false);

  const { advertisementData, isLoading } = useSingleAdvertisementDetailByUserId(
    item._id,
  );
  const { mutateAsync } = useDeleteUser();
  const { mutateAsync: updateComissionServed } = useUpdateComissionServed();

  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/dashboard/users/${id}`);
  };

  const totalEarningsSum = item.totalEarnings?.reduce(
    (acc, curr) => acc + curr.earnings,
    0,
  );

  // Calculate date 7 days ago
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

  // Filter totalEarnings for the last seven days
  const earningsLastSevenDays = item.totalEarnings.filter(
    (entry) => new Date(entry.date) > sevenDaysAgo,
  );

  // Sum earnings for the last seven days
  const earningsLastSevenDaysSum = earningsLastSevenDays.reduce(
    (acc, curr) => acc + curr.earnings,
    0,
  );

  const onCloseDelete = () => {
    setShowDelete(false);
  };

  const handleDelete = async () => {
    try {
      await mutateAsync(item?._id);
      onCloseDelete();
    } catch (error) {
      errorResponse(error?.response);
    }
  };

  const handleUpdateCommissionServed = async () => {
    try {
      await updateComissionServed({
        _id: item._id,
        commissionServed: !item.commissionServed,
      });
    } catch (error) {
      console.error("Error while pausing promo:", error);
    }
  };

  return (
    <tr key={item.id}>
      <td className='table-cell'>
        <button onClick={() => handleClick(item._id)} className='action-button'>
          {item.fullName}
        </button>
      </td>
      <td className='table-cell'>
        <button
          onClick={handleUpdateCommissionServed}
          className='action-button'
        >
          {item.commissionServed == true ? "yes" : "no"}
        </button>
      </td>
      <td className='table-cell'>{totalEarningsSum}</td>
      <td className='table-cell'>{earningsLastSevenDaysSum}</td>
      <td className='table-cell'>{advertisementData?.nAdsBought}</td>
      <td className='table-cell'>{advertisementData?.totalSpendOnAds}</td>
      <td className='table-cell'>
        <div className='actions'>
          <button
            onClick={() => setShowDelete(true)}
            className='action-danger-button'
          >
            Delete User
          </button>
          {/* <button className='action-danger-button'>Ban</button>
          <button className='action-danger-button'>Stop Commission</button> */}
        </div>
      </td>
      {showDelete && (
        <ConfirmModal
          show={showDelete}
          onClose={onCloseDelete}
          onConfirm={handleDelete}
        />
      )}
    </tr>
  );
};
