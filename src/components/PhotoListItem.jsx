import { GoTrashcan } from "react-icons/go";
import { useRemovePhotosMutation } from "../store";
const PhotoListItem = ({ photo }) => {
  const [removePhoto, result] = useRemovePhotosMutation();
  const handleDeltePhoto = () => {
    removePhoto(photo);
  };
  return (
    <div className="relative cursor-pointer m-2">
      <img src={photo.url} className="h-20 w-20" alt="random-image" />
      <div className="absolute inset-0 flex items-center justify-center hover:bg-gray-200 opacity-0 hover:opacity-80">
        <GoTrashcan className="text-3xl" onClick={handleDeltePhoto} />
      </div>
    </div>
  );
};
export default PhotoListItem;
