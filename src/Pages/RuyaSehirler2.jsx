/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Footer from '../Layout/Footer';
import Header from '../Layout/Header';

const RuyaSehirler2 = () => {
    return (
        <>
            <div className="overlay" />
            <Header />
            <section id="content" className="light-template">
                <div className="subpage">
                    <div className="hero-area-banner-container dream-cities-with-timer">
                        <div className="hero-area-banner">
                            <div className="hero-area-banner-content">
                                <h1>RÜYA ŞEHİRLER</h1>
                                <p>
                                    Rüya Sehir biletleri sadece 444 25 25 Akbank Telefon Sube’si
                                    <br />
                                    üzerinden satın alınabilecektir. www.gezkanatlan.com‘da
                                    <br />
                                    sunulmamaktadır.
                                </p>
                            </div>
                            <div className="dream-cities-timer">
                                <ul>
                                    <li>
                                        <div className="dream-cities-timer-item">04</div>
                                        <div className="dream-cities-timer-text">Gün</div>
                                    </li>
                                    <li>
                                        <div className="dream-cities-timer-seperator">:</div>
                                    </li>
                                    <li>
                                        <div className="dream-cities-timer-item">09</div>
                                        <div className="dream-cities-timer-text">Saat</div>
                                    </li>
                                    <li>
                                        <div className="dream-cities-timer-seperator">:</div>
                                    </li>
                                    <li>
                                        <div className="dream-cities-timer-item">44</div>
                                        <div className="dream-cities-timer-text">Dakika</div>
                                    </li>
                                    <li>
                                        <div className="dream-cities-timer-seperator">:</div>
                                    </li>
                                    <li>
                                        <div className="dream-cities-timer-item">49</div>
                                        <div className="dream-cities-timer-text">Saniye</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="subpage-container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                                <h2>KAMPANYA DETAYLARI</h2>
                                <ul>
                                    <li>Bu kampanya katılım gerektirmektedir.</li>
                                    <li>
                                        TAV Passport üyeligi Wings ve Axess Platinum sahiplerine
                                        özel ilk alımlarında %15, yenilemelerde % 20 indirim ile
                                        sunulacaktır.
                                    </li>
                                    <li>
                                        12 taksite kadar taksit imkanı da sunulacaktır. Kampanya 1
                                        Haziran 2018’e kadar geçerlidir.
                                    </li>
                                    <li>
                                        İndirim ve taksit fırsatından sadece Wings, Wings Black,
                                        Axess Platinum asıl/ek kart sahipleri faydalanabilir.
                                    </li>
                                    <li>
                                        Bir müsteri aynı anda en fazla 9 adet TAV Passport satın
                                        alabilir.
                                    </li>
                                    <li>
                                        Duty Free’deki indirimler indirim yasaklı ürünler, alkol ve
                                        tütünlü mamulleri için geçerli degildir.
                                    </li>
                                    <li>
                                        TAV Passport üyeligi Wings ve Axess Platinum sahiplerine
                                        özel ilk alımlarında %15, yenilemelerde % 20 indirim ile
                                        sunulacaktır.
                                    </li>
                                    <li>
                                        12 taksite kadar taksit imkanı da sunulacaktır. Kampanya 1
                                        Haziran 2018’e kadar geçerlidir.
                                    </li>
                                    <li>
                                        İndirim ve taksit fırsatından sadece Wings, Wings Black,
                                        Axess Platinum asıl/ek kart sahipleri faydalanabilir.
                                    </li>
                                </ul>
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

export default RuyaSehirler2;
