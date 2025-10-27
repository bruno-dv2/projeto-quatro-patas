'use client';

import Script from 'next/script';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

/**
 * Componente Google Analytics
 */
export default function GoogleAnalytics({ GA_MEASUREMENT_ID }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [consentGranted, setConsentGranted] = useState(false);

  // Verificar e aplicar consentimento de cookies
  useEffect(() => {
    const checkConsent = () => {
      const consent = localStorage.getItem('cookieConsent');
      const granted = consent === 'accepted';
      setConsentGranted(granted);
      
      // Atualizar consentimento no Google Analytics se aceito
      if (granted && window.gtag) {
        window.gtag('consent', 'update', {
          'analytics_storage': 'granted'
        });
      }
    };

    checkConsent();
    const interval = setInterval(checkConsent, 2000);
    return () => clearInterval(interval);
  }, []);

  // Rastrear mudanças de página
  useEffect(() => {
    if (pathname && window.gtag && consentGranted && GA_MEASUREMENT_ID) {
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: pathname + (searchParams ? `?${searchParams}` : ''),
      });
    }
  }, [pathname, searchParams, GA_MEASUREMENT_ID, consentGranted]);

  // Validação do ID
  if (!GA_MEASUREMENT_ID || GA_MEASUREMENT_ID === 'undefined') {
    return null;
  }

  return (
    <>
      {/* Script principal do Google Analytics */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
        onLoad={() => {
          const consent = localStorage.getItem('cookieConsent');
          if (consent === 'accepted' && window.gtag) {
            window.gtag('consent', 'update', {
              'analytics_storage': 'granted'
            });
          }
        }}
      />
      
      {/* Inicialização do gtag e configuração */}
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          
          const hasConsent = localStorage.getItem('cookieConsent') === 'accepted';
          
          gtag('consent', 'default', {
            'analytics_storage': hasConsent ? 'granted' : 'denied'
          });
          
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  );
}

/**
 * Funções auxiliares para rastreamento de eventos personalizados
 */
export const GAEvent = {
  clickOngCard: (ongName, ongId) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'click_ong_card', {
        event_category: 'engagement',
        event_label: ongName,
        ong_name: ongName,
        ong_id: ongId,
        value: 1
      });
    }
  },

  clickOngSocial: (ongName, socialNetwork) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'click_ong_social', {
        event_category: 'engagement',
        event_label: `${ongName} - ${socialNetwork}`,
        ong_name: ongName,
        social_network: socialNetwork,
        value: 1
      });
    }
  },

  clickMenu: (menuItem) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'click_menu', {
        event_category: 'navigation',
        event_label: menuItem,
        menu_item: menuItem,
        value: 1
      });
    }
  },

  viewOngSection: () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'view_ong_section', {
        event_category: 'engagement',
        event_label: 'Visualizou seção de ONGs',
        value: 1
      });
    }
  },

  timeOnPage: (seconds) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'time_on_page', {
        event_category: 'engagement',
        event_label: `${seconds} segundos na página`,
        time_seconds: seconds,
        value: seconds
      });
    }
  }
};