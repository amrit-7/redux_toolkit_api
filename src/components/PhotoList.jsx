import { useAddPhotosMutation, useFetchPhotosQuery } from "../store";
import Button from "./Button";
import PhotosListItem from "./PhotoListItem";
import Skeleton from "./Skeleton";

const PhotoList = ({ album }) => {
  const { data, error, isFetching } = useFetchPhotosQuery(album);
  const [addPhoto, result] = useAddPhotosMutation();

  let content;
  if (error) {
    content = <div>Error while fetching photos</div>;
  } else if (isFetching) {
    content = <Skeleton times={2} className="h-8 w-8" />;
  } else {
    content = data.map((photo) => {
      return <PhotosListItem key={photo.id} photo={photo} />;
    });
  }
  const handleAddPhotos = () => {
    addPhoto(album);
  };

  useFetchPhotosQuery(album);
  return (
    <div>
      <div className="flex justify-between mb-3">
        <div>Photos for {album.title}</div>
        <div>
          <Button loading={result.isLoading} onClick={handleAddPhotos}>
            + Add Photos
          </Button>
        </div>
      </div>
      <div className="mx-8 flex flex-row flex-wrap justify-center">
        {content}
      </div>
    </div>
  );
};

export default PhotoList;
