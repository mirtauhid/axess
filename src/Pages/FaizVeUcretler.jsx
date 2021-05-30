/* eslint-disable react/button-has-type */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Footer from '../Layout/Footer';
import Header from '../Layout/Header';

const FaizVeUcretler = () => {
    return (
        <>
            <div className="overlay" />
            <Header />
            <section id="content" className="light-template">
                <div className="subpage">
                    <div className="hero-area-banner-container">
                        <div className="hero-area-banner">
                            <div className="hero-area-banner-content">
                                <h5>KARTLAR</h5>
                                <h1>WINGS CARD</h1>
                                <p>
                                    Harcadıkça Mil Puan ve Chip-Para kazanmanızı sağlayan Wings Card
                                    sunduğu fırsatlar ile ayrıcalıklı bir dünyanın kapısı sizin için
                                    aralanıyor.
                                </p>
                                <a href="/" className="btn btn--secondary">
                                    HEMEN BAŞVUR
                                </a>
                            </div>
                            <div className="hero-area-banner-image">
                                <img src="img/cards-detail-right-wings.png" />
                            </div>
                        </div>
                    </div>
                    <div className="card-container">
                        <div className="container-mobile">
                            <div className="tab-container">
                                <div className="tab-item">
                                    <a href="/">Kartlar</a>
                                </div>
                                <div className="tab-item">
                                    <a href="/">Wings Card Ayrıcalıkları</a>
                                </div>
                                <div className="tab-item active">
                                    <a href="/">Faiz ve Ücretler</a>
                                </div>
                            </div>
                            <div className="tab-detail-container">
                                <div className="tab-detail-item">
                                    <h2>FAİZ VE ÜCRETLER</h2>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-8 offset-lg-2">
                                                <dl className="accordion-box">
                                                    <dt className="active">Özellikler</dt>
                                                    <dd style={{ display: 'block' }}>
                                                        <div className="interest-and-fees-table">
                                                            <div className="interest-and-fees">
                                                                <div className="interest-and-fees-item">
                                                                    Kart Tipi
                                                                </div>
                                                                <div className="interest-and-fees-item">
                                                                    Wings
                                                                </div>
                                                                <div className="interest-and-fees-item">
                                                                    Wings Business
                                                                </div>
                                                            </div>
                                                            <div className="interest-and-fees">
                                                                <div className="interest-and-fees-item">
                                                                    Asıl Kart
                                                                </div>
                                                                <div className="interest-and-fees-item">
                                                                    124 TL
                                                                </div>
                                                                <div className="interest-and-fees-item">
                                                                    195 TL
                                                                </div>
                                                            </div>
                                                            <div className="interest-and-fees">
                                                                <div className="interest-and-fees-item">
                                                                    Ek Kart
                                                                </div>
                                                                <div className="interest-and-fees-item">
                                                                    62 TL
                                                                </div>
                                                                <div className="interest-and-fees-item">
                                                                    -
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </dd>
                                                </dl>
                                                <blockquote>
                                                    * Kart ücretlerine BSMV dahildir. Wings
                                                    kartların yıllık ücreti ilk kullanımınızı takip
                                                    eden 1. ayda hesap özetinize yansıtılır. Kart
                                                    ücretleri 01.03.2018 tarihinde güncellenmiştir.
                                                </blockquote>
                                                <dl className="accordion-box">
                                                    <dt className="active">Faiz Oranları</dt>
                                                    <dd style={{ display: 'block' }}>
                                                        <div className="interest-and-fees-table">
                                                            <div className="interest-and-fees">
                                                                <div className="interest-and-fees-item">
                                                                    Kart Tipi
                                                                </div>
                                                                <div className="interest-and-fees-item">
                                                                    Wings
                                                                </div>
                                                                <div className="interest-and-fees-item">
                                                                    Wings Business
                                                                </div>
                                                            </div>
                                                            <div className="interest-and-fees">
                                                                <div className="interest-and-fees-item">
                                                                    Asıl Kart
                                                                </div>
                                                                <div className="interest-and-fees-item">
                                                                    124 TL
                                                                </div>
                                                                <div className="interest-and-fees-item">
                                                                    195 TL
                                                                </div>
                                                            </div>
                                                            <div className="interest-and-fees">
                                                                <div className="interest-and-fees-item">
                                                                    Ek Kart
                                                                </div>
                                                                <div className="interest-and-fees-item">
                                                                    62 TL
                                                                </div>
                                                                <div className="interest-and-fees-item">
                                                                    -
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </dd>
                                                    <dt>İşlem Ücretleri</dt>
                                                    <dd>-----------------</dd>
                                                    <dt>Erteleme İste Peşin Faiz Tablosu</dt>
                                                    <dd>-------------</dd>
                                                    <dt>Nakit Avans Ücreti</dt>
                                                    <dd>-------------</dd>
                                                    <dt>Hızlı Para</dt>
                                                    <dd>-------------</dd>
                                                    <dt>Taksitli Avans</dt>
                                                    <dd>-------------</dd>
                                                    <dt>Nakit Avans</dt>
                                                    <dd>-------------</dd>
                                                    <dt>Taksitli Borç Transferi</dt>
                                                    <dd>-------------</dd>
                                                    <dt>Diğer Ürünler</dt>
                                                    <dd>-------------</dd>
                                                </dl>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default FaizVeUcretler;
