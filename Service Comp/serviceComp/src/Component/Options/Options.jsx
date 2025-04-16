import React from 'react';
import './Options.css';

import services1 from '../../assets/imgs/service-1.jpg';
import services2 from '../../assets/imgs/service-2.jpg';
import services3 from '../../assets/imgs/service-3.jpg';
import services4 from '../../assets/imgs/service-4.jpg';
import services5 from '../../assets/imgs/service-5.jpg';
import services6 from '../../assets/imgs/service-6.jpg';

const data = [
  {
    img: services1,
    name: 'Storage',
    des: 'Cumque eos in qui numquam. Aut aspernatur perferendis sed atque quia voluptas quisquam repellendus temporibus itaque officiis odit',
  },
  {
    img: services2,
    name: 'Logistic',
    des: 'Cumque eos in qui numquam. Aut aspernatur perferendis sed atque quia voluptas quisquam repellendus temporibus itaque officiis odit',
  },
  {
    img: services3,
    name: 'Cargo',
    des: 'Cumque eos in qui numquam. Aut aspernatur perferendis sed atque quia voluptas quisquam repellendus temporibus itaque officiis odit',
  },
  {
    img: services4,
    name: 'Trucking',
    des: 'Cumque eos in qui numquam. Aut aspernatur perferendis sed atque quia voluptas quisquam repellendus temporibus itaque officiis odit',
  },
  {
    img: services5,
    name: 'Packaging',
    des: 'Cumque eos in qui numquam. Aut aspernatur perferendis sed atque quia voluptas quisquam repellendus temporibus itaque officiis odit',
  },
  {
    img: services6,
    name: 'Warehousing',
    des: 'Cumque eos in qui numquam. Aut aspernatur perferendis sed atque quia voluptas quisquam repellendus temporibus itaque officiis odit',
  },
];

export default function Options() {
  return (
    <div className="option-main">
      {data.map((item, index) => (
        <div className="option-card" key={index}>
          <img src={item.img} alt={item.name} />
          <h2>{item.name}</h2>
          <h3>{item.des}</h3>
        </div>
      ))}
    </div>
  );
}
