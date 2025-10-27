"use client";

import { useState, useEffect } from 'react';
import CardOngs from './CardOngs';
import { GAEvent } from './GoogleAnalytics';

export default function ListaOngs() {
  const [ongs, setOngs] = useState([]);
  const [hasTrackedView, setHasTrackedView] = useState(false);

  useEffect(() => {
    // Buscar dados do JSON
    fetch('/data/ongs.json')
      .then(response => response.json())
      .then(data => setOngs(data))
      .catch(error => console.error('Erro ao carregar ONGs:', error));
  }, []);

  useEffect(() => {
    // Rastrear quando a seção de ONGs entra na viewport
    const handleScroll = () => {
      const element = document.getElementById('ongs-section');
      if (element && !hasTrackedView) {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;
        
        if (isVisible) {
          GAEvent.viewOngSection();
          setHasTrackedView(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Verificar na montagem

    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasTrackedView]);

  // Rastrear tempo na página (30 segundos)
  useEffect(() => {
    const timer = setTimeout(() => {
      GAEvent.timeOnPage(30);
    }, 30000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="ongs-section" className="py-16 px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Título da Seção */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-azul-dark">
          ONGs Verificadas
        </h2>

        {/* Contador de ONGs */}
        <p className="text-center text-gray-600 mb-8">
          Encontramos <span className="font-bold text-azul-primary">{ongs.length}</span> ONGs verificadas para você
        </p>

        {/* Grid de Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ongs.map(ong => (
            <CardOngs key={ong.id} ong={ong} />
          ))}
        </div>

        {/* Mensagem caso não haja ONGs */}
        {ongs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">Carregando ONGs...</p>
          </div>
        )}
      </div>
    </section>
  );
}