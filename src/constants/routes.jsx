// import { HomePage } from "../pages/home/HomePage";
import { browserRoutes } from "./browserRoutes";
import { NotFoundPage } from "../components/shared/NotFoundPage";
import { Navbar } from "../layout/Navbar/Navbar";
import { SideBar } from "../layout/Sidebar/SideBar";
import Dashboard from "../pages/dashboard/Dashboard";
import Commission from "../pages/commission/Commission";
import PromosAndPrices from "../pages/promosAndPrices/PromosAndPrices";
import { AuthRoute } from "../auth/AuthRoute";
import { PrivateRoute } from "../auth/PrivateRoute";
import { LoginPage } from "../pages/login/LoginPage";
import { Navigate } from "react-router-dom";
import Layout from "../layout/Layout";
import Advertisement from "../pages/advertisement/Advertisement";
import ApprovePost from "../pages/approvePost/ApprovePost";
import ReportedPost from "../pages/reportedPost/ReportedPost";
import UsersPage from "../pages/usersPage/UsersPage";
import UserDegree from "../pages/userDegree/UserDegree";
import PostPage from "../pages/post/Post";
import UnpaidCommission from "../pages/unpaidCommission/UnpaidCommission";
import PaidCommission from "../pages/paidCommission/PaidCommission";

export const routes = [
  {
    path: browserRoutes.LOGIN,
    element: (
      <AuthRoute redirectLink={browserRoutes.HOME}>
        <LoginPage />
      </AuthRoute>
    ),
  },
  {
    path: browserRoutes.HOME,
    element: <Navigate to={browserRoutes.DASHBOARD} />,
  },
  {
    path: browserRoutes.DASHBOARD,
    element: (
      <PrivateRoute>
        <Layout />
      </PrivateRoute>
    ),
    children: [
      {
        path: browserRoutes.DASHBOARD,
        element: <Dashboard />,
      },
      {
        path: browserRoutes.PROMO_AND_PRICE,
        element: <PromosAndPrices />,
      },
      {
        path: browserRoutes.COMMISSION,
        element: <Commission />,
      },
      {
        path: browserRoutes.ADVERTISEMENT,
        element: <Advertisement />,
      },
      {
        path: browserRoutes.POSTS,
        element: <PostPage />,
      },
      {
        path: browserRoutes.APPROVE_POST,
        element: <ApprovePost />,
      },
      {
        path: browserRoutes.REPORTED_POST,
        element: <ReportedPost />,
      },
      {
        path: browserRoutes.USERS,
        element: <UsersPage />,
      },
      {
        path: `${browserRoutes.USERS}/:id`,
        element: <UserDegree />,
      },
      {
        path: browserRoutes.UNPAID_COMMISSIONS,
        element: <UnpaidCommission />,
      },
      {
        path: browserRoutes.PAID_COMMISSIONS,
        element: <PaidCommission />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
];
