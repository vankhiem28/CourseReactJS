import { createContext, useContext, useState } from "react";

const GalleryContext = createContext();

const dataImage = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1647517649508-855580038bfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1911&q=80",
    isLike: false,
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1647373939380-f474e6d116a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
    isLike: false,
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1647516058135-13143615b926?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    isLike: false,
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1603798125683-c3a62f748b62?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=381&q=80",
    isLike: false,
  },
];

const GalleryProvider = (props) => {
  const [photos, setPhoto] = useState(dataImage);
  const [cartItem, setCartItem] = useState([]);
  const [like, setLike] = useState([]);

  function toggleLike(photoId) {
    const updatePhoto = photos.map((photo) => {
      if (photo.id === photoId) {
        return {
          ...photo,
          isLike: !photo.isLike,
        };
      }
      return photo;
    });
    setPhoto(updatePhoto);
  }

  const value = [
    photos,
    setPhoto,
    cartItem,
    setCartItem,
    like,
    setLike,
    toggleLike,
  ];

  return (
    <GalleryContext.Provider value={value} {...props}></GalleryContext.Provider>
  );
};

function useGallery() {
  const context = useContext(GalleryContext);
  if (typeof context === undefined) {
    throw new Error("useGallery must be used within a GalleryProvider");
  }
  return context;
}

export { GalleryProvider, useGallery };
