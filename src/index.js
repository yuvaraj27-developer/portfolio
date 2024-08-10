import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const element = document.getElementById('import_src')
const root = createRoot(element);
root.render(<App />);
