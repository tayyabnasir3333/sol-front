import { useState } from "react";
import { useCreatePromo } from "../../hooks/usePromos";
import { errorResponse } from "../../utils/handleResponse";
import toast from "react-hot-toast";
import { AddEditPromoModal } from "../modals/AddEditPromoModal";

export const Header = () => {
  const { mutateAsync, isLoading } = useCreatePromo();
  const [formData, setFormData] = useState({});

  const [showUpdate, setShowUpdate] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!formData.discount || !formData.price || !formData.publications)
      return toast.error("Please fill all fields");
    try {
      await mutateAsync(formData);
      setFormData({});
    } catch (error) {}
  };

  const onChange = ({ target }) => {
    const { name, value } = target;
    setFormData({ ...formData, [name]: value });
  };

  const onCloseUpdate = () => {
    setShowUpdate(false);
  };

  return (
    <div className=' row'>
      {/* <form
        onSubmit={onSubmit}
        className='d-flex justify-content-start align-items-center'
      >
        <div className='p-3'>
          <h5>Discount</h5>
          <input
            value={formData.discount || ""}
            name='discount'
            onChange={onChange}
            type='text'
          />
        </div>
        <div className='p-3'>
          <h5>Price</h5>
          <input
            value={formData.price || ""}
            name='price'
            onChange={onChange}
            type='text'
          />
        </div>
        <div className='p-3'>
          <h5>Publications</h5>
          <input
            value={formData.publications || ""}
            name='publications'
            onChange={onChange}
            type='text'
          />
        </div>
        <button className='button-primary promo-btn'>Enter</button>
      </form> */}
      <button
        onClick={() => setShowUpdate(true)}
        className='button-primary add-new-prom'
      >
        Add New
      </button>

      {showUpdate && (
        <AddEditPromoModal
          show={showUpdate}
          onClose={onCloseUpdate}
          // id={item?._id}
        />
      )}
    </div>
  );
};
