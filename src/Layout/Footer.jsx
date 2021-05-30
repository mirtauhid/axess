/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/button-has-type */
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Footer = () => {
    const [foot, setFoot] = useState([]);
    useEffect(() => {
        axios.get('https://wings2021.agencylook.org/layout?lang=tr').then((res) => {
            console.log(res.data.footer);
            setFoot(res.data.footer);
        });
    }, []);

    // eslint-disable-next-line camelcase
    const { footer_1, footer_2, footer_3 } = foot;

    return (
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
    );
};

export default Footer;
