/* eslint-disable react/button-has-type */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Footer from '../Layout/Footer';
import Header from '../Layout/Header';

const Blog = () => {
    return (
        <>
            <div className="overlay" />
            <Header />
            <section id="content">
                <div className="subpage">
                    <div className="hero-area-container blog-hero-area">
                        <img src="img/blog-hero-area.png" />
                        <div className="hero-area">
                            <h1>BLOG</h1>
                            <div className="blog-search-area">
                                <input type="text" placeholder="Lokasyon, gezi veya hobi arayın" />
                                <button type="button">
                                    <span className="icon-search2" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="blog-menu">
                        <ul>
                            <li className="active">
                                <a href="/">
                                    <span className="icon-tumu" />
                                    Tümü
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <span className="icon-fly2" />
                                    Seyahat
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <span className="icon-gurme" />
                                    Gurme
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <span className="icon-like" />
                                    Sağlık
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <span className="icon-smile" />
                                    Yaşam
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <span className="icon-filtre" />
                                    Video Galeri
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="secondary-blog-container">
                        <div className="secondary-blog">
                            <h4>BLOG</h4>
                            <h2>TÜM YAZILAR</h2>
                            <div className="row">
                                <div className="col-12 col-lg-8">
                                    <div className="secondary-blog-item secondary-blog-item--highlight">
                                        <div className="secondary-blog-image">
                                            <img src="img/secondary-blog.jpg" />
                                        </div>
                                        <div className="secondary-blog-details">
                                            <span
                                                className="blog-category"
                                                style={{ backgroundColor: '#ffbe04' }}
                                            >
                                                YOLCU KOLTUĞU
                                            </span>
                                            <h3>Picasso, Gaudi ve Miro’nun Buluştuğu Şehir</h3>
                                            <p>
                                                Lorem ipsum dolor sit amet dolores no preblama so
                                                uno loraine. Lorem ipsum dolor sit amet dolores no
                                                preb lama so uno loraine. Lorem ipsum dolor sit
                                                amet.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-4">
                                    <div className="secondary-blog-item">
                                        <div className="secondary-blog-image">
                                            <img src="img/secondary-blog.jpg" />
                                            <span
                                                className="blog-category"
                                                style={{ backgroundColor: '#50802d' }}
                                            >
                                                DÜNYA
                                            </span>
                                        </div>
                                        <div className="secondary-blog-details">
                                            <h3>Doğanın Eşsiz Harikaları Norveç Fiyortları</h3>
                                            <p>
                                                Lorem ipsum dolor sit amet dolores no preblama so
                                                uno loraine.
                                            </p>
                                        </div>
                                        <a href="secondary-blog-item-link" />
                                    </div>
                                </div>
                                <div className="col-12 col-lg-4">
                                    <div className="secondary-blog-item">
                                        <div className="secondary-blog-image">
                                            <img src="img/secondary-blog.jpg" />
                                            <span
                                                className="blog-category"
                                                style={{ backgroundColor: '#ffbe04' }}
                                            >
                                                YOLCU KOLTUĞU
                                            </span>
                                        </div>
                                        <div className="secondary-blog-details">
                                            <h3>Doğanın Eşsiz Harikaları Norveç Fiyortları</h3>
                                            <p>
                                                Lorem ipsum dolor sit amet dolores no preblama so
                                                uno loraine.
                                            </p>
                                        </div>
                                        <a href="secondary-blog-item-link" />
                                    </div>
                                </div>
                                <div className="col-12 col-lg-4">
                                    <div className="secondary-blog-item">
                                        <div className="secondary-blog-image">
                                            <img src="img/secondary-blog.jpg" />
                                            <span
                                                className="blog-category"
                                                style={{ backgroundColor: '#cf7148' }}
                                            >
                                                ŞEREFLERDEN TARİFLER
                                            </span>
                                        </div>
                                        <div className="secondary-blog-details">
                                            <h3>Doğanın Eşsiz Harikaları Norveç Fiyortları</h3>
                                            <p>
                                                Lorem ipsum dolor sit amet dolores no preblama so
                                                uno loraine.
                                            </p>
                                        </div>
                                        <a href="secondary-blog-item-link" />
                                    </div>
                                </div>
                                <div className="col-12 col-lg-4">
                                    <div className="secondary-blog-item">
                                        <div className="secondary-blog-image">
                                            <img src="img/secondary-blog.jpg" />
                                            <span
                                                className="blog-category"
                                                style={{ backgroundColor: '#029e54' }}
                                            >
                                                DÜNYA
                                            </span>
                                        </div>
                                        <div className="secondary-blog-details">
                                            <h3>Doğanın Eşsiz Harikaları Norveç Fiyortları</h3>
                                            <p>
                                                Lorem ipsum dolor sit amet dolores no preblama so
                                                uno loraine.
                                            </p>
                                        </div>
                                        <a href="secondary-blog-item-link" />
                                    </div>
                                </div>
                                <div className="col-12 col-lg-4">
                                    <div className="secondary-blog-item">
                                        <div className="secondary-blog-image">
                                            <img src="img/secondary-blog.jpg" />
                                            <span
                                                className="blog-category"
                                                style={{ backgroundColor: '#8469a4' }}
                                            >
                                                EŞYA'NIN SIRRI
                                            </span>
                                        </div>
                                        <div className="secondary-blog-details">
                                            <h3>Doğanın Eşsiz Harikaları Norveç Fiyortları</h3>
                                            <p>
                                                Lorem ipsum dolor sit amet dolores no preblama so
                                                uno loraine.
                                            </p>
                                        </div>
                                        <a href="secondary-blog-item-link" />
                                    </div>
                                </div>
                                <div className="col-12 col-lg-4">
                                    <div className="secondary-blog-item">
                                        <div className="secondary-blog-image">
                                            <img src="img/secondary-blog.jpg" />
                                            <span
                                                className="blog-category"
                                                style={{ backgroundColor: '#ffbe04' }}
                                            >
                                                YOLCU KOLTUĞU
                                            </span>
                                        </div>
                                        <div className="secondary-blog-details">
                                            <h3>Doğanın Eşsiz Harikaları Norveç Fiyortları</h3>
                                            <p>
                                                Lorem ipsum dolor sit amet dolores no preblama so
                                                uno loraine.
                                            </p>
                                        </div>
                                        <a href="secondary-blog-item-link" />
                                    </div>
                                </div>
                                <div className="col-12 col-lg-4">
                                    <div className="secondary-blog-item">
                                        <div className="secondary-blog-image">
                                            <img src="img/secondary-blog.jpg" />
                                            <span
                                                className="blog-category"
                                                style={{ backgroundColor: '#50802d' }}
                                            >
                                                DÜNYA
                                            </span>
                                        </div>
                                        <div className="secondary-blog-details">
                                            <h3>Doğanın Eşsiz Harikaları Norveç Fiyortları</h3>
                                            <p>
                                                Lorem ipsum dolor sit amet dolores no preblama so
                                                uno loraine.
                                            </p>
                                        </div>
                                        <a href="secondary-blog-item-link" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="wings-card-container">
                        <div className="wings-card">
                            <img src="img/wings-card.png" />
                            <h2>
                                BU AYRICALIKLARDAN <br />
                                YARARLANMAK İÇİN HEMEN <br />
                                BİR WİNGS SAHİBİ OLUN!
                            </h2>
                            <a href="/" className="btn btn--secondary">
                                HEMEN BAŞVUR
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Blog;
