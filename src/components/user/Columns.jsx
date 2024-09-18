export const Columns = () => {
  return (
    <thead>
      <tr>
        <th style={{ width: "10%" }} className='table-header'>
          User
        </th>
        <th style={{ width: "10%" }} className='table-header'>
          Affiliate (Yes or No)
        </th>
        <th style={{ width: "10%" }} className='table-header'>
          Total $SOL Earned
        </th>
        <th style={{ width: "10%" }} className='table-header'>
          Earned Last 7 days
        </th>
        <th style={{ width: "10%" }} className='table-header'>
          N° Ads Bought
        </th>
        <th style={{ width: "10%" }} className='table-header'>
          Total $SOL spent on Ads
        </th>
        <th style={{ width: "20%" }} className='table-header'>
          Actions
        </th>
      </tr>
    </thead>
  );
};
