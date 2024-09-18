import { React, useEffect } from "react";
import "./UsersPage.css";
import { useState } from "react";
import { Columns } from "../../components/user/Columns";
import { Rows } from "../../components/user/Rows";
import { useAllUsers } from "../../hooks/useAuth";
import SendMessageModal from "../../components/modals/SendMessageModal";

function UsersPage() {
  const [selectedOption, setSelectedOption] = useState("");
  const [sortedUsers, setSortedUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showView, setShowView] = useState(false);

  const { users, isLoading } = useAllUsers();

  useEffect(() => {
    if (users && users.length > 0) {
      const sortedUsers = sortUsers(users, selectedOption);
      setSortedUsers(sortedUsers);
    }
  }, [users, selectedOption]);

  const sortUsers = (users, sortBy) => {
    switch (sortBy) {
      case "totalEarned":
        return sortByTotalEarned(users);
      // Add more cases for additional sorting options here
      default:
        return users; // Default to original order if no valid sort option
    }
  };

  const sortByTotalEarned = (users) => {
    // Calculate total earnings for each user
    const usersWithTotalEarned = users.map((user) => ({
      ...user,
      totalEarned: user.totalEarnings.reduce(
        (acc, curr) => acc + curr.earnings,
        0,
      ),
    }));
    // Sort users based on total earnings
    return usersWithTotalEarned.sort((a, b) => b.totalEarned - a.totalEarned);
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredUsers = sortedUsers.filter((user) =>
    user.fullName.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const onCloseView = () => {
    setShowView(false);
  };

  const handleView = () => {
    setShowView(true);
  };

  return (
    <div className='main-container'>
      <h4 style={{ marginLeft: "17px", marginTop: "10px" }}>Users</h4>

      <div className='p-3'>
        <div className='d-flex align-items-center gap-4'>
          <div className='d-flex align-items-center gap-2'>
            <h5>Search:</h5>
            <input
              name='discount'
              type='text'
              value={searchQuery}
              onChange={handleSearchInputChange}
            />
          </div>
          <div className='d-flex align-items-center gap-2'>
            <h5>Order By:</h5>
            <select
              className='dropdown-users'
              id='selectOption'
              value={selectedOption}
              onChange={handleOptionChange}
            >
              <option value=''>Select</option>
              <option value='totalEarned'>Total earned</option>
              {/* <option value='adsBrought'>Ads Brought</option>
              <option value='dollarsSpent'>$ Spent</option> */}
            </select>
          </div>
          <button onClick={handleView} className='button-primary-send-msg'>
            Send Message
          </button>
        </div>
      </div>
      <div className='responsive-table-container'>
        <table className='custom-table'>
          <Columns />
          <Rows data={filteredUsers} isLoading={isLoading} />
        </table>
        {showView && <SendMessageModal show={showView} onClose={onCloseView} />}
      </div>
    </div>
  );
}

export default UsersPage;
