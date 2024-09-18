export const UserColumn = ({ activeTab }) => {
  return (
    <thead>
      <tr>
        <th style={{ width: "10%" }} className='table-header'>
          Username
        </th>
        <th style={{ width: "20%" }} className='table-header'>
          Commission generated from this User
        </th>
        <th style={{ width: "20%" }} className='table-header'>
          Total commission earned from all {activeTab}° Users
        </th>
      </tr>
    </thead>
  );
};
