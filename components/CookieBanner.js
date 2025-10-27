'use client';

import { useState, useEffect } from 'react';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Verificar se o usuário já aceitou os cookies
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
    
    // Inicializar o Google Analytics após consentimento
    if (window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': 'granted'
      });
    }
  };

  const rejectCookies = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setShowBanner(false);
    
    // Desabilitar o Google Analytics
    if (window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': 'denied'
      });
    }
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-azul-primary shadow-lg z-50 animate-slide-up">
      <div className="max-w-6xl mx-auto p-4 md:p-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <span className="text-2xl">🍪</span>
            <div>
              <h3 className="font-bold text-gray-800 mb-1">Este site usa cookies</h3>
              <p className="text-sm text-gray-600">
                Usamos cookies para melhorar sua experiência e entender como você interage com nosso site. 
                Os dados nos ajudam a divulgar melhor o trabalho das ONGs. 
                <a href="/privacidade" className="text-azul-primary underline ml-1">
                  Política de Privacidade
                </a>
              </p>
            </div>
          </div>
          
          <div className="flex gap-3 w-full md:w-auto">
            <button
              onClick={rejectCookies}
              className="flex-1 md:flex-none px-6 py-2 border-2 border-gray-300 text-gray-700 rounded-full hover:bg-gray-100 transition"
            >
              Rejeitar
            </button>
            <button
              onClick={acceptCookies}
              className="flex-1 md:flex-none px-6 py-2 bg-azul-primary text-white rounded-full hover:bg-azul-dark transition"
            >
              Aceitar Cookies
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}