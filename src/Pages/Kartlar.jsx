/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Footer from '../Layout/Footer';
import Header from '../Layout/Header';

const Kartlar = () => {
    return (
        <>
            <div className="overlay" />
            <Header />
            <section id="content">
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
                                <div className="tab-item active">
                                    <a href="/">Kartlar</a>
                                </div>
                                <div className="tab-item">
                                    <a href="/">Wings Card Ayrıcalıkları</a>
                                </div>
                                <div className="tab-item">
                                    <a href="/">Faiz ve Ücretler</a>
                                </div>
                            </div>
                            <div className="tab-detail-container">
                                <div className="tab-detail-item">
                                    <div className="row card-type-container">
                                        <div className="card-type-item">
                                            <div className="card-type-content">
                                                <div className="card-type-image">
                                                    <img src="img/wings-card-01.png" />
                                                </div>
                                                <div className="card-type-features">
                                                    <h4>WINGS</h4>
                                                    <ul>
                                                        <li>
                                                            <span className="icon-person" />
                                                            Bireysel Müşteriler İçin
                                                        </li>
                                                        <li>
                                                            <span className="icon-car" />
                                                            Zorlu Center’da Ücretsiz Vale
                                                        </li>
                                                        <li>
                                                            <span className="icon-star" />
                                                            132 Markada Kampanya
                                                        </li>
                                                        <li>
                                                            <span className="icon-3" />
                                                            Faizsiz ve Ücretsiz 3 Taksit
                                                        </li>
                                                        <li>
                                                            <span className="icon-flight" />
                                                            Havaalanı Transferinde %10 İndirim
                                                        </li>
                                                    </ul>
                                                    <a href="/" className="btn--inline">
                                                        DETAYLARI GÖR
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-type-item">
                                            <div className="card-type-content">
                                                <div className="card-type-image">
                                                    <img src="img/wings-card-02.png" />
                                                </div>
                                                <div className="card-type-features">
                                                    <h4>WINGS BLACK</h4>
                                                    <ul>
                                                        <li>
                                                            <span className="icon-person" />
                                                            Bireysel Müşteriler İçin
                                                        </li>
                                                        <li>
                                                            <span className="icon-car" />
                                                            Zorlu Center’da Ücretsiz Vale
                                                        </li>
                                                        <li>
                                                            <span className="icon-star" />
                                                            132 Markada Kampanya
                                                        </li>
                                                        <li>
                                                            <span className="icon-3" />
                                                            Faizsiz ve Ücretsiz 3 Taksit
                                                        </li>
                                                        <li>
                                                            <span className="icon-flight" />
                                                            Havaalanı Transferinde %10 İndirim
                                                        </li>
                                                    </ul>
                                                    <a href="/" className="btn--inline">
                                                        DETAYLARI GÖR
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-type-item">
                                            <div className="card-type-content">
                                                <div className="card-type-image">
                                                    <img src="img/wings-card-03.png" />
                                                </div>
                                                <div className="card-type-features">
                                                    <h4>WINGS PRIVATE</h4>
                                                    <ul>
                                                        <li>
                                                            <span className="icon-person" />
                                                            Bireysel Müşteriler İçin
                                                        </li>
                                                        <li>
                                                            <span className="icon-car" />
                                                            Zorlu Center’da Ücretsiz Vale
                                                        </li>
                                                        <li>
                                                            <span className="icon-star" />
                                                            132 Markada Kampanya
                                                        </li>
                                                        <li>
                                                            <span className="icon-3" />
                                                            Faizsiz ve Ücretsiz 3 Taksit
                                                        </li>
                                                        <li>
                                                            <span className="icon-flight" />
                                                            Havaalanı Transferinde %10 İndirim
                                                        </li>
                                                    </ul>
                                                    <a href="/" className="btn--inline">
                                                        DETAYLARI GÖR
                                                    </a>
                                                </div>
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

export default Kartlar;
