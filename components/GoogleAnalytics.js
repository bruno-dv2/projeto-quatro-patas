'use client';

import Script from 'next/script';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

/**
 * Componente Google Analytics
 * Gerencia o tracking de eventos e páginas com suporte a consentimento de cookies (LGPD)
 * Desabilitado em localhost para não poluir dados de produção
 */
export default function GoogleAnalytics({ GA_MEASUREMENT_ID }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [consentGranted, setConsentGranted] = useState(false);
  
  // Verificar se está em ambiente de desenvolvimento
  const isDevelopment = typeof window !== 'undefined' && 
                        window.location.hostname === 'localhost';

  // Verificar e aplicar consentimento de cookies
  useEffect(() => {
    const checkConsent = () => {
      const consent = localStorage.getItem('cookieConsent');
      const granted = consent === 'accepted';
      setConsentGranted(granted);
            
      // Atualizar consentimento no Google Analytics se aceito
      if (granted && window.gtag && !isDevelopment) {
        window.gtag('consent', 'update', {
          'analytics_storage': 'granted'
        });
      }
    };

    // Verificar imediatamente ao montar
    checkConsent();
    
    // Verificar periodicamente para sincronizar entre abas
    const interval = setInterval(checkConsent, 2000);

    return () => clearInterval(interval);
  }, [isDevelopment]);

  // Rastrear mudanças de página
  useEffect(() => {
    if (pathname && window.gtag && consentGranted && !isDevelopment) {
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: pathname + (searchParams ? `?${searchParams}` : ''),
      });
    }
  }, [pathname, searchParams, GA_MEASUREMENT_ID, consentGranted, isDevelopment]);

  // Não renderizar se ID inválido ou em desenvolvimento
  if (!GA_MEASUREMENT_ID || GA_MEASUREMENT_ID === 'undefined' || isDevelopment) {
    return null;
  }

  return (
    <>
      {/* Script principal do Google Analytics */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
        onLoad={() => {
          // Aplicar consentimento após carregar o script
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
          
          // Verificar se já tem consentimento ao iniciar
          const hasConsent = localStorage.getItem('cookieConsent') === 'accepted';
          
          // Configurar consentimento padrão
          gtag('consent', 'default', {
            'analytics_storage': hasConsent ? 'granted' : 'denied'
          });
          
          // Configurar propriedade do GA4
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
 * Todos os eventos são enviados apenas se gtag estiver disponível e não estiver em localhost
 */
export const GAEvent = {
  /**
   * Rastrear cliques em cards de ONGs
   */
  clickOngCard: (ongName, ongId) => {
    // Não enviar em localhost
    if (typeof window !== 'undefined' && 
        window.gtag && 
        window.location.hostname !== 'localhost') {
      window.gtag('event', 'click_ong_card', {
        event_category: 'engagement',
        event_label: ongName,
        ong_name: ongName,
        ong_id: ongId,
        value: 1
      });
    }
  },

  /**
   * Rastrear cliques em redes sociais das ONGs
   */
  clickOngSocial: (ongName, socialNetwork) => {
    if (typeof window !== 'undefined' && 
        window.gtag && 
        window.location.hostname !== 'localhost') {
      window.gtag('event', 'click_ong_social', {
        event_category: 'engagement',
        event_label: `${ongName} - ${socialNetwork}`,
        ong_name: ongName,
        social_network: socialNetwork,
        value: 1
      });
    }
  },

  /**
   * Rastrear cliques no menu de navegação
   */
  clickMenu: (menuItem) => {
    if (typeof window !== 'undefined' && 
        window.gtag && 
        window.location.hostname !== 'localhost') {
      window.gtag('event', 'click_menu', {
        event_category: 'navigation',
        event_label: menuItem,
        menu_item: menuItem,
        value: 1
      });
    }
  },

  /**
   * Rastrear visualização da seção de ONGs
   * Disparado quando usuário faz scroll até a seção
   */
  viewOngSection: () => {
    if (typeof window !== 'undefined' && 
        window.gtag && 
        window.location.hostname !== 'localhost') {
      window.gtag('event', 'view_ong_section', {
        event_category: 'engagement',
        event_label: 'Visualizou seção de ONGs',
        value: 1
      });
    }
  },

  /**
   * Rastrear tempo na página
   */
  timeOnPage: (seconds) => {
    if (typeof window !== 'undefined' && 
        window.gtag && 
        window.location.hostname !== 'localhost') {
      window.gtag('event', 'time_on_page', {
        event_category: 'engagement',
        event_label: `${seconds} segundos na página`,
        time_seconds: seconds,
        value: seconds
      });
    }
  }
};