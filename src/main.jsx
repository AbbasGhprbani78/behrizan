import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { LanguageProvider } from './context/langugaeContext.jsx'
import { QueryClient, QueryClientProvider } from 'react-query';

const Client = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <BrowserRouter>
      <LanguageProvider>
        <QueryClientProvider client={Client}>
          <App />
        </QueryClientProvider>
      </LanguageProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
