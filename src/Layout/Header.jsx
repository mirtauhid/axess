/* eslint-disable react/no-array-index-key */
/* eslint-disable react/button-has-type */
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Header = () => {
    const [head, setHead] = useState([]);
    useEffect(() => {
        axios.get('https://wings2021.agencylook.org/layout?lang=tr').then((res) => {
            setHead(res.data.header);
        });
    }, []);

    // eslint-disable-next-line camelcase
    const { header_1, header_2 } = head;

    return (
        <header id="header">
            <div className="container">
                <div className="sub-header">
                    <ul>
                        <li>
                            <a href={header_1?.map((header) => header.url)}>
                                <span className="icon-card3" />
                                {header_1?.map((header) => header.title)}
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
                            {header_2?.map((header, index) => (
                                <li>
                                    <a href={header.url} key={index}>
                                        {header.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
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
                                                <a href="/">Nasıl mil puan kazanırım?</a>
                                            </li>
                                            <li>
                                                <a href="/">Mil puanları nerede kullanabilirim?</a>
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
                                    Mil puanlarla ilgili daha fazla bilgi almak için tıklayınız.{' '}
                                    <span className="icon-arrow" />
                                </a>
                            </div>
                        </div>
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
    );
};

export default Header;
