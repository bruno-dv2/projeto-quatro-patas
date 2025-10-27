'use client';

import Script from 'next/script';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

// Componente principal do Google Analytics
export default function GoogleAnalytics({ GA_MEASUREMENT_ID }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Rastrear mudanças de página
  useEffect(() => {
    if (pathname && window.gtag) {
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: pathname + (searchParams ? `?${searchParams}` : ''),
      });
    }
  }, [pathname, searchParams, GA_MEASUREMENT_ID]);

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
    </>
  );
}

// Funções auxiliares para eventos personalizados
export const GAEvent = {
  // Rastrear cliques em cards de ONGs
  clickOngCard: (ongName, ongId) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'click_ong_card', {
        event_category: 'engagement',
        event_label: ongName,
        ong_id: ongId,
        value: 1
      });
    }
  },

  // Rastrear cliques em redes sociais das ONGs
  clickOngSocial: (ongName, socialNetwork) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'click_ong_social', {
        event_category: 'engagement',
        event_label: `${ongName} - ${socialNetwork}`,
        social_network: socialNetwork,
        value: 1
      });
    }
  },

  // Rastrear navegação no menu
  clickMenu: (menuItem) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'click_menu', {
        event_category: 'navigation',
        event_label: menuItem,
        value: 1
      });
    }
  },

  // Rastrear scroll até as ONGs
  viewOngSection: () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'view_ong_section', {
        event_category: 'engagement',
        event_label: 'Visualizou seção de ONGs',
        value: 1
      });
    }
  },

  // Rastrear tempo na página (exemplo: após 30 segundos)
  timeOnPage: (seconds) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'time_on_page', {
        event_category: 'engagement',
        event_label: `${seconds} segundos na página`,
        value: seconds
      });
    }
  }
};