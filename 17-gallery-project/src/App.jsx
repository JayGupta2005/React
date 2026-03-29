import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [img, setImg] = useState([]);
  const [page, setPage] = useState(1);
  const getData = async () => {
  const res = await axios.get(
    `https://picsum.photos/v2/list?page=${page}&limit=5`
  );

  setImg((prev) => [...prev, ...res.data]);
  setPage(page + 1);
};

  return (
    <div className="bg-black h-screen text-white overflow-auto">
      
      <button
        className="bg-gray-400 rounded-full px-5 py-2 ml-6 mt-10 w-[95%] active:scale-95"
        onClick={getData}
      >
        Click for Images
      </button>

      <div className="flex flex-wrap gap-5 mt-5 justify-evenly">
        
        {img.map((item) => (
          <div
            key={item.id}
            className="bg-white text-black w-60 h-60 rounded-2xl overflow-hidden"
          >
            <img
              src={item.download_url}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        ))}

      </div>
    </div>
  );
};

export default App;