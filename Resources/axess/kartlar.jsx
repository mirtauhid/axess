import React from 'react';

const kartlar = () => {
  return (
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
      <div className="hero-area-banner-container">
        <div className="hero-area-banner">
          <div className="hero-area-banner-content">
            <h5>KARTLAR</h5>
            <h1>WINGS CARD</h1>
            <p>Harcadıkça Mil Puan ve Chip-Para kazanmanızı sağlayan Wings Card sunduğu fırsatlar ile ayrıcalıklı bir dünyanın kapısı sizin için aralanıyor.</p>
            <a href="javascript:;" className="btn btn--secondary">HEMEN BAŞVUR</a>
          </div>
          <div className="hero-area-banner-image">
            <img src="img/cards-detail-right-wings.png" />
          </div>
        </div>
      </div>
      <div className="card-container">
        <div className="container-mobile">
          <div className="tab-container">
            <div className="tab-item active">
              <a href="javascript:;">Kartlar</a>
            </div>
            <div className="tab-item">
              <a href="javascript:;">Wings Card Ayrıcalıkları</a>
            </div>
            <div className="tab-item">
              <a href="javascript:;">Faiz ve Ücretler</a>
            </div>
          </div>
          <div className="tab-detail-container">
            <div className="tab-detail-item">
              <div className="row card-type-container">
                <div className="card-type-item">
                  <div className="card-type-content">
                    <div className="card-type-image">
                      <img src="img/wings-card-01.png" />
                    </div>
                    <div className="card-type-features">
                      <h4>WINGS</h4>
                      <ul>
                        <li><span className="icon-person" />Bireysel Müşteriler İçin</li>
                        <li><span className="icon-car" />Zorlu Center’da Ücretsiz Vale</li>
                        <li><span className="icon-star" />132 Markada Kampanya</li>
                        <li><span className="icon-3" />Faizsiz ve Ücretsiz 3 Taksit</li>
                        <li><span className="icon-flight" />Havaalanı Transferinde %10 İndirim</li>
                      </ul>
                      <a href="javascript:;" className="btn--inline">DETAYLARI GÖR</a>
                    </div>
                  </div>
                </div>
                <div className="card-type-item">
                  <div className="card-type-content">
                    <div className="card-type-image">
                      <img src="img/wings-card-02.png" />
                    </div>
                    <div className="card-type-features">
                      <h4>WINGS BLACK</h4>
                      <ul>
                        <li><span className="icon-person" />Bireysel Müşteriler İçin</li>
                        <li><span className="icon-car" />Zorlu Center’da Ücretsiz Vale</li>
                        <li><span className="icon-star" />132 Markada Kampanya</li>
                        <li><span className="icon-3" />Faizsiz ve Ücretsiz 3 Taksit</li>
                        <li><span className="icon-flight" />Havaalanı Transferinde %10 İndirim</li>
                      </ul>
                      <a href="javascript:;" className="btn--inline">DETAYLARI GÖR</a>
                    </div>
                  </div>
                </div>
                <div className="card-type-item">
                  <div className="card-type-content">
                    <div className="card-type-image">
                      <img src="img/wings-card-03.png" />
                    </div>
                    <div className="card-type-features">
                      <h4>WINGS PRIVATE</h4>
                      <ul>
                        <li><span className="icon-person" />Bireysel Müşteriler İçin</li>
                        <li><span className="icon-car" />Zorlu Center’da Ücretsiz Vale</li>
                        <li><span className="icon-star" />132 Markada Kampanya</li>
                        <li><span className="icon-3" />Faizsiz ve Ücretsiz 3 Taksit</li>
                        <li><span className="icon-flight" />Havaalanı Transferinde %10 İndirim</li>
                      </ul>
                      <a href="javascript:;" className="btn--inline">DETAYLARI GÖR</a>
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

  );
};

export default kartlar;