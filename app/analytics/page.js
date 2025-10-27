'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function AnalyticsDashboard() {
  const [metrics, setMetrics] = useState({
    pageViews: 0,
    uniqueVisitors: 0,
    avgTimeOnPage: '0:00',
    topOngs: [],
    socialClicks: {
      Instagram: 0,
      Facebook: 0,
      WhatsApp: 0,
      Site: 0
    }
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [errorDetails, setErrorDetails] = useState(null);

  useEffect(() => {
    // Buscar dados do Google Analytics
    fetch('/api/analytics')
      .then(response => {
        
        if (!response.ok) {
          return response.json().then(data => {
            throw new Error(JSON.stringify(data, null, 2));
          });
        }
        return response.json();
      })
      .then(data => {
        setMetrics(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Erro completo:', err);
        setError(err.message);
        setErrorDetails(err.toString());
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-azul-primary mx-auto mb-4"></div>
          <p className="text-gray-600">Carregando dados do Analytics...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-2xl w-full">
          <h3 className="text-red-800 font-bold mb-2">Erro ao carregar dados</h3>
          <div className="bg-white p-4 rounded border border-red-300 mb-4">
            <pre className="text-xs text-red-600 overflow-auto whitespace-pre-wrap">
              {error}
            </pre>
          </div>
          {errorDetails && (
            <div className="bg-white p-4 rounded border border-red-300 mb-4">
              <p className="text-xs font-bold text-red-800 mb-2">Detalhes adicionais:</p>
              <pre className="text-xs text-red-600 overflow-auto whitespace-pre-wrap">
                {errorDetails}
              </pre>
            </div>
          )}
          <button 
            onClick={() => window.location.reload()} 
            className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Tentar novamente
          </button>
          <Link 
            href="/" 
            className="mt-4 ml-2 inline-block bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
          >
            Voltar ao Site
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-azul-primary text-white py-6 px-8">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">Analytics Dashboard</h1>
          <Link href="/" className="bg-white text-azul-primary px-4 py-2 rounded-lg hover:bg-gray-100 transition">
            Voltar ao Site
          </Link>
        </div>
      </header>

      {/* Métricas Principais */}
      <div className="max-w-6xl mx-auto p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Card: Visualizações */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-gray-500 text-sm font-medium mb-2">Visualizações da Página</h3>
            <p className="text-3xl font-bold text-azul-primary">{metrics.pageViews.toLocaleString('pt-BR')}</p>
            <p className="text-gray-500 text-sm mt-2">Últimos 30 dias</p>
          </div>

          {/* Card: Visitantes Únicos */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-gray-500 text-sm font-medium mb-2">Visitantes Únicos</h3>
            <p className="text-3xl font-bold text-azul-primary">{metrics.uniqueVisitors.toLocaleString('pt-BR')}</p>
            <p className="text-gray-500 text-sm mt-2">Últimos 30 dias</p>
          </div>

          {/* Card: Tempo Médio */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-gray-500 text-sm font-medium mb-2">Tempo Médio na Página</h3>
            <p className="text-3xl font-bold text-azul-primary">{metrics.avgTimeOnPage}</p>
            <p className="text-gray-500 text-sm mt-2">Por sessão</p>
          </div>
        </div>

        {/* Grid com 2 colunas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* ONGs Mais Clicadas */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4 text-gray-800">ONGs Mais Populares</h2>
            {metrics.topOngs.length > 0 ? (
              <div className="space-y-3">
                {metrics.topOngs.map((ong, index) => (
                  <div key={index} className="flex justify-between items-center pb-3 border-b border-gray-100">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl font-bold text-gray-400">#{index + 1}</span>
                      <span className="font-medium">{ong.name}</span>
                    </div>
                    <span className="bg-azul-light text-azul-primary px-3 py-1 rounded-full text-sm font-semibold">
                      {ong.clicks} cliques
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-center py-8">Nenhum dado disponível ainda</p>
            )}
          </div>

          {/* Cliques em Redes Sociais */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4 text-gray-800">Cliques em Redes Sociais</h2>
            <div className="space-y-3">
              {Object.entries(metrics.socialClicks).map(([network, clicks]) => {
                const colors = {
                  Instagram: 'bg-pink-100 text-pink-600',
                  Facebook: 'bg-blue-100 text-blue-600',
                  WhatsApp: 'bg-green-100 text-green-600',
                  Site: 'bg-gray-100 text-gray-600'
                };
                const maxClicks = Math.max(...Object.values(metrics.socialClicks), 1);
                const percentage = (clicks / maxClicks) * 100;

                return (
                  <div key={network} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{network}</span>
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${colors[network]}`}>
                        {clicks} cliques
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${colors[network].split(' ')[0]}`}
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Instruções do Google Analytics */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
          <h3 className="text-lg font-bold text-blue-900 mb-2">Dados atualizados automaticamente</h3>
          <p className="text-blue-800 mb-3">
            Os dados acima são buscados diretamente do Google Analytics em tempo real.
          </p>
          <p className="text-blue-700 text-sm">
            Para ver mais detalhes, acesse o{' '}
            <a href="https://analytics.google.com" target="_blank" className="underline font-semibold">
              Google Analytics
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}