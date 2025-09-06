'use client';

import { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProductsSection from './components/ProductsSection';
import BulletinBoardSection from './components/BulletinBoardSection';
import MobileAppSection from './components/MobileAppSection';
import CompanyNewsSection from './components/CompanyNewsSection';
import ContactSection from './components/ContactSection';

export default function Home() {
    const [currentSection, setCurrentSection] = useState('hero');

    // useEffect(() => {
    //     function fixScale() {
    //         // допустим "ноутбуки" — это ширина >= 1024px
    //         if (window.innerWidth >= 1024) {
    //             const scaleFix = 1 / window.devicePixelRatio;
    //
    //             document.body.style.transform = `scale(${scaleFix})`;
    //             document.body.style.transformOrigin = '0 0';
    //
    //             document.body.style.width = 100 * window.devicePixelRatio + '%';
    //             document.body.style.height = 100 * window.devicePixelRatio + '%';
    //         } else {
    //             // сбросить изменения, если снова зашли на мобилке
    //             document.body.style.transform = '';
    //             document.body.style.width = '';
    //             document.body.style.height = '';
    //         }
    //     }
    //
    //     fixScale();
    //     window.addEventListener('resize', fixScale);
    //
    //     return () => window.removeEventListener('resize', fixScale);
    // }, []);

    const sections = [
        'hero',
        'about',
        'catalog',
        'bulletin-board',
        'breed',
        'company-news',
        'contacts',
    ];

    return (
        <main className="min-h-screen">
            <Header />

            <HeroSection sections={sections} setCurrentSection={setCurrentSection} currentSection={currentSection} />
            <AboutSection sections={sections} setCurrentSection={setCurrentSection} currentSection={currentSection} />
            <ProductsSection sections={sections} setCurrentSection={setCurrentSection} currentSection={currentSection} />
            <BulletinBoardSection sections={sections} setCurrentSection={setCurrentSection} currentSection={currentSection} />
            <MobileAppSection sections={sections} setCurrentSection={setCurrentSection} currentSection={currentSection} />
            <CompanyNewsSection sections={sections} setCurrentSection={setCurrentSection} currentSection={currentSection} />
            <ContactSection sections={sections} setCurrentSection={setCurrentSection} currentSection={currentSection} />
        </main>
    );
}
