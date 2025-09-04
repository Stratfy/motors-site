# Motors - Loja de Carros

## Informações Acadêmicas

**Projeto**: CP4  
**Disciplina**: WEB / FRONT  
**Professor**: Wellington Cidade Silva  

### Participantes

| Nome | RM |
|------|-----|
| Luigi Mendes Cabrini | 563552 |
| Bruno Koeke | 561309 |
| Rogério Cruz Arroyo | 563517 |
| Anthony Sforzin | 562096 |

## Sobre o Projeto

Uma aplicação web moderna desenvolvida com React + Vite para uma loja de carros, incluindo uma calculadora funcional para cálculos financeiros.

## Funcionalidades

- **Home**: Página principal com carros em destaque e serviços
- **Sobre**: Informações sobre a empresa, missão, visão e valores
- **Carros**: Catálogo completo de veículos disponíveis
- **Calculadora**: Calculadora funcional com as 4 operações básicas
  - Adição
  - Subtração  
  - Multiplicação
  - Divisão

## Estrutura do Projeto

```
src/
├── assets/          # Imagens, ícones e arquivos estáticos
├── components/      # Componentes reutilizáveis
│   ├── Navbar.jsx   # Barra de navegação
│   ├── Footer.jsx   # Rodapé
│   └── Calculator.jsx # Calculadora funcional
├── routes/          # Páginas/rotas da aplicação
│   ├── Home.jsx     # Página inicial
│   ├── About.jsx    # Página sobre a empresa
│   ├── Cars.jsx     # Página de catálogo de carros
│   └── CalculatorPage.jsx # Página da calculadora
└── App.jsx          # Componente principal com roteamento
```

## Tecnologias Utilizadas

- React 18
- Vite
- React Router DOM
- CSS3 com Grid e Flexbox
- JavaScript ES6+

## Instalação e Execução

1. Instalar dependências:
```bash
npm install
```

2. Executar em modo desenvolvimento:
```bash
npm run dev
```

3. Acessar: http://localhost:5173/

4. Build para produção:
```bash
npm run build
```

## Design

- Interface moderna e responsiva
- Tema escuro com detalhes em laranja (#ff6b35)
- Animações e transições suaves
- Layout adaptável para dispositivos móveis

## Uso da Calculadora

A calculadora permite realizar operações matemáticas básicas:
1. Clique nos números para inserir valores
2. Selecione a operação desejada (+, -, ×, ÷)
3. Insira o segundo valor
4. Pressione "=" para obter o resultado
5. Use "C" para limpar a calculadora
