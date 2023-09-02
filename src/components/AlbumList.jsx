import { useFetchAlbumsQuery, useAddAlbumMutation } from "../store/index";
import AlbumListItem from "./AlbumListItem";
import Button from "./Button";
import Skeleton from "./Skeleton";
const AlbumList = ({ user }) => {
  const { data, error, isLoading } = useFetchAlbumsQuery(user);
  const [addAlbum, result] = useAddAlbumMutation();

  let content;
  if (error) {
    content = <div>Error while fetching albums</div>;
  } else if (isLoading) {
    content = <Skeleton times={2} />;
  } else {
    content = data.map((album) => {
      return <AlbumListItem key={album.id} album={album} />;
    });
  }
  const handleAddAlbum = () => {
    addAlbum(user);
  };

  return (
    <div>
      <div className="flex justify-between mb-3">
        <div>Albums for {user.name}</div>
        <div>
          <Button loading={result.isLoading} onClick={handleAddAlbum}>
            + Add Albums
          </Button>
        </div>
      </div>
      <div>{content}</div>
    </div>
  );
};

export default AlbumList;
