import React from 'react';

const Evento: React.FC = () => {
  return (
    <div style={{ minHeight: '100vh', position: 'relative' }}>
      {/* Atmosphere */}
      <div className="atmosphere" />
      <div className="grid-pattern" />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 800, margin: '0 auto', padding: '0 20px' }}>

        {/* ===== HERO ===== */}
        <section className="animate-up" style={{ textAlign: 'center', padding: '80px 0 40px' }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            padding: '6px 14px', borderRadius: 100,
            background: 'var(--amber-dim)', border: '1px solid rgba(245,158,11,0.15)',
            color: 'var(--amber)', fontSize: 10, fontWeight: 700,
            letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 20
          }}>
            <span style={{
              width: 6, height: 6, borderRadius: '50%', background: 'var(--amber)',
              animation: 'pulse-dot 2s ease-in-out infinite'
            }} />
            Evento Presencial &bull; 50 Vagas
          </span>

          <h1 style={{
            fontSize: 'clamp(36px, 6vw, 56px)', fontWeight: 900,
            letterSpacing: '-0.03em', lineHeight: 1.05, marginBottom: 16
          }}>
            A Nova Virada da IA
          </h1>

          <p style={{ fontSize: 18, color: 'var(--text-muted-custom)', marginBottom: 8 }}>
            30 de Abril &bull; Boteco do Manolo &bull; Framingham, MA
          </p>
          <p style={{ fontSize: 14, color: 'var(--text-faint)', marginBottom: 32, maxWidth: 520, marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.7 }}>
            Uma noite para descobrir como a Inteligência Artificial pode organizar, automatizar e escalar seu negócio. Inclui jantar.
          </p>

          <a
            href="#comprar"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '18px 44px', borderRadius: 14,
              background: 'linear-gradient(135deg, var(--amber), var(--orange))',
              color: '#000', fontFamily: "'Satoshi', sans-serif", fontSize: 15,
              fontWeight: 800, letterSpacing: '0.04em', border: 'none',
              cursor: 'pointer', textDecoration: 'none', transition: 'all 0.3s',
              boxShadow: '0 0 50px -8px var(--amber-glow)'
            }}
          >
            GARANTIR MINHA VAGA — $62
          </a>
          <p style={{ fontSize: 11, color: 'var(--text-faint)', marginTop: 12 }}>
            Inclui jantar + refrigerante/água/suco &bull; 50 vagas limitadas
          </p>
        </section>

        {/* Divider */}
        <div style={{ width: '100%', height: 1, background: 'rgba(255,255,255,0.06)', margin: '20px 0 48px' }} />

        {/* ===== O QUE MUDOU ===== */}
        <section className="animate-up delay-1" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 28, fontWeight: 900, letterSpacing: '-0.02em', marginBottom: 20, textAlign: 'center' }}>
            O que mudou na IA em 2026
          </h2>
          <div style={{ display: 'grid', gap: 14 }}>
            {[
              { year: '2022–2023', title: 'A IA respondia perguntas', desc: 'ChatGPT surgiu. Todo mundo testou. Parecia mágica, mas só respondia. Não fazia nada pelo seu negócio.' },
              { year: '2024–2025', title: 'A IA começou a atender clientes', desc: 'Agentes de atendimento, chatbots no WhatsApp, automações básicas. Bom, mas limitado.' },
              { year: '2026', title: 'A IA opera sua empresa', desc: 'Claude Code e Manus AI: agentes que executam tarefas reais. Criam documentos, respondem clientes, organizam finanças, geram conteúdo. 24 horas por dia.' },
            ].map((item, i) => (
              <div key={i} style={{
                display: 'flex', gap: 16, padding: '22px 24px', borderRadius: 18,
                border: '1px solid var(--card-border-custom)',
                background: 'linear-gradient(135deg, var(--card-custom), transparent)',
              }}>
                <div style={{
                  flexShrink: 0, padding: '6px 12px', borderRadius: 8,
                  background: i === 2 ? 'var(--amber-dim)' : 'rgba(255,255,255,0.04)',
                  border: `1px solid ${i === 2 ? 'rgba(245,158,11,0.15)' : 'rgba(255,255,255,0.06)'}`,
                  color: i === 2 ? 'var(--amber)' : 'var(--text-faint)',
                  fontSize: 12, fontWeight: 700, height: 'fit-content'
                }}>
                  {item.year}
                </div>
                <div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 4 }}>{item.title}</h3>
                  <p style={{ fontSize: 13, color: 'var(--text-muted-custom)', lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== O QUE VOCÊ VAI VER ===== */}
        <section className="animate-up delay-2" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 28, fontWeight: 900, letterSpacing: '-0.02em', marginBottom: 20, textAlign: 'center' }}>
            O que você vai ver nessa noite
          </h2>
          <div style={{ display: 'grid', gap: 12 }}>
            {[
              { icon: '🖥️', text: 'Demonstração ao vivo de IA organizando uma empresa real' },
              { icon: '📊', text: 'Como gerar relatórios, propostas e contratos em minutos' },
              { icon: '💬', text: 'IA respondendo clientes no WhatsApp automaticamente' },
              { icon: '📱', text: 'Conteúdo para 6 canais criado em uma hora' },
              { icon: '🔧', text: 'Instalação real: você sai com a IA funcionando no seu computador' },
              { icon: '🍽️', text: 'Jantar incluso no Boteco do Manolo' },
            ].map((item, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: 14, padding: '16px 20px', borderRadius: 14,
                border: '1px solid var(--card-border-custom)',
                background: 'linear-gradient(135deg, var(--card-custom), transparent)',
              }}>
                <span style={{ fontSize: 22, flexShrink: 0 }}>{item.icon}</span>
                <p style={{ fontSize: 14, color: 'var(--text-muted-custom)', lineHeight: 1.5 }}>{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ===== BUSINESS ACCELERATOR ===== */}
        <section className="animate-up delay-3" style={{ marginBottom: 48 }}>
          <div style={{
            position: 'relative', overflow: 'hidden', borderRadius: 20,
            border: '1px solid rgba(245,158,11,0.2)', padding: '40px 32px',
          }}>
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(135deg, rgba(245,158,11,0.06), rgba(249,115,22,0.02))'
            }} />
            <div style={{
              position: 'absolute', bottom: 0, right: 0, width: 400, height: 400,
              background: 'radial-gradient(circle, rgba(245,158,11,0.06), transparent 70%)'
            }} />

            <div style={{ position: 'relative', zIndex: 1 }}>
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                padding: '6px 14px', borderRadius: 100,
                background: 'var(--amber-dim)', border: '1px solid rgba(245,158,11,0.15)',
                color: 'var(--amber)', fontSize: 10, fontWeight: 700,
                letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 16
              }}>
                Oferta Especial no Evento
              </span>

              <h2 style={{ fontSize: 'clamp(24px, 4vw, 32px)', fontWeight: 900, letterSpacing: '-0.02em', marginBottom: 8 }}>
                Business Accelerator
              </h2>
              <p style={{ fontSize: 14, color: 'var(--text-muted-custom)', marginBottom: 24, lineHeight: 1.7, maxWidth: 600 }}>
                Não quer fazer sozinho? A gente faz pra você. Diagnóstico individual da sua empresa, instalação completa de IA, e acompanhamento mensal.
              </p>

              <div style={{ display: 'grid', gap: 10, marginBottom: 24 }}>
                {[
                  'Reunião individual gravada — mapeamos todos os gargalos do seu negócio',
                  'Nosso time constrói toda a estrutura de IA pra sua empresa',
                  'Instalação no seu computador — você sai usando',
                  'Aulas gravadas de como usar cada ferramenta',
                  'Encontro mensal com atualizações e novidades',
                  'Portal de skills validadas e atualizadas',
                  'Inclui Claude Code + Manus AI',
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                    <span style={{ color: 'var(--emerald)', fontSize: 14, flexShrink: 0, marginTop: 2 }}>✓</span>
                    <p style={{ fontSize: 13, color: 'var(--text-muted-custom)', lineHeight: 1.5 }}>{item}</p>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}>
                <div>
                  <p style={{ fontSize: 28, fontWeight: 900, color: 'var(--amber)' }}>$1,250</p>
                  <p style={{ fontSize: 12, color: 'var(--text-faint)' }}>à vista</p>
                </div>
                <div style={{ width: 1, height: 40, background: 'rgba(255,255,255,0.1)' }} />
                <div>
                  <p style={{ fontSize: 22, fontWeight: 800 }}>3x $440</p>
                  <p style={{ fontSize: 12, color: 'var(--text-faint)' }}>no cartão</p>
                </div>
              </div>

              <p style={{ fontSize: 11, color: 'var(--text-faint)', marginTop: 12 }}>
                Renovação automática anual &bull; Oferta exclusiva para participantes do evento
              </p>
            </div>
          </div>
        </section>

        {/* ===== PARA QUEM É ===== */}
        <section className="animate-up delay-3" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 28, fontWeight: 900, letterSpacing: '-0.02em', marginBottom: 20, textAlign: 'center' }}>
            Para quem é esse evento
          </h2>
          <div style={{ display: 'grid', gap: 12 }}>
            {[
              { title: 'Dono de negócio local', desc: 'Empresa de limpeza, construção, estética, imóveis. Faz tudo sozinho e precisa de ajuda que não custa uma fortuna.' },
              { title: 'Gestor que virou faz-tudo', desc: 'Cuida do marketing, financeiro, atendimento, proposta comercial. Precisa multiplicar seu tempo.' },
              { title: 'Profissional que virou empreendedor', desc: 'Sabe entregar o serviço mas não sabe vender. Precisa de presença profissional sem contratar equipe.' },
              { title: 'Quem quer sair na frente', desc: 'Seus concorrentes ainda não usam IA de verdade. Quem começar agora vai dominar o mercado local.' },
            ].map((item, i) => (
              <div key={i} style={{
                padding: '20px 24px', borderRadius: 16,
                border: '1px solid var(--card-border-custom)',
                background: 'linear-gradient(135deg, var(--card-custom), transparent)',
              }}>
                <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 6 }}>{item.title}</h3>
                <p style={{ fontSize: 13, color: 'var(--text-muted-custom)', lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ===== QUEM É FÁBIO ===== */}
        <section className="animate-up delay-4" style={{ marginBottom: 48 }}>
          <div style={{
            padding: '32px 28px', borderRadius: 20,
            border: '1px solid var(--card-border-custom)',
            background: 'linear-gradient(135deg, var(--card-custom), transparent)',
          }}>
            <h2 style={{ fontSize: 22, fontWeight: 900, letterSpacing: '-0.02em', marginBottom: 16 }}>
              Quem é o Fábio Borges
            </h2>
            <div style={{ fontSize: 14, color: 'var(--text-muted-custom)', lineHeight: 1.8 }}>
              <p style={{ marginBottom: 12 }}>
                Especialista em IA aplicada a negócios. Mentor e speaker em eventos nos Estados Unidos. Fundador da Me Ensina AI, onde ajuda empresários a organizar e automatizar suas empresas com inteligência artificial.
              </p>
              <p style={{ marginBottom: 12 }}>
                Já atendeu empresários de limpeza, construção, estética e imóveis nos EUA. Mais de 1.000 alunos nas comunidades de IA para negócios.
              </p>
              <p>
                Não ensina teoria. Instala a IA no seu computador e deixa funcionando.
              </p>
            </div>
          </div>
        </section>

        {/* ===== FAQ ===== */}
        <section className="animate-up delay-4" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 28, fontWeight: 900, letterSpacing: '-0.02em', marginBottom: 20, textAlign: 'center' }}>
            Perguntas frequentes
          </h2>
          <div style={{ display: 'grid', gap: 10 }}>
            {[
              { q: 'Preciso entender de tecnologia?', a: 'Não. O evento é pra empresários, não pra programadores. Você vai ver tudo funcionando e sair com a IA instalada no seu computador.' },
              { q: 'O que está incluso no ticket de $62?', a: 'Acesso ao evento completo + jantar no Boteco do Manolo (refrigerante, água ou suco incluso). O Business Accelerator é uma oferta separada apresentada no evento.' },
              { q: 'Posso ir sem comprar o Business Accelerator?', a: 'Sim. O ticket de $62 dá acesso ao evento e ao jantar. O Business Accelerator é opcional pra quem quiser que a gente instale tudo na empresa.' },
              { q: 'Quantas vagas tem?', a: '50 vagas. Quando acabar, acabou. Não vai ter transmissão online deste evento.' },
              { q: 'Tem estacionamento?', a: 'Sim. O Boteco do Manolo tem estacionamento próprio.' },
              { q: 'E se eu não puder ir?', a: 'O ticket não é reembolsável, mas você pode transferir pra outra pessoa.' },
            ].map((item, i) => (
              <details key={i} style={{
                padding: '18px 22px', borderRadius: 14,
                border: '1px solid var(--card-border-custom)',
                background: 'linear-gradient(135deg, var(--card-custom), transparent)',
                cursor: 'pointer'
              }}>
                <summary style={{ fontSize: 14, fontWeight: 700, listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  {item.q}
                  <span style={{ color: 'var(--amber)', fontSize: 18, flexShrink: 0, marginLeft: 12 }}>+</span>
                </summary>
                <p style={{ fontSize: 13, color: 'var(--text-muted-custom)', lineHeight: 1.7, marginTop: 12 }}>{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* ===== CTA FINAL ===== */}
        <section id="comprar" className="animate-up delay-5" style={{ marginBottom: 60 }}>
          <div style={{
            position: 'relative', overflow: 'hidden', borderRadius: 20,
            border: '1px solid rgba(249,115,22,0.25)',
            padding: '48px 32px', textAlign: 'center',
          }}>
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(135deg, rgba(249,115,22,0.08), rgba(239,68,68,0.03), rgba(249,115,22,0.08))'
            }} />
            <div style={{
              position: 'absolute', top: 0, right: 0, width: 500, height: 500,
              background: 'radial-gradient(circle, rgba(245,158,11,0.08), transparent 70%)'
            }} />

            <div style={{ position: 'relative', zIndex: 1 }}>
              <h2 style={{ fontSize: 'clamp(26px, 4vw, 36px)', fontWeight: 900, letterSpacing: '-0.03em', marginBottom: 8 }}>
                Garanta sua vaga agora
              </h2>
              <p style={{ fontSize: 14, color: 'var(--text-muted-custom)', marginBottom: 8 }}>
                30 de Abril &bull; Boteco do Manolo &bull; Framingham, MA
              </p>
              <p style={{ fontSize: 36, fontWeight: 900, color: 'var(--amber)', marginBottom: 4 }}>
                $62
              </p>
              <p style={{ fontSize: 13, color: 'var(--text-faint)', marginBottom: 28 }}>
                Inclui jantar + refrigerante/água/suco
              </p>

              <a
                href="#"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  padding: '18px 48px', borderRadius: 14,
                  background: 'linear-gradient(135deg, var(--amber), var(--orange))',
                  color: '#000', fontFamily: "'Satoshi', sans-serif", fontSize: 15,
                  fontWeight: 800, letterSpacing: '0.04em', border: 'none',
                  cursor: 'pointer', textDecoration: 'none', transition: 'all 0.3s',
                  boxShadow: '0 0 60px -8px var(--amber-glow)'
                }}
              >
                QUERO MINHA VAGA →
              </a>

              <div style={{ display: 'flex', justifyContent: 'center', gap: 24, flexWrap: 'wrap', marginTop: 20 }}>
                {['50 vagas limitadas', 'Jantar incluso', 'Demo ao vivo'].map((item, i) => (
                  <span key={i} style={{ fontSize: 11, color: 'var(--text-faint)', display: 'flex', alignItems: 'center', gap: 4 }}>
                    <span style={{ color: 'var(--emerald)' }}>✓</span> {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== CTA REMOTO ===== */}
        <section className="animate-up delay-5" style={{ marginBottom: 60 }}>
          <div style={{
            position: 'relative', overflow: 'hidden', borderRadius: 20,
            border: '1px solid rgba(34,211,238,0.15)',
            padding: '40px 32px', textAlign: 'center',
          }}>
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(135deg, rgba(34,211,238,0.04), rgba(16,185,129,0.02), rgba(34,211,238,0.04))'
            }} />

            <div style={{ position: 'relative', zIndex: 1 }}>
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                padding: '6px 14px', borderRadius: 100,
                background: 'rgba(34,211,238,0.1)', border: '1px solid rgba(34,211,238,0.15)',
                color: '#22d3ee', fontSize: 10, fontWeight: 700,
                letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 16
              }}>
                Não mora em Massachusetts?
              </span>

              <h3 style={{ fontSize: 'clamp(20px, 3vw, 26px)', fontWeight: 900, letterSpacing: '-0.02em', marginBottom: 8 }}>
                Automatize sua empresa de qualquer lugar
              </h3>
              <p style={{ fontSize: 13, color: 'var(--text-muted-custom)', marginBottom: 24, maxWidth: 460, marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.7 }}>
                Fazemos uma call, identificamos os gargalos do seu negócio e instalamos toda a estrutura de IA remotamente.
              </p>

              <a
                href="https://wa.me/15088488718?text=Ol%C3%A1%20F%C3%A1bio%2C%20vi%20a%20p%C3%A1gina%20do%20evento%20A%20Nova%20Virada%20da%20IA%20e%20quero%20agendar%20uma%20call."
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
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer style={{ textAlign: 'center', padding: '40px 0 20px', borderTop: '1px solid var(--card-border-custom)' }}>
          <p style={{ fontSize: 11, color: 'var(--text-faint)' }}>Me Ensina AI &bull; A Nova Virada da IA &bull; 30 de Abril 2026</p>
          <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.08)', marginTop: 4 }}>@fabioborges_ia</p>
        </footer>
      </div>
    </div>
  );
};

export default Evento;
