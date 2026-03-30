import React, { useState } from 'react';
import type { Skill } from '@/data/skillsData';

interface SkillCardProps {
  skill: Skill;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(skill.prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
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

      <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 4 }}>{skill.title}</h3>
      <p style={{ fontSize: 12, color: 'var(--text-muted-custom)', marginBottom: 8, lineHeight: 1.5 }}>{skill.desc}</p>

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

      {/* Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          fontSize: 12, fontWeight: 600, color: 'rgba(245,158,11,0.7)',
          background: 'none', border: 'none', cursor: 'pointer',
          fontFamily: "'Satoshi', sans-serif", padding: 0, transition: 'color 0.3s'
        }}
      >
        <span>{isOpen ? 'Fechar skill' : 'Ver skill completa'}</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
          style={{ transition: 'transform 0.3s', transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {/* Prompt */}
      {isOpen && (
        <div style={{ marginTop: 16 }}>
          <div style={{
            position: 'relative', background: 'rgba(0,0,0,0.4)',
            border: '1px solid var(--card-border-custom)', borderRadius: 14,
            padding: 18, paddingRight: 80, maxHeight: 350, overflowY: 'auto'
          }}>
            <pre style={{
              fontFamily: "'JetBrains Mono', monospace", fontSize: 11,
              color: 'rgba(255,255,255,0.55)', whiteSpace: 'pre-wrap', lineHeight: 1.8
            }}>
              {skill.prompt}
            </pre>
            <button
              onClick={handleCopy}
              style={{
                position: 'absolute', top: 12, right: 12,
                display: 'flex', alignItems: 'center', gap: 6,
                padding: '6px 12px', borderRadius: 8,
                background: copied ? 'rgba(16,185,129,0.15)' : 'var(--amber-dim)',
                border: `1px solid ${copied ? 'rgba(16,185,129,0.2)' : 'rgba(245,158,11,0.15)'}`,
                color: copied ? 'var(--emerald)' : 'var(--amber)',
                fontFamily: "'Satoshi', sans-serif", fontSize: 11, fontWeight: 600,
                cursor: 'pointer', transition: 'all 0.3s'
              }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
              <span>{copied ? 'Copiado!' : 'Copiar'}</span>
            </button>
          </div>
          <p style={{ fontSize: 11, color: 'var(--text-faint)', fontStyle: 'italic', marginTop: 10 }}>
            Copie o conteúdo inteiro e cole no Claude Code. Ele vai te guiar passo a passo.
          </p>
          <p style={{ fontSize: 10, color: 'var(--text-faint)', marginTop: 6, display: 'flex', alignItems: 'center', gap: 4 }}>
            📄 {skill.lines} linhas de instruções
          </p>
        </div>
      )}
    </div>
  );
};

export default SkillCard;
