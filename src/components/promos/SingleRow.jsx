import { useState } from "react";
import { useDeletePromo, useUpdatePromo } from "../../hooks/usePromos";
import { AddEditPromoModal } from "../modals/AddEditPromoModal";
import { ConfirmModal } from "../modals/ConfirmModal";

export const SingleRow = ({ item, i }) => {
  const { mutateAsync } = useDeletePromo();
  const { mutateAsync: updatePromo } = useUpdatePromo();

  const [showDelete, setShowDelete] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);
  const onCloseDelete = () => {
    setShowDelete(false);
  };
  const onCloseUpdate = () => {
    setShowUpdate(false);
  };

  const handleDelete = async () => {
    try {
      await mutateAsync(item?._id);
      onCloseDelete();
    } catch (error) {
      errorResponse(error?.response);
    }
  };

  const handlePause = async () => {
    try {
      await updatePromo({
        _id: item._id,
        price: item.price,
        isPaused: !item.isPaused,
        status: item.isPaused,
      });
    } catch (error) {
      console.error("Error while pausing promo:", error);
    }
  };
  return (
    <tr key={item.id}>
      <td className='table-cell'>{i + 1}</td>
      {/* <td className='table-cell'>{item.discount}</td> */}
      <td className='table-cell'>{item.publications}</td>
      <td className='table-cell'>{item.price} $SOL</td>
      <td className='table-cell'>
        {item.isPaused == true ? "Inactive" : "Active"}
      </td>
      <td className='table-cell'>
        <div className='actions'>
          <button onClick={() => setShowUpdate(true)} className='action-button'>
            Edit
          </button>
          <button
            onClick={() => setShowDelete(true)}
            className='action-danger-button'
          >
            Delete
          </button>
          <button onClick={handlePause} className='action-danger-button'>
            {item.isPaused ? "Resume" : "Pause"}
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
      {showUpdate && (
        <AddEditPromoModal
          show={showUpdate}
          onClose={onCloseUpdate}
          id={item?._id}
        />
      )}
    </tr>
  );
};
