import { useState } from "react";
import { useCreateCommission } from "../../hooks/useCommission";
import toast from "react-hot-toast";
import { errorResponse } from "../../utils/handleResponse";

export const Header = () => {
  const { mutateAsync, isLoading } = useCreateCommission();
  const [formData, setFormData] = useState({});
  const onSubmit = async (e) => {
    e.preventDefault();
    if (!formData.level || !formData.commission)
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

  return (
    <div className=' row'>
      <form
        onSubmit={onSubmit}
        className='d-flex justify-content-start align-items-center'
      >
        <div className='p-3'>
          <h5>Commission Name</h5>
          <input
            value={formData.level || ""}
            name='level'
            onChange={onChange}
            type='number'
            min='0'
          />
        </div>
        <div className='p-3'>
          <h5>Commission Value</h5>
          <input
            value={formData.commission || ""}
            name='commission'
            onChange={onChange}
            type='number'
            min='0'
          />
        </div>
        <button disabled={isLoading} className='button-primary commission-btn'>
          Enter
        </button>
      </form>
    </div>
  );
};
