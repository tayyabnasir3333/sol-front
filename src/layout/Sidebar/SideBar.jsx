import "./Sidebar.css";
import { Link } from "react-router-dom";
import { browserRoutes } from "../../constants/browserRoutes";

export const SideBar = () => {
  return (
    <div>
      <div className='sidebar d-flex flex-column'>
        <Link to={browserRoutes.HOME}>Dashboard</Link>
        {/* <Link to={browserRoutes.ADVERTISEMENT}>Advertisement</Link> */}
        <Link to={browserRoutes.COMMISSION}>Commission</Link>
        <Link to={browserRoutes.PROMO_AND_PRICE}>Promos and Prices</Link>
        <Link to={browserRoutes.POSTS}>Posts</Link>
        <Link to={browserRoutes.APPROVE_POST}>Pending Post</Link>
        {/* <Link to={browserRoutes.REPORTED_POST}>Reported Post</Link> */}
        <Link to={browserRoutes.USERS}>Users</Link>
        <Link to={browserRoutes.UNPAID_COMMISSIONS}>Unpaid Commissions</Link>
        <Link to={browserRoutes.PAID_COMMISSIONS}>Paid Commissions</Link>
      </div>
    </div>
  );
};
