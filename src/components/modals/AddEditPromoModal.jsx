import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {
  useSingleCommission,
  useUpdateCommission,
} from "../../hooks/useCommission";
import { Loader } from "../shared/loader/Loader";
import { useEffect, useState } from "react";
import { errorResponse } from "../../utils/handleResponse";
import {
  useCreatePromo,
  useSinglePromo,
  useUpdatePromo,
} from "../../hooks/usePromos";
import toast from "react-hot-toast";

export function AddEditPromoModal({ show, onClose, id }) {
  const { promo, isLoading } = id
    ? useSinglePromo(id)
    : { promo: null, isLoading: false };

  const { mutateAsync: updatePromo } = useUpdatePromo();
  const { mutateAsync: createPromo } = useCreatePromo();

  const [formData, setFormData] = useState({});

  const dialog = {
    title: id ? "Update Promo" : "Add Promo",
  };

  useEffect(() => {
    id && setFormData(promo);
  }, [promo]);

  const onChange = ({ target }) => {
    const { name, value } = target;
    setFormData({ ...formData, [name]: value });
  };

  const handleUpdate = async () => {
    if (!formData.discount || !formData.price || !formData.publications)
      return toast.error("Please fill all fields");
    try {
      id ? await updatePromo(formData) : createPromo(formData);
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
              <label>Discount</label>
              <input
                onChange={onChange}
                value={formData?.discount || ""}
                name='discount'
                type='number'
                min='0'
              />
            </div>
            <div className='d-flex gap-1 flex-column'>
              <label>Price</label>
              <input
                onChange={onChange}
                value={formData?.price || ""}
                name='price'
                type='number'
                min='0'
              />
            </div>
            <div className='d-flex gap-1 flex-column'>
              <label>Publications</label>
              <input
                onChange={onChange}
                value={formData?.publications || ""}
                name='publications'
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
