import React, { useState, useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules'; // Make sure Navigation is properly imported
import 'swiper/swiper-bundle.css';
import iconanimalproductsdrumsticks from '../images/icon-animal-products-drumsticks.png';
import iconbreadbaguette from '../images/icon-bread-baguette.png';
import iconbreadherbflour from '../images/icon-bread-herb-flour.png';
import iconsoftdrinksbottle from '../images/icon-soft-drinks-bottle.png';
import iconvegetablesbroccoli from '../images/icon-vegetables-broccoli.png';
import iconwineglassbottle from '../images/icon-wine-glass-bottle.png';

function newArival() {
  const [swiper, setSwiper] = useState(null);

  useEffect(() => {
    const swiperInstance = new Swiper('.category-carousel', {
      modules: [Navigation],
      slidesPerView: 3,
      spaceBetween: 30,
      navigation: true,
    });

    setSwiper(swiperInstance);

    return () => {
      swiperInstance.destroy();
    };
  }, []);

  // Access Swiper methods or conditionally render elements here (optional)

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
                  <img src={iconvegetablesbroccoli} alt="Category Thumbnail: Fruits & Veggies" />
                  <h3 className="category-title">Fruits &amp; Veges</h3>
                </a>
                <a href="#" className="nav-link category-item swiper-slide">
                  <img src={iconbreadbaguette} alt="Category Thumbnail: Breads & Sweets" />
                  <h3 className="category-title">Breads &amp; Sweets</h3>
                </a>
                <a href="#" className="nav-link category-item swiper-slide">
                  <img src={iconsoftdrinksbottle} alt="Category Thumbnail: Soft Drinks" />
                  <h3 className="category-title">Soft Drinks</h3>
                </a>
                <a href="#" className="nav-link category-item swiper-slide">
                  <img src={iconwineglassbottle} alt="Category Thumbnail: Wine" />
                  <h3 className="category-title">Wine</h3>
                </a>
                <a href="#" className="nav-link category-item swiper-slide">
                  <img src={iconanimalproductsdrumsticks} alt="Category Thumbnail: Animal Products" />
                  <h3 className="category-title">Animal Products</h3>
                </a>
                <a href="#" className="nav-link category-item swiper-slide">
                  <img src={iconbreadherbflour} alt="Category Thumbnail: Bread" />
                  <h3 className="category-title">Bread</h3>
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

export default newArival;