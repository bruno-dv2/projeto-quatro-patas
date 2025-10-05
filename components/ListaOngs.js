"use client";

import { useState, useEffect } from 'react';
import CardOngs from './CardOngs';

export default function ListaOngs() {
  const [ongs, setOngs] = useState([]);

  useEffect(() => {
    // Buscar dados do JSON
    fetch('/data/ongs.json')
      .then(response => response.json())
      .then(data => setOngs(data))
      .catch(error => console.error('Erro ao carregar ONGs:', error));
  }, []);

  return (
    <section className="py-16 px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Título da Seção */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-azul-dark">
          ONGs Verificadas
        </h2>

        {/* Grid de Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ongs.map(ong => (
            <CardOngs key={ong.id} ong={ong} />
          ))}
        </div>
      </div>
    </section>
  );
}