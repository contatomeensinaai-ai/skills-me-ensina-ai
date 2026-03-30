import React from 'react';

interface EventBannerProps {
  variant?: 'default' | 'final';
}

const EventBanner: React.FC<EventBannerProps> = ({ variant = 'default' }) => {
  const isFinal = variant === 'final';

  return (
    <div
      className={`animate-up ${isFinal ? 'delay-5' : 'delay-1'}`}
      style={{
        position: 'relative', overflow: 'hidden', borderRadius: 20,
        border: `1px solid ${isFinal ? 'rgba(249,115,22,0.25)' : 'rgba(245,158,11,0.15)'}`,
        padding: '40px 32px', textAlign: 'center', marginBottom: 48
      }}
    >
      {/* Background overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: isFinal
          ? 'linear-gradient(135deg, rgba(249,115,22,0.08), rgba(239,68,68,0.03), rgba(249,115,22,0.08))'
          : 'linear-gradient(135deg, rgba(245,158,11,0.06), rgba(249,115,22,0.02), rgba(245,158,11,0.06))'
      }} />
      {/* Radial glow */}
      <div style={{
        position: 'absolute', top: 0, right: 0, width: 400, height: 400,
        background: 'radial-gradient(circle, rgba(245,158,11,0.08), transparent 70%)'
      }} />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <span style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          padding: '6px 14px', borderRadius: 100,
          background: 'var(--amber-dim)', border: '1px solid rgba(245,158,11,0.15)',
          color: 'var(--amber)', fontSize: 10, fontWeight: 700,
          letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 16
        }}>
          <span style={{
            width: 6, height: 6, borderRadius: '50%', background: 'var(--amber)',
            animation: 'pulse-dot 2s ease-in-out infinite'
          }} />
          {isFinal ? 'Últimas Vagas' : 'Evento Presencial'}
        </span>

        <h3 style={{ fontSize: 'clamp(24px, 4vw, 32px)', fontWeight: 900, letterSpacing: '-0.03em', marginBottom: 8 }}>
          A Nova Virada da IA
        </h3>
        <p className="text-destructive-foreground" style={{ fontSize: 14, marginBottom: 4 }}>
          30 de Abril &bull; Boteco do Manolo &bull; Framingham, MA
        </p>
        <p className="text-destructive-foreground" style={{ fontSize: 13, marginBottom: 32, maxWidth: 500, marginLeft: 'auto', marginRight: 'auto' }}>
          {isFinal
            ? '50 empresários. 1 noite. A oportunidade de transformar seu negócio com IA. Inclui jantar.'
            : 'Descubra como a IA pode organizar e automatizar sua empresa inteira. 50 vagas.'}
        </p>
        <a
          href="#evento"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '16px 36px', borderRadius: 14,
            background: 'linear-gradient(135deg, var(--amber), var(--orange))',
            color: '#000', fontFamily: "'Satoshi', sans-serif", fontSize: 13,
            fontWeight: 800, letterSpacing: '0.06em', border: 'none',
            cursor: 'pointer', textDecoration: 'none', transition: 'all 0.3s',
            boxShadow: '0 0 40px -8px var(--amber-glow)'
          }}
        >
          {isFinal ? 'QUERO GARANTIR MINHA VAGA →' : 'QUERO MINHA VAGA →'}
        </a>
        <p style={{ fontSize: 11, color: 'var(--text-faint)', marginTop: 12 }}>
          Ticket: $62 &bull; Inclui jantar + refrigerante
        </p>
      </div>
    </div>
  );
};

export default EventBanner;
