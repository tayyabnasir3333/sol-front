import { useQuery } from "react-query";
import { serverRoutes } from "../constants/serverRoutes";
import { api } from "../axios/interceptor";

const getLevel = (userId) => {
  return api.get(`${serverRoutes.LEVELS}/${userId}`);
};

export const useGetLevel = (userId, activeTab) => {
  let level;
  const { data, isLoading } = useQuery(
    ["getLevel", level],
    () => getLevel(userId, level),
    { enabled: !!userId },
  );
  // function groupUsersByLevel(data) {
  const groupedUsers = {};
  const mainUser = data?.data?.data[0];

  data?.data?.data?.forEach((item) => {
    const level = item.level;
    if (!groupedUsers[level]) {
      groupedUsers[level] = [];
    }
    groupedUsers[level].push(item.user);
  });
  const numberOfArrays = Object.keys(groupedUsers).length;

  const newData = groupedUsers[activeTab];

  // console.log(">>>>>>>>>>>>>>>>>>>>groupedUsers", groupedUsers);
  // }
  return {
    mainUserEarn: mainUser?.user?.totalEarnings,
    user: newData,
    isLoading,
    numberOfArrays,
  };
};
