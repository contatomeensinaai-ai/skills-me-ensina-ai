
## Plano: Landing Page "Skills Claude Code para Empresários"

Recriar fielmente a landing page do HTML fornecido como aplicação React, mantendo design, cores, fontes e funcionalidade idênticos.

### Estrutura

**1. Página Index com dois estados:**
- **Gate (tela inicial):** Formulário com nome + WhatsApp, badge "Acesso Gratuito", lista de benefícios, mini banner do evento
- **Portal (conteúdo principal):** Exibido após envio do formulário

**2. Seções do Portal:**
- Header com badge "Portal Gratuito"
- Aviso de preço (conta Anthropic $20/mês)
- Banner do evento "A Nova Virada da IA" com CTA
- **Primeiros Passos** — tabs Desktop / Terminal com steps cards
- **Como Usar uma Skill** — dois blocos howto (Desktop e Terminal)
- **8 Skills Profissionais** — grid de cards com toggle para expandir/copiar prompt
- **Dicas para Resultados Melhores** — 3 tip cards
- Banner final do evento (variante "Últimas Vagas")
- Footer

**3. Design System:**
- Background: `#06080a` com efeitos atmosféricos (gradientes radiais + grid pattern)
- Cores: amber `#f59e0b`, orange `#f97316`, emerald `#10b981`, purple `#a78bfa`, cyan `#22d3ee`
- Fontes: Satoshi (principal) + JetBrains Mono (código)
- Cards com bordas sutis, hover glow amber, border-radius 18px
- Animações: fadeUp, glow pulsante no CTA, pulse-dot no badge

**4. Funcionalidades:**
- Formulário gate → transição para portal
- Tabs Desktop/Terminal nos primeiros passos
- Toggle expandir/fechar cada skill card
- Botão "Copiar" com feedback visual "Copiado!"
- Scrollbar customizada
- Responsivo (grid 1 col mobile → 2 col desktop para skills, 3 col para tips)

**5. Componentes React:**
- `GateSection` — formulário + features
- `PortalSection` — container de todo o conteúdo
- `EventBanner` — reutilizado (topo e final, com variante)
- `SetupTabs` — tabs com conteúdo Desktop/Terminal
- `SkillCard` — card com toggle e copy
- `TipCard`, `HowToBox`, `StepCard` — componentes menores

**6. Dados:**
- Array de 8 skills com icon, title, desc, tags, lines, prompt (conteúdo completo dos prompts)
