/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Footer from '../Layout/Footer';
import Header from '../Layout/Header';

const KartlarMilPuan = () => {
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
                                <div className="tab-item active">
                                    <a href="/">Mil Puan</a>
                                </div>
                                <div className="tab-item">
                                    <a href="/">Merak Ettikleriniz</a>
                                </div>
                                <div className="tab-item">
                                    <a href="/">Kampanyalar</a>
                                </div>
                            </div>
                            <div className="tab-detail-container">
                                <div className="tab-detail-item">
                                    <h2>MİL PUAN</h2>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-8 offset-lg-2">
                                                <p>
                                                    Wings'inizle yapacağınız 1,5 TL alışverişten 1
                                                    Mil Puan kazanırsınız. Örneğin; yurt içinde
                                                    yapacağınız 150TL'lik bir alışverişten 100 Mil
                                                    Puan kazanırsınız.
                                                </p>
                                                <p>
                                                    Ecza, İnşaat, Konut, Kuyum, Lastik, Sigorta,
                                                    Telekom, Vergi, Belediye ve Harç, araç kiralama,
                                                    satış, servis ve yedek parça, hava, yer ve yük
                                                    nakliyecileri kurye Hizmetleri, motorlu yük
                                                    taşıyıcıları ve nakliyeciler, diş hekimliği
                                                    gereçleri, labaratuar, tıbbi, hastane teşhizat
                                                    ve gereçleri, taşımacılık hizmetleri, toptancı
                                                    mağazalar, bilgisayar bakım, tamir ve
                                                    hizmetleri, bilgisayar network ve bilgi
                                                    servisleri, bilgisayar yazılım mağazaları,
                                                    bilgisayar donanım ve yazılım, tarım ürünleri
                                                    depolama, dondurulmuş ürünler, ev eşyaları ve
                                                    depolama, ekipman, alet, mobilya, cihaz kiralama
                                                    ve leasing, kol saati, saat ve mücevher tamiri,
                                                    tarım kooperatifleri, endüstiriyel gereçler ve
                                                    diğer ticari faaliyetler sektörlerinde yapılan
                                                    her 10 TL alışveriÎten her 1 Mil Puan
                                                    kazanılabilir.
                                                </p>
                                                <p>
                                                    Yurt dışı alışverişlerinizde, yurt içine göre
                                                    %25 daha fazla Mil Puan kazanırsınız. Örneğin;
                                                    yurt dışında yapacağınız 150TL'lik bir
                                                    alışverişten 125 Mil Puan kazanırsınız.
                                                </p>
                                                <p>
                                                    Axess üye işyerlerinde Mil Puan'la birlikte aynı
                                                    anda chip-para da kazanırsınız. Mil Puan
                                                    kazanımınız chip-para kazanımınızı etkilemez.
                                                </p>
                                                <p>
                                                    Sevdikleriniz için ek kart talebinde bulunarak
                                                    ek kartınızla yapılan harcamalardan kazanılan
                                                    Mil Puanları da kendi Mil Puan hesabınızda
                                                    biriktirebilirsiniz. Böylece çok daha hızlı Mil
                                                    Puan biriktirirsiniz.
                                                </p>
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

export default KartlarMilPuan;
