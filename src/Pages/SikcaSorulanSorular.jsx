/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Footer from '../Layout/Footer';
import Header from '../Layout/Header';

const SikcaSorulanSorular = () => {
    return (
        <>
            <div className="overlay" />
            <Header />
            <section id="content" className="light-template">
                <div className="subpage">
                    <div className="hero-area-container">
                        <img src="img/privileges-image.jpg" />
                        <div className="hero-area">
                            <h1>
                                <span>SIKÇA SORULAN</span> SORULAR
                            </h1>
                        </div>
                    </div>
                    <div className="subpage-container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                                <dl className="accordion">
                                    <dt className="active">Wings Mil Programı nedir?</dt>
                                    <dd style={{ display: 'block' }}>
                                        <p>
                                            Wings Mil Programında alışverişlerden Mil Puan
                                            kazanılır, Axes Üye işyerlerinden hem Mil Puan, hem de
                                            chip-para kazanılır. Mil Puan’larla istenilen
                                            havayoluyla, istenilen yere, kontenjan kısıtlaması
                                            olmadan ve alan vergisi ödemeden bedava bilet
                                            alınabilir. Her ay biriken chip-paralar otomatik olarak
                                            Mil Puan'a dönüşür, daha hızlı Mil Puan biriktirilir.
                                        </p>
                                    </dd>
                                    <dt>Wings ile nasıl Mil Puan kazanırım ?</dt>
                                    <dd>
                                        <p>
                                            Wings’le biriktirdiğiniz Mil Puan’ları 444 25 25 Akbank
                                            Telefon Şubesi’ni arayarak uçak bileti almak için veya
                                            GezKanatlan.com üzerinden uçak bileti, otel konaklaması,
                                            tur, gemi turu ve seyahat sigortası almak için
                                            kullanabilirsiniz. Ayrıca isterseniz Mil Puan’larınızı
                                            anlaşmalı Wings Style üye işyerlerinde de
                                            kullanabilirsiniz. Wings Mil Programında kontenjan
                                            sınırı, sezon farkı ve havayolu kısıtlaması yoktur.
                                        </p>
                                    </dd>
                                    <dt>Nasıl Wings sahibi olurum?</dt>
                                    <dd>
                                        <p>
                                            Wings’le biriktirdiğiniz Mil Puan’ları 444 25 25 Akbank
                                            Telefon Şubesi’ni arayarak uçak bileti almak için veya
                                            GezKanatlan.com üzerinden uçak bileti, otel konaklaması,
                                            tur, gemi turu ve seyahat sigortası almak için
                                            kullanabilirsiniz. Ayrıca isterseniz Mil Puan’larınızı
                                            anlaşmalı Wings Style üye işyerlerinde de
                                            kullanabilirsiniz. Wings Mil Programında kontenjan
                                            sınırı, sezon farkı ve havayolu kısıtlaması yoktur.
                                        </p>
                                    </dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default SikcaSorulanSorular;
