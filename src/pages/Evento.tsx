import React from 'react';
import fabioImg from '@/assets/fabio-borges.jpg';
import { BookOpen, Monitor, Building2, HelpCircle, Mic, Eye, Map, CalendarCheck, MessageCircle, Users } from 'lucide-react';

const cardBg = 'rgba(255,255,255,0.06)';
const cardBorder = 'rgba(255,255,255,0.12)';
const bodyText = 'rgba(255,255,255,0.7)';
const divider = { width: '100%', height: 1, background: 'rgba(255,255,255,0.06)', margin: '20px 0 48px' };

const CTAButton = () => (
  <div style={{ textAlign: 'center', marginTop: 32 }}>
    <a
      href="https://buy.stripe.com/6oU7sDez4asi7U01Cy1Nu21" target="_blank" rel="noopener noreferrer"
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
      GARANTIR MINHA VAGA
    </a>
  </div>
);

const IconCircle = ({ children }: { children: React.ReactNode }) => (
  <div style={{
    width: 44, height: 44, borderRadius: '50%', flexShrink: 0,
    background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.15)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
  }}>
    {children}
  </div>
);

const agendaItems = [
  { icon: <Eye size={20} color="var(--amber)" />, title: 'Uma demonstração que você nunca viu', desc: 'Você vai ver, ao vivo, a inteligência artificial executando tarefas reais de negócio. Não é teoria. Não é slide. É a IA funcionando na sua frente, resolvendo problemas que consomem horas do seu dia.' },
  { icon: <Map size={20} color="var(--amber)" />, title: 'O mapa completo do seu time de IA', desc: 'Você vai entender exatamente quais funções do seu negócio a IA já consegue assumir hoje. Marketing, financeiro, atendimento, conteúdo, estratégia. Um por um, com clareza.' },
  { icon: <CalendarCheck size={20} color="var(--amber)" />, title: 'O plano pra sair de lá com tudo montado', desc: 'Não é um evento onde você sai inspirado e esquece na segunda-feira. Você vai sair com um plano concreto de como colocar a IA pra funcionar na sua empresa na mesma semana.' },
  { icon: <MessageCircle size={20} color="var(--amber)" />, title: 'Acesso direto ao Fábio Borges por uma noite inteira', desc: 'Perguntas, dúvidas, desafios específicos do seu negócio. Sem filtro, sem roteiro, sem limite de tempo. Uma noite inteira pra você tirar tudo que precisa diretamente com quem já ajudou mais de 1.000 empresários.' },
  { icon: <Users size={20} color="var(--amber)" />, title: 'Jantar e networking com 50 empresários', desc: 'A mesa é a mesma. A comida é a mesma. Mas a conversa não é qualquer conversa. São 50 empresários que já decidiram que não vão ficar parados enquanto o mundo muda.' },
];

const Evento: React.FC = () => {
  return (
    <div style={{ minHeight: '100vh', position: 'relative' }}>
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
            Jantar Exclusivo &bull; 50 Vagas
          </span>

          <h1 style={{
            fontSize: 'clamp(32px, 5.5vw, 50px)', fontWeight: 900,
            letterSpacing: '-0.03em', lineHeight: 1.08, marginBottom: 20
          }}>
            A Maior Oportunidade de Colocar a Inteligência Artificial pra Trabalhar no Seu Negócio é Agora!
          </h1>

          <p style={{ fontSize: 16, color: bodyText, marginBottom: 32, maxWidth: 560, marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.7 }}>
            Quem montar seu time de IA primeiro vai dominar os próximos 10 anos. Nessa noite, você vai ver como.
          </p>

          <div style={{
            display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: 4,
            padding: '20px 40px', borderRadius: 16,
            background: 'rgba(245,158,11,0.04)', border: '1px solid rgba(245,158,11,0.1)',
            marginBottom: 24
          }}>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)' }}>30 de Abril de 2026 | Boteco do Manolo | Framingham, MA</p>
          </div>

          <div style={{ display: 'block' }}>
            <a
              href="https://buy.stripe.com/6oU7sDez4asi7U01Cy1Nu21" target="_blank" rel="noopener noreferrer"
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
              GARANTIR MINHA VAGA
            </a>
          </div>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', marginTop: 12, lineHeight: 1.8 }}>
            $62 por pessoa &bull; Jantar + refrigerante inclusos<br />
            Apenas 50 vagas
          </p>
        </section>

        <div style={divider} />

        {/* ===== NARRATIVA ===== */}
        <section className="animate-up delay-1" style={{ marginBottom: 48 }}>
          <div style={{
            padding: '36px 32px', borderRadius: 20,
            borderLeft: '3px solid var(--amber)',
            background: 'rgba(245,158,11,0.04)',
          }}>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.85)', lineHeight: 2, fontStyle: 'italic', letterSpacing: '0.01em' }}>
              Você acordou hoje antes das 5 da manhã. Como acorda todo dia. Checou as mensagens de clientes, confirmou a agenda, separou o material, dirigiu até o primeiro serviço. Entre uma ligação e outra, tentou resolver o problema do funcionário que faltou, respondeu um orçamento pelo celular no sinal vermelho e ainda lembrou que precisa pagar o seguro do truck.
            </p>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.85)', lineHeight: 2, fontStyle: 'italic', letterSpacing: '0.01em', marginTop: 20 }}>
              Quando finalmente para, já escureceu. Você veio pros Estados Unidos pra construir algo maior. E construiu. <span style={{ color: 'var(--amber)', fontWeight: 600 }}>Com as próprias mãos.</span> Mas no fundo, você sabe: do jeito que está, não escala. Você é o dono, o gerente, o vendedor, o financeiro e o marketing da sua empresa. E o dia continua tendo só 24 horas.
            </p>
          </div>
        </section>

        <div style={divider} />

        {/* ===== TIMELINE ===== */}
        <section className="animate-up delay-1" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 28, fontWeight: 900, letterSpacing: '-0.02em', marginBottom: 12, textAlign: 'center' }}>
            A IA mudou 3 vezes em 4 anos. Seu negócio acompanhou alguma delas?
          </h2>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', textAlign: 'center', marginBottom: 24, maxWidth: 560, marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.7 }}>
            O mundo mudou. E quem entender primeiro, sai na frente.
          </p>
          <div style={{ display: 'grid', gap: 14 }}>
            {[
              { year: '2022', label: 'O CHOQUE', desc: 'O ChatGPT apareceu e o mundo inteiro parou pra olhar. Pela primeira vez, qualquer pessoa podia conversar com uma inteligência artificial. Milhões experimentaram. Poucos entenderam o que aquilo significava de verdade pra um negócio.' },
              { year: '2024', label: 'A VIRADA SILENCIOSA', desc: 'A IA parou de ser brinquedo e virou ferramenta de trabalho. Empresas começaram a cortar custos, acelerar processos e entregar mais rápido. Quem prestou atenção saiu na frente. Quem ignorou não sentiu nada. Ainda.' },
              { year: '2026', label: 'A SEPARAÇÃO', desc: 'Agora a IA não é mais uma ferramenta. É um time inteiro. Ela cria conteúdo, responde clientes, organiza financeiro, monta estratégia de venda. Os empresários que montaram esse time estão operando em outro nível. Os que não montaram estão trabalhando o dobro pra metade do resultado.' },
            ].map((item, i) => (
              <div key={i} style={{
                display: 'flex', gap: 16, padding: '22px 24px', borderRadius: 18,
                border: `1px solid ${i === 2 ? 'rgba(245,158,11,0.2)' : cardBorder}`,
                background: i === 2 ? 'rgba(245,158,11,0.04)' : cardBg,
              }}>
                <div style={{
                  flexShrink: 0, padding: '6px 14px', borderRadius: 8,
                  background: i === 2 ? 'rgba(16,185,129,0.12)' : 'rgba(255,255,255,0.04)',
                  border: `1px solid ${i === 2 ? 'rgba(16,185,129,0.25)' : 'rgba(255,255,255,0.08)'}`,
                  color: i === 2 ? '#10b981' : 'rgba(255,255,255,0.4)',
                  fontSize: 13, fontWeight: 700, height: 'fit-content'
                }}>
                  {item.year}
                </div>
                <div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 4, color: i === 2 ? 'var(--amber)' : '#fff' }}>{item.label}</h3>
                  <p style={{ fontSize: 14, color: bodyText, lineHeight: 1.8 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <CTAButton />
        </section>

        <div style={divider} />

        {/* ===== PONTO DE VIRADA ===== */}
        <section className="animate-up delay-2" style={{ marginBottom: 48 }}>
          <div style={{
            padding: '28px 24px', borderRadius: 18,
            background: 'rgba(245,158,11,0.03)', border: '1px solid rgba(245,158,11,0.08)',
          }}>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.75)', lineHeight: 1.9 }}>
            </p>
            <p style={{ fontSize: 15, fontWeight: 700, color: 'var(--amber)', marginTop: 12 }}>
              Nessa noite, você vai entender tudo isso. De forma simples. Sem jargão. Sem complicação.
            </p>
          </div>
        </section>

        <div style={divider} />

        {/* ===== O QUE VAI VIVENCIAR ===== */}
        <section className="animate-up delay-2" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 28, fontWeight: 900, letterSpacing: '-0.02em', marginBottom: 24, textAlign: 'center' }}>
            O que você vai vivenciar nessa noite
          </h2>
          <div style={{ display: 'grid', gap: 12 }}>
            {agendaItems.map((item, i) => (
              <div key={i} style={{
                display: 'flex', gap: 14, padding: '20px 22px', borderRadius: 16,
                border: `1px solid ${cardBorder}`,
                background: cardBg,
              }}>
                <IconCircle>{item.icon}</IconCircle>
                <div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 6 }}>{item.title}</h3>
                  <p style={{ fontSize: 14, color: bodyText, lineHeight: 1.8 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <CTAButton />
        </section>

        <div style={divider} />

        {/* ===== NETWORKING ===== */}
        <section className="animate-up delay-3" style={{ marginBottom: 48 }}>
          <div style={{
            position: 'relative', overflow: 'hidden', borderRadius: 20,
            border: '1px solid rgba(245,158,11,0.12)',
            padding: '40px 32px', textAlign: 'center',
          }}>
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(135deg, rgba(245,158,11,0.04), rgba(249,115,22,0.02))'
            }} />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <h2 style={{ fontSize: 26, fontWeight: 900, letterSpacing: '-0.02em', marginBottom: 16 }}>
                50 empresários. Uma mesa. Uma conversa que vale mais que um ano de conteúdo online.
              </h2>
              <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.75)', lineHeight: 1.9, maxWidth: 560, marginLeft: 'auto', marginRight: 'auto', marginBottom: 20 }}>
                Existe um tipo de conexão que só acontece presencialmente, olho no olho, com gente que está no mesmo nível de decisão que você. Nessa noite, você vai dividir a mesa com 50 empresários que estão fazendo a mesma pergunta: como usar a IA pra escalar sem depender de mais gente? As respostas que você vai ouvir nessa mesa podem mudar a direção do seu negócio nos próximos 12 meses.
              </p>
              <p style={{ fontSize: 15, fontWeight: 700, color: 'var(--amber)' }}>
                Jantar completo incluso no ingresso.
              </p>
            </div>
          </div>
        </section>

        <div style={divider} />

        {/* ===== FOMO ===== */}
        <section className="animate-up delay-3" style={{ marginBottom: 48 }}>
          <div style={{
            padding: '28px 24px', borderRadius: 18,
            border: `1px solid ${cardBorder}`,
            background: cardBg,
          }}>
            <h2 style={{ fontSize: 24, fontWeight: 900, letterSpacing: '-0.02em', marginBottom: 16, textAlign: 'center' }}>
              Daqui a 12 meses, você vai lembrar dessa noite. A pergunta é: como?
            </h2>
             <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.75)', lineHeight: 1.9 }}>
              Ou você vai lembrar como a noite em que você entendeu tudo e montou seu time de IA antes de todo mundo. Ou você vai lembrar como a oportunidade que você deixou passar enquanto esperava o "momento certo". A IA não vai desacelerar. As ferramentas não vão ficar mais simples. O custo de não agir aumenta todo mês.
            </p>
            <p style={{ fontSize: 15, fontWeight: 700, color: '#fff', marginTop: 16, textAlign: 'center' }}>
              50 vagas. Quando acabar, acabou.
            </p>
          </div>
        </section>

        <div style={divider} />

        {/* ===== QUEM É FÁBIO ===== */}
        <section className="animate-up delay-3" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 28, fontWeight: 900, letterSpacing: '-0.02em', marginBottom: 24, textAlign: 'center' }}>
            Quem vai conduzir essa noite
          </h2>
          <div style={{
            padding: '32px 28px', borderRadius: 20,
            border: `1px solid ${cardBorder}`,
            background: cardBg,
            textAlign: 'center',
          }}>
            <img
              src={fabioImg}
              alt="Fábio Borges"
              style={{
                width: 120, height: 120, borderRadius: '50%',
                objectFit: 'cover',
                border: '2px solid rgba(245,158,11,0.15)',
                margin: '0 auto 20px', display: 'block',
              }}
            />

            <h3 style={{ fontSize: 20, fontWeight: 800, marginBottom: 4 }}>Fábio Borges</h3>
            <p style={{ fontSize: 12, color: 'var(--amber)', fontWeight: 600, marginBottom: 16 }}>@fabioborges_ia</p>

            <div style={{ fontSize: 14, color: bodyText, lineHeight: 1.9, textAlign: 'left' }}>
              <p style={{ marginBottom: 12 }}>
                Referência em Inteligência Artificial aplicada a negócios nos Estados Unidos, Brasil e Europa. Speaker em eventos nos EUA, mentor de empresários e criador da comunidade Me Ensina AI, com mais de 1.000 alunos.
              </p>
              <p style={{ marginBottom: 12 }}>
                Fábio não é programador. Não é engenheiro. É empresário. E ensina outros empresários a usar a Inteligência Artificial pra resolver problemas reais: atender mais clientes, criar conteúdo sem contratar equipe, organizar a operação e parar de trabalhar 14 horas por dia.
              </p>
              <p>
                Seu método é simples: mostrar na prática. Sem teoria. Sem enrolação. Você vê funcionando e aplica no seu negócio.
              </p>
            </div>
          </div>
        </section>

        <div style={divider} />

        {/* ===== VALOR EMPILHADO ===== */}
        <section className="animate-up delay-4" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 28, fontWeight: 900, letterSpacing: '-0.02em', marginBottom: 24, textAlign: 'center' }}>
            O que você recebe nessa noite
          </h2>
          <div style={{ display: 'grid', gap: 10 }}>
            {[
              { item: 'Jantar completo em restaurante exclusivo', valor: '$50' },
              { item: '3+ horas de imersão prática em IA para negócios', valor: '$297' },
              { item: 'Networking presencial com 50 empresários brasileiros da região', valor: 'Inestimável' },
              { item: 'Demonstração ao vivo: como a IA atende clientes, cria conteúdo e organiza sua empresa', valor: '$197' },
              { item: 'Acesso ao grupo exclusivo de participantes (pós-evento)', valor: '$97' },
            ].map((row, i) => (
              <div key={i} style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '16px 22px', borderRadius: 12,
                border: '1px solid rgba(255,255,255,0.15)',
                background: 'rgba(255,255,255,0.08)',
              }}>
                <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.8)', flex: 1, paddingRight: 16 }}>{row.item}</p>
                <span style={{ fontSize: 13, fontWeight: 700, color: 'rgba(255,255,255,0.4)', textDecoration: 'line-through', whiteSpace: 'nowrap' }}>{row.valor}</span>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 20 }}>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', textDecoration: 'line-through' }}>Valor total: mais de $640</p>
            <p style={{ fontSize: 36, fontWeight: 900, color: 'var(--amber)', marginTop: 4 }}>Seu investimento: $62</p>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', marginTop: 4 }}>Menos do que um tanque de gasolina.</p>
          </div>
        </section>

        <div style={divider} />

        {/* ===== PARA QUEM ===== */}
        <section className="animate-up delay-4" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 28, fontWeight: 900, letterSpacing: '-0.02em', marginBottom: 20, textAlign: 'center' }}>
            Para quem é esse evento
          </h2>
          <div style={{ display: 'grid', gap: 12 }}>
            {[
              { title: 'O dono de negócio local', desc: 'Empresa de limpeza, construção, estética, imóveis. Faz tudo sozinho e precisa de ajuda que não custa uma fortuna.' },
              { title: 'O gestor que virou faz-tudo', desc: 'Cuida do marketing, financeiro, atendimento, proposta comercial. Precisa multiplicar seu tempo sem multiplicar seus custos.' },
              { title: 'O profissional que virou empreendedor', desc: 'Sabe entregar o serviço mas não sabe vender. Precisa de presença profissional e clientes chegando sem depender de indicação.' },
              { title: 'Quem quer sair na frente', desc: 'A maioria dos empresários da sua região ainda não usa Inteligência Artificial de verdade. Quem começar agora vai dominar o mercado local.' },
            ].map((item, i) => (
              <div key={i} style={{
                padding: '20px 24px', borderRadius: 16,
                border: `1px solid ${cardBorder}`,
                background: cardBg,
              }}>
                <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 6 }}>{item.title}</h3>
                <p style={{ fontSize: 14, color: bodyText, lineHeight: 1.8 }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <CTAButton />
        </section>

        <div style={divider} />

        {/* ===== FAQ ===== */}
        <section className="animate-up delay-4" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 28, fontWeight: 900, letterSpacing: '-0.02em', marginBottom: 20, textAlign: 'center' }}>
            Perguntas frequentes
          </h2>
          <div style={{ display: 'grid', gap: 10 }}>
            {[
              { q: 'Preciso entender de tecnologia?', a: 'Não. O evento é feito pra empresários, não pra gente de tecnologia. Se você sabe usar o celular, você consegue acompanhar tudo.' },
              { q: 'O que está incluso no ingresso?', a: 'Acesso ao evento completo, jantar e todas as demonstrações ao vivo. Tudo por $62.' },
              { q: 'Posso levar meu sócio?', a: 'Pode e deve. Cada pessoa precisa do seu ingresso individual.' },
              { q: 'Preciso levar notebook?', a: 'Não precisa levar nada. Só vem, assiste, pergunta e aproveita.' },
              { q: 'E se eu não puder ir?', a: 'O evento é presencial e não será transmitido online. São 50 vagas e a experiência só acontece pra quem estiver na sala.' },
              { q: 'Vai ter venda de curso?', a: 'O evento é uma experiência completa. Você vai sair de lá com conhecimento e um plano de ação, não com uma oferta de vendas.' },
            ].map((item, i) => (
              <details key={i} style={{
                padding: '18px 22px', borderRadius: 14,
                border: `1px solid ${cardBorder}`,
                background: cardBg,
                cursor: 'pointer'
              }}>
                <summary style={{ fontSize: 15, fontWeight: 700, listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  {item.q}
                  <span style={{ color: '#10b981', fontSize: 18, flexShrink: 0, marginLeft: 12 }}>+</span>
                </summary>
                <p style={{ fontSize: 14, color: bodyText, lineHeight: 1.8, marginTop: 12 }}>{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        <div style={divider} />

        {/* ===== CTA FINAL ===== */}
        <section id="comprar" className="animate-up delay-5" style={{ marginBottom: 48 }}>
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
              <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.75)', lineHeight: 1.9, maxWidth: 520, marginLeft: 'auto', marginRight: 'auto', marginBottom: 24 }}>
              </p>

              <h2 style={{ fontSize: 'clamp(24px, 4vw, 32px)', fontWeight: 900, letterSpacing: '-0.03em', marginBottom: 8 }}>
                50 vagas. Uma noite. Uma decisão.
              </h2>
              <p style={{ fontSize: 14, color: bodyText, marginBottom: 8 }}>
                30 de Abril &bull; Boteco do Manolo &bull; Framingham, MA
              </p>
              <p style={{ fontSize: 40, fontWeight: 900, color: 'var(--amber)', marginBottom: 4 }}>
                $62
              </p>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', marginBottom: 28 }}>
                Jantar + refrigerante inclusos
              </p>

              <a
                href="https://buy.stripe.com/6oU7sDez4asi7U01Cy1Nu21" target="_blank" rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  padding: '20px 52px', borderRadius: 14,
                  background: 'linear-gradient(135deg, var(--amber), var(--orange))',
                  color: '#000', fontFamily: "'Satoshi', sans-serif", fontSize: 16,
                  fontWeight: 800, letterSpacing: '0.04em', border: 'none',
                  cursor: 'pointer', textDecoration: 'none', transition: 'all 0.3s',
                  boxShadow: '0 0 60px -8px var(--amber-glow)'
                }}
              >
                GARANTIR MINHA VAGA AGORA
              </a>

              <p style={{ fontSize: 12, color: 'rgba(249,115,22,0.7)', marginTop: 16, fontWeight: 600 }}>
                Quando a última vaga for preenchida, essa página sai do ar.
              </p>

              <div style={{ display: 'flex', justifyContent: 'center', gap: 24, flexWrap: 'wrap', marginTop: 16 }}>
                {['50 vagas limitadas', 'Jantar incluso', 'Networking exclusivo'].map((item, i) => (
                  <span key={i} style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', display: 'flex', alignItems: 'center', gap: 4 }}>
                    <span style={{ color: '#10b981' }}>✓</span> {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer style={{ textAlign: 'center', padding: '40px 0 20px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)' }}>Me Ensina AI &bull; A Nova Virada da IA &bull; 30 de Abril 2026</p>
          <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.25)', marginTop: 4 }}>@fabioborges_ia</p>
        </footer>
      </div>
    </div>
  );
};

export default Evento;
