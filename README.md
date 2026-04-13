# 🌐 D.A. SI UFRB - Site Oficial

> Site do Diretório Acadêmico do Curso de Sistemas de Informação da Universidade Federal do Recôncavo da Bahia

## 📋 Descrição

Este é o repositório do site oficial do **D.A. SI UFRB** (Diretório Acadêmico de Sistemas de Informação). O site serves como plataforma de comunicação entre a diretoria e os estudantes do curso, oferecendo informações sobre avisos, diretoria, links úteis e contato.

O site foi construído com base em dados extraídos do grupo WhatsApp da Diretoria, garantindo que as informações sejam atualizadas e relevantes para a comunidade acadêmica.

## 🎯 Funcionalidades

- **🏠 Início**: Página inicial com visão geral do D.A. e avisos recentes
- **👥 Diretoria**: Lista completa dos membros da diretoria atual
- **📢 Avisos**: Comunicados e notícias importantes
- **🔗 Links Úteis**: Links para sistemas da UFRB (Moodle, Portal do Aluno, etc.)
- **📞 Contato**: Formulário de contato e informações da diretoria

## 🛠️ Stack Tecnológica

- **Runtime**: [Bun](https://bun.sh/) (替代 Node.js)
- **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite 6](https://vitejs.dev/)
- **Estilização**: [Tailwind CSS 3](https://tailwindcss.com/)
- **Animações**: [Framer Motion](https://www.framer.com/motion/)
- **Ícones**: [Lucide React](https://lucide.dev/)
- **Router**: [React Router 7](https://reactrouter.com/)

## 🚀 Como Executar

### Pré-requisitos

- Bun instalado (https://bun.sh/install)
- ou Node.js 18+ (alternativo)

### Instalação

```bash
# Clone o repositório
git clone https://github.com/si-ufrb/si-ufrb-site.git

# Entre no diretório
cd si-ufrb-site

# Instale as dependências
bun install
```

### Desenvolvimento

```bash
# Iniciar servidor de desenvolvimento
bun run dev
```

O site estará disponível em `http://localhost:3000`

### Produção

```bash
# Build para produção
bun run build

# Preview do build
bun run preview
```

## 📁 Estrutura do Projeto

```
si-ufrb-site/
├── public/
│   └── favicon.svg          # Ícone do site
├── src/
│   ├── components/
│   │   ├── Navbar.tsx       # Navegação principal
│   │   └── Footer.tsx       # Rodapé
│   ├── pages/
│   │   ├── Home.tsx         # Página inicial
│   │   ├── Diretoria.tsx    # Membros da diretoria
│   │   ├── Avisos.tsx      # Lista de avisos
│   │   ├── Links.tsx       # Links úteis
│   │   └── Contato.tsx     # Página de contato
│   ├── data/
│   │   └── index.ts        # Dados mockados
│   ├── App.tsx             # Componente principal
│   ├── main.tsx            # Entry point
│   └── index.css           # Estilos globais
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## 📊 Dados Extraídos do Chat

### Diretoria 2026

| Cargo | Nome |
|-------|------|
| Presidente | Lucas Machado Lima |
| Vice-Presidente | Iris Lopes |
| Secretário-Geral | André Juarez |
| Tesoureiro | Evelin |
| Coordenador de Assuntos Acadêmicos | Vince |
| Coordenadora de Divulgação, RP e Imprens | Brunna |
| Coordenador de Tecnologia e Inovação | Deivison Lima de Santana |
| Coordenador de Extensão e Projetos | Flávio |
| Coordenador de Estágios e Mercado | VAGO |
| Coordenador de Inclusão e Permanência | VAGO |

### Cargos Vagos (Abril/2026)

- Primeiro Secretário (Feira de Santana)
- Coordenador de Estágios e Mercado
- Coordenador de Inclusão e Permanência Estudantil

### Assuntos em Destaque (Chat WhatsApp)

- **Problemas com AVA/E-mail Institucional**: Muitos alunos sem acesso ao Moodle
- **Prorrogação de Prazos**: Diretoria pedindo prorrogação ao Colegiado
- **Greve na UFRB**: Técnicos em GREVE (abril/2026), Professores NÃO
- **Eleição da Diretoria**: Chapa em formação, votação prevista
- **Disciplinas do Semestre**: Lógica Matemática, Programação, Fundamentos, Algoritmos, Matemática Discreta

### Plataformas Mencionadas

- **Moodle UFRB**: Sistema oficial de aprendizagem
- **Google Classroom**: Sugerido como alternativa ao Moodle
- **Beecrowd**: Plataforma de exercícios de programação (sugestão do grupo)
- **NotebookLM**: Ferramenta de IA mencionada em minicurso

## 🌐 Hospedagem

O site será hospedado no **GitHub Pages**.

### Deploy

```bash
# Build automático com GitHub Actions
# Configure as secrets do GitHub:
# - GITHUB_TOKEN (automatico)
# - GH_PAGES_TOKEN (opcional)

# O deploy é feito automaticamente ao fazer push na branch main
```

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'feat: nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📝 Licença

MIT License - veja o arquivo [LICENSE](LICENSE) para detalhes.

## 📧 Contato

- **Email**: contato@si-ufrb.com
- **Instagram**: @siufrb
- **Facebook**: fb.com/siufrb
- **WhatsApp**: [Grupo da Diretoria](https://chat.whatsapp.com/seu-codigo-aqui)

---

Desenvolvido com 💚 pela Coordenação de Tecnologia e Inovação - D.A. SI UFRB 2026

**Nota**: Este site foi construído automaticamente a partir dos dados do grupo WhatsApp da Diretoria. As informações podem não refletir 100% da realidade atual - please verificar com a diretoria para confirmações.