/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Footer from '../Layout/Footer';
import Header from '../Layout/Header';

const KampanyalarSonuc = () => {
    return (
        <>
            <div className="overlay" />
            <Header />
            <section id="content">
                <div className="subpage">
                    <div className="hero-area-container">
                        <img src="img/privileges-image.jpg" />
                        <div className="hero-area">
                            <h1>KAMPANYALAR</h1>
                            <ul>
                                <li>
                                    <a href="/">AXESS MOBİLE ÖZEL</a>
                                </li>
                                <li>
                                    <a href="/">EKSTRA - MİL PUAN</a>
                                </li>
                                <li>
                                    <a href="/">TAKSİT</a>
                                </li>
                                <li>
                                    <a href="/">İNDİRİM</a>
                                </li>
                                <li>
                                    <a href="/">2 KAT MİL PUAN</a>
                                </li>
                                <li>
                                    <a href="/">RÜYA ŞEHİRLER</a>
                                </li>
                                <li>
                                    <a href="/">ZİBUZİ</a>
                                </li>
                                <li>
                                    <a href="/">CHIP - PARA</a>
                                </li>
                                <li>
                                    <a href="/">NAKİT İHTİYAÇLARI</a>
                                </li>
                                <li>
                                    <a href="/">TÜMÜ</a>
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
                            <div className="privileges-filter-result">
                                0 adet sonuç gösterilmektedir.
                            </div>
                        </div>
                    </div>
                    <div className="subpage-container campaign-result">
                        <span className="icon-fly2" />
                        <h5>
                            <strong>"Netd"</strong> araması için sonuç bulunamadı! :(
                        </h5>
                        <ul>
                            <li>Tüm sözcükleri doğru yazdığından emin olun.</li>
                            <li>Farklı terimlerle aramayı deneyin.</li>
                            <li>Daha genel terimlerle arama yapın.</li>
                        </ul>
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

export default KampanyalarSonuc;
