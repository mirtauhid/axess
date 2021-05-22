<>
  <div className="overlay" />
  <header id="header">
    <div className="container">
      <div className="sub-header">
        <ul>
          <li>
            <a href="javascript:;"><span className="icon-card3" />Kart İşlemlerim</a>
          </li>
          <li>
            <a href="javascript:;"><span className="icon-search2" />Ara</a>
          </li>
        </ul>
      </div>
      <div className="header">
        <div className="mobile-menu-btn">
          <a href="javascript:;">
            <span className="icon-tumu" />
          </a>
          {/*Bu buton mobil menuyu acmak icindir. Mobil menuyu gorunur yapmak icin <div class="menu"> buraya active classi ekletmek gerekiyor.*/}
        </div>
        <div className="logo">
          <a href="javascript:;"><img src="img/logo.svg" alt="Axess Wings" /></a>
        </div>
        <div className="mobile-search-btn">
          <a href="javascript:;"><span className="icon-search2" /></a>
          {/*Bu buton mobil searchi acmak icindir. Ama bunu acmak icin yine Mobil menuyu gorunur yapmak gerekiyor. <div class="menu"> buraya active classi ekleyin.*/}
        </div>
        <div className="menu">
          <div className="mobile-search">
            <div className="mobile-search-input">
              <input type="text" placeholder="Aranacak kelimeyi girin" />
              <button><span className="icon-search2" /></button>
            </div>
          </div>
          <ul>
            <li>
              <a href="javascript:;">MİL PUAN</a>
              <div className="mega-dropdown-container">
                <div className="mega-dropdown-content">
                  <div className="mega-dropdown-menu">
                    <div className="mega-dropdown-menu-item">
                      <h4>MİL PUAN</h4>
                      <ul>
                        <li><a href="javascript:;">Kaç mil puan kazanırım?</a></li>
                        <li><a href="javascript:;">Kaç mil puan kazanırım?</a></li>
                        <li><a href="javascript:;">Nasıl mil puan kazanırım?</a></li>
                        <li><a href="javascript:;">Mil puanları nerede kullanabilirim?</a></li>
                        <li><a href="javascript:;">Avans mil puan</a></li>
                      </ul>
                    </div>										
                  </div>
                  <div className="mega-dropdown-box">
                    <div className="dropdown-privileges-item">
                      <div className="dropdown-privileges-item-content">
                        <a href="javascript:;">100’DEN FAZLA <br />KAMPANYA
                          <span className="icon-arrow" />
                        </a>
                      </div>
                    </div>
                    <div className="dropdown-privileges-item">
                      <div className="dropdown-privileges-item-content">
                        <a href="javascript:;">100’DEN FAZLA <br />KAMPANYA
                          <span className="icon-arrow" />
                        </a>
                      </div>
                    </div>
                    <div className="dropdown-privileges-item">
                      <div className="dropdown-privileges-item-content">
                        <a href="javascript:;">100’DEN FAZLA <br />KAMPANYA
                          <span className="icon-arrow" />
                        </a>
                      </div>
                    </div>
                    <div className="dropdown-privileges-item">
                      <div className="dropdown-privileges-item-content">
                        <a href="javascript:;">100’DEN FAZLA <br />KAMPANYA
                          <span className="icon-arrow" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mega-dropdown-info">
                  <a href="javascript:;">Mil puanlarla ilgili daha fazla bilgi almak için tıklayınız. <span className="icon-arrow" /></a>
                </div>
              </div>
            </li>
            <li><a href="javascript:;">AYRICALIKLAR</a></li>
            <li><a href="javascript:;">KAMPANYALAR</a></li>
            <li><a href="javascript:;">KARTLAR</a></li>
            <li><a href="javascript:;">BLOG</a></li>
          </ul>
          <a href="javascript:;" className="btn btn--bordered-yellow">AXESS MOBIL</a>
          <a href="javascript:;" className="btn btn--primary">HEMEN BAŞVUR</a>
        </div>
      </div>
    </div>
  </header>
  <section id="content">
    <div className="subpage">
      <div className="hero-area-banner-container milpoint">
        <div className="hero-area-banner">
          <div className="hero-area-banner-content">
            <h1>MİL PUAN</h1>
            <p>Wings’in mil puanlama sistemi ile Dünya<br />
              sizin ayaklarınızın altında.</p>
          </div>
        </div>
      </div>
      <div className="card-container">
        <div className="container-mobile">
          <div className="tab-container">
            <div className="tab-item">
              <a href="javascript:;">Kaç Mil Puan <br />Kazanırım?</a>
            </div>
            <div className="tab-item active">
              <a href="javascript:;">Kaç Mil Puanım Var?</a>
            </div>
            <div className="tab-item">
              <a href="javascript:;">Nasıl Mil Puan<br /> Kazanırım?</a>
            </div>
            <div className="tab-item">
              <a href="javascript:;">Mil Puanları Nerede<br /> Kullanabilirm?</a>
            </div>
            <div className="tab-item">
              <a href="javascript:;">Avans<br /> Mil Puan</a>
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
                            <input type="text" placeholder="Ad soyad yazın" />
                            <span className="form-element-message">Bu alan boş bırakılamaz.</span>
                            <span className="icon-warning"><span className="path1" /><span className="path2" /></span>
                          </div>
                        </div>
                        <div className="form-item">
                          <label>Kart Numarası</label>
                          <div className="form-element form-element--error">
                            <input type="text" placeholder="---- ---- ---- ----" />
                            <span className="form-element-message">Lütfen geçerli bir kart numarası giriniz.</span>
                            <span className="icon-warning"><span className="path1" /><span className="path2" /></span>
                          </div>
                        </div>
                        <div className="form-item">
                          <label>Son Kullanma Tarihi</label>
                          <div className="form-item-multiple">
                            <div className="form-item">
                              <div className="form-element form-element--error">
                                <select>
                                  <option value disabled selected>Ay</option>
                                  <option value="Almanya">Haziran</option>
                                </select>
                                <span className="icon-warning"><span className="path1" /><span className="path2" /></span>
                              </div>
                            </div>
                            <div className="form-item">
                              <div className="form-element form-element--error">
                                <select>
                                  <option value disabled selected>Yıl</option>
                                  <option value={1980}>1980</option>
                                </select>
                                <span className="icon-warning"><span className="path1" /><span className="path2" /></span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="form-item">
                          <label>Güvenlik Kodu <span className="tooltip">
                              <span className="icon-info" />
                              <span className="tooltip-details">
                                Kartınızın arka yüzündeki son 3 hane
                              </span>
                            </span></label>
                          <div className="form-element form-element--error">
                            <input type="text" placeholder="---" />
                            <span className="form-element-message">Lütfen güvenlik kodunuzu giriniz.</span>
                            <span className="icon-warning"><span className="path1" /><span className="path2" /></span>
                          </div>
                        </div>
                        <div className="recaptcha">
                          <img src="img/recaptcha.jpg" />
                        </div>
                        <div className="form-button">
                          <button type="submit" className="btn btn--primary">HEMEN BAŞVUR</button>
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
                          <h6>VALID<br />THRU</h6>
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
  <footer id="footer">
    <div className="container">
      <div className="footer-menu">
        <div className="footer-menu-item">
          <h4><a href="javascript:;">KAMPANYALAR <span className="icon-arti" /> <span className="icon-sour" /></a></h4>
          <ul>
            <li><a href="javascript:;">Tüm Kampanyalar</a></li>
          </ul>
        </div>
        <div className="footer-menu-item active">
          <h4><a href="javascript:;">WINGS KART <span className="icon-arti" /> <span className="icon-sour" /></a></h4>
          <ul>
            <li><a href="javascript:;">Kart Özellikleri</a></li>
            <li><a href="javascript:;">Faiz ve Ücretler</a></li>
            <li><a href="javascript:;">Kampanyalar</a></li>
            <li><a href="javascript:;">Mil Puan</a></li>
            <li><a href="javascript:;">Merak Ettikleriniz</a></li>
          </ul>
        </div>
        <div className="footer-menu-item">
          <h4><a href="javascript:;">WINGS AYRICALIKLARI <span className="icon-arti" /> <span className="icon-sour" /></a></h4>
          <ul>
            <li><a href="javascript:;">Tüm Wings Ayrıcalıkları</a></li>
          </ul>
        </div>
        <div className="footer-menu-item">
          <h4><a href="javascript:;">MERAK ETTİKLERİNİZ <span className="icon-arti" /> <span className="icon-sour" /></a></h4>
          <ul>
            <li><a href="javascript:;">Sıkça Sorulanlar</a></li>
            <li><a href="javascript:;">Bankacılık İşlemleri</a></li>
            <li><a href="javascript:;">Faiz ve İşlem Ücretleri</a></li>
          </ul>
        </div>
        <div className="footer-menu-item">
          <h4><a href="javascript:;">MİL PROGRAMI <span className="icon-arti" /> <span className="icon-sour" /></a> </h4>
          <ul>
            <li><a href="javascript:;">Ne Kadar Mil Puan Kazanırım?</a></li>
            <li><a href="javascript:;">Ne Kadar Mil Puanım Var?</a></li>
            <li><a href="javascript:;">Nasıl Mil Puan Kazanırım?</a></li>
            <li><a href="javascript:;">Mil Puanları Nerede Kullanabilirm?</a></li>
            <li><a href="javascript:;">Avans Mil Puan</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-contact">
        <div className="footer-social-media">
          <h4>BİZİ TAKİP EDİN</h4>
          <ul>
            <li>
              <a href="javascript:;">
                <img src="img/twitter.svg" />
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <img src="img/facebook.svg" />
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <img src="img/instagram.svg" />
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-newsletter">
          <h4>FIRSATLARI KAÇIRMAMAK İÇİN<br /> E-BÜLTENİMİZE ABONE OLUN</h4>
          <div className="newsletter">
            <form>
              <div className="newsletter__input">
                <input type="email" className="error" placeholder="E-posta adresinizi girin" />
                <span className="icon-warning"><span className="path1" /><span className="path2" /></span>
                <div className="newsletter__error-message">Lütfen geçerli bir mail adresi giriniz.</div>
              </div>
              <button type="submit" className="btn btn--primary">KAYDOL</button>
            </form>
          </div>
        </div>
      </div>
      <div className="footer-bottom-menu">
        <ul>
          <li><a href="javascript:;">İletişim</a></li>
          <li><a href="javascript:;">Gizlilik Bildirimi</a></li>
          <li><a href="javascript:;">Web Sitesi Kullanıcı Sözleşmesi</a></li>
          <li><a href="javascript:;">Çerez Politikası</a></li>
        </ul>
        <div className="copyright">
          © 2017 Wings
        </div>
      </div>
    </div>
  </footer>
</>
