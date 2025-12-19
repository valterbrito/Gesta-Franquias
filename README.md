# 🏢 Gestão de Franquias

[![GitHub](https://img.shields.io/badge/GitHub-valterbrito-black?style=flat-square&logo=github)](https://github.com/valterbrito)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-14.2.35-000000?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.3.1-61dafb?style=flat-square&logo=react)](https://react.dev/)
[![NestJS](https://img.shields.io/badge/NestJS-Latest-red?style=flat-square&logo=nestjs)](https://nestjs.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.1.6-3178c6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.3.0-06b6d4?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)

Sistema moderno de gestão para franquias com **layout profissional**, **componentes reutilizáveis** e **interface responsiva**. Desenvolvido com as melhores práticas de desenvolvimento web.

## ✨ Funcionalidades

### Frontend
- ✅ **Dashboard inteligente** com métricas em tempo real
- ✅ **Navbar superior** com logo, notificações e perfil do usuário
- ✅ **Sidebar colapsável** com menu de navegação
- ✅ **Cards de métricas** com variação percentual
- ✅ **Gráficos visuais** de receita e desempenho
- ✅ **Página de relatórios** com filtros avançados
- ✅ **Tabelas responsivas** e dinâmicas
- ✅ **Exportação de dados** (Excel, CSV, PDF)
- ✅ **Layout 100% responsivo** (mobile, tablet, desktop)
- ✅ **Design moderno** com TailwindCSS e animações

### Backend
- ✅ API RESTful com NestJS
- ✅ Autenticação JWT segura
- ✅ Controle de acesso baseado em roles (RBAC)
- ✅ Banco de dados com Prisma ORM
- ✅ Validação de dados robusta
- ✅ Tratamento de exceções centralizado
- ✅ Filtros de autenticação e autorização

## 📐 Layout & Componentes

### Componentes Principais
- **Navbar** - Barra superior com logo, notificações e perfil
- **Sidebar** - Menu lateral colapsável com navegação
- **MetricCard** - Cards de métricas com ícones coloridos
- **SimpleChart** - Gráficos customizáveis (barra e linha)
- **Dashboard** - Visão geral com métricas, gráficos e ações rápidas

### Paleta de Cores
| Cor | Código | Uso |
|-----|--------|-----|
| Azul | `#2563eb` | Primária, CTA |
| Verde | `#10b981` | Sucesso, Receita |
| Roxo | `#a855f7` | Secundária, Unidades |
| Laranja | `#f97316` | Alerta, Atenção |
| Cinza | `#6b7280` | Neutro, Texto |

## 🏗️ Arquitetura

```
Gestão Franquias/
├── frontend/                           # Aplicação Next.js
│   ├── src/
│   │   ├── app/
│   │   │   ├── dashboard/
│   │   │   │   ├── page.tsx            # Dashboard principal
│   │   │   │   └── reports/
│   │   │   │       └── page.tsx        # Página de relatórios
│   │   │   ├── layout.tsx              # Layout raiz
│   │   │   ├── page.tsx                # Home
│   │   │   └── globals.css             # Estilos globais
│   │   ├── components/
│   │   │   ├── layout/
│   │   │   │   ├── navbar.tsx          # Barra superior
│   │   │   │   └── sidebar.tsx         # Menu lateral
│   │   │   ├── cards/
│   │   │   │   └── metric-card.tsx     # Cards de métrica
│   │   │   ├── charts/
│   │   │   │   └── simple-chart.tsx    # Gráficos
│   │   │   └── ui/
│   │   │       └── card.tsx            # Componente base de card
│   │   ├── services/
│   │   │   ├── api.ts                  # Cliente HTTP
│   │   │   └── auth.ts                 # Serviço de autenticação
│   │   └── stores/
│   │       └── useUserStore.ts         # Zustand store
│   └── package.json
│
├── backend/                            # Aplicação NestJS
│   ├── src/
│   │   ├── auth/                       # Módulo de autenticação
│   │   ├── users/                      # Módulo de usuários
│   │   ├── reports/                    # Módulo de relatórios
│   │   ├── transactions/               # Módulo de transações
│   │   ├── units/                      # Módulo de unidades
│   │   ├── common/
│   │   │   ├── decorators/
│   │   │   ├── filters/
│   │   │   └── guards/
│   │   ├── app.module.ts
│   │   └── main.ts
│   ├── prisma/
│   │   ├── schema.prisma
│   │   └── seed.ts
│   └── package.json
│
├── DESIGN_UPDATES.md                   # Documentação de design
├── README.md                           # Este arquivo
└── .gitignore
```

## 🚀 Início Rápido

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn
- Git

### Instalação

1. **Clone o repositório:**
```bash
git clone https://github.com/valterbrito/Gesta-Franquias.git
cd Gesta-Franquias
```

2. **Configure o Frontend:**
```bash
cd frontend
npm install
npm run build  # Compilação (opcional)
```

3. **Configure o Backend:**
```bash
cd ../backend
npm install
```

### Desenvolvimento Local

**Terminal 1 - Frontend:**
```bash
cd frontend
npm run dev
```
Acesse em: `http://localhost:3002` (porta automática se 3000/3001 ocupadas)

**Terminal 2 - Backend:**
```bash
cd backend
npm run start:dev
```
API disponível em: `http://localhost:3001`

## 📋 Tecnologias Utilizadas

### Frontend
| Tecnologia | Versão | Uso |
|------------|--------|-----|
| Next.js | 14.2.35 | Framework React moderno |
| React | 18.3.1 | Biblioteca UI |
| TypeScript | 5.1.6 | Type safety |
| TailwindCSS | 3.3.0 | Styling utilitário |
| Zustand | 4.3.9 | Gerenciamento de estado |
| Axios | 1.4.0 | Cliente HTTP |
| PostCSS | 8.4.24 | Processamento de CSS |

### Backend
| Tecnologia | Versão | Uso |
|------------|--------|-----|
| NestJS | Latest | Framework Node.js |
| Prisma | Latest | ORM e migrations |
| JWT | - | Autenticação |
| TypeScript | 5.1.6 | Type safety |
| PostgreSQL | - | Banco de dados |

## 🎨 Layout & Componentes

### Componentes Disponíveis

#### Navbar (`components/layout/navbar.tsx`)
Barra de navegação superior com:
- Logo com gradiente
- Menu de navegação
- Ícone de notificações com badge
- Dropdown de perfil do usuário

```tsx
import Navbar from "@/components/layout/navbar"
```

#### Sidebar (`components/layout/sidebar.tsx`)
Menu lateral colapsável com:
- 6 itens de navegação principal
- Indicador de página ativa
- Toggle para expandir/recolher
- Responsivo para mobile

```tsx
import Sidebar from "@/components/layout/sidebar"
```

#### MetricCard (`components/cards/metric-card.tsx`)
Cards de métrica com:
- Título e valor
- Mudança percentual
- Ícone colorido
- 4 variações de cores

```tsx
<MetricCard 
  title="Total de Transações" 
  value="1.234" 
  change={12} 
  icon="💳" 
  color="blue" 
/>
```

#### SimpleChart (`components/charts/simple-chart.tsx`)
Gráficos customizáveis com:
- Tipo barra e linha
- Dados dinâmicos
- Labels e valores
- Cores personalizáveis

```tsx
<SimpleChart
  title="Receita Mensal"
  data={performanceData}
  type="bar"
/>
```

## 📱 Responsividade

Todos os componentes foram desenvolvidos com mobile-first approach:

| Breakpoint | Largura | Uso |
|------------|---------|-----|
| `sm` | 640px | Mobile grande |
| `md` | 768px | Tablet |
| `lg` | 1024px | Desktop |
| `xl` | 1280px | Desktop grande |

Exemplos de responsividade:
- Sidebar: Collapsa em overlay no mobile
- Navbar: Simplificada em mobile
- Dashboard: 1 coluna mobile → 4 colunas desktop
- Tabelas: Scroll horizontal em mobile

## 🎨 Estilos & Temas

### Configuração do Tailwind
```js
// tailwind.config.js
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
}
```

### Estilos Globais
Definidos em `src/app/globals.css`:
- Animações suaves
- Classes de componentes reutilizáveis
- Customização de scrollbar
- Sistema de cores consistente

## 📊 Páginas Implementadas

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas alterações (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

## 👨‍💻 Autor

**Valter Brito**
- GitHub: [@valterbrito](https://github.com/valterbrito)
- Email: seu-email@exemplo.com

## 🙏 Agradecimentos

- Next.js e React pela excelente documentação
- NestJS pela arquitetura escalável
- TailwindCSS pelo design system incrível
- Todos os contribuidores da comunidade open source

---

⭐ Se este projeto foi útil, deixe uma estrela no [GitHub](https://github.com/valterbrito/Gesta-Franquias)!

**Última atualização:** Dezembro de 2025
