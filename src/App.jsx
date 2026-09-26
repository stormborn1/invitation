import React, { useState } from 'react';
import Loader from './components/Opening/Loader';
import InvitationGate from './components/Opening/InvitationGate';
import AmbientScene from './components/AmbientScene/AmbientScene';
import Navbar from './components/Navigation/Navbar';

import Hero from './sections/Hero';
import Bride from './sections/Bride';
import Groom from './sections/Groom';
import Union from './sections/Union';
import Dua from './sections/Dua';
import Events from './sections/Events';
import Countdown from './sections/Countdown';
import Greetings from './sections/Greetings';
import Footer from './sections/Footer';

import { useLenis } from './hooks/useLenis';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isGateOpen, setIsGateOpen] = useState(false);

  // Enable Lenis smooth scrolling when the gate opens
  useLenis(isGateOpen);

  return (
    <div className="relative min-h-screen bg-[#FBF7F1] bg-paper-texture text-[#4B403B] overflow-x-hidden selection:bg-[#E9B8C4]/30 selection:text-[#5E705B]">
      {/* LOADER */}
      {isLoading && <Loader onComplete={() => setIsLoading(false)} />}

      {/* INVITATION GATE */}
      {!isLoading && !isGateOpen && (
        <InvitationGate onGateOpen={() => setIsGateOpen(true)} />
      )}

      {/* MAIN WEBSITE CONTENT (Revealed after gate opens) */}
      {isGateOpen && (
        <div className="relative animate-fadeIn">
          {/* LAYER 1 & 3: PERSISTENT BOTANICAL ENVIRONMENT (Fixed Foreground Frame Z-40) */}
          <AmbientScene />

          {/* MINIMAL LUXURY NAVBAR (Z-50) */}
          <Navbar visible={isGateOpen} />

          {/* LAYER 2: SCROLLING WEDDING CONTENT (Z-10, Sitting Behind Botanical Foreground Frame) */}
          <main className="relative z-10">
            <Hero active={isGateOpen} />
            <Bride />
            <Groom />
            <Union />
            <Dua />
            <Events />
            <Countdown />
            <Greetings />
            <Footer />
          </main>
        </div>
      )}
    </div>
  );
}
