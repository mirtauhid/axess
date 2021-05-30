/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Footer from '../Layout/Footer';
import Header from '../Layout/Header';

const MilpuanKacMilpuanimVar = () => {
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
                                <div className="tab-item">
                                    <a href="/">
                                        Kaç Mil Puan <br />
                                        Kazanırım?
                                    </a>
                                </div>
                                <div className="tab-item active">
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
                                    <h2>NE KADAR MİL PUANIM VAR?</h2>
                                    <div className="row">
                                        <div className="col-lg-8 offset-lg-2">
                                            <div className="row">
                                                <div className="milpoint-form-container">
                                                    <div className="form-container">
                                                        <div className="form-item">
                                                            <label>Kart Sahibi</label>
                                                            <div className="form-element form-element--error">
                                                                <input
                                                                    type="text"
                                                                    placeholder="Ad soyad yazın"
                                                                />
                                                                <span className="form-element-message">
                                                                    Bu alan boş bırakılamaz.
                                                                </span>
                                                                <span className="icon-warning">
                                                                    <span className="path1" />
                                                                    <span className="path2" />
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="form-item">
                                                            <label>Kart Numarası</label>
                                                            <div className="form-element form-element--error">
                                                                <input
                                                                    type="text"
                                                                    placeholder="---- ---- ---- ----"
                                                                />
                                                                <span className="form-element-message">
                                                                    Lütfen geçerli bir kart numarası
                                                                    giriniz.
                                                                </span>
                                                                <span className="icon-warning">
                                                                    <span className="path1" />
                                                                    <span className="path2" />
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="form-item">
                                                            <label>Son Kullanma Tarihi</label>
                                                            <div className="form-item-multiple">
                                                                <div className="form-item">
                                                                    <div className="form-element form-element--error">
                                                                        <select>
                                                                            <option
                                                                                value
                                                                                disabled
                                                                                selected
                                                                            >
                                                                                Ay
                                                                            </option>
                                                                            <option value="Almanya">
                                                                                Haziran
                                                                            </option>
                                                                        </select>
                                                                        <span className="icon-warning">
                                                                            <span className="path1" />
                                                                            <span className="path2" />
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div className="form-item">
                                                                    <div className="form-element form-element--error">
                                                                        <select>
                                                                            <option
                                                                                value
                                                                                disabled
                                                                                selected
                                                                            >
                                                                                Yıl
                                                                            </option>
                                                                            <option value={1980}>
                                                                                1980
                                                                            </option>
                                                                        </select>
                                                                        <span className="icon-warning">
                                                                            <span className="path1" />
                                                                            <span className="path2" />
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="form-item">
                                                            <label>
                                                                Güvenlik Kodu{' '}
                                                                <span className="tooltip">
                                                                    <span className="icon-info" />
                                                                    <span className="tooltip-details">
                                                                        Kartınızın arka yüzündeki
                                                                        son 3 hane
                                                                    </span>
                                                                </span>
                                                            </label>
                                                            <div className="form-element form-element--error">
                                                                <input
                                                                    type="text"
                                                                    placeholder="---"
                                                                />
                                                                <span className="form-element-message">
                                                                    Lütfen güvenlik kodunuzu
                                                                    giriniz.
                                                                </span>
                                                                <span className="icon-warning">
                                                                    <span className="path1" />
                                                                    <span className="path2" />
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="recaptcha">
                                                            <img src="img/recaptcha.jpg" />
                                                        </div>
                                                        <div className="form-button">
                                                            <button
                                                                type="submit"
                                                                className="btn btn--primary"
                                                            >
                                                                HEMEN BAŞVUR
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="milpoint-card-container">
                                                    <div className="custom-card-container">
                                                        <img src="img/custom-card/bg.svg" />
                                                        <div className="chip" />
                                                        <div className="card-number">
                                                            <span>1234</span>
                                                            <span>5678</span>
                                                            <span>9012</span>
                                                            <span>3456</span>
                                                        </div>
                                                        <div className="card-end-date">
                                                            <h6>
                                                                VALID
                                                                <br />
                                                                THRU
                                                            </h6>
                                                            <span>AA/YY</span>
                                                        </div>
                                                        <div className="card-holder-name">
                                                            OZAN ÇAĞATAY ALICI
                                                        </div>
                                                        <div className="card-type">
                                                            <img src="img/custom-card/mastercard.svg" />
                                                        </div>
                                                    </div>
                                                </div>
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

export default MilpuanKacMilpuanimVar;
