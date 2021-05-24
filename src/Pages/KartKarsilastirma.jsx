/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

const KartKarsilastirma = () => {
    return (
        <>
            <div className="overlay" />
            <header id="header">
                <div className="container">
                    <div className="sub-header">
                        <ul>
                            <li>
                                <a href="/">
                                    <span className="icon-card3" />
                                    Kart İşlemlerim
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <span className="icon-search2" />
                                    Ara
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="header">
                        <div className="mobile-menu-btn">
                            <a href="/">
                                <span className="icon-tumu" />
                            </a>
                            {/* Bu buton mobil menuyu acmak icindir. Mobil menuyu gorunur yapmak icin <div class="menu"> buraya active classi ekletmek gerekiyor. */}
                        </div>
                        <div className="logo">
                            <a href="/">
                                <img src="img/logo.svg" alt="Axess Wings" />
                            </a>
                        </div>
                        <div className="mobile-search-btn">
                            <a href="/">
                                <span className="icon-search2" />
                            </a>
                            {/* Bu buton mobil searchi acmak icindir. Ama bunu acmak icin yine Mobil menuyu gorunur yapmak gerekiyor. <div class="menu"> buraya active classi ekleyin. */}
                        </div>
                        <div className="menu">
                            <div className="mobile-search">
                                <div className="mobile-search-input">
                                    <input type="text" placeholder="Aranacak kelimeyi girin" />
                                    <button>
                                        <span className="icon-search2" />
                                    </button>
                                </div>
                            </div>
                            <ul>
                                <li>
                                    <a href="/">MİL PUAN</a>
                                    <div className="mega-dropdown-container">
                                        <div className="mega-dropdown-content">
                                            <div className="mega-dropdown-menu">
                                                <div className="mega-dropdown-menu-item">
                                                    <h4>MİL PUAN</h4>
                                                    <ul>
                                                        <li>
                                                            <a href="/">Kaç mil puan kazanırım?</a>
                                                        </li>
                                                        <li>
                                                            <a href="/">Kaç mil puan kazanırım?</a>
                                                        </li>
                                                        <li>
                                                            <a href="/">
                                                                Nasıl mil puan kazanırım?
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/">
                                                                Mil puanları nerede kullanabilirim?
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/">Avans mil puan</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="mega-dropdown-box">
                                                <div className="dropdown-privileges-item">
                                                    <div className="dropdown-privileges-item-content">
                                                        <a href="/">
                                                            100’DEN FAZLA <br />
                                                            KAMPANYA
                                                            <span className="icon-arrow" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="dropdown-privileges-item">
                                                    <div className="dropdown-privileges-item-content">
                                                        <a href="/">
                                                            100’DEN FAZLA <br />
                                                            KAMPANYA
                                                            <span className="icon-arrow" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="dropdown-privileges-item">
                                                    <div className="dropdown-privileges-item-content">
                                                        <a href="/">
                                                            100’DEN FAZLA <br />
                                                            KAMPANYA
                                                            <span className="icon-arrow" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="dropdown-privileges-item">
                                                    <div className="dropdown-privileges-item-content">
                                                        <a href="/">
                                                            100’DEN FAZLA <br />
                                                            KAMPANYA
                                                            <span className="icon-arrow" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mega-dropdown-info">
                                            <a href="/">
                                                Mil puanlarla ilgili daha fazla bilgi almak için
                                                tıklayınız. <span className="icon-arrow" />
                                            </a>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <a href="/">AYRICALIKLAR</a>
                                </li>
                                <li>
                                    <a href="/">KAMPANYALAR</a>
                                </li>
                                <li>
                                    <a href="/">KARTLAR</a>
                                </li>
                                <li>
                                    <a href="/">BLOG</a>
                                </li>
                            </ul>
                            <a href="/" className="btn btn--bordered-yellow">
                                AXESS MOBIL
                            </a>
                            <a href="/" className="btn btn--primary">
                                HEMEN BAŞVUR
                            </a>
                        </div>
                    </div>
                </div>
            </header>
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
            <footer id="footer">
                <div className="container">
                    <div className="footer-menu">
                        <div className="footer-menu-item">
                            <h4>
                                <a href="/">
                                    KAMPANYALAR <span className="icon-arti" />{' '}
                                    <span className="icon-sour" />
                                </a>
                            </h4>
                            <ul>
                                <li>
                                    <a href="/">Tüm Kampanyalar</a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-menu-item active">
                            <h4>
                                <a href="/">
                                    WINGS KART <span className="icon-arti" />{' '}
                                    <span className="icon-sour" />
                                </a>
                            </h4>
                            <ul>
                                <li>
                                    <a href="/">Kart Özellikleri</a>
                                </li>
                                <li>
                                    <a href="/">Faiz ve Ücretler</a>
                                </li>
                                <li>
                                    <a href="/">Kampanyalar</a>
                                </li>
                                <li>
                                    <a href="/">Mil Puan</a>
                                </li>
                                <li>
                                    <a href="/">Merak Ettikleriniz</a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-menu-item">
                            <h4>
                                <a href="/">
                                    WINGS AYRICALIKLARI <span className="icon-arti" />{' '}
                                    <span className="icon-sour" />
                                </a>
                            </h4>
                            <ul>
                                <li>
                                    <a href="/">Tüm Wings Ayrıcalıkları</a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-menu-item">
                            <h4>
                                <a href="/">
                                    MERAK ETTİKLERİNİZ <span className="icon-arti" />{' '}
                                    <span className="icon-sour" />
                                </a>
                            </h4>
                            <ul>
                                <li>
                                    <a href="/">Sıkça Sorulanlar</a>
                                </li>
                                <li>
                                    <a href="/">Bankacılık İşlemleri</a>
                                </li>
                                <li>
                                    <a href="/">Faiz ve İşlem Ücretleri</a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-menu-item">
                            <h4>
                                <a href="/">
                                    MİL PROGRAMI <span className="icon-arti" />{' '}
                                    <span className="icon-sour" />
                                </a>{' '}
                            </h4>
                            <ul>
                                <li>
                                    <a href="/">Ne Kadar Mil Puan Kazanırım?</a>
                                </li>
                                <li>
                                    <a href="/">Ne Kadar Mil Puanım Var?</a>
                                </li>
                                <li>
                                    <a href="/">Nasıl Mil Puan Kazanırım?</a>
                                </li>
                                <li>
                                    <a href="/">Mil Puanları Nerede Kullanabilirm?</a>
                                </li>
                                <li>
                                    <a href="/">Avans Mil Puan</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-contact">
                        <div className="footer-social-media">
                            <h4>BİZİ TAKİP EDİN</h4>
                            <ul>
                                <li>
                                    <a href="/">
                                        <img src="img/twitter.svg" />
                                    </a>
                                </li>
                                <li>
                                    <a href="/">
                                        <img src="img/facebook.svg" />
                                    </a>
                                </li>
                                <li>
                                    <a href="/">
                                        <img src="img/instagram.svg" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-newsletter">
                            <h4>
                                FIRSATLARI KAÇIRMAMAK İÇİN
                                <br /> E-BÜLTENİMİZE ABONE OLUN
                            </h4>
                            <div className="newsletter">
                                <form>
                                    <div className="newsletter__input">
                                        <input
                                            type="email"
                                            className="error"
                                            placeholder="E-posta adresinizi girin"
                                        />
                                        <span className="icon-warning">
                                            <span className="path1" />
                                            <span className="path2" />
                                        </span>
                                        <div className="newsletter__error-message">
                                            Lütfen geçerli bir mail adresi giriniz.
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn--primary">
                                        KAYDOL
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom-menu">
                        <ul>
                            <li>
                                <a href="/">İletişim</a>
                            </li>
                            <li>
                                <a href="/">Gizlilik Bildirimi</a>
                            </li>
                            <li>
                                <a href="/">Web Sitesi Kullanıcı Sözleşmesi</a>
                            </li>
                            <li>
                                <a href="/">Çerez Politikası</a>
                            </li>
                        </ul>
                        <div className="copyright">© 2017 Wings</div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default KartKarsilastirma;
