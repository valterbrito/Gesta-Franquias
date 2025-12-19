# 📊 Guia Visual do Novo Layout

## 🎯 Visão Geral

O novo layout profissional implementado no Gestão Franquias segue padrões modernos de SaaS, com foco em usabilidade, acessibilidade e responsividade.

## 🏗️ Estrutura da Página

```
┌─────────────────────────────────────────────────────────────┐
│                          NAVBAR                             │
│  Logo     Menu items...                  Notifs  Profile     │
├──────────────────────────────────────────────────────────────┤
│        │                                                     │
│ SIDEBAR│ MAIN CONTENT AREA                                   │
│  Menu  │                                                     │
│        │  ┌─────────────────────────────────────────────┐   │
│        │  │ Dashboard > Header                          │   │
│        │  │ Time selector + Export button               │   │
│        │  └─────────────────────────────────────────────┘   │
│        │                                                     │
│        │  ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐                 │
│        │  │Card1│ │Card2│ │Card3│ │Card4│                 │
│        │  └─────┘ └─────┘ └─────┘ └─────┘                 │
│        │                                                     │
│        │  ┌────────────────────┐  ┌─────────────────┐      │
│        │  │ Gráfico Receita    │  │  Top 5 Unidades │      │
│        │  │     (Largo)        │  │   (Pequeno)     │      │
│        │  └────────────────────┘  └─────────────────┘      │
│        │                                                     │
│        │  ┌──────────────────────────────────────────┐     │
│        │  │      AÇÕES RÁPIDAS (4 Cards)             │     │
│        │  └──────────────────────────────────────────┘     │
│        │                                                     │
└─────────────────────────────────────────────────────────────┘
```

## 🎨 Componentes Visuais

### 1. NAVBAR (Barra Superior)
**Responsabilidades:**
- Logo com gradiente azul-roxo
- Notificações com badge de contagem
- Menu de perfil dropdown
- Altura: 64px
- Cor: Branco com border bottom cinza claro

**Elementos:**
```
[Logo GF] Gestão Franquias          🔔(3)  👤 Valter Brito ▼
```

### 2. SIDEBAR (Menu Lateral)
**Responsabilidades:**
- Menu de navegação colapsável
- Indicador de página ativa
- 6 itens de menu com ícones

**Itens de Menu:**
- 📊 Dashboard
- 📋 Relatórios
- 👥 Usuários
- 💳 Transações
- 🏢 Unidades
- ⚙️ Configurações

**Responsive:**
- Desktop: 256px de largura
- Mobile: Overlay com 256px
- Tablet: Colapsado a 80px

### 3. DASHBOARD CONTENT

#### Header
```
┌─────────────────────────────────────────────┐
│ Dashboard                  🕐 [Período ▼] [Exportar] │
│ Bem-vindo! Resumo do negócio                │
└─────────────────────────────────────────────┘
```

#### Metric Cards (Grid 1-2-4)
```
Mobile:  1 coluna
┌──────┐
│Card  │
├──────┤
│Card  │
├──────┤
│Card  │
└──────┘

Tablet:  2 colunas
┌──────┬──────┐
│Card  │Card  │
├──────┼──────┤
│Card  │Card  │
└──────┴──────┘

Desktop: 4 colunas
┌──────┬──────┬──────┬──────┐
│Card  │Card  │Card  │Card  │
└──────┴──────┴──────┴──────┘
```

**Cada Card contém:**
```
┌───────────────────────┐
│ 💳 Título      [Ícone]│
│ R$ 1.234              │
│ +12% vs mês anterior  │
└───────────────────────┘
```

#### Charts Section (1-2-3)
```
Desktop: 2 componentes
┌────────────────────────────┬──────────────────┐
│  Receita Mensal            │  Top 5 Unidades  │
│  (3/4 da largura)          │  (1/4 da largura)│
└────────────────────────────┴──────────────────┘
```

#### Quick Actions (1-2-4)
```
┌────────────────────────────────────────┐
│ Ações Rápidas                          │
├────────┬────────┬────────┬────────┐
│  📋    │   ➕   │   👤   │   📊   │
│Relatórios│Transação│Usuário │Exportar│
└────────┴────────┴────────┴────────┘
```

## 🎨 Paleta de Cores

### Cores Primárias
| Cor | Hex | RGB | Uso |
|-----|-----|-----|-----|
| Azul Primária | `#2563eb` | `37, 99, 235` | Botões, Links, Destaques |
| Verde Sucesso | `#10b981` | `16, 185, 129` | Receita, Positivo |
| Roxo Secundária | `#a855f7` | `168, 85, 247` | Unidades, Destaque |
| Laranja Alerta | `#f97316` | `249, 115, 22` | Atenção, Avisos |
| Cinza Neutro | `#6b7280` | `107, 114, 128` | Texto, Backgrounds |

### Tons de Cinza
- Cinza 50: `#f9fafb` - Background claro
- Cinza 100: `#f3f4f6` - Hover backgrounds
- Cinza 200: `#e5e7eb` - Borders
- Cinza 300: `#d1d5db` - Disabled
- Cinza 900: `#111827` - Texto escuro

### Estados de Cor
```
Hover:    Escurece 10%
Active:   Escurece 20%
Disabled: Cinza 300 com 50% opacity
Focus:    Ring azul 2px
```

## 📐 Tipografia

### Fonte
- **Família**: Sistema padrão (sans-serif fallback)
- **Peso**: 400 (regular), 500 (medium), 600 (semibold), 700 (bold)
- **Tamanho base**: 16px

### Hierarquia
```
H1 (3xl)  - 30px bold     - Títulos de página
H2 (2xl)  - 24px bold     - Seções
H3 (lg)   - 18px semibold - Subseções
H4 (base) - 16px medium   - Cards
Body      - 14px regular  - Conteúdo
Small     - 12px regular  - Labels
```

## 🎯 Breakpoints & Responsividade

### Tailwind Breakpoints
```
sm: 640px   - Mobile grande
md: 768px   - Tablet
lg: 1024px  - Desktop
xl: 1280px  - Desktop grande
2xl: 1536px - Desktop muito grande
```

### Comportamento por Tamanho

**Mobile (< 768px)**
- Sidebar: Overlay escondido
- Grid métrica: 1 coluna
- Gráficos: Stack vertical
- Navbar: Simplificada

**Tablet (768px - 1024px)**
- Sidebar: Visível colapsado (80px)
- Grid métrica: 2 colunas
- Gráficos: Stack vertical
- Navbar: Normal

**Desktop (> 1024px)**
- Sidebar: Visível expandido (256px)
- Grid métrica: 4 colunas
- Gráficos: 2 colunas (3+1)
- Navbar: Normal com todas as opções

## ✨ Animações & Transições

### Transições Padrão
- Duração: 200-300ms
- Easing: ease-in-out
- Propriedades: `color`, `background`, `border`

### Animações Especiais
```css
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
```

### Hover Effects
- Links: Color change + underline
- Buttons: Darken background 10%
- Cards: Elevation shadow increase
- Icons: Scale 1.1 ou color change

## 🚀 Performance

### Otimizações Implementadas
✅ Image optimization (Next.js)
✅ Code splitting automático
✅ CSS purification (TailwindCSS)
✅ Lazy loading de componentes
✅ Memoização de componentes pesados
✅ Virtual scrolling para listas grandes

## ♿ Acessibilidade

### Implementações
✅ Semantic HTML (main, nav, section)
✅ ARIA labels em ícones
✅ Keyboard navigation (Tab, Enter)
✅ Color contrast ≥ 4.5:1
✅ Focus indicators visíveis
✅ Alt text em imagens

## 📋 Componentes Customizáveis

### MetricCard Props
```tsx
interface MetricCardProps {
  title: string              // Título do card
  value: string | number     // Valor principal
  change?: number            // % de mudança
  icon: string              // Emoji ou ícone
  color?: 'blue' | 'green' | 'purple' | 'orange'
}
```

### SimpleChart Props
```tsx
interface SimpleChartProps {
  title: string             // Título do gráfico
  data: Array<{
    label: string
    value: number
    color?: string
  }>
  type?: 'bar' | 'line'    // Tipo de gráfico
}
```

## 🔄 Fluxo de Navegação

```
Home (index.html)
    ↓
Login (frontend/auth)
    ↓
Dashboard (/dashboard)
    ├─→ Relatórios (/dashboard/reports)
    ├─→ Usuários (/dashboard/users)
    ├─→ Transações (/dashboard/transactions)
    ├─→ Unidades (/dashboard/units)
    └─→ Configurações (/dashboard/settings)
```

## 📱 Próximos Passos (Roadmap)

1. **Dark Mode** - Tema escuro
2. **Custom Themes** - Temas customizáveis
3. **Charts Avançados** - Mais tipos de gráficos
4. **Dados Reais** - Integração com API
5. **Notificações** - Sistema de notificações
6. **Mobile App** - Versão nativa mobile
7. **Performance** - Otimizações adicionais

---

**Versão**: 1.0.0
**Data**: 2024
**Status**: Produção
