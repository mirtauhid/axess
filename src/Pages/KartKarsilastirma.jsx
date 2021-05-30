/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Footer from '../Layout/Footer';
import Header from '../Layout/Header';

const KartKarsilastirma = () => {
    return (
        <>
            <div className="overlay" />
            <Header />
            <section id="content" className="light-template">
                <div className="subpage">
                    <div className="hero-area-banner-container hero-area-flat">
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
                        <div className="container">
                            <div className="card-comparison-container">
                                <div className="card-comparion-mobile-scroll">
                                    <div className="card-comparison-row">
                                        <div className="card-comparison-column" />
                                        <div className="card-comparison-column">
                                            <div className="card-comparison-column-title">
                                                Wings Card
                                            </div>
                                            <div className="card-comparison-column-image">
                                                <img src="img/wings-card-01.png" />
                                            </div>
                                            <a href="/" className="card-comparison-column-link">
                                                DETAYLI BİLGİ
                                            </a>
                                        </div>
                                        <div className="card-comparison-column">
                                            <div className="card-comparison-column-title">
                                                Wings Black
                                            </div>
                                            <div className="card-comparison-column-image">
                                                <img src="img/wings-card-02.png" />
                                            </div>
                                            <a href="/" className="card-comparison-column-link">
                                                DETAYLI BİLGİ
                                            </a>
                                        </div>
                                        <div className="card-comparison-column">
                                            <div className="card-comparison-column-title">
                                                Wings Private
                                            </div>
                                            <div className="card-comparison-column-image">
                                                <img src="img/wings-card-03.png" />
                                            </div>
                                            <a href="/" className="card-comparison-column-link">
                                                DETAYLI BİLGİ
                                            </a>
                                        </div>
                                    </div>
                                    <div className="card-comparison-row">
                                        <div className="card-comparison-column">Avans Mil</div>
                                        <div
                                            className="card-comparison-column"
                                            data-label="Avans Mil"
                                        >
                                            Max. 100.000 Mil
                                        </div>
                                        <div
                                            className="card-comparison-column"
                                            data-label="Avans Mil"
                                        >
                                            Max. 200.000 Mil
                                        </div>
                                        <div
                                            className="card-comparison-column"
                                            data-label="Avans Mil"
                                        >
                                            Max. 300.000 Mil
                                        </div>
                                    </div>
                                    <div className="card-comparison-row">
                                        <div className="card-comparison-column">
                                            Seyehat / Restoran ve Yurt Dışında Ekstra Mil Kazanımı
                                        </div>
                                        <div
                                            className="card-comparison-column"
                                            data-label="Seyehat / Restoran ve Yurt Dışında Ekstra Mil Kazanımı"
                                        >
                                            %15
                                        </div>
                                        <div
                                            className="card-comparison-column"
                                            data-label="Seyehat / Restoran ve Yurt Dışında Ekstra Mil Kazanımı"
                                        >
                                            %30
                                        </div>
                                        <div
                                            className="card-comparison-column"
                                            data-label="Seyehat / Restoran ve Yurt Dışında Ekstra Mil Kazanımı"
                                        >
                                            %40
                                        </div>
                                    </div>
                                    <div className="card-comparison-row">
                                        <div className="card-comparison-column">
                                            Seyahat Hizmetleri
                                        </div>
                                        <div
                                            className="card-comparison-column"
                                            data-label="Seyahat Hizmetleri"
                                        >
                                            <span className="icon-tick-2" />
                                        </div>
                                        <div
                                            className="card-comparison-column"
                                            data-label="Seyahat Hizmetleri"
                                        >
                                            <span className="icon-tick-2" />
                                        </div>
                                        <div
                                            className="card-comparison-column"
                                            data-label="Seyahat Hizmetleri"
                                        >
                                            <span className="icon-tick-2" />
                                        </div>
                                    </div>
                                    <div className="card-comparison-row">
                                        <div className="card-comparison-column">
                                            Seyahat Sağlık Sigortası
                                        </div>
                                        <div
                                            className="card-comparison-column"
                                            data-label="Seyahat Sağlık Sigortası"
                                        >
                                            Yurt içinde geçerli
                                        </div>
                                        <div
                                            className="card-comparison-column"
                                            data-label="Seyahat Sağlık Sigortası"
                                        >
                                            Yurt içinde geçerli
                                        </div>
                                        <div
                                            className="card-comparison-column"
                                            data-label="Seyahat Sağlık Sigortası"
                                        >
                                            Yurt içi ve yurt dışında geçerli
                                        </div>
                                    </div>
                                    <div className="card-comparison-row">
                                        <div className="card-comparison-column">
                                            Havalimanında İndirimli Vale Parking
                                        </div>
                                        <div
                                            className="card-comparison-column"
                                            data-label="Havalimanında İndirimli Vale Parking"
                                        >
                                            <span className="icon-cross" />
                                        </div>
                                        <div
                                            className="card-comparison-column"
                                            data-label="Havalimanında İndirimli Vale Parking"
                                        >
                                            <span className="icon-tick-2" />
                                        </div>
                                        <div
                                            className="card-comparison-column"
                                            data-label="Havalimanında İndirimli Vale Parking"
                                        >
                                            <span className="icon-tick-2" />
                                        </div>
                                    </div>
                                    <div className="card-comparison-row">
                                        <div className="card-comparison-column">
                                            Araç Kiralama Sigortası
                                        </div>
                                        <div
                                            className="card-comparison-column"
                                            data-label="Araç Kiralama Sigortası"
                                        >
                                            <span className="icon-tick-2" />
                                        </div>
                                        <div
                                            className="card-comparison-column"
                                            data-label="Araç Kiralama Sigortası"
                                        >
                                            <span className="icon-tick-2" />
                                        </div>
                                        <div
                                            className="card-comparison-column"
                                            data-label="Araç Kiralama Sigortası"
                                        >
                                            <span className="icon-tick-2" />
                                        </div>
                                    </div>
                                    <div className="card-comparison-row">
                                        <div className="card-comparison-column">
                                            Lounge Giriş Hizmeti
                                        </div>
                                        <div
                                            className="card-comparison-column"
                                            data-label="Lounge Giriş Hizmeti"
                                        >
                                            <span className="icon-cross" />
                                        </div>
                                        <div
                                            className="card-comparison-column"
                                            data-label="Lounge Giriş Hizmeti"
                                        >
                                            <span className="icon-cross" />
                                        </div>
                                        <div
                                            className="card-comparison-column"
                                            data-label="Lounge Giriş Hizmeti"
                                        >
                                            <span className="icon-tick-2" />
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

export default KartKarsilastirma;
