import React from 'react';

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
            Seus concorrentes já estão usando Inteligência Artificial. Você vai ficar pra trás?
          </h1>

          <p style={{ fontSize: 16, color: 'var(--text-muted-custom)', marginBottom: 32, maxWidth: 560, marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.7 }}>
            No dia 30 de abril, em Framingham, você vai ver com seus próprios olhos o que a IA já faz por empresas como a sua. Sem teoria. Sem enrolação. Uma noite que pode mudar a forma como você toca seu negócio.
          </p>

          <div style={{
            display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: 4,
            padding: '20px 40px', borderRadius: 16,
            background: 'rgba(245,158,11,0.04)', border: '1px solid rgba(245,158,11,0.1)',
            marginBottom: 24
          }}>
            <p style={{ fontSize: 13, color: 'var(--text-muted-custom)' }}>30 de Abril de 2026</p>
            <p style={{ fontSize: 13, color: 'var(--text-muted-custom)' }}>Boteco do Manolo &bull; Framingham, MA</p>
          </div>

          <div style={{ display: 'block' }}>
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
              GARANTIR MINHA VAGA
            </a>
          </div>
          <p style={{ fontSize: 12, color: 'var(--text-faint)', marginTop: 12 }}>
            $62 por pessoa &bull; Jantar + bebida inclusos &bull; Apenas 50 vagas
          </p>
        </section>

        <div style={{ width: '100%', height: 1, background: 'rgba(255,255,255,0.06)', margin: '20px 0 48px' }} />

        {/* ===== NARRATIVA DO HERÓI ===== */}
        <section className="animate-up delay-1" style={{ marginBottom: 48 }}>
          <div style={{
            padding: '32px 28px', borderRadius: 20,
            border: '1px solid var(--card-border-custom)',
            background: 'linear-gradient(135deg, var(--card-custom), transparent)',
          }}>
            <p style={{ fontSize: 15, color: 'var(--text-muted-custom)', lineHeight: 2, fontStyle: 'italic' }}>
              Você acordou hoje antes das 5 da manhã. Como acorda todo dia. Checou as mensagens de clientes, confirmou a agenda, separou o material, dirigiu até o primeiro serviço. Entre uma ligação e outra, tentou resolver o problema do funcionário que faltou, respondeu um orçamento pelo celular no sinal vermelho e ainda lembrou que precisa pagar o seguro do truck.
            </p>
            <p style={{ fontSize: 15, color: 'var(--text-muted-custom)', lineHeight: 2, fontStyle: 'italic', marginTop: 16 }}>
              Quando finalmente para, já escureceu. Você veio pros Estados Unidos pra construir algo maior. E construiu. Com as próprias mãos. Mas no fundo, você sabe: do jeito que está, não escala. Você é o dono, o gerente, o vendedor, o financeiro e o marketing da sua empresa. E o dia continua tendo só 24 horas.
            </p>
          </div>
        </section>

        {/* ===== O QUE MUDOU ===== */}
        <section className="animate-up delay-1" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 28, fontWeight: 900, letterSpacing: '-0.02em', marginBottom: 12, textAlign: 'center' }}>
            Você ainda acha que Inteligência Artificial é coisa de filme?
          </h2>
          <p style={{ fontSize: 14, color: 'var(--text-faint)', textAlign: 'center', marginBottom: 24, maxWidth: 560, marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.7 }}>
            O mundo mudou. E quem entender primeiro, sai na frente.
          </p>
          <div style={{ display: 'grid', gap: 14 }}>
            {[
              { year: '2022', title: 'A IA era curiosidade', desc: 'Um brinquedo que escrevia textos engraçados e gerava imagens estranhas. A maioria dos empresários ignorou.' },
              { year: '2024', title: 'A IA começou a trabalhar', desc: 'Já respondia clientes, criava propostas, organizava agenda. Quem prestou atenção saiu na frente.' },
              { year: '2026', title: 'A IA virou funcionária', desc: 'Ela cria orçamentos, responde leads, publica conteúdo, organiza sua operação. Funciona 24 horas. Não pede folga. Não reclama. E custa menos que um almoço por dia.' },
            ].map((item, i) => (
              <div key={i} style={{
                display: 'flex', gap: 16, padding: '22px 24px', borderRadius: 18,
                border: '1px solid var(--card-border-custom)',
                background: 'linear-gradient(135deg, var(--card-custom), transparent)',
              }}>
                <div style={{
                  flexShrink: 0, padding: '6px 14px', borderRadius: 8,
                  background: i === 2 ? 'var(--amber-dim)' : 'rgba(255,255,255,0.04)',
                  border: `1px solid ${i === 2 ? 'rgba(245,158,11,0.15)' : 'rgba(255,255,255,0.06)'}`,
                  color: i === 2 ? 'var(--amber)' : 'var(--text-faint)',
                  fontSize: 13, fontWeight: 700, height: 'fit-content'
                }}>
                  {item.year}
                </div>
                <div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 4 }}>{item.title}</h3>
                  <p style={{ fontSize: 13, color: 'var(--text-muted-custom)', lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== PONTO DE VIRADA ===== */}
        <section className="animate-up delay-2" style={{ marginBottom: 48 }}>
          <div style={{
            padding: '28px 24px', borderRadius: 18,
            background: 'rgba(245,158,11,0.03)', border: '1px solid rgba(245,158,11,0.08)',
          }}>
            <p style={{ fontSize: 14, color: 'var(--text-muted-custom)', lineHeight: 1.9 }}>
              A diferença entre quem vai crescer nos próximos 12 meses e quem vai continuar preso no operacional não é dinheiro, não é sorte, não é diploma. É informação. É saber o que já existe e que você ainda não está usando.
            </p>
            <p style={{ fontSize: 15, fontWeight: 700, color: 'var(--amber)', marginTop: 12 }}>
              Nessa noite, você vai entender tudo isso. De forma simples. Sem jargão. Sem complicação.
            </p>
          </div>
        </section>

        {/* ===== O QUE VAI ACONTECER ===== */}
        <section className="animate-up delay-2" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 28, fontWeight: 900, letterSpacing: '-0.02em', marginBottom: 24, textAlign: 'center' }}>
            O que vai acontecer no dia 30 de abril
          </h2>
          <div style={{ display: 'grid', gap: 12 }}>
            {[
              { icon: '📖', title: 'A linha do tempo da IA (sem complicação)', desc: 'Fábio vai mostrar de forma visual e direta o que a IA fazia antes e o que faz hoje. Por que 2026 é o ano que separa quem cresce de quem fica pra trás. Tudo explicado pra qualquer pessoa entender.' },
              { icon: '🖥️', title: 'Demonstração ao vivo numa empresa real', desc: 'Nada de slide bonito e promessa vazia. Você vai ver, na hora, a Inteligência Artificial trabalhando dentro de uma empresa real. Respondendo cliente. Criando conteúdo. Organizando a operação. Ao vivo, na sua frente.' },
              { icon: '🏢', title: 'O que a IA já resolve no seu tipo de negócio', desc: 'Limpeza, construção, estética, imóveis. Exemplos práticos do que empresários como você já estão fazendo pra economizar tempo, atender mais rápido e parar de depender só de indicação.' },
              { icon: '❓', title: 'As 3 perguntas que todo empresário precisa responder em 2026', desc: 'Existem 3 decisões que vão definir se o seu negócio cresce ou encolhe nos próximos 12 meses. Você vai sair dessa noite sabendo exatamente quais são e o que fazer.' },
              { icon: '🎤', title: 'Sessão aberta de perguntas', desc: 'Pode perguntar qualquer coisa. Sobre o seu negócio, sobre como aplicar no seu dia a dia. Sem julgamento. A ideia é você sair de lá com clareza total.' },
            ].map((item, i) => (
              <div key={i} style={{
                display: 'flex', gap: 14, padding: '20px 22px', borderRadius: 16,
                border: '1px solid var(--card-border-custom)',
                background: 'linear-gradient(135deg, var(--card-custom), transparent)',
              }}>
                <span style={{ fontSize: 24, flexShrink: 0 }}>{item.icon}</span>
                <div>
                  <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 4 }}>{item.title}</h3>
                  <p style={{ fontSize: 13, color: 'var(--text-muted-custom)', lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== JANTAR + NETWORKING ===== */}
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
                Isso não é só um evento. É uma experiência.
              </h2>
              <p style={{ fontSize: 14, color: 'var(--text-muted-custom)', lineHeight: 1.9, maxWidth: 560, marginLeft: 'auto', marginRight: 'auto', marginBottom: 20 }}>
                Seu ticket inclui jantar completo no Boteco do Manolo + bebida não alcoólica. Mas o jantar é o detalhe. O que realmente importa é com QUEM você vai estar sentado.
              </p>
              <p style={{ fontSize: 14, color: 'var(--text-muted-custom)', lineHeight: 1.9, maxWidth: 560, marginLeft: 'auto', marginRight: 'auto', marginBottom: 20 }}>
                50 empresários brasileiros nos EUA. Donos de negócios reais. Gente que está fazendo acontecer e quer ir mais longe. Enquanto uns estão reclamando do mercado, esse grupo vai estar planejando o próximo passo.
              </p>
              <p style={{ fontSize: 15, fontWeight: 700, color: 'var(--amber)' }}>
                Negócios nascem em jantares assim. Parcerias surgem em conversas assim. Venha pelo conhecimento. Fique pelas conexões.
              </p>
            </div>
          </div>
        </section>

        {/* ===== FOMO ===== */}
        <section className="animate-up delay-3" style={{ marginBottom: 48 }}>
          <div style={{
            padding: '28px 24px', borderRadius: 18,
            border: '1px solid rgba(249,115,22,0.12)',
            background: 'rgba(249,115,22,0.03)',
          }}>
            <p style={{ fontSize: 14, color: 'var(--text-muted-custom)', lineHeight: 1.9 }}>
              Enquanto você lê isso, outros empresários brasileiros nos Estados Unidos já estão se movimentando. Já estão buscando formas de atender mais clientes sem contratar mais gente. Já estão descobrindo como parar de depender só de indicação.
            </p>
            <p style={{ fontSize: 14, color: 'var(--text-muted-custom)', lineHeight: 1.9, marginTop: 12 }}>
              No dia 30 de abril, esses empresários vão estar todos na mesma sala. A cadeira vai estar ocupada. A pergunta é: <strong style={{ color: '#fff' }}>por quem? Por você, que precisa dessa virada? Ou pelo seu concorrente, que também recebeu esse convite?</strong>
            </p>
          </div>
        </section>

        {/* ===== QUEM É FÁBIO ===== */}
        <section className="animate-up delay-3" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 28, fontWeight: 900, letterSpacing: '-0.02em', marginBottom: 24, textAlign: 'center' }}>
            Quem vai conduzir essa noite
          </h2>
          <div style={{
            padding: '32px 28px', borderRadius: 20,
            border: '1px solid var(--card-border-custom)',
            background: 'linear-gradient(135deg, var(--card-custom), transparent)',
            textAlign: 'center',
          }}>
            {/* ESPAÇO PARA FOTO */}
            <div style={{
              width: 120, height: 120, borderRadius: '50%',
              background: 'rgba(245,158,11,0.08)', border: '2px solid rgba(245,158,11,0.15)',
              margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 11, color: 'var(--text-faint)'
            }}>
              FOTO
            </div>

            <h3 style={{ fontSize: 20, fontWeight: 800, marginBottom: 4 }}>Fábio Borges</h3>
            <p style={{ fontSize: 12, color: 'var(--amber)', fontWeight: 600, marginBottom: 16 }}>@fabioborges_ia</p>

            <div style={{ fontSize: 14, color: 'var(--text-muted-custom)', lineHeight: 1.9, textAlign: 'left' }}>
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

        {/* ===== VALOR EMPILHADO ===== */}
        <section className="animate-up delay-4" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 28, fontWeight: 900, letterSpacing: '-0.02em', marginBottom: 24, textAlign: 'center' }}>
            O que você recebe nessa noite
          </h2>
          <div style={{ display: 'grid', gap: 10 }}>
            {[
              { item: 'Jantar completo em restaurante exclusivo', valor: '$50' },
              { item: '3+ horas de imersão prática em IA para negócios com Fábio Borges', valor: '$1.500' },
              { item: 'Networking presencial com 50 empresários brasileiros da região', valor: 'Inestimável' },
              { item: 'Demonstração ao vivo: como a IA atende clientes, cria conteúdo e organiza sua empresa em minutos', valor: '$197' },
              { item: 'Acesso ao grupo exclusivo de participantes (pós-evento)', valor: '$97' },
            ].map((row, i) => (
              <div key={i} style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '14px 20px', borderRadius: 12,
                border: '1px solid var(--card-border-custom)',
                background: 'linear-gradient(135deg, var(--card-custom), transparent)',
              }}>
                <p style={{ fontSize: 13, color: 'var(--text-muted-custom)', flex: 1, paddingRight: 16 }}>{row.item}</p>
                <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--text-faint)', textDecoration: 'line-through', whiteSpace: 'nowrap' }}>{row.valor}</span>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 20 }}>
            <p style={{ fontSize: 13, color: 'var(--text-faint)', textDecoration: 'line-through' }}>Valor total: mais de $2.100</p>
            <p style={{ fontSize: 36, fontWeight: 900, color: 'var(--amber)', marginTop: 4 }}>Seu investimento: $62</p>
            <p style={{ fontSize: 13, color: 'var(--text-faint)', marginTop: 4 }}>Menos do que um tanque de gasolina. A diferença é que esse investimento pode mudar a direção do seu negócio.</p>
          </div>
        </section>

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
              { title: 'Quem quer sair na frente', desc: 'Seus concorrentes ainda não usam Inteligência Artificial de verdade. Quem começar agora vai dominar o mercado local.' },
            ].map((item, i) => (
              <div key={i} style={{
                padding: '20px 24px', borderRadius: 16,
                border: '1px solid var(--card-border-custom)',
                background: 'linear-gradient(135deg, var(--card-custom), transparent)',
              }}>
                <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 6 }}>{item.title}</h3>
                <p style={{ fontSize: 13, color: 'var(--text-muted-custom)', lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ===== FAQ ===== */}
        <section className="animate-up delay-4" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 28, fontWeight: 900, letterSpacing: '-0.02em', marginBottom: 20, textAlign: 'center' }}>
            Perguntas frequentes
          </h2>
          <div style={{ display: 'grid', gap: 10 }}>
            {[
              { q: 'Eu não entendo nada de tecnologia. Esse evento é pra mim?', a: 'Esse evento foi criado EXATAMENTE pra quem não entende nada de IA. Não é evento de tecnologia. É evento de NEGÓCIO. Tudo será explicado de forma simples. Se você sabe usar o celular, você vai entender tudo.' },
              { q: 'O que está incluso no valor de $62?', a: 'Jantar completo no Boteco do Manolo + bebida não alcoólica (refrigerante, água ou suco) + o evento inteiro com Fábio Borges + networking com outros empresários.' },
              { q: 'Posso levar meu sócio ou minha esposa?', a: 'Pode, mas cada pessoa precisa do seu próprio ticket. E honestamente? Trazer seu sócio é uma das melhores decisões que você pode tomar. Vocês vão sair alinhados.' },
              { q: 'Preciso levar notebook ou celular especial?', a: 'Não precisa levar nada. Só vem, assiste, pergunta e aproveita. Se quiser anotar no celular, fique à vontade.' },
              { q: 'E se eu comprar e não puder ir?', a: 'O ticket não é reembolsável, mas você pode transferir pra outra pessoa. Com apenas 50 vagas, nossa recomendação é: se você tem interesse, garanta agora. Quando acabar, acabou.' },
              { q: 'Onde fico sabendo de mais detalhes?', a: 'Siga @fabioborges_ia no Instagram. Qualquer atualização será comunicada por lá e também por SMS para quem comprou o ticket.' },
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

        {/* ===== FECHAMENTO EMOCIONAL + CTA FINAL ===== */}
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
              <p style={{ fontSize: 14, color: 'var(--text-muted-custom)', lineHeight: 1.9, maxWidth: 520, marginLeft: 'auto', marginRight: 'auto', marginBottom: 24 }}>
                Você não veio pros Estados Unidos pra ficar no mesmo lugar. Você deixou gente que ama pra trás. Recomeçou do zero num país que não fala a sua língua. Aprendeu na dor. E construiu algo que muita gente nem teve coragem de tentar. Agora existe um próximo capítulo. E ele não exige que você trabalhe mais. Exige que você saiba o que está disponível.
              </p>

              <h2 style={{ fontSize: 'clamp(24px, 4vw, 32px)', fontWeight: 900, letterSpacing: '-0.03em', marginBottom: 8 }}>
                50 vagas. Uma noite. Uma decisão.
              </h2>
              <p style={{ fontSize: 14, color: 'var(--text-muted-custom)', marginBottom: 8 }}>
                30 de Abril &bull; Boteco do Manolo &bull; Framingham, MA
              </p>
              <p style={{ fontSize: 40, fontWeight: 900, color: 'var(--amber)', marginBottom: 4 }}>
                $62
              </p>
              <p style={{ fontSize: 13, color: 'var(--text-faint)', marginBottom: 28 }}>
                Jantar + bebida inclusos
              </p>

              <a
                href="#"
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
            padding: '36px 28px', textAlign: 'center',
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
              <h3 style={{ fontSize: 'clamp(18px, 3vw, 24px)', fontWeight: 900, letterSpacing: '-0.02em', marginBottom: 8 }}>
                A gente leva a IA até você
              </h3>
              <p style={{ fontSize: 13, color: 'var(--text-muted-custom)', marginBottom: 20, maxWidth: 440, marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.7 }}>
                Fazemos uma call, identificamos as necessidades do seu negócio e resolvemos tudo remotamente. Você não precisa entender de tecnologia.
              </p>
              <a
                href="https://wa.me/15088488718?text=Ol%C3%A1%20F%C3%A1bio%2C%20vi%20a%20p%C3%A1gina%20do%20evento%20e%20quero%20agendar%20uma%20call."
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  padding: '14px 32px', borderRadius: 14,
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
