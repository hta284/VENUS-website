/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from "./components/Header";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import Products from "./components/Products";
import Benefits from "./components/Benefits";
import HowToUse from "./components/HowToUse";
import Ingredients from "./components/Ingredients";
import Reviews from "./components/Reviews";
import Heritage from "./components/Heritage";
import Channels from "./components/Channels";
import Dashboard from "./components/Dashboard";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import FloatingChat from "./components/FloatingChat";
import ExitPopup from "./components/ExitPopup";

export default function App() {
  return (
    <div className="font-sans text-brand-text bg-brand-background selection:bg-brand-primary/20 selection:text-brand-primary">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Products />
        <Benefits />
        <HowToUse />
        <Ingredients />
        <Reviews />
        <Dashboard />
        <Heritage />
        <Channels />
        <Newsletter />
      </main>
      <Footer />
      <FloatingChat />
      <ExitPopup />
    </div>
  );
}
