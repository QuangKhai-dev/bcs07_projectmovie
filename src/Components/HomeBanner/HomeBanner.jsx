import React, { useEffect, useState } from 'react';
import { Carousel } from 'antd';
import axios from 'axios';
import { https } from '../../services/config';
import { movieServ } from '../../services/movieServices';

const contentStyle = {
  margin: 0,
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const HomeBanner = () => {
  const [banner, setBanner] = useState([]);
  const getAllBanner = async () => {
    const res = await movieServ.getAllBanner();
    console.log(res);
    setBanner(res.data.content);
  };

  useEffect(() => {
    getAllBanner();
  }, []);

  const arr1 = [
    { name: 'a', id: 1 },
    { name: 'b', id: 2 },
  ];
  const arr2 = arr1.map((item, index) => {
    const { name, ...newObj } = item;
    return { ...newObj, title: name };
  });

  return (
    <Carousel>
      {banner.map((banner, index) => {
        return (
          <div key={index} className="h-70vh">
            <img
              className="w-full h-full object-cover"
              src={banner.hinhAnh}
              alt=""
            />
          </div>
        );
      })}
    </Carousel>
  );
};

export default HomeBanner;
