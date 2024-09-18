import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {
  useSingleCommission,
  useUpdateCommission,
} from "../../hooks/useCommission";
import { Loader } from "../shared/loader/Loader";
import { useEffect, useState } from "react";
import { errorResponse } from "../../utils/handleResponse";

export function AddEditCommissionModal({ show, onClose, id }) {
  const { commission, isLoading } = useSingleCommission(id);
  const { mutateAsync: updateCommission } = useUpdateCommission();

  const [formData, setFormData] = useState({});

  const dialog = {
    title: id ? "Update Commission" : "Add Commission",
  };

  useEffect(() => {
    setFormData(commission);
  }, [commission]);

  const onChange = ({ target }) => {
    const { name, value } = target;
    setFormData({ ...formData, [name]: value });
  };

  const handleUpdate = async () => {
    try {
      await updateCommission(formData);
      onClose();
    } catch (error) {
      errorResponse(error?.response);
    }
  };

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{dialog.title}</Modal.Title>
      </Modal.Header>
      {isLoading ? (
        <Loader className='modalLoader' />
      ) : (
        <Modal.Body>
          <div className='d-flex flex-column gap-3'>
            <div className='d-flex gap-1 flex-column'>
              <label>Level</label>
              <input
                onChange={onChange}
                value={formData?.level}
                name='level'
                type='number'
                min='0'
              />
            </div>
            <div className='d-flex gap-1 flex-column'>
              <label>Commission</label>
              <input
                onChange={onChange}
                value={formData?.commission}
                name='commission'
                type='number'
                min='0'
              />
            </div>
          </div>
        </Modal.Body>
      )}
      <Modal.Footer>
        <button className='action-button' onClick={onClose}>
          Close
        </button>
        <button className='action-button' onClick={handleUpdate}>
          Save
        </button>
      </Modal.Footer>
    </Modal>
  );
}
