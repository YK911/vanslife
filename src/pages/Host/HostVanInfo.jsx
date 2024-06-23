import { useOutletContext } from "react-router-dom";

function HostVanInfo() {
  const { currentVan } = useOutletContext();
  return (
    <div>
      <p>
        <strong>Name: </strong>
        {currentVan?.name}
      </p>
      <p>
        <strong>Cagegory: </strong>
        {currentVan?.type}
      </p>
      <p>
        <strong>Description: </strong>
        {currentVan?.description}
      </p>
      <p className="mb-0">
        <strong>Visibility: </strong>
        {currentVan?.visibility ? "Public" : "Private"}
      </p>
    </div>
  );
}

export default HostVanInfo;
