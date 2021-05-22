import React from 'react';

const searchOpen = () => {
  return (
    <>
  <div className="overlay" />
  <div className="search-container active">
    <div className="search-close">
      <div className="container">
        <a href="javascript:;" className="search-close--button"><span className="icon-close2" /></a>
      </div>
    </div>
    <div className="search-content">
      <h3>Size nasıl yardımcı olabiliriz?</h3>
      <div className="search-content-input">
        <span className="icon-search2" />
        <input type="text" />
      </div>
      <div className="most-searched-list">
        <div className="most-searched-list-item">
          <h4>EN ÇOK ARANANLAR</h4>
          <ul>
            <li><a href="javascript:;">Kart Başvurum Nerede</a></li>
            <li><a href="javascript:;">Otomatik Ödeme Talimatı</a></li>
            <li><a href="javascript:;">Kart Aidatları</a></li>
            <li><a href="javascript:;">Ekstreler</a></li>
            <li><a href="javascript:;">Kart Başvurum Nerede</a></li>
            <li><a href="javascript:;">Wings</a></li>
            <li><a href="javascript:;">Wings Black</a></li>
            <li><a href="javascript:;">Wings Premium</a></li>
            <li><a href="javascript:;">Otomatik Ödeme Talimatı</a></li>
            <li><a href="javascript:;">Sanal Kart</a></li>
          </ul>
        </div>
      </div>
      <div className="search-result-list">
        <div className="search-result-list-flex">
          <div className="search-result-list-item result">
            <span className="icon-fly2" />
            <h5><strong>"Winys"</strong> araması için sonuç bulunamadı! :(</h5>
            <ul>
              <li>Tüm sözcükleri doğru yazdığından emin olun.</li>
              <li>Farklı terimlerle aramayı deneyin.</li>
              <li>Daha genel terimlerle arama yapın.</li>
            </ul>
          </div>
          <div className="search-result-list-item">
            <h4>ARAMA SONUÇLARI</h4>
            <ul>
              <li><a href="javascript:;"><strong>Wings’e</strong> Özel Bodrum Aquapark’ta %10 İndirim</a></li>
              <li><a href="javascript:;"><strong>Wings’e</strong> Özel Bodrum Aquapark’ta %10 İndirim</a></li>
              <li><a href="javascript:;"><strong>Wings’e</strong> Özel Bodrum Aquapark’ta %10 İndirim</a></li>
              <li><a href="javascript:;"><strong>Wings’e</strong> Özel Bodrum Aquapark’ta %10 İndirim</a></li>
              <li><a href="javascript:;"><strong>Wings’e</strong> Özel Bodrum Aquapark’ta %10 İndirim</a></li>
              <li><a href="javascript:;"><strong>Wings’e</strong> Özel Bodrum Aquapark’ta %10 İndirim</a></li>
            </ul>
          </div>
        </div>
        <div className="search-result-list-more">
          <a href="javascript:;"><strong>"Wings"</strong> için daha fazla sonuç gör <span className="icon-arrow" /></a>
        </div>
      </div>
    </div>
  </div>
  <header id="header">
    <div className="container">
      <div className="sub-header">
        <ul>
          <li>
            <a href="javascript:;"><span className="icon-card3" />Kart İşlemlerim</a>
          </li>
          <li>
            <a href="javascript:;"><span className="icon-search2" />Ara</a>
            {/*Bu buton searchi acmak icindir. <div class="search-container"> buraya active classi ekleyin.*/}
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
          {/*Bu buton mobil searchi acmak icindir. <div class="search-container"> buraya active classi ekleyin.*/}
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
    <div className="slider-container">
      <div className="slider">
        <div className="slider-item">
          <img src="img/wings-anasayfa.jpg" />
          <div className="slider-content">
            <h2>BENCE WINGS’Lİ OLMAK<br />YURT DIŞINDA GÖNLÜNCE<br />GEZMEK DEMEKTİR</h2>
            <a href="javascript:;" className="btn btn--secondary">HEMEN BAŞVUR</a>
            <a href="javascript:;" className="btn btn--bordered-lightblue">DETAYLI BİLGİ</a>
          </div>
        </div>
      </div>
      <div className="slider-menu">
        <div className="row">
          <div className="slider-menu-item">
            <div className="slider-menu-content">
              <a href="javascript:;">
                <img src="img/milgain.svg" />
                NE KADAR MİL<br />PUAN KAZANIRIM?
                <span className="icon-arrow" />
              </a>
            </div>
          </div>
          <div className="slider-menu-item">
            <div className="slider-menu-content">
              <a href="javascript:;">
                <img src="img/milpoint.svg" />
                NE KADAR MİL <br />PUANIM VAR?
                <span className="icon-arrow" />
              </a>
            </div>
          </div>
          <div className="slider-menu-item">
            <div className="slider-menu-content">
              <a href="javascript:;">
                <img src="img/milpin.svg" />
                NASIL MİL PUAN <br />KAZANIRIM?
                <span className="icon-arrow" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="privileges-container">
      <div className="privileges">
        <h4>WINGS</h4>
        <h2>AYRICALIKLARI</h2>
        <div className="row">
          <div className="privileges-item">
            <div className="privileges-item-content">
              <a href="javascript:;">
                <img src="img/privileges-item-1.png" className="privileges-item-content-img-1" />
                100’DEN FAZLA <br />KAMPANYA
                <span className="icon-arrow" />
              </a>
            </div>
          </div>
          <div className="privileges-item">
            <div className="privileges-item-content">
              <a href="javascript:;">
                <img src="img/privileges-item-2.png" className="privileges-item-content-img-2" />
                <span className="privileges-item-content-title">HAVAALANI<br />TRANSFERİ</span>
                <span className="icon-arrow" />
              </a>
            </div>
          </div>
          <div className="privileges-item">
            <div className="privileges-item-content">
              <a href="javascript:;">
                <img src="img/privileges-item-3.png" className="privileges-item-content-img-3" />
                <span className="privileges-item-content-title">RESTORAN<br />İNDİRİMİ</span>
                <span className="icon-arrow" />
              </a>
            </div>
          </div>
          <div className="privileges-item">
            <div className="privileges-item-content">
              <a href="javascript:;">
                <img src="img/privileges-item-4.png" className="privileges-item-content-img-4" />
                <span className="privileges-item-content-title">LOKASYONA<br />ÖZEL TEKLİFLER</span>
                <span className="icon-arrow" />
              </a>
            </div>
          </div>
          <div className="privileges-item">
            <div className="privileges-item-content">
              <a href="javascript:;">
                <img src="img/privileges-item-5.png" className="privileges-item-content-img-5" />
                <span className="privileges-item-content-title">ZORLU CENTER’DA<br />ÜCRETSİZ VALE</span>
                <span className="icon-arrow" />
              </a>
            </div>
          </div>
          <div className="privileges-item">
            <div className="privileges-item-content">
              <a href="javascript:;">
                <span className="privileges-item-content-title">TÜM<br />AYRICALIKLAR</span>
                <span className="icon-arrow" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="campaign-container">
      <div className="wings-box wings-box--logo-grey">
        <h4>ÖNE ÇIKAN</h4>
        <h2>KAMPANYALAR</h2>
        <div className="row">
          <div className="wings-box-item">
            <div className="wings-box-item-container">
              <div className="wings-box-item-image">
                <a href="javascript:;">
                  <img src="img/ayr-cal-k-1.jpg" />
                  <div className="wings-box-item-logo">
                    <img src="img/logo.svg" />
                  </div>
                </a>
              </div>
              <div className="wings-box-item-content">
                <a href="javascript:;">
                  Wings’e Özel Network’te 50 TL Chip-Para
                </a>
                <span className="wings-box-item-category">ALIŞVERİŞ</span>
              </div>
            </div>
          </div>
          <div className="wings-box-item">
            <div className="wings-box-item-container">
              <div className="wings-box-item-image">
                <a href="javascript:;">
                  <img src="img/ayr-cal-k-1.jpg" />
                  <div className="wings-box-item-logo">
                    <img src="img/logo.svg" />
                  </div>
                </a>
              </div>
              <div className="wings-box-item-content">
                <a href="javascript:;">
                  Wings’e Özel Network’te 50 TL Chip-Para
                </a>
                <span className="wings-box-item-category">ALIŞVERİŞ</span>
              </div>
            </div>
          </div>
          <div className="wings-box-item">
            <div className="wings-box-item-container">
              <div className="wings-box-item-image">
                <a href="javascript:;">
                  <img src="img/ayr-cal-k-1.jpg" />
                  <div className="wings-box-item-logo">
                    <img src="img/logo.svg" />
                  </div>
                </a>
              </div>
              <div className="wings-box-item-content">
                <a href="javascript:;">
                  Wings’e Özel Network’te 50 TL Chip-Para
                </a>
                <span className="wings-box-item-category">ALIŞVERİŞ</span>
              </div>
            </div>
          </div>
        </div>
        <a href="javascript:;" className="btn btn--bordered-blue">TÜM KAMPANYALAR</a>
      </div>
    </div>
    <div className="axess-app-container">
      <img src="img/axess-app.png" />
      <div className="axess-app">
        <h2>AXESS MOBİL'İ HALA <br />İNDİRMEDİNİZ Mİ?</h2>
        <p>Aşağıdaki butona tıklayın, <br />indirme linkini ücretsiz olarak <br />cebinize gönderelim</p>
        <div className="mobile-only-buttons">
          <a href="javascript:;" className="btn btn--secondary btn--icon btn--multiline"><span className="icon-info2" /><strong>App Store</strong>ile indir</a>
          <a href="javascript:;" className="btn btn--secondary btn--icon btn--multiline"><span className="icon-android" /><strong>Google play</strong>ile indir</a>
        </div>
        <div className="desktop-only-buttons">
          <a href="javascript:;" className="btn btn--secondary">AXESS MOBİL'İ İNDİR<span className="icon-info2" /><span className="icon-android" /></a>
          <a href="javascript:;" className="btn btn--bordered-lightblue">DETAYLI BİLGİ</a>
        </div>
      </div>
    </div>
    <div className="blog-container">
      <div className="blog">
        <h4>WINGS</h4>
        <h2>BLOG</h2>
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className="primary-blog-item">
              <img src="img/blog-1.png" />
              <div className="blog-filter" />
              <h3>Japonyanın En Büyük Şehirlerinden Başkentlerin Başkenti Kyoto</h3>
              <span className="blog-category" style={{backgroundColor: '#ffbe04'}}>YOLCU KOLTUĞU</span>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="row">
              <div className="blog-item col-12 col-lg-6">
                <img src="img/blog-2.png" />
                <div className="blog-filter" />
                <h3>Eşsiz Lezzetleri ile Forneria Restaurant</h3>
                <span className="blog-category" style={{backgroundColor: '#cf7148'}}>ŞEFLERDEN TARİFLER</span>
              </div>
              <div className="blog-item col-12 col-lg-6">
                <img src="img/blog-3.png" />
                <div className="blog-filter" />
                <h3>Muhteşem Norveç Fiyortları</h3>
                <span className="blog-category" style={{backgroundColor: '#029e54'}}>DÜNYA</span>
              </div>
              <div className="blog-item col-12 col-lg-6">
                <img src="img/blog-4.png" />
                <div className="blog-filter" />
                <h3>Eski bir Sanat: Bizon Seramik</h3>
                <span className="blog-category" style={{backgroundColor: '#8469a4'}}>EŞYA'NIN SIRRI</span>
              </div>
              <div className="blog-item col-12 col-lg-6">
                <img src="img/blog-5.png" />
                <div className="blog-filter" />
                <h3>Picasso, Gaudi ve Miro’nun Buluştuğu Şehir</h3>
                <span className="blog-category" style={{backgroundColor: '#ffbe04'}}>YOLCU KOLTUĞU</span>
              </div>
            </div>
          </div>
        </div>
        <a href="javascript:;" className="btn btn--bordered-blue">TÜM KAMPANYALAR</a>
      </div>
    </div>
    <div className="wings-card-container">
      <div className="wings-card">
        <img src="img/wings-card.png" />
        <h2>BU AYRICALIKLARDAN <br />YARARLANMAK İÇİN HEMEN <br />BİR WİNGS SAHİBİ OLUN!</h2>
        <a href="javascript:;" className="btn btn--secondary">HEMEN BAŞVUR</a>
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

  );
};

export default searchOpen;