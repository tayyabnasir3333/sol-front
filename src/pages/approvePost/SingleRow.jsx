import { React, useState } from "react";
import { ConfirmModal } from "../../components/modals/ConfirmModal";
import {
  useAlwaysApproveAdvertisement,
  useDeleteAdvertisement,
} from "../../hooks/useAdvertisement";
import { useUpdateAdvertisement } from "../../hooks/useAdvertisement";
import { TransactionViewModal } from "../../components/modals/TransactionViewModal";
import { ViewModalToken } from "../../components/modals/ViewModalToken";
import { useSelector } from "react-redux";

function SingleRow({ item, i }) {
  // console.log(item?.userId?._id);
  const [showDelete, setShowDelete] = useState(false);
  const [showTransactionView, setShowTransactionView] = useState(false);
  const [showView, setShowView] = useState(false);

  const { mutateAsync } = useDeleteAdvertisement();
  const { mutateAsync: updateAdvertisement } = useUpdateAdvertisement();
  const { mutateAsync: alwaysAppove } = useAlwaysApproveAdvertisement();

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

  const handleAlwaysApprove = async () => {
    alwaysAppove({
      userId: item?.userId?._id,
      postId: item?._id,
      isAlwaysApproved: true,
    });
  };

  const onCloseTransactionView = () => {
    setShowTransactionView(false);
  };

  const handleTransactionView = () => {
    setShowTransactionView(true);
  };

  const onCloseView = () => {
    setShowView(false);
  };

  const handleView = () => {
    setShowView(true);
  };

  return (
    <tr key={item.id}>
      <td className='table-cell'>{item?.postIdIncremental}</td>
      <td className='table-cell'>{item?.userId?.fullName}</td>
      <td className='table-cell'>{item?.approvedCount}</td>
      <td className='table-cell '>
        <div className='actions'>
          <button
            onClick={() => setShowDelete(true)}
            className='action-danger-button'
          >
            Delete
          </button>
          <button onClick={handleAlwaysApprove} className='action-button'>
            Approve Always
          </button>
          <button onClick={handleApprove} className='action-button'>
            Approve
          </button>
          <button className='action-button' onClick={handleView}>
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
      {showTransactionView && (
        <TransactionViewModal
          data={item}
          show={showTransactionView}
          onClose={onCloseTransactionView}
        />
      )}
      {showView && (
        <ViewModalToken data={item} show={showView} onClose={onCloseView} />
      )}
    </tr>
  );
}

export default SingleRow;
