import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AyricalikBilgileri from './Pages/AyricalikBilgileri';
import AyricaliklarHarita from './Pages/AyricaliklarHarita';
import AyricaliklarListe from './Pages/AyricaliklarListe';
import Blog from './Pages/Blog';
import BlogDetay from './Pages/BlogDetay';
import CerezPolitikasi from './Pages/CerezPolitikasi';
import FaizVeUcretler from './Pages/FaizVeUcretler';
import FaizVeUcretler2 from './Pages/FaizVeUcretler2';
import HemenBasvur from './Pages/HemenBasvur';
import HesaplamaAraclari from './Pages/HesaplamaAraclari';
import HesaplamaAraclari2 from './Pages/HesaplamaAraclari2';
import HesaplamaAraclari3 from './Pages/HesaplamaAraclari3';
import HesaplamaAraclari4 from './Pages/HesaplamaAraclari4';
import Home from './Pages/Home';
import Kampanyalar from './Pages/Kampanyalar';
import KampanyalarSonaErdi from './Pages/KampanyalarSonaErdi';
import KampanyalarSonuc from './Pages/KampanyalarSonuc';
import KampanyaSonaErdiDetay from './Pages/KampanyaSonaErdiDetay';
import KartDetayKampanyalar from './Pages/KartDetayKampanyalar';
import KartKarsilastirma from './Pages/KartKarsilastirma';
import Kartlar from './Pages/Kartlar';
import KartlarMerakEttikleriniz from './Pages/KartlarMerakEttikleriniz';
import KartlarMilPuan from './Pages/KartlarMilPuan';
import List from './Pages/List';
import MilpuanKacMilpuanimVar from './Pages/MilpuanKacMilpuanimVar';
import MilpuanKacPuanKazanirim from './Pages/MilpuanKacPuanKazanirim';
import MilpuanNasilKazanirim from './Pages/MilpuanNasilKazanirim';
import Modals from './Pages/Modals';
import RuyaSehirler from './Pages/RuyaSehirler';
import RuyaSehirler2 from './Pages/RuyaSehirler2';
import SearchOpen from './Pages/SearchOpen';
import SikcaSorulanSorular from './Pages/SikcaSorulanSorular';
import WingsKartAyricaliklari from './Pages/WingsKartAyricaliklari';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/ayricalik-bilgileri">
                    <AyricalikBilgileri />
                </Route>
                <Route path="/ayricalik-detayları">
                    <AyricalikBilgileri />
                </Route>
                <Route path="/ayricalik-geçerli">
                    <AyricalikBilgileri />
                </Route>
                <Route path="/ayricaliklar-harita">
                    <AyricaliklarHarita />
                </Route>
                <Route path="/ayricaliklar-liste">
                    <AyricaliklarListe />
                </Route>
                <Route path="/blog">
                    <Blog />
                </Route>
                <Route path="/wings-kart-ayricaliklari">
                    <WingsKartAyricaliklari />
                </Route>
                <Route path="/SikcaSorulanSorular">
                    <SikcaSorulanSorular />
                </Route>
                <Route path="/SearchOpen">
                    <SearchOpen />
                </Route>
                <Route path="/RuyaSehirler2">
                    <RuyaSehirler2 />
                </Route>
                <Route path="/RuyaSehirler">
                    <RuyaSehirler />
                </Route>
                <Route path="/Modals">
                    <Modals />
                </Route>
                <Route path="/MilpuanNasilKazanirim">
                    <MilpuanNasilKazanirim />
                </Route>
                <Route path="/MilpuanKacPuanKazanirim">
                    <MilpuanKacPuanKazanirim />
                </Route>
                <Route path="/MilpuanKacMilpuanimVar">
                    <MilpuanKacMilpuanimVar />
                </Route>
                <Route path="/List">
                    <List />
                </Route>
                <Route path="/KartlarMilPuan">
                    <KartlarMilPuan />
                </Route>
                <Route path="/KartKarsilastirma">
                    <KartKarsilastirma />
                </Route>
                <Route path="/KartlarMerakEttikleriniz">
                    <KartlarMerakEttikleriniz />
                </Route>
                <Route path="/Kartlar">
                    <Kartlar />
                </Route>
                <Route path="/KartDetayKampanyalar">
                    <KartDetayKampanyalar />
                </Route>
                <Route path="/KampanyaSonaErdiDetay">
                    <KampanyaSonaErdiDetay />
                </Route>
                <Route path="/KampanyalarSonuc">
                    <KampanyalarSonuc />
                </Route>
                <Route path="/KampanyalarSonaErdi">
                    <KampanyalarSonaErdi />
                </Route>
                <Route path="/Kampanyalar">
                    <Kampanyalar />
                </Route>
                <Route path="/HesaplamaAraclari4">
                    <HesaplamaAraclari4 />
                </Route>
                <Route path="/HesaplamaAraclari3">
                    <HesaplamaAraclari3 />
                </Route>
                <Route path="/HesaplamaAraclari2">
                    <HesaplamaAraclari2 />
                </Route>
                <Route path="/HesaplamaAraclari">
                    <HesaplamaAraclari />
                </Route>
                <Route path="/HemenBasvur">
                    <HemenBasvur />
                </Route>
                <Route path="/FaizVeUcretler2">
                    <FaizVeUcretler2 />
                </Route>
                <Route path="/FaizVeUcretler">
                    <FaizVeUcretler />
                </Route>
                <Route path="/CerezPolitikasi">
                    <CerezPolitikasi />
                </Route>
                <Route path="/BlogDetay">
                    <BlogDetay />
                </Route>
            </Switch>
        </Router>
    );
};

export default App;
