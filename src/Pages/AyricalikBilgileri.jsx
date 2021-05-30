/* eslint-disable no-param-reassign */
/* eslint-disable react/no-this-in-sfc */
/* eslint-disable no-plusplus */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Footer from '../Layout/Footer';
import Header from '../Layout/Header';

const AyricalikBilgileri = () => {
    return (
        <>
            <div className="overlay" />
            <Header />
            <section id="content">
                <div className="subpage">
                    <div className="subpage-content">
                        <div className="breadcrumb">
                            <ul>
                                <li className="active">
                                    <a href="/">AYRICALIKLAR</a>
                                </li>
                                <li>
                                    <a href="/">GİYİM</a>
                                </li>
                            </ul>
                        </div>
                        <div className="privileges-details">
                            <div className="row">
                                <div className="privileges-detail-image">
                                    <img src="img/ayr-cal-k-1.jpg" />
                                    <div className="wings-box-logo">
                                        <img src="img/logo.svg" />
                                    </div>
                                    <div className="wings-box-item-logo">
                                        <img src="img/privilages-logo.svg" />
                                    </div>
                                </div>
                                <div className="privileges-detail-content">
                                    <h1>Zorlu Cantinery'de %10 İndirim Ayrıcalığı</h1>
                                    <p>
                                        Tüm Lacoste magazalarında gömlek ve tisört ürünlerinde pesin
                                        fiyatına 6 taksit, Ayakkabı ürünlerinde 12 aya varan taksit
                                        imkanı
                                    </p>
                                    <a href="/" className="btn btn--bordered-blue">
                                        YOL TARİFİ AL
                                    </a>
                                </div>
                            </div>
                        </div>
                        <Router>
                            <div className="container-mobile">
                                <div className="tab-container" id="tab-container">
                                    <div className="tab-item">
                                        <Link to="/ayricalik-bilgileri">Ayrıcalık Bilgileri</Link>
                                    </div>
                                    <div className="tab-item">
                                        <Link to="/ayricalik-detayları">Ayrıcalık Detayları</Link>
                                    </div>
                                    <div className="tab-item">
                                        <Link to="/ayricalik-geçerli">Geçerli Olduğu Yerler</Link>
                                    </div>
                                </div>

                                <Switch>
                                    <Route path="/ayricalik-bilgileri">
                                        <div className="tab-detail-container">
                                            <div className="tab-detail-item">
                                                <div className="privileges-info">
                                                    <div className="privileges-info-item">
                                                        <span className="icon-calender" />
                                                        <h3>AYRICALIK GEÇERLİLİK Tarİhİ</h3>
                                                        <p>01.01.2020 - 31.12.2020</p>
                                                    </div>
                                                    <div className="privileges-info-item">
                                                        <span className="icon-profile" />
                                                        <h3>AYRICALIK GEÇERLİLİK Tarİhİ</h3>
                                                        <p>01.01.2020 - 31.12.2020</p>
                                                    </div>
                                                    <div className="privileges-info-item">
                                                        <span className="icon-card" />
                                                        <h3>AYRICALIK GEÇERLİLİK Tarİhİ</h3>
                                                        <p>01.01.2020 - 31.12.2020</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Route>
                                </Switch>

                                <Switch>
                                    <Route path="/ayricalik-detayları">
                                        <div className="tab-detail-container">
                                            <div className="tab-detail-item">
                                                <div className="readmore">
                                                    <ul className="list">
                                                        <li>
                                                            Bu kampanya katılım gerektirmektedir.
                                                        </li>
                                                        <li>
                                                            TAV Passport üyeligi Wings ve Axess
                                                            Platinum sahiplerine özel ilk
                                                            alımlarında %15, yenilemelerde % 20
                                                            indirim ile sunulacaktır.
                                                        </li>
                                                        <li>
                                                            12 taksite kadar taksit imkanı da
                                                            sunulacaktır. Kampanya 1 Haziran 2018’e
                                                            kadar geçerlidir.
                                                        </li>
                                                        <li>
                                                            İndirim ve taksit fırsatından sadece
                                                            Wings, Wings Black, Axess Platinum
                                                            asıl/ek kart sahipleri faydalanabilir.
                                                        </li>
                                                        <li>
                                                            Bir müsteri aynı anda en fazla 9 adet
                                                            TAV Passport satın alabilir.
                                                        </li>
                                                        <li>
                                                            Duty Free’deki indirimler indirim
                                                            yasaklı ürünler, alkol ve tütünlü
                                                            mamulleri için geçerli degildir.
                                                        </li>
                                                        <li>
                                                            TAV Passport üyeligi Wings ve Axess
                                                            Platinum sahiplerine özel ilk
                                                            alımlarında %15, yenilemelerde % 20
                                                            indirim ile sunulacaktır.
                                                        </li>
                                                        <li>
                                                            12 taksite kadar taksit imkanı da
                                                            sunulacaktır. Kampanya 1 Haziran 2018’e
                                                            kadar geçerlidir.
                                                        </li>
                                                        <li>
                                                            İndirim ve taksit fırsatından sadece
                                                            Wings, Wings Black, Axess Platinum
                                                            asıl/ek kart sahipleri faydalanabilir.
                                                        </li>
                                                    </ul>
                                                    <div className="readmore-button">
                                                        <a href="/">DEVAMINI OKU</a>
                                                    </div>
                                                    <div className="readmore-button hide">
                                                        <a href="/">GİZLE</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Route>
                                </Switch>

                                <Switch>
                                    <Route path="/ayricalik-geçerli">
                                        <div className="tab-detail-container">
                                            <div className="tab-detail-item">
                                                <div className="places">
                                                    <h3>İSTANBUL</h3>
                                                    <div className="places-item">
                                                        <div className="places-header">
                                                            <h4>Cantinery, Beşiktaş</h4>
                                                            <div className="working-hours">
                                                                Mağazalarımız, saat{' '}
                                                                <strong>10:00</strong> ile{' '}
                                                                <strong>21:00</strong> saatleri
                                                                arasında açıktır.
                                                            </div>
                                                        </div>
                                                        <div className="places-address">
                                                            <a href="/">
                                                                Balmumcu, Barbaros Blv. No:1, 34330,
                                                                Balmumcu, Barbaros Blv. No:1, 34330
                                                                <br />
                                                                Beşiktaş/İstanbul
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="places-item">
                                                        <div className="places-header">
                                                            <h4>Cantinery, Beşiktaş</h4>
                                                            <div className="working-hours">
                                                                Mağazalarımız, saat{' '}
                                                                <strong>10:00</strong> ile{' '}
                                                                <strong>21:00</strong> saatleri
                                                                arasında açıktır.
                                                            </div>
                                                        </div>
                                                        <div className="places-address">
                                                            <a href="/">
                                                                Balmumcu, Barbaros Blv. No:1, 34330,
                                                                Balmumcu, Barbaros Blv. No:1, 34330
                                                                <br />
                                                                Beşiktaş/İstanbul
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="places">
                                                    <h3>ANKARA</h3>
                                                    <div className="places-item">
                                                        <div className="places-header">
                                                            <h4>Cantinery, Beşiktaş</h4>
                                                            <div className="working-hours">
                                                                Mağazalarımız, saat{' '}
                                                                <strong>10:00</strong> ile{' '}
                                                                <strong>21:00</strong> saatleri
                                                                arasında açıktır.
                                                            </div>
                                                        </div>
                                                        <div className="places-address">
                                                            <a href="/">
                                                                Balmumcu, Barbaros Blv. No:1, 34330,
                                                                Balmumcu, Barbaros Blv. No:1, 34330
                                                                <br />
                                                                Beşiktaş/İstanbul
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Route>
                                </Switch>
                            </div>
                        </Router>
                    </div>

                    <div className="wings-box wings-box--logo-grey">
                        <h4>İLGİNİZİ ÇEKEBİLECEK</h4>
                        <h2>DİĞER AYRICALIKLAR</h2>
                        <div className="row">
                            <div className="wings-box-item">
                                <div className="wings-box-item-container">
                                    <div className="wings-box-item-image">
                                        <a href="/">
                                            <img src="img/ayr-cal-k-1.jpg" />
                                            <div className="wings-box-logo">
                                                <img src="img/logo.svg" />
                                            </div>
                                            <div className="wings-box-item-logo">
                                                <img src="img/privilages-logo.svg" />
                                            </div>
                                        </a>
                                    </div>
                                    <div className="wings-box-item-content">
                                        <a href="/">Wings’e Özel Network’te 50 TL Chip-Para</a>
                                        <span className="wings-box-item-category">ALIŞVERİŞ</span>
                                    </div>
                                </div>
                            </div>
                            <div className="wings-box-item">
                                <div className="wings-box-item-container">
                                    <div className="wings-box-item-image">
                                        <a href="/">
                                            <img src="img/ayr-cal-k-1.jpg" />
                                            <div className="wings-box-logo">
                                                <img src="img/logo.svg" />
                                            </div>
                                            <div className="wings-box-item-logo">
                                                <img src="img/privilages-logo.svg" />
                                            </div>
                                        </a>
                                    </div>
                                    <div className="wings-box-item-content">
                                        <a href="/">Wings’e Özel Network’te 50 TL Chip-Para</a>
                                        <span className="wings-box-item-category">ALIŞVERİŞ</span>
                                    </div>
                                </div>
                            </div>
                            <div className="wings-box-item">
                                <div className="wings-box-item-container">
                                    <div className="wings-box-item-image">
                                        <a href="/">
                                            <img src="img/ayr-cal-k-1.jpg" />
                                            <div className="wings-box-logo">
                                                <img src="img/logo.svg" />
                                            </div>
                                            <div className="wings-box-item-logo">
                                                <img src="img/privilages-logo.svg" />
                                            </div>
                                        </a>
                                    </div>
                                    <div className="wings-box-item-content">
                                        <a href="/">Wings’e Özel Network’te 50 TL Chip-Para</a>
                                        <span className="wings-box-item-category">ALIŞVERİŞ</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a href="/" className="btn btn--bordered-blue">
                            TÜMÜNÜ GÖR
                        </a>
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

export default AyricalikBilgileri;
