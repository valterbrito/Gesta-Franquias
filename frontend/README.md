
# Gestão Franquias - Frontend

Sistema de gestão para franquias, desenvolvido com Next.js, React, TailwindCSS e arquitetura modular. O layout é totalmente responsivo e profissional, focado em usabilidade e performance.

## Funcionalidades
- Dashboard principal com cards, métricas e gráficos
- Página de relatórios com filtros avançados, exportação e paginação
- Componentes reutilizáveis para UI (cards, tabelas, filtros)
- Integração com backend via API
- Layout adaptável para desktop, tablet e mobile

## Estrutura de Pastas
```
frontend/
	src/
		app/
			dashboard/
				page.tsx           # Dashboard principal
				reports/page.tsx   # Relatórios detalhados
			layout.tsx           # Layout global
		components/
			navbar.tsx           # Barra de navegação
			sidebar.tsx          # Menu lateral
			ui/card.tsx          # Card reutilizável
			charts/BarChart.tsx  # Gráfico de barras
		services/              # Serviços de API
		stores/                # Gerenciamento de estado
	public/                  # Assets estáticos
	README.md                # Documentação
```

## Instalação e Execução
```bash
# Instale as dependências
cd frontend
npm install

# Rode o servidor de desenvolvimento
npm run dev
```
O sistema estará disponível em `http://localhost:3000` (ou próxima porta disponível).

## Layout Responsivo
- Utiliza TailwindCSS para garantir responsividade em todos os dispositivos
- Testado em diferentes tamanhos de tela
- Design limpo, moderno e intuitivo

## Contribuição
1. Faça um fork do projeto
2. Crie uma branch: `git checkout -b minha-feature`
3. Commit suas alterações: `git commit -m "feat: minha feature"`
4. Push para o repositório: `git push origin minha-feature`
5. Abra um Pull Request

## Licença
MIT

---
Desenvolvido por [Valter Brito](https://github.com/valterbrito)
