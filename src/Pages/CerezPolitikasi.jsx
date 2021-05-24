/* eslint-disable react/button-has-type */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

const CerezPolitikasi = () => {
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
                    <div className="hero-area-banner-container hero-area--standart">
                        <div className="hero-area-banner-image">
                            <img src="img/cerez-politikasi.jpg" />
                        </div>
                    </div>
                    <div className="subpage-container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                                <h1>ÇEREZ POLİTİKASI</h1>
                                <p>
                                    Gizliliğiniz bizim için önemlidir, gizlilik ve güvenlik
                                    haklarınız temel prensibimizdir. Müşterilerimizin kişisel
                                    bilgilerinin gizliliğini korumak amacıyla bankamız sistem ve
                                    internet altyapısı en güvenilir seviyede tutularak gerekli
                                    önlemler alınmıştır.
                                </p>
                                <p>
                                    Web sitemize şahsi herhangi bir bilgi vermeden ziyaret edebilir,
                                    ürünlerimiz ve servislerimiz hakkında bilgi alarak
                                    ihtiyaçlarınızı karşılayabilirsiniz. Ziyaretlerde site
                                    kullanımına ilişkin bilgi toplamak için çerez kullanılmaktadır.
                                    Buradaki amacımız; web sitemizi ziyaret eden kullanıcıya
                                    kolaylık sağlamak ve işleyişi daha iyiye nasıl
                                    taşıyabileceğimizi anlamaktır.
                                </p>
                                <p>
                                    Çerez, bir web sitesini ziyaret ettiğinizde bilgisayarınıza
                                    gönderilen ve bir dizi karakter içeren küçük bir dosyadır.
                                    Çerezler bir web sitesinin daha kullanıcı dostu deneyim
                                    sunmasını amaçlar. Kişisel ihtiyaçlarınıza daha uygun ve hızlı
                                    bir ziyaret deneyimi yaşatmak için kişiselleştirilmiş web
                                    sayfaları sunulabilmesine olanak vermektedir. Çerezler
                                    bilgisayarınızda veya dosyalarınızda depolanan kişisel
                                    verileriniz de dahil herhangi bir bilgi toplayamamaktadır.
                                </p>
                                <p>
                                    Geçerlilik sürelerine göre Kalıcı Çerez ve Geçici Çerez olarak
                                    iki çerez tipi bulunmaktadır. Geçici çerezler internet sitesini
                                    ziyaret ettiğiniz esnada oluşturulur ve sadece tarayıcınızı
                                    kapatıncaya kadar geçerlidirler. Kalıcı çerezler ise internet
                                    sitesini ziyaret ettiğinizde oluşturulur ve siz silinceye veya
                                    süreleri doluncaya kadar kalırlar. Ayarlarınız ile uyumlu
                                    kişiselleştirilmiş bir deneyim sunma gibi işlemler yapmak için
                                    kalıcı çerezler kullanılırlar.
                                </p>
                                <p>
                                    Web sitemiz geçici ve kalıcı tip çerezleri, sizi web sitemizin
                                    diğer kullanıcılarından ayırt etmek ilgi alanlarınıza ve
                                    tercihlerinize göre düzenleme yapmak için kullanılmaktadır.
                                    Akbank tarafından tasarlanmış çerezlerin yanı sıra üçüncü
                                    taraflardan alınan hizmetler kapsamında da çerez
                                    kullanılabilmektedir.
                                </p>
                                <p>
                                    Hemen hemen tüm internet tarayıcıları, çerezleri otomatik olarak
                                    kabul edecek şekilde ön tanımlıdır. Ancak çerezleri dilediğiniz
                                    gibi kontrol edebilir veya silebilirsiniz. Çerezleri yönetmek
                                    tarayıcıdan tarayıcıya farklılık gösterdiğinden ayrıntılı bilgi
                                    almak için tarayıcının yardım menüsüne bakılabilirsiniz.
                                </p>
                                <h4>Çerez nedir?</h4>
                                <p>
                                    Çerez, bir siteyi ziyaret ettiğinizde sitenin bilgisayarınıza
                                    veya mobil cihazınıza kaydettiği küçük boyutlu bir metin
                                    dosyasıdır. Çerezler bir web sitesinin çalışması veya daha
                                    verimli çalışması veya web sitesinin sahiplerine bilgi sağlamak
                                    için yaygın olarak kullanılmaktadır.
                                </p>
                                <h4>Çerezleri nasıl kullanıyoruz?</h4>
                                <p>
                                    Bilgisayarınıza yüklenen çerezler veya elde edilen bilgiler
                                    istatiksel analizler veya güvenlik önlemleri için
                                    kullanılmaktadır. Herhangi bir kişisel veriniz çerezler
                                    aracılığı ile toplanmamaktadır.
                                </p>
                                <h4>Çerezleri nasıl kontrol edebilirsiniz?</h4>
                                <p>
                                    Çerezleri dilediğiniz gibi kontrol edebilir veya silebilirsiniz.
                                    Bilgisayarınızda halihazırda bulunan çerezleri silebilir ve çoğu
                                    Internet gezgininde çerez kaydedilmesini/yerleştirilmesini
                                    engelleyebilirsiniz.
                                </p>
                                <h4>Internet gezginindeki çerezleri nasıl yönetebilirsiniz?</h4>
                                <p>Çoğu Internet gezgini aşağıdakileri yapmanıza olanak tanır:</p>
                                <ul>
                                    <li>
                                        Kaydedilmiş çerezleri görüntüleme ve dilediklerinizi silme
                                    </li>
                                    <li>Üçüncü taraf çerezleri engelleme</li>
                                    <li>Belli sitelerden çerezleri engelleme</li>
                                    <li>Tüm çerezleri engelleme</li>
                                    <li>Internet gezginini kapattığınızda tüm çerezleri silme</li>
                                </ul>
                                <p>
                                    Çerezleri silmeyi tercih ederseniz ilgili web sitesindeki
                                    tercihleriniz silinecektir. Ayrıca, çerezleri tamamen
                                    engellemeyi tercih ederseniz Akbank’a ait web siteleri dahil
                                    olmak üzere birçok web sitesi düzgün çalışmayabilir.
                                </p>
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

export default CerezPolitikasi;
