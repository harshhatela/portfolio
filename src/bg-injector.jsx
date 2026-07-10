import React from 'react';
import { createRoot } from 'react-dom/client';
import BackgroundEffects from './components/BackgroundEffects';
import './index.css';
import './styles/animations.css';

const container = document.getElementById('bg-effects-root');
if (container) {
  createRoot(container).render(
    <React.StrictMode>
      <BackgroundEffects />
    </React.StrictMode>
  );
}
