import React, { useState, useRef, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface GateSectionProps {
  onSubmit: () => void;
}

const COUNTRIES = [
  { code: 'US', flag: '🇺🇸', dial: '+1', name: 'United States' },
  { code: 'BR', flag: '🇧🇷', dial: '+55', name: 'Brazil' },
  { code: 'PT', flag: '🇵🇹', dial: '+351', name: 'Portugal' },
  { code: 'AF', flag: '🇦🇫', dial: '+93', name: 'Afghanistan' },
  { code: 'AL', flag: '🇦🇱', dial: '+355', name: 'Albania' },
  { code: 'DZ', flag: '🇩🇿', dial: '+213', name: 'Algeria' },
  { code: 'AR', flag: '🇦🇷', dial: '+54', name: 'Argentina' },
  { code: 'AU', flag: '🇦🇺', dial: '+61', name: 'Australia' },
  { code: 'AT', flag: '🇦🇹', dial: '+43', name: 'Austria' },
  { code: 'BE', flag: '🇧🇪', dial: '+32', name: 'Belgium' },
  { code: 'BO', flag: '🇧🇴', dial: '+591', name: 'Bolivia' },
  { code: 'CA', flag: '🇨🇦', dial: '+1', name: 'Canada' },
  { code: 'CL', flag: '🇨🇱', dial: '+56', name: 'Chile' },
  { code: 'CN', flag: '🇨🇳', dial: '+86', name: 'China' },
  { code: 'CO', flag: '🇨🇴', dial: '+57', name: 'Colombia' },
  { code: 'CR', flag: '🇨🇷', dial: '+506', name: 'Costa Rica' },
  { code: 'CU', flag: '🇨🇺', dial: '+53', name: 'Cuba' },
  { code: 'DO', flag: '🇩🇴', dial: '+1', name: 'Dominican Republic' },
  { code: 'EC', flag: '🇪🇨', dial: '+593', name: 'Ecuador' },
  { code: 'EG', flag: '🇪🇬', dial: '+20', name: 'Egypt' },
  { code: 'SV', flag: '🇸🇻', dial: '+503', name: 'El Salvador' },
  { code: 'FR', flag: '🇫🇷', dial: '+33', name: 'France' },
  { code: 'DE', flag: '🇩🇪', dial: '+49', name: 'Germany' },
  { code: 'GT', flag: '🇬🇹', dial: '+502', name: 'Guatemala' },
  { code: 'HN', flag: '🇭🇳', dial: '+504', name: 'Honduras' },
  { code: 'IN', flag: '🇮🇳', dial: '+91', name: 'India' },
  { code: 'IE', flag: '🇮🇪', dial: '+353', name: 'Ireland' },
  { code: 'IL', flag: '🇮🇱', dial: '+972', name: 'Israel' },
  { code: 'IT', flag: '🇮🇹', dial: '+39', name: 'Italy' },
  { code: 'JP', flag: '🇯🇵', dial: '+81', name: 'Japan' },
  { code: 'MX', flag: '🇲🇽', dial: '+52', name: 'Mexico' },
  { code: 'NL', flag: '🇳🇱', dial: '+31', name: 'Netherlands' },
  { code: 'NZ', flag: '🇳🇿', dial: '+64', name: 'New Zealand' },
  { code: 'NI', flag: '🇳🇮', dial: '+505', name: 'Nicaragua' },
  { code: 'NO', flag: '🇳🇴', dial: '+47', name: 'Norway' },
  { code: 'PA', flag: '🇵🇦', dial: '+507', name: 'Panama' },
  { code: 'PY', flag: '🇵🇾', dial: '+595', name: 'Paraguay' },
  { code: 'PE', flag: '🇵🇪', dial: '+51', name: 'Peru' },
  { code: 'PH', flag: '🇵🇭', dial: '+63', name: 'Philippines' },
  { code: 'PL', flag: '🇵🇱', dial: '+48', name: 'Poland' },
  { code: 'KR', flag: '🇰🇷', dial: '+82', name: 'South Korea' },
  { code: 'ES', flag: '🇪🇸', dial: '+34', name: 'Spain' },
  { code: 'SE', flag: '🇸🇪', dial: '+46', name: 'Sweden' },
  { code: 'CH', flag: '🇨🇭', dial: '+41', name: 'Switzerland' },
  { code: 'GB', flag: '🇬🇧', dial: '+44', name: 'United Kingdom' },
  { code: 'UY', flag: '🇺🇾', dial: '+598', name: 'Uruguay' },
  { code: 'VE', flag: '🇻🇪', dial: '+58', name: 'Venezuela' },
];

const GateSection: React.FC<GateSectionProps> = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(COUNTRIES[0]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    setLoading(true);

    const fullPhone = `${selectedCountry.dial}${phone.replace(/\D/g, '')}`;

    try {
      // Save to leads table
      await supabase.from('leads').insert({
        name: name.trim(),
        phone: fullPhone,
        country_code: selectedCountry.code,
        source: 'skills_portal',
      } as any);

      // Send to webhook
      await supabase.functions.invoke('send-lead', {
        body: { name: name.trim(), phone: fullPhone },
      });
    } catch (err) {
      console.error('Submit error:', err);
    }
    onSubmit();
  };

  const inputStyle: React.CSSProperties = {
    width: '100%', padding: '14px 18px', borderRadius: 14,
    background: 'rgba(255,255,255,0.03)', border: '1px solid var(--card-border-custom)',
    color: '#fff', fontFamily: "'Satoshi', sans-serif", fontSize: 14,
    outline: 'none', transition: 'all 0.3s',
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
            style={{ ...inputStyle, marginBottom: 12 }}
          />

          {/* Phone with country selector */}
          <div style={{ display: 'flex', gap: 8, marginBottom: 12 }} ref={dropdownRef}>
            {/* Country dropdown trigger */}
            <div style={{ position: 'relative', flexShrink: 0 }}>
              <button
                type="button"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                style={{
                  display: 'flex', alignItems: 'center', gap: 6,
                  padding: '14px 12px', borderRadius: 14, height: '100%',
                  background: 'rgba(255,255,255,0.03)', border: '1px solid var(--card-border-custom)',
                  color: '#fff', fontFamily: "'Satoshi', sans-serif", fontSize: 14,
                  cursor: 'pointer', outline: 'none', transition: 'all 0.3s',
                  whiteSpace: 'nowrap',
                }}
              >
                <span style={{ fontSize: 18 }}>{selectedCountry.flag}</span>
                <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)' }}>{selectedCountry.dial}</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2.5">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>

              {/* Dropdown list */}
              {dropdownOpen && (
                <div style={{
                  position: 'absolute', top: '100%', left: 0, marginTop: 4,
                  width: 260, maxHeight: 280, overflowY: 'auto',
                  background: '#1a1a2e', border: '1px solid var(--card-border-custom)',
                  borderRadius: 12, zIndex: 50, padding: 4,
                  boxShadow: '0 12px 40px rgba(0,0,0,0.5)',
                }}>
                  {COUNTRIES.map((c) => (
                    <button
                      key={c.code + c.dial}
                      type="button"
                      onClick={() => { setSelectedCountry(c); setDropdownOpen(false); }}
                      style={{
                        display: 'flex', alignItems: 'center', gap: 10, width: '100%',
                        padding: '10px 12px', border: 'none', borderRadius: 8,
                        background: selectedCountry.code === c.code ? 'rgba(255,255,255,0.08)' : 'transparent',
                        color: '#fff', fontFamily: "'Satoshi', sans-serif", fontSize: 13,
                        cursor: 'pointer', textAlign: 'left', transition: 'background 0.15s',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.06)')}
                      onMouseLeave={(e) => (e.currentTarget.style.background = selectedCountry.code === c.code ? 'rgba(255,255,255,0.08)' : 'transparent')}
                    >
                      <span style={{ fontSize: 18 }}>{c.flag}</span>
                      <span style={{ color: 'rgba(255,255,255,0.5)', minWidth: 40 }}>{c.dial}</span>
                      <span>{c.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Phone input */}
            <input
              type="tel"
              placeholder="Número de telefone"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              style={{ ...inputStyle, flex: 1 }}
            />
          </div>

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
