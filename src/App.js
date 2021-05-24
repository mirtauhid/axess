import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AyricalikBilgileri from './Pages/AyricalikBilgileri';
import AyricaliklarHarita from './Pages/AyricaliklarHarita';
import AyricaliklarListe from './Pages/AyricaliklarListe';
import Blog from './Pages/Blog';
import Home from './Pages/Home';

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
            </Switch>
        </Router>
    );
};

export default App;
