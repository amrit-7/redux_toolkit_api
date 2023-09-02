import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, postUsers } from "../store";
import { useEffect } from "react";
import Skeleton from "./Skeleton";
import Button from "./Button";
import useThunk from "../hooks/useThunk";
import UserListItem from "./UserListItem";

const UsersList = () => {
  const [fetchingUsers, isFetchingUsers, fetchingError] = useThunk(fetchUsers);
  const [createUsers, isCreatingUsers, creatingError] = useThunk(postUsers);

  const { data } = useSelector((state) => {
    return state.users;
  });

  const dispatch = useDispatch();
  useEffect(() => {
    fetchingUsers();
  }, []);

  const handleAddUser = () => {
    createUsers();
  };
  let content;

  if (isFetchingUsers) {
    content = <Skeleton times={5} className="h-10 w-full" />;
  } else if (fetchingError) {
    content = <div>Error while fetching data..</div>;
  } else {
    content = data.map((user, index) => {
      return <UserListItem key={index} user={user} />;
    });
  }

  return (
    <div>
      <div className="flex flex-row justify-between m-3">
        <h2 className="m-2 text-xl">Users</h2>
        <Button loading={isCreatingUsers} onClick={handleAddUser}>
          + Add User
        </Button>
      </div>
      {content}
    </div>
  );
};

export default UsersList;
