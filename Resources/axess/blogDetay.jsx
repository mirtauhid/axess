/* eslint-disable react/button-has-type */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

const BlogDetay = () => {
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
                    <div className="subpage-secondary-blog-container">
                        <img className="subpage-secondary-blog-bg" src="img/blog-detay-bg.png" />
                        <span className="blog-category" style={{ backgroundColor: '#ffbe04' }}>
                            YOLCU KOLTUĞU
                        </span>
                        <div className="subpage-secondary-blog-content">
                            <h1>
                                Akdeniz'deki Karayip Adası: <br />
                                İbiza
                            </h1>
                            <p>
                                Eğlence adası olarak bilinen İbiza adasına hem deniz turizmi için
                                hem de doğal güzellikleri görmek için buraya her yıl çok sayıda kişi
                                akın ediyor.
                            </p>
                            <div className="inline-tab-container">
                                <div className="inline-tab-container-scroll">
                                    <div className="inline-tab-item active">
                                        <a href="/">Nerede Kalınır?</a>
                                    </div>
                                    <div className="inline-tab-item">
                                        <a href="/">Ne Yenilir?</a>
                                    </div>
                                    <div className="inline-tab-item">
                                        <a href="/">Gece Hayatı</a>
                                    </div>
                                    <div className="inline-tab-item">
                                        <a href="/">Ne Yapılır?</a>
                                    </div>
                                </div>
                            </div>
                            <h3>Hotel Haciende Na Xamena</h3>
                            <p>
                                Merkeze 20 dakika uzaklıktaki Haciende Na Xamena, dağların arasında
                                bir koydaki lokasyonuyla tam bir cep cenneti ve diğer tüm İbiza
                                otelleri arasında hop diye sıyrılıveriyor. 75 odasının çoğu bu
                                muhteşem koya tepeden bakan bir manzaraya sahip. Odaların çoğunda
                                mini birer havuz sayılabilecek jakuzi, bir kısmında da özel hamam ve
                                sauna bulunuyor. Otelin spa’sı La Posidonia’nın antik ortamında
                                masaj ve terapi seçenekleri var fakat önce Cascadas Suspenidas’a
                                gitmek şart! İbiza’da görüleceklerle dolu otel binasının biraz
                                yukarısında travertenler gibi basamak basamak inen bu havuz, ufukta
                                masmavi denizle birleşerek muhteşem bir görüntü oluşturuyor. Ayrı
                                havuzcuklardan oluşan bu büyük havuzun suyu ısıtılıyor.
                            </p>
                            <div className="subpage-secondary-blog-image">
                                <img src="img/blog-detay-1.jpg" />
                            </div>
                            <div className="mil-point-container">
                                <h3>GİTMEK İÇİN GEREKLİ MİL PUAN</h3>
                                <div className="mil-point">96.700</div>
                                <a href="/" className="btn btn--secondary">
                                    MİL PUAN SORGULA
                                </a>
                            </div>
                            <h3>Ibiza Corso</h3>
                            <p>
                                Corso sadece konumuyla bile ilgiyi hak ediyor. İbiza’da eğlence
                                merkezi olan marinaya, restoranlara ve alışveriş noktalarına oldukça
                                yakın. Yakın zamanda yenilendiği için çağdaş bir görünüme sahip.
                                Odaların büyüklükleri dışında birbirinden stil olarak pek farkı yok.
                                Açık ve kapalı havuzların her ikisi de marinaya bakıyor ve oldukça
                                keyifli bir atmosfer sunuyor. Spa’sı ve spor salonunda da işinin
                                ehli bir ekip sizi şımartmak için bekliyor. Otelin bir restoranı yok
                                ancak oldukça hareketli bir gece kulübü var.
                            </p>
                            <div className="subpage-secondary-blog-image">
                                <img src="img/blog-detay-2.jpg" />
                            </div>
                            <h3>Atzaro</h3>
                            <p>
                                Uzun yıllardır aynı aile tarafından yönetilen otel, İbiza’nın en
                                ünlü otellerinden biri. Eski bir çiftlik evinden otele dönüştürülen
                                yapı, 24 odasıyla hizmet veriyor. Portakal bahçelerinin içindeki ev,
                                yüksek kemerli geçişleri, beyaz perdelerin uçuştuğu, ahşap oymalı
                                dekoruyla etrafındaki doğal yapıyla uyumlu dingin bir ortam
                                yaratıyor. Tipik birer köy evi gibi tasarlanmış ve antikalarla
                                dekore edilmiş odalar İbiza’da nerede kalınır diye endişelenenler
                                için ideal. Kahvaltı, öğle ve akşam yemeği için ayrı menüler sunan
                                otelin bunlara ek olarak bir sushi barı, hatırı sayılır bir şarap
                                mahzeni ve bir puro koleksiyonu bulunuyor. Küçük bir butik otel
                                olmasına rağmen hiçbir servisi eksik bırakmamışlar. Özel hocalardan
                                pilates, yoga ve meditasyon dersleri almak da yine İbiza’da
                                yapılacaklardan.
                            </p>
                            <div className="subpage-secondary-blog-image">
                                <img src="img/blog-detay-3.jpg" />
                            </div>
                            <h3>Hotel Mirador de Dalt Vila</h3>
                            <p>
                                Otel, UNESCO’nun korumaya aldığı, denizden oldukça yüksek, etrafı
                                duvarlarla çevrili, İbiza’da mutlaka görülmesi gereken tarihi bir
                                şehir merkezi olan Dalt Vila’da bulunuyor. Bir zamanlar varlıklı bir
                                ailenin evi olan bina, otel olarak restore edilirken, binanın tarihi
                                yapısı ve planları göz önünde bulundurulmuş ve orijinal yapı
                                korunmuş. Uçuk kaçık tasarım otellerde rahat edemeyen, klasik
                                bildiğimiz otel odalarını arayanlar için ideal bir seçim. Üstelik 13
                                odasıyla çok daha samimi ve rahat bir atmosferi var. Mümkünse Grand
                                Suit’i ayırtın. Kendisi bu İbiza otelinin hem en şık, hem de en lüks
                                odası. Otel düşük kalorili sağlıklı kahvaltıları, zarif restoranı Es
                                Mirador, şarap mahzeni ve kokteyl barıyla gerçekten hoş bir
                                konaklama sunuyor.
                            </p>
                            <div className="subpage-secondary-blog-image">
                                <img src="img/blog-detay-4.jpg" />
                            </div>
                        </div>
                    </div>
                    <div className="campaign-banner-container">
                        <img src="img/campaign-banner.jpg" />
                        <div className="campaign-banner">
                            <h3>YURTDIŞI AlIŞverİŞlerİnİzde %10 İndİrİm</h3>
                            <div className="campaign-banner-buttons">
                                <a href="/" className="btn btn--secondary">
                                    HEMEN BAŞVUR
                                </a>
                                <a href="/" className="btn btn--bordered-lightblue">
                                    DETAYLI BİLGİ
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="blog-container">
                        <div className="blog">
                            <h4>İLGİNİZİ ÇEKEBİLECEK</h4>
                            <h2>DİĞER İÇERİKLER</h2>
                            <div className="row">
                                <div className="blog-item col-lg-3">
                                    <img src="img/blog-2.png" />
                                    <div className="blog-filter" />
                                    <h3>Eşsiz Lezzetleri ile Forneria Restaurant</h3>
                                    <span
                                        className="blog-category"
                                        style={{ backgroundColor: '#cf7148' }}
                                    >
                                        ŞEFLERDEN TARİFLER
                                    </span>
                                </div>
                                <div className="blog-item col-lg-3">
                                    <img src="img/blog-3.png" />
                                    <div className="blog-filter" />
                                    <h3>Muhteşem Norveç Fiyortları</h3>
                                    <span
                                        className="blog-category"
                                        style={{ backgroundColor: '#029e54' }}
                                    >
                                        DÜNYA
                                    </span>
                                </div>
                                <div className="blog-item col-lg-3">
                                    <img src="img/blog-4.png" />
                                    <div className="blog-filter" />
                                    <h3>Eski bir Sanat: Bizon Seramik</h3>
                                    <span
                                        className="blog-category"
                                        style={{ backgroundColor: '#8469a4' }}
                                    >
                                        EŞYA'NIN SIRRI
                                    </span>
                                </div>
                                <div className="blog-item col-lg-3">
                                    <img src="img/blog-5.png" />
                                    <div className="blog-filter" />
                                    <h3>Picasso, Gaudi ve Miro’nun Buluştuğu Şehir</h3>
                                    <span
                                        className="blog-category"
                                        style={{ backgroundColor: '#ffbe04' }}
                                    >
                                        YOLCU KOLTUĞU
                                    </span>
                                </div>
                            </div>
                            <a href="/" className="btn btn--bordered-blue">
                                TÜM BLOG YAZILARI
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

export default BlogDetay;
