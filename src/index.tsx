import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './output.css';

const element = document.getElementById('import_src')
const root = createRoot(element);
root.render(<App />);

