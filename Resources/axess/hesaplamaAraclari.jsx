/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

const HesaplamaAraclari = () => {
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
                        <div className="container-mobile">
                            <div className="tab-container">
                                <div className="tab-item">
                                    <a href="/">Ayrıcalık Bilgileri</a>
                                </div>
                                <div className="tab-item">
                                    <a href="/">Ayrıcalık Detayları</a>
                                </div>
                                <div className="tab-item active">
                                    <a href="/">Hesaplama Araçları</a>
                                </div>
                            </div>
                            <div className="tab-detail-container">
                                <div className="tab-detail-item">
                                    <h2>KAÇ MİL PUAN KAZANIRIM?</h2>
                                    <div className="calculator-container">
                                        <div className="calculator">
                                            <div className="calculator-form">
                                                <div className="calculator-item">
                                                    <label>Ödenecek Tutar</label>
                                                    <div className="calculator-form-item">
                                                        <select>
                                                            <option value disabled selected>
                                                                Seçiniz
                                                            </option>
                                                            <option value={1000}>1.000 TL</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="calculator-item">
                                                    <label>Mevcut Taksit Sayısı</label>
                                                    <div className="calculator-form-item">
                                                        <select>
                                                            <option value disabled selected>
                                                                Seçiniz
                                                            </option>
                                                            <option value={1}>1</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="calculator-item">
                                                    <label>Eklenecek Taksit Sayısı</label>
                                                    <div className="calculator-form-item">
                                                        <select>
                                                            <option value disabled selected>
                                                                Seçiniz
                                                            </option>
                                                            <option value={1}>1</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="calculator-result">
                                                <div>
                                                    <h3>Toplam Tutar</h3>
                                                    <div className="calculated-point">
                                                        1.008,46 TL
                                                    </div>
                                                </div>
                                                <div>
                                                    <h3>Aylık Akdi Faiz Oranı</h3>
                                                    <div className="calculated-point">%1,40</div>
                                                </div>
                                                <div>
                                                    <h3>Taksit Tutarı</h3>
                                                    <div className="calculated-point">
                                                        168,04 TL
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="calculator-payment-plan-container">
                                            <a href="/" className="btn--inline">
                                                ÖDEME PLANINI GÖSTER
                                            </a>
                                            <div className="calculator-payment-plan">
                                                <h2>ÖDEME PLANI</h2>
                                                <div className="calculator-payment-plan-scroll">
                                                    <table>
                                                        <tbody>
                                                            <tr>
                                                                <th>Dönem</th>
                                                                <th>Taksit Tutarı</th>
                                                                <th>Anapara Ödemesi</th>
                                                                <th>Faiz Ödemesi</th>
                                                                <th>KKDF</th>
                                                                <th>BSMV</th>
                                                                <th>Kalan Anapara</th>
                                                            </tr>
                                                            <tr>
                                                                <td>1</td>
                                                                <td>1.766,03 TL</td>
                                                                <td>1.598,03 TL</td>
                                                                <td>140,00 TL</td>
                                                                <td>21,00 TL</td>
                                                                <td>7,00 TL</td>
                                                                <td>8.401,97 TL</td>
                                                            </tr>
                                                            <tr>
                                                                <td>1</td>
                                                                <td>1.766,03 TL</td>
                                                                <td>1.598,03 TL</td>
                                                                <td>140,00 TL</td>
                                                                <td>21,00 TL</td>
                                                                <td>7,00 TL</td>
                                                                <td>8.401,97 TL</td>
                                                            </tr>
                                                            <tr>
                                                                <td>1</td>
                                                                <td>1.766,03 TL</td>
                                                                <td>1.598,03 TL</td>
                                                                <td>140,00 TL</td>
                                                                <td>21,00 TL</td>
                                                                <td>7,00 TL</td>
                                                                <td>8.401,97 TL</td>
                                                            </tr>
                                                            <tr>
                                                                <td>1</td>
                                                                <td>1.766,03 TL</td>
                                                                <td>1.598,03 TL</td>
                                                                <td>140,00 TL</td>
                                                                <td>21,00 TL</td>
                                                                <td>7,00 TL</td>
                                                                <td>8.401,97 TL</td>
                                                            </tr>
                                                            <tr>
                                                                <td>1</td>
                                                                <td>1.766,03 TL</td>
                                                                <td>1.598,03 TL</td>
                                                                <td>140,00 TL</td>
                                                                <td>21,00 TL</td>
                                                                <td>7,00 TL</td>
                                                                <td>8.401,97 TL</td>
                                                            </tr>
                                                            <tr>
                                                                <td>1</td>
                                                                <td>1.766,03 TL</td>
                                                                <td>1.598,03 TL</td>
                                                                <td>140,00 TL</td>
                                                                <td>21,00 TL</td>
                                                                <td>7,00 TL</td>
                                                                <td>8.401,97 TL</td>
                                                            </tr>
                                                            <tr>
                                                                <td>TOPLAM</td>
                                                                <td>10.766,03 TL</td>
                                                                <td>10.598,03 TL</td>
                                                                <td>440,00 TL</td>
                                                                <td>74,00 TL</td>
                                                                <td>24,00 TL</td>
                                                                <td>0,00</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <blockquote>
                                                    *Aylık taksit tutarına KKDF ve BSMV dahildir.
                                                </blockquote>
                                            </div>
                                            <a href="/" className="btn--inline">
                                                ÖDEME PLANINI GİZLE
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
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

export default HesaplamaAraclari;
