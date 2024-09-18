import { useState } from "react";
import { ConfirmModal } from "../modals/ConfirmModal";
import { useDeleteCommission } from "../../hooks/useCommission";
import { errorResponse } from "../../utils/handleResponse";
import { AddEditCommissionModal } from "../modals/AddEditCommissionModal";

export const SingleRow = ({ item, i }) => {
  const { mutateAsync } = useDeleteCommission();
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

  return (
    <tr key={item.id}>
      <td className='table-cell'>{item?.level}</td>
      <td className='table-cell'>{item?.commission}</td>
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
        <AddEditCommissionModal
          show={showUpdate}
          onClose={onCloseUpdate}
          id={item?._id}
        />
      )}
    </tr>
  );
};
