import React, { useState } from 'react';

interface StepData {
  title: string;
  content: React.ReactNode;
  link?: { href: string; text: string; icon: 'download' | 'login' };
}

const desktopSteps: StepData[] = [
  {
    title: 'Baixe o aplicativo Claude',
    content: 'Vá até o site da Anthropic e baixe o app Claude para seu computador. É igual baixar qualquer programa. Funciona no Mac e Windows.',
    link: { href: 'https://claude.ai/download', text: 'Baixar Claude Desktop', icon: 'download' }
  },
  {
    title: 'Crie sua conta e faça login',
    content: 'Abra o app e faça login com sua conta Anthropic. Se não tem conta, crie uma em console.anthropic.com. O plano começa em $20/mês.',
    link: { href: 'https://console.anthropic.com', text: 'Criar conta Anthropic', icon: 'login' }
  },
  {
    title: 'Pronto! Converse com o Claude',
    content: 'O app funciona como um chat. Você digita o que precisa e o Claude responde. Para usar as skills desse portal, veja a seção "Como usar uma skill" mais abaixo.',
  }
];

const terminalSteps: StepData[] = [
  {
    title: 'Abra o Terminal do seu computador',
    content: (
      <>
        <strong>No Mac:</strong> Aperte Cmd + Espaço, digite "Terminal" e aperte Enter.<br />
        <strong>No Windows:</strong> Aperte a tecla Windows, digite "cmd" e aperte Enter.<br /><br />
        O Terminal é uma tela preta onde você digita comandos. Parece complicado mas é simples.
      </>
    ),
  },
  {
    title: 'Instale o Claude Code',
    content: (
      <>
        Copie e cole esse comando no Terminal e aperte Enter:<br /><br />
        <code style={{
          fontFamily: "'JetBrains Mono', monospace", fontSize: 12,
          background: 'rgba(34,211,238,0.08)', border: '1px solid rgba(34,211,238,0.12)',
          padding: '2px 8px', borderRadius: 6, color: 'var(--cyan)'
        }}>npm install -g @anthropic-ai/claude-code</code>
        <br /><br />
        Se der erro dizendo que "npm" não foi encontrado, você precisa instalar o Node.js primeiro (é gratuito):
      </>
    ),
    link: { href: 'https://nodejs.org', text: 'Baixar Node.js (gratuito)', icon: 'download' }
  },
  {
    title: 'Abra o Claude Code',
    content: (
      <>
        No Terminal, digite:<br /><br />
        <code style={{
          fontFamily: "'JetBrains Mono', monospace", fontSize: 12,
          background: 'rgba(34,211,238,0.08)', border: '1px solid rgba(34,211,238,0.12)',
          padding: '2px 8px', borderRadius: 6, color: 'var(--cyan)'
        }}>claude</code>
        <br /><br />
        Na primeira vez ele pede sua chave da API. Crie em console.anthropic.com (Plano mínimo: $20/mês).
      </>
    ),
  },
  {
    title: 'Pronto! Converse e use skills',
    content: (
      <>
        Agora é só digitar o que precisa. Para usar as skills desse portal, veja a seção "Como usar uma skill" mais abaixo.
        <br /><br />
        Também funciona dentro do VS Code (editor de código). Instale a extensão "Claude Code" no VS Code.
      </>
    ),
  }
];

const StepCard: React.FC<{ num: number; step: StepData }> = ({ num, step }) => (
  <div style={{
    display: 'flex', gap: 16, padding: '22px 24px', borderRadius: 18,
    border: '1px solid var(--card-border-custom)',
    background: 'linear-gradient(135deg, var(--card-custom), transparent)',
    transition: 'all 0.3s', marginBottom: 14
  }}>
    <div style={{
      width: 32, height: 32, borderRadius: '50%',
      background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.15)',
      color: 'var(--emerald)', fontSize: 13, fontWeight: 800,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      flexShrink: 0, marginTop: 2
    }}>
      {num}
    </div>
    <div>
      <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 8 }}>{step.title}</h3>
      <p style={{ fontSize: 13, color: 'var(--text-muted-custom)', lineHeight: 1.8 }}>{step.content}</p>
      {step.link && (
        <a
          href={step.link.href}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            marginTop: 12, padding: '8px 14px', borderRadius: 10,
            background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.12)',
            color: 'var(--emerald)', fontSize: 12, fontWeight: 600,
            textDecoration: 'none', transition: 'all 0.3s'
          }}
        >
          {step.link.icon === 'download' ? (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" /><polyline points="10 17 15 12 10 7" /><line x1="15" y1="12" x2="3" y2="12" />
            </svg>
          )}
          {step.link.text}
        </a>
      )}
    </div>
  </div>
);

const SetupTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'desktop' | 'terminal'>('desktop');

  const steps = activeTab === 'desktop' ? desktopSteps : terminalSteps;

  return (
    <div>
      <div style={{ display: 'flex', gap: 8, marginBottom: 20 }}>
        <button
          onClick={() => setActiveTab('desktop')}
          style={{
            padding: '10px 20px', borderRadius: 12,
            background: activeTab === 'desktop' ? 'var(--amber-dim)' : 'var(--card-custom)',
            border: `1px solid ${activeTab === 'desktop' ? 'rgba(245,158,11,0.2)' : 'var(--card-border-custom)'}`,
            color: activeTab === 'desktop' ? 'var(--amber)' : 'var(--text-muted-custom)',
            fontFamily: "'Satoshi', sans-serif", fontSize: 13, fontWeight: 600,
            cursor: 'pointer', transition: 'all 0.3s'
          }}
        >
          📱 Aplicativo Desktop <span style={{ fontSize: 10, opacity: 0.5 }}>(mais fácil)</span>
        </button>
        <button
          onClick={() => setActiveTab('terminal')}
          style={{
            padding: '10px 20px', borderRadius: 12,
            background: activeTab === 'terminal' ? 'var(--amber-dim)' : 'var(--card-custom)',
            border: `1px solid ${activeTab === 'terminal' ? 'rgba(245,158,11,0.2)' : 'var(--card-border-custom)'}`,
            color: activeTab === 'terminal' ? 'var(--amber)' : 'var(--text-muted-custom)',
            fontFamily: "'Satoshi', sans-serif", fontSize: 13, fontWeight: 600,
            cursor: 'pointer', transition: 'all 0.3s'
          }}
        >
          💻 Terminal / VS Code
        </button>
      </div>

      {steps.map((step, i) => (
        <StepCard key={`${activeTab}-${i}`} num={i + 1} step={step} />
      ))}
    </div>
  );
};

export default SetupTabs;
