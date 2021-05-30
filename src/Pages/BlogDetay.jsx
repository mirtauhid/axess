/* eslint-disable react/button-has-type */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Footer from '../Layout/Footer';
import Header from '../Layout/Header';

const BlogDetay = () => {
    return (
        <>
            <div className="overlay" />
            <Header />
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
            <Footer />
        </>
    );
};

export default BlogDetay;
