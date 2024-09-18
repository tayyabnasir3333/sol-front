import { React, useState, useEffect } from "react";
import {
  useDeleteAdvertisement,
  useUpdateAdvertisement,
} from "../../hooks/useAdvertisement";
import { ConfirmModal } from "../../components/modals/ConfirmModal";
import { ViewModal } from "../../components/modals/ViewModal";
import { TransactionViewModal } from "../../components/modals/TransactionViewModal";

function SingleRow({ item, i }) {
  // console.log("Posts", item);
  const [showDelete, setShowDelete] = useState(false);
  const [showView, setShowView] = useState(false);
  const [showTransactionView, setShowTransactionView] = useState(false);

  const { mutateAsync } = useDeleteAdvertisement();
  const { mutateAsync: updateAdvertisement } = useUpdateAdvertisement();

  const onCloseDelete = () => {
    setShowDelete(false);
  };

  const onCloseView = () => {
    setShowView(false);
  };

  const handleView = () => {
    setShowView(true);
  };

  const onCloseTransactionView = () => {
    setShowTransactionView(false);
  };

  const handleTransactionView = () => {
    setShowTransactionView(true);
  };

  const handleDelete = async () => {
    try {
      await mutateAsync(item?._id);
      onCloseDelete();
    } catch (error) {
      errorResponse(error?.response);
    }
  };

  const handleApprove = async () => {
    try {
      await updateAdvertisement({
        _id: item?._id,
        status: "Approved",
      });
    } catch (error) {
      errorResponse(error?.response);
    }
  };
  return (
    <tr key={item.id}>
      <td className='table-cell'>{item?.postIdIncremental}</td>
      <td className='table-cell'>{item?.userId?.fullName}</td>
      <td className='table-cell'>{item.status}</td>
      <td className='table-cell '>
        <div className='actions'>
          <button
            onClick={() => setShowDelete(true)}
            className='action-danger-button'
          >
            Delete
          </button>
          <button onClick={handleApprove} className='action-button'>
            Post Again
          </button>
          <button onClick={handleView} className='action-button'>
            Preview
          </button>
          <button onClick={handleTransactionView} className='action-button'>
            Tx Link
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
      {showView && (
        <ViewModal data={item} show={showView} onClose={onCloseView} />
      )}
      {showTransactionView && (
        <TransactionViewModal
          data={item}
          show={showTransactionView}
          onClose={onCloseTransactionView}
        />
      )}
    </tr>
  );
}

export default SingleRow;
