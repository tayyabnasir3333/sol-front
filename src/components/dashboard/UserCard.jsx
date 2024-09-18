import Userlogo from "../../assets/user.png";
import { useAllUsers } from "../../hooks/useAuth";
import Skeleton from "../shared/skeleton/Skeleton";

export const UserCard = () => {
  const { users, isLoading } = useAllUsers();

  if (isLoading) return <Skeleton type='card' />;

  return (
    <div className='card-dashboard col-lg-2 col-md-2 d-flex align-items-center justify-content-evenly'>
      <div>
        <img className='image-dashboard-card' src={Userlogo} alt='logo' />
      </div>
      <div className='text-area'>
        <div className='heading-dashboard-card'>Total Users</div>
        <div className='number-dashboard-card'>{users?.length}</div>
      </div>
    </div>
  );
};
