import { GoTrashcan } from "react-icons/go";
import Button from "./Button";
import { removeUsers } from "../store";
import useThunk from "../hooks/useThunk";
import { Fragment } from "react";
import ExpandabePanel from "./ExpandabePanel";
import AlbumList from "./AlbumList";
const UserListItem = ({ user }) => {
  const [doRemoveUser, isLoading, error] = useThunk(removeUsers);
  const handleDelete = () => {
    doRemoveUser(user);
  };
  const header = (
    <Fragment>
      <Button
        className="mr-3 bg-red-200 rounded"
        loading={isLoading}
        onClick={handleDelete}
      >
        <GoTrashcan />
      </Button>
      {error ? <span>Error while deleting...</span> : null}
      {user.name}
    </Fragment>
  );
  return (
    <ExpandabePanel header={header}>
      <AlbumList user={user} />
    </ExpandabePanel>
  );
};

export default UserListItem;
