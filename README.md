# 🍽️ E-Food - Plataforma de Delivery de Restaurantes

Uma plataforma moderna e responsiva de delivery de restaurantes construída com React, TypeScript e Redux Toolkit. Navegue por restaurantes, explore cardápios, adicione itens ao carrinho e gerencie seus pedidos com uma interface intuitiva.

## 🚀 Funcionalidades

### 🏪 Descoberta de Restaurantes
- Navegue por uma seleção curada de restaurantes
- Visualize detalhes dos restaurantes, avaliações e culinárias
- Filtre restaurantes por tipo e status em destaque

### 🍕 Gerenciamento de Cardápios
- Itens detalhados do cardápio com descrições e preços
- Imagens de alta qualidade dos pratos
- Layouts responsivos de cardápio para todos os dispositivos

### 🛒 Carrinho de Compras
- Adicione itens ao carrinho diretamente dos cardápios dos restaurantes
- Controles de quantidade com botões de incremento/decremento
- Cálculo em tempo real do total do carrinho
- Gerenciamento persistente do estado do carrinho
- Clique no indicador do carrinho no cabeçalho para abrir o carrinho

### 💰 Formatação de Moeda Brasileira
- Formatação adequada do Real Brasileiro (R$) com separadores decimais por vírgula
- Símbolos de moeda e formatação específica da localidade

### 🎨 UI/UX Moderna
- Design limpo e intuitivo com esquema de cores consistente
- Layout responsivo para dispositivos móveis e desktop
- Animações e transições suaves
- Interface acessível com rótulos ARIA adequados

### 🔧 Recursos Técnicos
- TypeScript para segurança de tipos
- Redux Toolkit para gerenciamento de estado
- RTK Query para busca de dados da API
- Styled Components para CSS-in-JS sustentável
- React Router para navegação
- ESLint e Biome para qualidade do código

## 🛠️ Tecnologias Utilizadas

### Framework Frontend
- **React 19** - React moderno com os recursos mais recentes
- **TypeScript** - JavaScript com tipos seguros
- **Vite** - Ferramenta rápida de build e servidor de desenvolvimento

### Gerenciamento de Estado
- **Redux Toolkit** - Implementação simplificada do Redux
- **RTK Query** - Busca e cache poderosos de dados

### Estilização
- **Styled Components** - CSS-in-JS com suporte a temas
- **React Icons** - Biblioteca de ícones bonita

### Ferramentas de Desenvolvimento
- **ESLint** - Verificação de qualidade e formatação do código
- **Biome** - Formatação e verificação rápida do código
- **Vite** - Servidor de desenvolvimento extremamente rápido

## 📦 Instalação

1. **Clone o repositório**
   ```bash
   git clone https://github.com/SeraphCloud/E-Food.git
   cd efood
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento**
   ```bash
   npm run dev
   ```

4. **Abra seu navegador**
   Navegue para `http://localhost:5173`

## 📜 Scripts Disponíveis

- `npm run dev` - Iniciar servidor de desenvolvimento com hot reload
- `npm run build` - Build para produção
- `npm run preview` - Visualizar build de produção localmente
- `npm run lint` - Executar ESLint para verificações de qualidade do código

## 🏗️ Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis da UI
│   ├── Cart/           # Funcionalidade do carrinho de compras
│   ├── FoodCard/       # Exibição individual de itens alimentares
│   ├── Modal/          # Diálogos modais para detalhes dos itens
│   ├── RestaurantCard/ # Cards de listagem de restaurantes
│   └── ...
├── pages/              # Componentes de página e roteamento
├── hooks/              # Hooks customizados do React
├── store/              # Store e reducers do Redux
├── styles/             # Estilos globais e tema
├── types/              # Definições de tipos TypeScript
├── utils/              # Funções utilitárias
└── services/           # Configurações dos serviços da API
```

## 🎨 Sistema de Design

A aplicação utiliza uma paleta de cores consistente:
- **Laranja (#E66767)** - Cor principal da marca para botões e destaques
- **Creme (#FFEBD9)** - Fundo e elementos secundários
- **Branco quebrado (#FFF8F2)** - Fundos das páginas

## 🌐 Integração com API

A aplicação se integra com um endpoint de API mock:
- **URL Base**: `https://fake-api-havokk.vercel.app/api/efood`
- **Endpoints**: Dados de restaurantes e cardápios
- Utiliza RTK Query para busca e cache eficientes de dados

## 📱 Design Responsivo

- **Abordagem mobile-first** com pontos de quebra
- **Layouts otimizados para tablet e desktop**
- **Elementos da interface amigáveis ao toque**

## 🔒 Qualidade do Código

- **TypeScript** para verificação de tipos em tempo de compilação
- **ESLint** para verificação e consistência do código
- **Biome** para formatação rápida do código
- **Regras de formatação compatíveis com Prettier**

## 🤝 Contribuição

1. Faça um fork do repositório
2. Crie uma branch de funcionalidade (`git checkout -b feature/funcionalidade-incrivel`)
3. Faça commit das suas mudanças (`git commit -m 'Adiciona funcionalidade incrível'`)
4. Faça push para a branch (`git push origin feature/funcionalidade-incrivel`)
5. Abra um Pull Request

## 📄 Licença

Este projeto é privado e proprietário.

## 📞 Contato

Para dúvidas ou suporte, entre em contato com a equipe de desenvolvimento.

---

📖 **README em outros idiomas:**
- [English (README.en.md)](README.en.md)

**Desenvolvido com ❤️ usando React, TypeScript e tecnologias web modernas**
