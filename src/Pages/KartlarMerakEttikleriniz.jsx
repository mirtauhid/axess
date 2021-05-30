/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Footer from '../Layout/Footer';
import Header from '../Layout/Header';

const KartlarMerakEttikleriniz = () => {
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
                                    <a href="/">Kart Özellikleri</a>
                                </div>
                                <div className="tab-item">
                                    <a href="/">Faiz ve Ücretler</a>
                                </div>
                                <div className="tab-item">
                                    <a href="/">Mil Puan</a>
                                </div>
                                <div className="tab-item active">
                                    <a href="/">Merak Ettikleriniz</a>
                                </div>
                                <div className="tab-item">
                                    <a href="/">Kampanyalar</a>
                                </div>
                            </div>
                            <div className="tab-detail-container">
                                <div className="tab-detail-item">
                                    <h2>MERAK ETTİKLERİNİZ</h2>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-8 offset-lg-2">
                                                <dl className="accordion">
                                                    <dt className="active">
                                                        Wings Mil Programı nedir?
                                                    </dt>
                                                    <dd style={{ display: 'block' }}>
                                                        <p>
                                                            Wings Mil Programında alışverişlerden
                                                            Mil Puan kazanılır, Axes Üye
                                                            işyerlerinden hem Mil Puan, hem de
                                                            chip-para kazanılır. Mil Puan’larla
                                                            istenilen havayoluyla, istenilen yere,
                                                            kontenjan kısıtlaması olmadan ve alan
                                                            vergisi ödemeden bedava bilet
                                                            alınabilir. Her ay biriken chip-paralar
                                                            otomatik olarak Mil Puan'a dönüşür, daha
                                                            hızlı Mil Puan biriktirilir.
                                                        </p>
                                                    </dd>
                                                    <dt>Wings ile nasıl Mil Puan kazanırım ?</dt>
                                                    <dd>-----------</dd>
                                                    <dt>Nasıl Wings sahibi olurum?</dt>
                                                    <dd>-----------</dd>
                                                    <dt>
                                                        Wings Mil Puan'larım ile hangi havayolları
                                                        için bilet alabilirim?
                                                    </dt>
                                                    <dd>-----------</dd>
                                                    <dt>
                                                        Wings Mil Puan'larım ile bilet aldığımda
                                                        kontenjan sınırlaması var mıdır?
                                                    </dt>
                                                    <dd>-----------</dd>
                                                    <dt>
                                                        Wings Mil Puan'larım ile bilet aldığımda
                                                        alan vergisi ödemeli miyim?
                                                    </dt>
                                                    <dd>-----------</dd>
                                                    <dt>
                                                        Satın almak istediğim hizmetin karşılığı Mil
                                                        Puanı nasıl hesaplayabilirim?
                                                    </dt>
                                                    <dd>-----------</dd>
                                                    <dt>Wings ile Chip-Para kazanabilir miyim?</dt>
                                                    <dd>-----------</dd>
                                                    <dt>Chip-Para’larımı nasıl kullanabilirim?</dt>
                                                    <dd>-----------</dd>
                                                    <dt>
                                                        Wings kartım ile ilgili işlemlerim veya
                                                        bankacılık işlemlerim için ne yapmalıyım?
                                                    </dt>
                                                    <dd>-----------</dd>
                                                    <dt>
                                                        Wings Mil Programı genel kuralları nelerdir?
                                                    </dt>
                                                    <dd>-----------</dd>
                                                    <dt>
                                                        Yeterli Wings Mil Puan’ım yoksa Avans
                                                        kullanarak bilet alabilir miyim?
                                                    </dt>
                                                    <dd>-----------</dd>
                                                    <dt>
                                                        Wings Avans Mil Puan genel kuralları
                                                        nelerdir ?
                                                    </dt>
                                                    <dd>-----------</dd>
                                                    <dt>
                                                        Wings’te yıllık Mil Puan harcama sınırım
                                                        nedir?
                                                    </dt>
                                                    <dd>-----------</dd>
                                                    <dt>Ne kadar Avans Mil Puan alabilirim?</dt>
                                                    <dd>-----------</dd>
                                                    <dt>Wings Üyelik ücreti ne kadardır?</dt>
                                                    <dd>-----------</dd>
                                                    <dt>
                                                        Wings ekstre borcumu nasıl öğrenebilirim?
                                                    </dt>
                                                    <dd>-----------</dd>
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

export default KartlarMerakEttikleriniz;
