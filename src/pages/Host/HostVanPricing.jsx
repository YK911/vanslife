import { useOutletContext } from "react-router-dom";

function HostVanPricing() {
  const { currentVan } = useOutletContext();

  return (
    <p className="align-middle">
      <span className="fs-4">${currentVan.price}</span>
      /day
    </p>
  );
}

export default HostVanPricing;
