# 🏢 Gestão Franquias

[![GitHub](https://img.shields.io/badge/GitHub-valterbrito-black?style=flat-square&logo=github)](https://github.com/valterbrito)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

Sistema completo de gestão para franquias, desenvolvido com **Next.js**, **React**, **NestJS** e **TypeScript**. O layout é totalmente responsivo e profissional, focado em usabilidade, performance e segurança.

## ✨ Funcionalidades

### Frontend
- ✅ Dashboard principal com métricas e gráficos
- ✅ Página de relatórios com filtros avançados
- ✅ Tabelas dinâmicas e responsivas
- ✅ Exportação de dados (Excel, CSV, PDF)
- ✅ Paginação inteligente
- ✅ Navegação intuitiva com sidebar e navbar
- ✅ Design moderno com TailwindCSS

### Backend
- ✅ API RESTful com NestJS
- ✅ Autenticação JWT
- ✅ Controle de acesso baseado em roles
- ✅ Banco de dados com Prisma
- ✅ Validação de dados robusta
- ✅ Tratamento de exceções centralizado

## 🏗️ Arquitetura

```
Gestão Franquias/
├── frontend/                 # Aplicação Next.js
│   ├── src/
│   │   ├── app/             # App Router (Next.js 13+)
│   │   │   ├── dashboard/   # Páginas do dashboard
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   ├── components/      # Componentes reutilizáveis
│   │   ├── services/        # Serviços de API
│   │   └── stores/          # Gerenciamento de estado (Zustand)
│   └── package.json
│
├── backend/                  # Aplicação NestJS
│   ├── src/
│   │   ├── auth/            # Módulo de autenticação
│   │   ├── users/           # Módulo de usuários
│   │   ├── reports/         # Módulo de relatórios
│   │   ├── transactions/    # Módulo de transações
│   │   └── common/          # Utilitários compartilhados
│   ├── prisma/              # Configuração do banco de dados
│   └── package.json
│
└── README.md
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
Acesse em: `http://localhost:3000`

**Terminal 2 - Backend:**
```bash
cd backend
npm run start:dev
```
API disponível em: `http://localhost:3001`

## 📋 Tecnologias

### Frontend
- **Next.js 14** - Framework React com App Router
- **React 18** - Biblioteca de UI
- **TailwindCSS** - Styling utilitário
- **TypeScript** - Type safety
- **Zustand** - Gerenciamento de estado
- **Axios** - Cliente HTTP

### Backend
- **NestJS** - Framework Node.js
- **Prisma** - ORM para banco de dados
- **JWT** - Autenticação segura
- **TypeScript** - Type safety
- **Validators** - Validação de dados

## 🎨 Layout Responsivo

O projeto foi desenvolvido com foco em responsividade:
- **Mobile First** - Otimizado para smartphones
- **Tablet** - Layouts adaptáveis para tablets
- **Desktop** - Interface completa para desktop
- **Dark Mode Ready** - Preparado para temas escuros

## 🔐 Segurança

- ✅ Autenticação JWT
- ✅ CORS configurado
- ✅ Validação de entrada
- ✅ Proteção contra SQL Injection
- ✅ Controle de acesso baseado em roles
- ✅ Variáveis de ambiente protegidas

## 📱 Páginas Principais

### Dashboard (`/dashboard`)
- Visualização de métricas principais
- Gráficos interativos
- Cards informativos
- Acesso rápido aos relatórios

### Relatórios (`/dashboard/reports`)
- Filtros avançados (Visitante, Datas, Unidade, etc.)
- Tabela responsiva com dados detalhados
- Paginação inteligente
- Exportação em múltiplos formatos
- Busca e ordenação

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
