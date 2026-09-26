import React from 'react';
import BotanicalLayer from './BotanicalLayer';
import ButterflyLayer from './ButterflyLayer';
import ParticleLayer from './ParticleLayer';

export default function AmbientScene() {
  return (
    <>
      <BotanicalLayer />
      <ButterflyLayer />
      <ParticleLayer />
    </>
  );
}
