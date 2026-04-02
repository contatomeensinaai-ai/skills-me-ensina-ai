import React from 'react';
import EventBanner from './EventBanner';
import SetupTabs from './SetupTabs';
import SkillCard from './SkillCard';
import { skills } from '@/data/skillsData';

const SectionHeader: React.FC<{
  icon: React.ReactNode;
  iconColor: string;
  title: string;
  hint?: string;
}> = ({ icon, iconColor, title, hint }) => {
  const colorMap: Record<string, { bg: string; border: string }> = {
    emerald: { bg: 'linear-gradient(135deg, rgba(16,185,129,0.2), rgba(16,185,129,0.05))', border: '1px solid rgba(16,185,129,0.1)' },
    cyan: { bg: 'linear-gradient(135deg, rgba(34,211,238,0.2), rgba(34,211,238,0.05))', border: '1px solid rgba(34,211,238,0.1)' },
    amber: { bg: 'linear-gradient(135deg, rgba(245,158,11,0.2), rgba(249,115,22,0.08))', border: '1px solid rgba(245,158,11,0.1)' },
    purple: { bg: 'linear-gradient(135deg, rgba(167,139,250,0.2), rgba(167,139,250,0.05))', border: '1px solid rgba(167,139,250,0.1)' },
  };
  const c = colorMap[iconColor] || colorMap.amber;

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24, flexWrap: 'wrap' }}>
      <div style={{
        width: 36, height: 36, borderRadius: 10,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 16, background: c.bg, border: c.border,
        color: `var(--${iconColor})`
      }}>
        {icon}
      </div>
      <h2 style={{ fontSize: 22, fontWeight: 800, letterSpacing: '-0.02em' }}>{title}</h2>
      {hint && <span style={{ fontSize: 12, color: 'var(--text-faint)', marginLeft: 4 }}>{hint}</span>}
    </div>
  );
};

const PortalSection: React.FC = () => {
  return (
    <div style={{ padding: '60px 0 80px', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 20px' }}>
        {/* Header */}
        <header className="animate-up" style={{ textAlign: 'center', marginBottom: 48 }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            padding: '6px 14px', borderRadius: 100,
            fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
            background: 'var(--amber-dim)', border: '1px solid rgba(245,158,11,0.15)',
            color: 'var(--amber)', marginBottom: 16
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="4 17 10 11 4 5" /><line x1="12" y1="19" x2="20" y2="19" />
            </svg>
            Portal Gratuito
          </span>
          <h1 style={{ fontSize: 'clamp(26px, 4vw, 36px)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.15 }}>
            Skills Claude Code<br />para Empresários
          </h1>
          <p style={{ fontSize: 14, color: 'var(--text-muted-custom)', maxWidth: 500, margin: '12px auto 0' }}>
            Skills profissionais prontas para instalar. Copie o arquivo, coloque na pasta certa e deixe a IA trabalhar por você.
          </p>
        </header>

        {/* Price Notice */}
        <div className="animate-up delay-1" style={{
          padding: '16px 20px', borderRadius: 14,
          background: 'rgba(245,158,11,0.05)', border: '1px solid rgba(245,158,11,0.12)',
          display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 48
        }}>
          <span style={{ color: 'var(--amber)', flexShrink: 0, marginTop: 2 }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
          </span>
          <p style={{ fontSize: 13, color: 'var(--text-muted-custom)', lineHeight: 1.6 }}>
            <strong>Importante:</strong> para usar o Claude Code você precisa de uma conta na Anthropic com o plano de pelo menos <strong>$20/mês</strong>. Crie sua conta em{' '}
            <a href="https://console.anthropic.com" target="_blank" rel="noopener noreferrer"
              style={{ color: 'var(--amber)', textDecoration: 'underline', fontWeight: 600 }}>
              console.anthropic.com
            </a>. Esses skills funcionam tanto no aplicativo Desktop quanto no Terminal.
          </p>
        </div>

        {/* Event Banner Top */}
        <EventBanner />

        {/* Primeiros Passos */}
        <section className="animate-up delay-2" style={{ marginBottom: 48 }}>
          <SectionHeader
            icon={
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            }
            iconColor="emerald"
            title="Primeiros Passos"
            hint="Escolha como prefere usar"
          />
          <SetupTabs />
        </section>

        {/* Como Usar uma Skill */}
        <section className="animate-up delay-3" style={{ marginBottom: 48 }}>
          <SectionHeader
            icon={
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
            }
            iconColor="cyan"
            title="Como Usar uma Skill"
          />

          {/* Desktop howto */}
          <div style={{
            padding: 24, borderRadius: 18, border: '1px solid var(--card-border-custom)',
            background: 'linear-gradient(135deg, var(--card-custom), transparent)', marginBottom: 14
          }}>
            <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 12, color: 'var(--cyan)' }}>
              No Aplicativo Desktop (mais fácil)
            </h3>
            <ol style={{ fontSize: 13, color: 'var(--text-muted-custom)', lineHeight: 1.8, paddingLeft: 20 }}>
              <li style={{ marginBottom: 8 }}>Abra o skill que você quer usar aqui no portal (clique em "Ver skill completa")</li>
              <li style={{ marginBottom: 8 }}>Clique no botão <strong>"Copiar"</strong> para copiar todo o conteúdo</li>
              <li style={{ marginBottom: 8 }}>Abra o app Claude Desktop</li>
              <li style={{ marginBottom: 8 }}>Cole o texto inteiro na conversa e aperte Enter</li>
              <li style={{ marginBottom: 8 }}>O Claude vai ler as instruções e te pedir as informações que faltam</li>
              <li>Responda as perguntas dele e ele entrega o resultado pronto</li>
            </ol>
          </div>

          {/* Terminal howto */}
          <div style={{
            padding: 24, borderRadius: 18, border: '1px solid var(--card-border-custom)',
            background: 'linear-gradient(135deg, var(--card-custom), transparent)', marginBottom: 14
          }}>
            <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 12, color: 'var(--cyan)' }}>
              No Terminal / VS Code (avançado)
            </h3>
            <ol style={{ fontSize: 13, color: 'var(--text-muted-custom)', lineHeight: 1.8, paddingLeft: 20 }}>
              <li style={{ marginBottom: 8 }}>
                Crie uma pasta no seu computador chamada{' '}
                <code style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, background: 'rgba(34,211,238,0.08)', border: '1px solid rgba(34,211,238,0.12)', padding: '2px 8px', borderRadius: 6, color: 'var(--cyan)' }}>
                  .claude/commands/
                </code>
              </li>
              <li style={{ marginBottom: 8 }}>
                Para cada skill, crie um arquivo{' '}
                <code style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, background: 'rgba(34,211,238,0.08)', border: '1px solid rgba(34,211,238,0.12)', padding: '2px 8px', borderRadius: 6, color: 'var(--cyan)' }}>
                  .md
                </code>{' '}
                dentro dessa pasta (ex:{' '}
                <code style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, background: 'rgba(34,211,238,0.08)', border: '1px solid rgba(34,211,238,0.12)', padding: '2px 8px', borderRadius: 6, color: 'var(--cyan)' }}>
                  proposta.md
                </code>)
              </li>
              <li style={{ marginBottom: 8 }}>Cole o conteúdo da skill no arquivo e salve</li>
              <li style={{ marginBottom: 8 }}>
                No Claude Code, digite{' '}
                <code style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, background: 'rgba(34,211,238,0.08)', border: '1px solid rgba(34,211,238,0.12)', padding: '2px 8px', borderRadius: 6, color: 'var(--cyan)' }}>
                  /proposta
                </code>{' '}
                (o nome do arquivo sem .md)
              </li>
              <li>O Claude executa a skill automaticamente</li>
            </ol>
          </div>
        </section>

        {/* 9 Skills */}
        <section className="animate-up delay-3" style={{ marginBottom: 48 }}>
          <SectionHeader
            icon={
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            }
            iconColor="amber"
            title="9 Skills Profissionais"
            hint="Clique para ver a skill completa"
          />
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(1, 1fr)',
            gap: 14
          }} className="skills-grid">
            {skills.map((skill, i) => (
              <SkillCard key={i} skill={skill} />
            ))}
          </div>
        </section>

        {/* Dicas */}
        <section className="animate-up delay-4" style={{ marginBottom: 48 }}>
          <SectionHeader
            icon={
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
            }
            iconColor="purple"
            title="Dicas para Resultados Melhores"
          />
          <div className="tips-grid" style={{ display: 'grid', gap: 14 }}>
            {[
              { title: 'Seja específico', text: 'Em vez de "minha empresa", diga "empresa de limpeza residencial em Massachusetts". Quanto mais contexto, melhor o resultado.' },
              { title: 'Peça revisão', text: 'Depois do primeiro resultado, diga: "Melhore o tom, mais profissional" ou "Encurte pela metade". A IA ajusta na hora.' },
              { title: 'Salve os melhores', text: 'Quando um resultado ficar excelente, salve como template. Da próxima vez, peça: "Use esse modelo mas para [novo cliente]".' },
            ].map((tip, i) => (
              <div key={i} style={{
                padding: '22px 24px', borderRadius: 18,
                border: '1px solid var(--card-border-custom)',
                background: 'linear-gradient(135deg, var(--card-custom), transparent)'
              }}>
                <h3 style={{ fontSize: 14, fontWeight: 700, color: 'var(--purple)', marginBottom: 8 }}>{tip.title}</h3>
                <p style={{ fontSize: 12, color: 'var(--text-muted-custom)', lineHeight: 1.7 }}>{tip.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Event Banner Final */}
        <EventBanner variant="final" />

        {/* CTA Agendamento — pra quem não é de MA */}
        <div className="animate-up delay-5" style={{
          position: 'relative', overflow: 'hidden', borderRadius: 20,
          border: '1px solid rgba(34,211,238,0.15)',
          padding: '40px 32px', textAlign: 'center', marginBottom: 48
        }}>
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(135deg, rgba(34,211,238,0.04), rgba(16,185,129,0.02), rgba(34,211,238,0.04))'
          }} />
          <div style={{
            position: 'absolute', top: 0, left: 0, width: 400, height: 400,
            background: 'radial-gradient(circle, rgba(34,211,238,0.06), transparent 70%)'
          }} />

          <div style={{ position: 'relative', zIndex: 1 }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              padding: '6px 14px', borderRadius: 100,
              background: 'rgba(34,211,238,0.1)', border: '1px solid rgba(34,211,238,0.15)',
              color: '#22d3ee', fontSize: 10, fontWeight: 700,
              letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 16
            }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Não mora em Massachusetts?
            </span>

            <h3 style={{ fontSize: 'clamp(22px, 3.5vw, 28px)', fontWeight: 900, letterSpacing: '-0.03em', marginBottom: 8 }}>
              Automatize sua empresa de qualquer lugar
            </h3>
            <p style={{ fontSize: 13, color: 'var(--text-muted-custom)', marginBottom: 24, maxWidth: 480, marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.7 }}>
              Fazemos uma call, identificamos os gargalos do seu negócio e instalamos toda a estrutura de IA remotamente. Você não precisa entender nada de tecnologia.
            </p>

            <a
              href="https://wa.me/15088488718?text=Ol%C3%A1%20F%C3%A1bio%2C%20vi%20o%20portal%20de%20Skills%20e%20quero%20agendar%20uma%20call%20para%20automatizar%20minha%20empresa."
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '16px 36px', borderRadius: 14,
                background: 'linear-gradient(135deg, #22d3ee, #10b981)',
                color: '#000', fontFamily: "'Satoshi', sans-serif", fontSize: 13,
                fontWeight: 800, letterSpacing: '0.06em', border: 'none',
                cursor: 'pointer', textDecoration: 'none', transition: 'all 0.3s',
                boxShadow: '0 0 40px -8px rgba(34,211,238,0.3)'
              }}
            >
              QUERO AGENDAR MINHA CALL →
            </a>
            <p style={{ fontSize: 11, color: 'var(--text-faint)', marginTop: 12 }}>
              Atendimento personalizado &bull; Instalação remota &bull; Suporte incluso
            </p>
          </div>
        </div>

        {/* Footer */}
        <footer style={{ textAlign: 'center', padding: '40px 0 20px', borderTop: '1px solid var(--card-border-custom)', marginTop: 48 }}>
          <p style={{ fontSize: 11, color: 'var(--text-faint)' }}>Me Ensina AI &bull; Skills Claude Code para Empresários</p>
          <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.08)', marginTop: 4 }}>Powered by Anthropic Claude</p>
        </footer>
      </div>
    </div>
  );
};

export default PortalSection;
