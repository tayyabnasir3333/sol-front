import { useEffect, useState } from "react";

export const UserRows = ({ mainUserEarn, user }) => {
  const [overallSum, setOverallSum] = useState();

  const calculateTotalEarnings = (userId) => {
    const userEarnings = mainUserEarn.filter(
      (earning) => earning?.userId === userId,
    );

    // console.log("user earnings --> ", userEarnings);

    const totalEarnings = userEarnings.reduce((sum, earning) => {
      const earningsValue = earning?.earnings;
      return sum + earningsValue;
    }, 0);

    return totalEarnings;
  };

  useEffect(() => {
    // Calculate overall sum when mainUserEarn or user changes
    const newOverallSum = user?.reduce(
      (sum, item) => sum + calculateTotalEarnings(item._id),
      0,
    );

    setOverallSum(newOverallSum);
  }, [mainUserEarn, user]);

  return (
    <tbody>
      {user?.map((item, index) => {
        const totalUserEarnings = calculateTotalEarnings(item._id);
        // console.log(totalUserEarnings);

        return (
          <tr key={index}>
            <td className='table-cell'>{item.fullName}</td>
            <td className='table-cell'>{totalUserEarnings} $SOL</td>
            <td className='table-cell'> {overallSum}$SOL</td>
          </tr>
        );
      })}
    </tbody>
  );
};
