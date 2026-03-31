import React, { useState } from 'react';

interface GateSectionProps {
  onSubmit: () => void;
}

const GateSection: React.FC<GateSectionProps> = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    setLoading(true);
    try {
      const params = new URLSearchParams();
      params.append('name', name.trim());
      params.append('phone', phone.trim());
      await fetch('https://services.leadconnectorhq.com/hooks/yiFVAZdDuHVfYsh1D4pt/webhook-trigger/76a78c81-7bce-4913-8e22-365fc56f5ffc', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params.toString(),
        mode: 'no-cors',
      });
    } catch (err) {
      console.error('Webhook error:', err);
    }
    onSubmit();
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 20px' }}>
      <div className="animate-up" style={{ width: '100%', maxWidth: 480, textAlign: 'center' }}>
        {/* Badge */}
        <span style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          padding: '6px 14px', borderRadius: 100,
          fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
          background: 'var(--amber-dim)', border: '1px solid rgba(245,158,11,0.15)', color: 'var(--amber)'
        }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="4 17 10 11 4 5" /><line x1="12" y1="19" x2="20" y2="19" />
          </svg>
          Acesso Gratuito
        </span>

        {/* Title */}
        <h1 style={{
          fontSize: 'clamp(28px, 5vw, 40px)', fontWeight: 900,
          letterSpacing: '-0.03em', lineHeight: 1.1, margin: '20px 0 8px'
        }}>
          Skills Claude Code<br />para Empresários
        </h1>
        <p style={{ fontSize: 16, fontWeight: 500, color: 'var(--text-muted-custom)', marginBottom: 24 }}>
          Digite seus dados e receba acesso imediato:
        </p>

        {/* Features */}
        <ul style={{ listStyle: 'none', textAlign: 'left', margin: '0 auto 28px', maxWidth: 380, padding: 0 }}>
          {[
            '8 skills profissionais prontas para instalar',
            'Guia passo a passo para começar (mesmo sem saber nada de tecnologia)',
            'Proposta comercial, orçamento, copy de anúncio, contratos e mais',
            'Como usar cada skill dentro do Claude Code'
          ].map((text, i) => (
            <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 14, color: 'var(--text-muted-custom)', marginBottom: 12, lineHeight: 1.5 }}>
              <span style={{ color: 'var(--emerald)', fontSize: 16, flexShrink: 0, marginTop: 1 }}>✓</span>
              {text}
            </li>
          ))}
        </ul>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Seu nome completo"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{
              width: '100%', padding: '14px 18px', borderRadius: 14,
              background: 'rgba(255,255,255,0.03)', border: '1px solid var(--card-border-custom)',
              color: '#fff', fontFamily: "'Satoshi', sans-serif", fontSize: 14,
              outline: 'none', marginBottom: 12, transition: 'all 0.3s'
            }}
          />
          <input
            type="tel"
            placeholder="WhatsApp com DDD (ex: 11 99999-9999)"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            style={{
              width: '100%', padding: '14px 18px', borderRadius: 14,
              background: 'rgba(255,255,255,0.03)', border: '1px solid var(--card-border-custom)',
              color: '#fff', fontFamily: "'Satoshi', sans-serif", fontSize: 14,
              outline: 'none', marginBottom: 12, transition: 'all 0.3s'
            }}
          />
          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%', padding: '16px 24px', borderRadius: 14,
              background: 'linear-gradient(135deg, var(--amber), var(--orange))',
              color: '#000', fontFamily: "'Satoshi', sans-serif", fontSize: 14,
              fontWeight: 800, letterSpacing: '0.04em', border: 'none', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
              transition: 'all 0.3s', animation: 'glow 3s ease-in-out infinite'
            }}
          >
            {loading ? 'Liberando acesso...' : 'ACESSAR 8 SKILLS GRATUITAS →'}
          </button>
        </form>
        <p style={{ fontSize: 11, color: 'var(--text-faint)', marginTop: 16, textAlign: 'center' }}>
          Sem spam. Seus dados estão seguros.
        </p>

        {/* Event Mini */}
        <div style={{ marginTop: 28, paddingTop: 24, borderTop: '1px solid var(--card-border-custom)' }}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 12,
            padding: '14px 16px', borderRadius: 14,
            background: 'var(--card-custom)', border: '1px solid var(--card-border-custom)'
          }}>
            <span style={{ color: 'var(--amber)', flexShrink: 0 }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            </span>
            <div>
              <p style={{ fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.8)' }}>A Nova Virada da IA — 30 de Abril</p>
              <p style={{ fontSize: 11, color: 'var(--text-muted-custom)' }}>Evento presencial em Framingham, MA. 50 vagas.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GateSection;
