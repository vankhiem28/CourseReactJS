import React from "react";
import { useGallery } from "../context/gallery-context";

function PhotoList() {
  const [photos, toggleLike] = useGallery();

  return (
    <React.Fragment>
      <div className="p-5 ">
        <div className="grid grid-cols-4 gap-5 ">
          {photos.length > 0 &&
            photos.map((photo) => (
              <PhotoItem key={photo.id} item={photo}></PhotoItem>
            ))}
        </div>
      </div>
    </React.Fragment>
  );
}

function PhotoItem({ item }) {
  const [, , , , , , toggleLike] = useGallery();

  return (
    <div className="relative h-[500px] group ">
      <img
        className="w-full h-full object-cover "
        src={item.url}
        alt=""
        srcset=""
      />

      <svg
        className="absolute top-2 right-2 invisible opacity-0
      group-hover:opacity-100 group-hover:visible transition-all "
        width="32"
        height="32"
        viewBox="0 0 42 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={() => toggleLike(item.id)}
      >
        <path
          d="M0.166626 11.5C0.166108 8.47984 1.37993 5.58633 3.53499 3.47045C5.69005 1.35458 8.60534 0.19405 11.625 0.249979C15.2027 0.230979 18.6166 1.74826 21 4.41665C23.3833 1.74826 26.7972 0.230979 30.375 0.249979C33.3946 0.19405 36.3099 1.35458 38.4649 3.47045C40.62 5.58633 41.8338 8.47984 41.8333 11.5C41.8333 22.6583 28.5437 31.0833 21 37.75C13.4729 31.0271 0.166626 22.6666 0.166626 11.5Z"
          fill={`${item.isLike ? "#FC2872" : "#fff"}`}
        />
      </svg>
      <button className="absolute bottom-2 left-[50%] translate-x-[-50%] w-[245px] h-[76px] bg-white text-6 rounded-lg font-semibold invisible opacity-0 group-hover:opacity-100 group-hover:visible transition-all">
        Add to card
      </button>
    </div>
  );
}

export default PhotoList;
