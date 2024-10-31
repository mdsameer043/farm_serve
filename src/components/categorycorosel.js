import React, { useState, useEffect } from 'react';
import { Navigation } from 'swiper/modules'; 
import Swiper from 'swiper';
import iconvegetablesbroccoli from '../images/icon-vegetables-broccoli.png';

import 'swiper/css';
import 'swiper/css/navigation';

function CategoryCarousel() {
  const [swiper, setSwiper] = useState(null);

  useEffect(() => {
    const swiperInstance = new Swiper('.category-carousel', {
      modules: [Navigation],
      slidesPerView: 4,
      spaceBetween: 30,
      navigation: true,
    });

    setSwiper(swiperInstance);

    return () => {
      swiperInstance.destroy();
    };
  }, []);

  return (
    <section className="py-5 overflow-hidden">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="section-header d-flex flex-wrap justify-content-between mb-5">
              <h2 className="section-title">Category</h2>
              <div className="d-flex align-items-center">
                <a href="#" className="btn-link text-decoration-none">
                  View All Categories →
                </a>
                <div className="swiper-buttons">
                  <button className="swiper-prev category-carousel-prev btn btn-yellow">❮</button>
                  <button className="swiper-next category-carousel-next btn btn-yellow">❯</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="category-carousel swiper">
              <div className="swiper-wrapper">
                <a href="#" className="nav-link category-item swiper-slide">
                  <img src={iconvegetablesbroccoli} alt="Category Thumbnail" />
                  <h3 className="category-title">Fruits &amp; Veges</h3>
                </a>
                <a href="#" className="nav-link category-item swiper-slide">
                  <img src={iconvegetablesbroccoli} alt="Category Thumbnail" />
                  <h3 className="category-title">Fruits &amp; Veges</h3>
                </a>
                <a href="#" className="nav-link category-item swiper-slide">
                  <img src={iconvegetablesbroccoli} alt="Category Thumbnail" />
                  <h3 className="category-title">Fruits &amp; Veges</h3>
                </a>
                <a href="#" className="nav-link category-item swiper-slide">
                  <img src={iconvegetablesbroccoli} alt="Category Thumbnail" />
                  <h3 className="category-title">Fruits &amp; Veges</h3>
                </a>
                <a href="#" className="nav-link category-item swiper-slide">
                  <img src={iconvegetablesbroccoli} alt="Category Thumbnail" />
                  <h3 className="category-title">Fruits &amp; Veges</h3>
                </a>
                <a href="#" className="nav-link category-item swiper-slide">
                  <img src={iconvegetablesbroccoli} alt="Category Thumbnail" />
                  <h3 className="category-title">Fruits &amp; Veges</h3>
                </a>
                {/* Add more category items here */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CategoryCarousel;


