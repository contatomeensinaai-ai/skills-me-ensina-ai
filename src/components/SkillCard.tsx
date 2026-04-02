import React, { useState } from 'react';
import type { Skill } from '@/data/skillsData';

interface SkillCardProps {
  skill: Skill;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [copiedInstall, setCopiedInstall] = useState(false);

  const handleCopyInstall = () => {
    navigator.clipboard.writeText(skill.comoInstalar);
    setCopiedInstall(true);
    setTimeout(() => setCopiedInstall(false), 2000);
  };

  return (
    <div
      style={{
        position: 'relative', overflow: 'hidden', borderRadius: 18,
        border: '1px solid var(--card-border-custom)',
        background: 'linear-gradient(135deg, var(--card-custom), rgba(255,255,255,0.005))',
        padding: 24, transition: 'all 0.4s'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'rgba(245,158,11,0.2)';
        e.currentTarget.style.boxShadow = '0 0 40px -15px var(--amber-glow)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'var(--card-border-custom)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      {/* Icon */}
      <div style={{
        width: 40, height: 40, borderRadius: 12,
        background: 'linear-gradient(135deg, rgba(245,158,11,0.15), rgba(249,115,22,0.06))',
        border: '1px solid rgba(245,158,11,0.08)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 18, marginBottom: 14
      }}>
        {skill.icon}
      </div>

      <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 6 }}>{skill.title}</h3>
      <p style={{ fontSize: 13, color: 'var(--text-muted-custom)', marginBottom: 12, lineHeight: 1.6 }}>{skill.desc}</p>

      {/* Substitui badge */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12,
        padding: '8px 12px', borderRadius: 10,
        background: 'rgba(16,185,129,0.06)', border: '1px solid rgba(16,185,129,0.1)'
      }}>
        <span style={{ fontSize: 12, color: 'rgba(16,185,129,0.8)', fontWeight: 600 }}>
          Substitui: {skill.substitui}
        </span>
        <span style={{
          fontSize: 11, color: 'rgba(239,68,68,0.7)', fontWeight: 500,
          textDecoration: 'line-through'
        }}>
          {skill.custoSubstituto}
        </span>
      </div>

      {/* Tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginBottom: 14 }}>
        {skill.tags.map((tag) => (
          <span key={tag} style={{
            fontSize: 10, padding: '3px 8px', borderRadius: 6,
            background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)',
            color: 'var(--text-faint)', fontWeight: 500
          }}>
            {tag}
          </span>
        ))}
      </div>

      {/* Buttons row */}
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        {/* Toggle details */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            fontSize: 12, fontWeight: 600, color: '#ffffff',
            background: 'none', border: 'none', cursor: 'pointer',
            fontFamily: "'Satoshi', sans-serif", padding: 0, transition: 'color 0.3s'
          }}
        >
          <span>{isOpen ? 'Fechar detalhes' : 'Ver como instalar e usar'}</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
            style={{ transition: 'transform 0.3s', transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>

        {/* GitHub link */}
        <a
          href={skill.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 5,
            fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.35)',
            textDecoration: 'none', transition: 'color 0.3s',
            marginLeft: 'auto'
          }}
          onMouseEnter={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.7)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.35)'; }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          GitHub
        </a>
      </div>

      {/* Expanded details */}
      {isOpen && (
        <div style={{ marginTop: 20 }}>
          {/* Como instalar */}
          <div style={{ marginBottom: 16 }}>
            <h4 style={{
              fontSize: 13, fontWeight: 700, color: 'rgba(16,185,129,0.9)',
              marginBottom: 10, display: 'flex', alignItems: 'center', gap: 6
            }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Como instalar
            </h4>
            <div style={{
              position: 'relative', background: 'rgba(0,0,0,0.4)',
              border: '1px solid rgba(16,185,129,0.1)', borderRadius: 12,
              padding: 16, paddingRight: 70
            }}>
              <pre style={{
                fontFamily: "'JetBrains Mono', monospace", fontSize: 11,
                color: 'rgba(255,255,255,0.55)', whiteSpace: 'pre-wrap', lineHeight: 1.8
              }}>
                {skill.comoInstalar}
              </pre>
              <button
                onClick={handleCopyInstall}
                style={{
                  position: 'absolute', top: 10, right: 10,
                  display: 'flex', alignItems: 'center', gap: 5,
                  padding: '5px 10px', borderRadius: 8,
                  background: copiedInstall ? 'rgba(16,185,129,0.15)' : 'rgba(16,185,129,0.08)',
                  border: `1px solid ${copiedInstall ? 'rgba(16,185,129,0.25)' : 'rgba(16,185,129,0.12)'}`,
                  color: copiedInstall ? '#10b981' : 'rgba(16,185,129,0.7)',
                  fontFamily: "'Satoshi', sans-serif", fontSize: 10, fontWeight: 600,
                  cursor: 'pointer', transition: 'all 0.3s'
                }}
              >
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                </svg>
                {copiedInstall ? 'Copiado!' : 'Copiar'}
              </button>
            </div>
          </div>

          {/* Como usar */}
          <div style={{ marginBottom: 16 }}>
            <h4 style={{
              fontSize: 13, fontWeight: 700, color: 'rgba(245,158,11,0.9)',
              marginBottom: 10, display: 'flex', alignItems: 'center', gap: 6
            }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="4 17 10 11 4 5" />
                <line x1="12" y1="19" x2="20" y2="19" />
              </svg>
              Como usar
            </h4>
            <div style={{
              background: 'rgba(0,0,0,0.3)',
              border: '1px solid rgba(245,158,11,0.08)', borderRadius: 12,
              padding: 16
            }}>
              <pre style={{
                fontFamily: "'JetBrains Mono', monospace", fontSize: 11,
                color: 'rgba(255,255,255,0.5)', whiteSpace: 'pre-wrap', lineHeight: 1.8
              }}>
                {skill.comoUsar}
              </pre>
            </div>
          </div>

          {/* Aplicação prática */}
          <div>
            <h4 style={{
              fontSize: 13, fontWeight: 700, color: 'rgba(167,139,250,0.9)',
              marginBottom: 10, display: 'flex', alignItems: 'center', gap: 6
            }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
              Aplicação prática
            </h4>
            <div style={{
              background: 'rgba(0,0,0,0.2)',
              border: '1px solid rgba(167,139,250,0.08)', borderRadius: 12,
              padding: 16
            }}>
              <p style={{
                fontSize: 12, color: 'rgba(255,255,255,0.45)', lineHeight: 1.8
              }}>
                {skill.aplicacao}
              </p>
            </div>
          </div>

          {/* GitHub CTA */}
          <a
            href={skill.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              marginTop: 16, padding: '10px 20px', borderRadius: 10,
              background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.15)',
              color: '#f59e0b', fontSize: 12, fontWeight: 700,
              textDecoration: 'none', transition: 'all 0.3s'
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            Ver no GitHub →
          </a>
        </div>
      )}
    </div>
  );
};

export default SkillCard;
