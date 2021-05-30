/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Footer from '../Layout/Footer';
import Header from '../Layout/Header';

const MilpuanKacPuanKazanirim = () => {
    return (
        <>
            <div className="overlay" />
            <Header />
            <section id="content">
                <div className="subpage">
                    <div className="hero-area-banner-container milpoint">
                        <div className="hero-area-banner">
                            <div className="hero-area-banner-content">
                                <h1>MİL PUAN</h1>
                                <p>
                                    Wings’in mil puanlama sistemi ile Dünya
                                    <br />
                                    sizin ayaklarınızın altında.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="card-container">
                        <div className="container-mobile">
                            <div className="tab-container">
                                <div className="tab-item active">
                                    <a href="/">
                                        Kaç Mil Puan <br />
                                        Kazanırım?
                                    </a>
                                </div>
                                <div className="tab-item">
                                    <a href="/">Kaç Mil Puanım Var?</a>
                                </div>
                                <div className="tab-item">
                                    <a href="/">
                                        Nasıl Mil Puan
                                        <br /> Kazanırım?
                                    </a>
                                </div>
                                <div className="tab-item">
                                    <a href="/">
                                        Mil Puanları Nerede
                                        <br /> Kullanabilirm?
                                    </a>
                                </div>
                                <div className="tab-item">
                                    <a href="/">
                                        Avans
                                        <br /> Mil Puan
                                    </a>
                                </div>
                            </div>
                            <div className="tab-detail-container">
                                <div className="tab-detail-item">
                                    <h2>KAÇ MİL PUAN KAZANIRIM?</h2>
                                    <div className="calculator-container">
                                        <div className="calculator">
                                            <div className="calculator-form">
                                                <div className="calculator-item">
                                                    <label>Ülke</label>
                                                    <div className="calculator-form-item">
                                                        <select>
                                                            <option value disabled selected>
                                                                Ülke adı yazın ya da seçin
                                                            </option>
                                                            <option value="Almanya">Almanya</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="calculator-item">
                                                    <label>Seyahat Sınıfı</label>
                                                    <div className="calculator-form-item">
                                                        <select>
                                                            <option value disabled selected>
                                                                Sınıf Seçin
                                                            </option>
                                                            <option value="Ekonomi">Ekonomi</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="calculator-item">
                                                    <label>Bilet Tutarı</label>
                                                    <div className="calculator-form-item">
                                                        <input
                                                            type="text"
                                                            placeholder="Bilet tutarınızı yazın"
                                                        />
                                                        <span className="price-tag">TL</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="calculator-result">
                                                <div>
                                                    <h3>Gerekli Mil Puan değeriniz</h3>
                                                    <div className="calculated-point">94.449</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <h2>MİL PUAN HESAPLAMA DETAYLARI</h2>
                                    <div className="readmore readmore-collapse">
                                        <p>
                                            Yurt dışı biletlerde alan vergisi müşteri tarafından
                                            ödenmektedir. Mil Puan hesaplarken, biletin değerinden
                                            alan vergisini hariç tutarak bilet bedelini yazmanız
                                            gerekmektedir. * 1 kişilik bilet bedeli girilmelidir.
                                            Servis bedeli ve vergiler dahil toplam bilet bedeli
                                            üzerinden hesaplama yapılmalıdır.
                                        </p>
                                        <p>
                                            Yurt içi uçuşlarda gitmek istediğiniz ülke bölümünden
                                            Yurt içi veya Türkiye'yi seçebilirsiniz.
                                        </p>
                                        <p>
                                            Mil Puan değerleri gitmek istediğiniz bölgeye ve
                                            biletinizin sınıfına göre değişir, bu nedenle sadece
                                            bilet bedeli değil gideceğiniz bölge ve bilet sınıfınızı
                                            doğru girmeniz önem taşımaktadır.
                                        </p>
                                        <p>
                                            Mil Puan hesaplama aracı Türkiye çıkışlı uçuşlar için
                                            geçerlidir. Yurt dışı çıkışlı uçuşlar veya yurt dışı
                                            aktarmalarda uygulanacak değerler için 444 25 25 Akbank
                                            Telefon Şubesi’ni arayabilirsiniz.
                                        </p>
                                        <p>
                                            Mil Puan hesaplama aracı birim bilet bedeli esaslıdır.
                                            Bilet fiyatının zaman içinde değişmesi durumunda Mil
                                            Puan değeri de değişmektedir. Bilet fiyatında yaşanacak
                                            değişiklikler neticesinde Mil Puan değeri de
                                            değişmektedir. Hesaplanan Mil Puanlar bilet bedeli
                                            esaslıdır, her bir kişi için ayrı bilet kesildiğinden
                                            hesaplama tablosuna 1 kişinin bilet bedeli girilmelidir.
                                            Yurt dışı biletlerde alan vergisi müşteri tarafından
                                            ödenmektedir. Yurt dışı uçak bilet talepleri için Mil
                                            Puan hesaplarken, biletin değerinden alan vergisini
                                            hariç tutarak bilet bedelini yazmanız gerekmektedir.
                                        </p>
                                        <div className="readmore-button">
                                            <a href="/">DEVAMINI OKU</a>
                                        </div>
                                        <div className="readmore-button hide">
                                            <a href="/">GİZLE</a>
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

export default MilpuanKacPuanKazanirim;
