/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Footer from '../Layout/Footer';
import Header from '../Layout/Header';

const AyricaliklarHarita = () => {
    return (
        <>
            <div className="overlay" />
            <Header />
            <section id="content">
                <div className="subpage">
                    <div className="hero-area-container">
                        <img src="img/privileges-image.jpg" />
                        <div className="hero-area">
                            <h1>AYRICALIKLAR</h1>
                            <ul>
                                <li>
                                    <a href="/">ALIŞVERİŞ AYRICALIKLARI</a>
                                </li>
                                <li>
                                    <a href="/">SAĞLIK - SPOR AYRICALIKLARI</a>
                                </li>
                                <li>
                                    <a href="/">SEYEHAT AYRICALIKLARI</a>
                                </li>
                                <li>
                                    <a href="/">RESTORAN AYRICALIKLARI</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="privileges-list">
                        <div className="privileges-list-filter">
                            <div className="privileges-dropdown-filter">
                                <span className="icon-search">
                                    <span className="path1" />
                                    <span className="path2" />
                                    <span className="path3" />
                                </span>
                            </div>
                            <div className="privileges-map-buttons">
                                <a href="/" className="active">
                                    Haritada Göster
                                </a>
                                <a href="/">Panoda Göster</a>
                            </div>
                        </div>
                        <div className="privileges-map">
                            <div className="map">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3017.049014719077!2d29.388581551232082!3d40.87079853572019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cad9219b026333%3A0xa0a08196babaddab!2sAkbank%20Abm%20%C5%9Eubesi!5e0!3m2!1str!2str!4v1613493205116!5m2!1str!2str"
                                    width="100%"
                                    height={659}
                                    frameBorder={0}
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    aria-hidden="false"
                                    tabIndex={0}
                                />
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

export default AyricaliklarHarita;
