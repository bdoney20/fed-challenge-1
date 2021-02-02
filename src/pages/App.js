import React, {Component} from 'react';
import './app.css';
import ProductNav from '../components/product-nav/index.js';
import MainNav from '../components/main-nav/index.js';
import Hero from '../components/hero/index.js';
import MediaSlider from '../components/media-slider/index.js';
import Library from '../components/library/index.js';
import Equipment from '../components/equipment-section/index.js';
import Footer from '../components/footer/index.js';

export default class App extends Component {
    render() {
        return (
            <div>
                <header>
                    <ProductNav/>
                    <MainNav/>
                </header>
                <main>
                    <Hero/>
                    <MediaSlider/>
                    <Library/>
                    <Equipment/>
                    <Footer />
                </main>
            </div>
        )
    }
}