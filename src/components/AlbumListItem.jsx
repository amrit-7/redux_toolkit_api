import React from "react";
import ExpandabePanel from "./ExpandabePanel";
import Button from "./Button";
import { GoTrashcan } from "react-icons/go";
import { useRemoveAlbumMutation } from "../store";
import PhotoList from "./PhotoList";

const AlbumListItem = ({ album }) => {
  const [removeAlbum, result] = useRemoveAlbumMutation();
  const handleDelete = () => {
    removeAlbum(album);
  };
  const header = (
    <div className="flex items-center">
      <Button onClick={handleDelete} className="me-2 bg-red-100 rounded">
        <GoTrashcan />
      </Button>
      {album.title}
    </div>
  );
  return (
    <ExpandabePanel key={album.id} header={header}>
      <PhotoList album={album} />
    </ExpandabePanel>
  );
};

export default AlbumListItem;
