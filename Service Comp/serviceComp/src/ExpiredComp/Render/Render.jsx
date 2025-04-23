import React, { useEffect, useState } from 'react';
import 'axios';
import axios from 'axios';
import './Render.css';

export default function Render() {
  const [img, setImg] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    async function api() {
      const data = await axios.get(
        `https://picsum.photos/v2/list?page=${page}&limit=8`,
      );

      setImg((pre) => [...pre, ...data.data]);
    }
    api();
  }, [page]);

  function loadMore() {
    setPage((pre) => pre + 1);
  }

  console.log(img);
  return (
    <div>
      {img.map((item) => (
        <div className="render-div">
          <img src={item.download_url} />
        </div>
      ))}
      <button onClick={loadMore}> Load More</button>
    </div>
  );
}
