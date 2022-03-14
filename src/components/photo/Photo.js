import React, { useEffect, useState } from "react";
import axios from "axios";

const getPhotos = async (page) => {
  try {
    const photos = await axios.get(
      `https://picsum.photos/v2/list?page=${page}&limit=8`
    );
    return photos.data;
  } catch (err) {
    console.log(err);
  }
};

// const getPhotos2 = (page) => {
//   return axios
//     .get(`https://picsum.photos/v2/list?page=${page}&limit=8`)
//     .then((photos) => {
//       return photos.data;
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

function Photo() {
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getPhotos(page).then((data) => {
      setPhotos([...photos, ...data]);
    });
  }, [page]);

  const handleMoreButton = () => {
    setPage(page + 1);
  };

  return (
    <div>
      <div className="grid grid-cols-4 gap-5 p-5">
        {photos.map((photo) => (
          <div key={photo.id} className="p-3 bg-white shadow-sm rounded-lg">
            <img
              className="w-full h-full object-cover rounded-lg"
              src={photo.download_url}
              alt=""
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <button
          onClick={handleMoreButton}
          className="bg-blue-600 text-yellow-50 p-3 rounded-lg mb-3"
        >
          Load More
        </button>
      </div>
    </div>
  );
}

export default Photo;
