# Landing Page

## Nome:
Rafael Castro Moreira

## Descrição
Landing page desenvolvida para um consultório de psicologia e psicoterapia, como parte do processo seletivo da Linked Empresa Júnior. O projeto foi implementado a partir de um layout fornecido no Figma, com fidelidade ao design, responsividade e boas práticas de código.

## Deploy

Acesse o projeto online: [linked-ps-web-rafaelcastromoreira.vercel.app](https://linked-ps-web-rafaelcastromoreira.vercel.app)

## Como rodar o projeto localmente

### Pré-requisitos
- [Node.js](https://nodejs.org/) versão 18 ou superior instalado
- npm (já vem junto com o Node.js)

### Passos

**1. Clone o repositório**
```bash
git clone https://github.com/rafacastro284/linked-ps-web-RafaelCastroMoreira.git
```

**2. Entre na pasta do projeto**
```bash
cd linked-ps-web-RafaelCastroMoreira
```

**3. Instale as dependências**
```bash
npm install
```

**4. Inicie o servidor de desenvolvimento**
```bash
npm run dev
```

**5. Acesse no navegador**

Abra [http://localhost:5173](http://localhost:5173)

> ⚠️ Certifique-se de que nenhum outro serviço esteja usando a porta 5173.

## Tecnologias utilizadas
- React
- Vite
- CSS3
- Google Fonts (Inria Serif e Inter)

## Estrutura do projeto

```
src/
├── assets/        # Imagens e ícones
├── Header/        # Cabeçalho
├── Capa/          # Seção inicial
├── Servicos/      # Seção de serviços
├── Horario/       # Seção de horários
├── Feedbacks/     # Seção de feedbacks
├── Contato/       # Seção de contato
├── Footer/        # Rodapé
├── App.jsx        # Componente raiz
├── App.css        # Estilos globais
└── main.jsx       # Ponto de entrada
```

## Decisões técnicas
- Cada componente foi organizado em sua própria pasta com JSX e CSS separados, facilitando a manutenção e legibilidade do código.
- As medidas e cores foram extraídas diretamente do Figma para a melhor fidelidade ao design.
- A responsividade foi implementada com media queries para mobile (≤ 768px).
- Formulário estático conforme permitido pelo enunciado.