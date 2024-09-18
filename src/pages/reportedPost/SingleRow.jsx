import { React, useState } from "react";
import {
  useDeleteAdvertisement,
  useUpdateAdvertisement,
} from "../../hooks/useAdvertisement";
import { ConfirmModal } from "../../components/modals/ConfirmModal";

function SingleRow(item, i) {
  // console.log(item.item);
  const [showDelete, setShowDelete] = useState(false);

  const { mutateAsync } = useDeleteAdvertisement();
  const { mutateAsync: updateAdvertisement } = useUpdateAdvertisement();

  const onCloseDelete = () => {
    setShowDelete(false);
  };

  const handleDelete = async () => {
    try {
      await mutateAsync(item?.item?._id);
      onCloseDelete();
    } catch (error) {
      errorResponse(error?.response);
    }
  };

  const handleApprove = async () => {
    try {
      await updateAdvertisement({
        _id: item?.item?._id,
        status: "Approved",
      });
    } catch (error) {
      errorResponse(error?.response);
    }
  };

  return (
    <tr key={item.id}>
      <td className='table-cell'>{item?.item?.postIdIncremental}</td>
      <td className='table-cell'>
        <button className='action-button'>
          {item?.item?.userId?.fullName}
        </button>
      </td>
      <td className='table-cell'>1</td>
      <td className='table-cell'>1</td>
      <td className='table-cell'>
        <div className='actions'>
          <button
            onClick={() => setShowDelete(true)}
            className='action-danger-button'
          >
            Delete
          </button>
          {/* <button className='action-danger-button'>Ban User</button> */}
          <button onClick={handleApprove} className='action-button'>
            Approve
          </button>
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
}

export default SingleRow;
