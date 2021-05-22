import React from 'react';

const modals = () => {
  return (
    <>
  <div className="modals-container">
    <h1>TÜM MODAL LİSTESİ</h1>
    <blockquote>Bu sayfa ve sayfaya eklenen javascript kodları sadece modalların bir arada görüntülenebilmesi için oluşturulmuştur. Modallar angular tarafında yazılmalıdır.</blockquote>
    <a href="javascript:;" className="btn open-modal" data-modal="#downloadAxessMobile">Axess Mobil'i Hemen İndir</a>
    <a href="javascript:;" className="btn open-modal" data-modal="#downloadAxessMobileV2">Axess Mobil'i Hemen İndir v2</a>
    <a href="javascript:;" className="btn open-modal" data-modal="#wingsJoinCampaign">Kampanyaya Katıl</a>
    <a href="javascript:;" className="btn open-modal" data-modal="#wingsJoinCampaignResult">Kampanyaya Katılım Sonuç</a>
    <a href="javascript:;" className="btn open-modal" data-modal="#wingsJoinCampaignSuccess">Kampanyaya Katılım Teşekkür</a>
    <a href="javascript:;" className="btn open-modal" data-modal="#newsletterSuccess">E-Bülten Teşekkür</a>
  </div>
  {/*Kampanyaya Katıl*/}
  <div className="modal" id="wingsJoinCampaign">
    <div className="modal-content">
      <a href="javascript:;" className="close-modal"><span className="icon-close2" /></a>
      <h2>KAMPANYAYA KATIL</h2>
      <h3>Teknosa’da Peşin Fiyatına<br /> 12 Taksit Ayrıcalığı!</h3>
      <p>Kampanyaya hızlı ve ücretsiz katılım için cep<br /> telefonu numaranızı girin.</p>
      <div className="form-container">
        <div className="form-item">
          <div className="form-element">
            <input type="text" placeholder="Cep telefonu numaranızı girin" />
            <span className="form-element-message">Bu alan boş bırakılamaz.</span>
            <span className="icon-warning"><span className="path1" /><span className="path2" /></span>
          </div>
        </div>
      </div>
      <a href="javascript:;" className="btn btn--primary">KAMPANYAYA KATIL</a>
    </div>
  </div>
  {/*Kampanyalar Sonuç*/}
  <div className="modal" id="wingsJoinCampaignResult">
    <div className="modal-content">
      <a href="javascript:;" className="close-modal"><span className="icon-close2" /></a>
      <h3>Teknosa’da Peşin Fiyatına<br /> 12 Taksit Ayrıcalığı!</h3>
      <h2>KAMPANYASINA KATILDIĞINIZ <br />İÇİN TEŞEKKÜRLER</h2>
    </div>
  </div>
  {/*Kampanyalar Teşekkür*/}
  <div className="modal" id="wingsJoinCampaignSuccess">
    <div className="modal-content">
      <a href="javascript:;" className="close-modal"><span className="icon-close2" /></a>
      <div className="modal-icon">
        <span className="icon-thick" />
      </div>
      <h3>Kampanyaya katıldığınız<br /> için teşekkürler.</h3>
      <p>Teknosa’da Peşin Fiyatına 12 Taksit Ayrıcalığı<br /> kampanyasına katılımınız gerçekleşti.</p>
      <a href="javascript:;" className="btn btn--primary">TÜM KAMPANYALAR</a>
    </div>
  </div>
  {/*E-Bülten Teşekkür*/}
  <div className="modal" id="newsletterSuccess">
    <div className="modal-content">
      <a href="javascript:;" className="close-modal"><span className="icon-close2" /></a>
      <div className="modal-icon">
        <span className="icon-thick" />
      </div>
      <h3>E-Bültenimize abone<br /> olduğunuz için teşekkürler.</h3>
      <p>Wings Card ayrıcalık ve kampanyalarından haberdar<br /> olabileceğiniz e-bültenimize abone oldunuz.</p>
      <a href="javascript:;" className="btn btn--primary">ANA SAYFAYA DÖN</a>
    </div>
  </div>
  {/*Axess Mobil*/}
  <div className="modal" id="downloadAxessMobile">
    <div className="modal-container">
      <a href="javascript:;" className="close-modal"><span className="icon-close2" /></a>
      <div className="modal-hero-area">
        <img src="img/modal-hero-area.png" />
        <h2>AXESS MOBİL'İ<br />HEMEN İNDİR</h2>
      </div>
      <div className="modal-content">
        <p>Aşağıdaki butona tıklayın, indirme linkini ücretsiz<br /> olarak cebinize gönderelim.</p>
        <div className="form-container">
          <div className="form-item">
            <div className="form-element">
              <input type="text" placeholder="Cep telefonu numaranızı girin" />
              <span className="form-element-message">Bu alan boş bırakılamaz.</span>
              <span className="icon-warning"><span className="path1" /><span className="path2" /></span>
            </div>
          </div>
        </div>
        <a href="javascript:;" className="btn btn--primary">HEMEN İNDİR</a>
        <div className="modal-seperator"><span>veya</span></div>
        <div className="modal-download-buttons">
          <a href="javascript:;" className="btn btn--bordered-blue btn--icon btn--multiline"><span className="icon-info2" /><strong>App Store</strong>ile indir</a>
          <a href="javascript:;" className="btn btn--bordered-blue btn--icon btn--multiline"><span className="icon-android" /><strong>Google play</strong>ile indir</a>
        </div>
      </div>
    </div>
  </div>
  <div className="modal" id="downloadAxessMobileV2">
    <div className="modal-container">
      <a href="javascript:;" className="close-modal"><span className="icon-close2" /></a>
      <div className="modal-hero-area">
        <img src="img/modal-hero-area.png" />
        <h2>AXESS MOBİL'İ<br />HEMEN İNDİR</h2>
      </div>
      <div className="modal-content">
        <p>Aşağıdaki butona tıklayın, indirme linkini ücretsiz<br /> olarak cebinize gönderelim.</p>
        <div className="form-container">
          <div className="form-item">
            <label>Cep Telefonu Numaranız</label>
            <div className="form-element">
              <input type="text" placeholder="Cep telefonu numaranızı girin" />
              <span className="form-element-message">Bu alan boş bırakılamaz.</span>
              <span className="icon-warning"><span className="path1" /><span className="path2" /></span>
            </div>
          </div>
        </div>
        <a href="javascript:;" className="btn btn--primary">HEMEN İNDİR</a>
        <div className="modal-seperator"><span>veya</span></div>
        <div className="modal-download-buttons">
          <a href="javascript:;" className="btn btn--bordered-black btn--icon btn--multiline"><span className="icon-info2" /><strong>App Store</strong>ile indir</a>
          <a href="javascript:;" className="btn btn--bordered-black btn--icon btn--multiline"><span className="icon-android" /><strong>Google play</strong>ile indir</a>
        </div>
      </div>
    </div>
  </div>
</>

  );
};

export default modals;