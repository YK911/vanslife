import { useOutletContext } from "react-router-dom";

const HostVanPhotos = () => {
  const { currentVan } = useOutletContext();

  return (
    <div className="w-25 rounded overflow-hidden">
      <img className="img-fluid" src={currentVan.imageUrl} alt="" />
    </div>
  );
};

export default HostVanPhotos;
