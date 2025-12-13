import type { Restaurant } from '../types'

export const restaurants: Restaurant[] = [
  {
    id: 1,
    titulo: 'Hioki Sushi',
    destacado: true,
    tipo: 'Japonesa',
    avaliacao: 4.9,
    descricao: 'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagem cuidadosa e qualidade garantida.',
    capa: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800',
    cardapio: [
      {
        id: 1,
        foto: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400',
        preco: 45.90,
        nome: 'Sushi Roll',
        descricao: 'Delicioso roll de salmão com cream cheese e cebolinha',
        porcao: '8 unidades'
      },
      {
        id: 2,
        foto: 'https://images.unsplash.com/photo-1564489563601-c53cfc451e93?w=400',
        preco: 89.90,
        nome: 'Combo Especial',
        descricao: 'Combinado especial com 24 peças variadas de sushi e sashimi',
        porcao: '24 peças'
      },
      {
        id: 3,
        foto: 'https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=400',
        preco: 32.90,
        nome: 'Hot Roll',
        descricao: 'Hot roll empanado recheado com salmão e cream cheese',
        porcao: '8 unidades'
      },
      {
        id: 4,
        foto: 'https://images.unsplash.com/photo-1583623025817-d180a2221d0a?w=400',
        preco: 55.90,
        nome: 'Sashimi Variado',
        descricao: 'Seleção premium de sashimis de salmão, atum e peixe branco',
        porcao: '15 fatias'
      },
      {
        id: 5,
        foto: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=400',
        preco: 28.90,
        nome: 'Temaki de Salmão',
        descricao: 'Temaki tradicional com salmão fresco, arroz e alga nori',
        porcao: '1 unidade'
      },
      {
        id: 6,
        foto: 'https://images.unsplash.com/photo-1582450871972-ab5ca641643d?w=400',
        preco: 38.90,
        nome: 'Yakisoba',
        descricao: 'Macarrão oriental salteado com legumes e frango',
        porcao: 'Serve 2 pessoas'
      }
    ]
  },
  {
    id: 2,
    titulo: 'La Dolce Vita Trattoria',
    destacado: false,
    tipo: 'Italiana',
    avaliacao: 4.6,
    descricao: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível.',
    capa: 'https://images.unsplash.com/photo-1498579150354-977475b7ea0b?w=800',
    cardapio: [
      {
        id: 7,
        foto: 'https://images.unsplash.com/photo-1595295333158-4742f28fbd85?w=400',
        preco: 60.90,
        nome: 'Pizza Margherita',
        descricao: 'A clássica Margherita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        porcao: 'Serve 2 pessoas'
      },
      {
        id: 8,
        foto: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400',
        preco: 45.90,
        nome: 'Pasta Carbonara',
        descricao: 'Espaguete ao molho carbonara cremoso com bacon crocante e queijo parmesão',
        porcao: 'Serve 1 pessoa'
      },
      {
        id: 9,
        foto: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=400',
        preco: 52.90,
        nome: 'Lasagna Bolognese',
        descricao: 'Lasanha tradicional com molho bolonhesa e queijos gratinados',
        porcao: 'Serve 2 pessoas'
      },
      {
        id: 10,
        foto: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=400',
        preco: 48.90,
        nome: 'Risotto ai Funghi',
        descricao: 'Risoto cremoso com funghi porcini e parmesão',
        porcao: 'Serve 1 pessoa'
      },
      {
        id: 11,
        foto: 'https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=400',
        preco: 42.90,
        nome: 'Fettuccine Alfredo',
        descricao: 'Fettuccine ao molho alfredo com muito queijo e manteiga',
        porcao: 'Serve 1 pessoa'
      },
      {
        id: 12,
        foto: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400',
        preco: 38.90,
        nome: 'Bruschetta',
        descricao: 'Entrada tradicional com tomate, manjericão e azeite sobre pão italiano',
        porcao: '4 unidades'
      }
    ]
  },
  {
    id: 3,
    titulo: 'Casa do Burguer',
    destacado: false,
    tipo: 'Americana',
    avaliacao: 4.8,
    descricao: 'Os melhores burguers artesanais da cidade! Carne suculenta, pão macio e ingredientes frescos. Batatas fritas crocantes e milkshakes irresistíveis completam a experiência.',
    capa: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=800',
    cardapio: [
      {
        id: 13,
        foto: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400',
        preco: 35.90,
        nome: 'Classic Burger',
        descricao: 'Hambúrguer clássico com carne bovina, queijo, alface, tomate e molho especial',
        porcao: '250g'
      },
      {
        id: 14,
        foto: 'https://images.unsplash.com/photo-1551615593-ef5fe247e8f7?w=400',
        preco: 42.90,
        nome: 'Bacon Burger',
        descricao: 'Hambúrguer com duplo bacon crocante, cheddar e cebola caramelizada',
        porcao: '300g'
      },
      {
        id: 15,
        foto: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400',
        preco: 18.90,
        nome: 'Batata Frita',
        descricao: 'Batatas fritas crocantes temperadas com sal especial',
        porcao: '300g'
      }
    ]
  },
  {
    id: 4,
    titulo: 'Thai Spice',
    destacado: true,
    tipo: 'Tailandesa',
    avaliacao: 4.7,
    descricao: 'Explore os sabores exóticos da Tailândia! Pratos aromáticos, equilibrados e cheios de personalidade. Curry, pad thai e muito mais, direto para sua casa.',
    capa: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?w=800',
    cardapio: [
      {
        id: 16,
        foto: 'https://images.unsplash.com/photo-1562565652-a0d8f0c59eb4?w=400',
        preco: 48.90,
        nome: 'Pad Thai',
        descricao: 'O clássico macarrão tailandês com camarões, amendoim e molho tamarindo',
        porcao: 'Serve 1 pessoa'
      },
      {
        id: 17,
        foto: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=400',
        preco: 52.90,
        nome: 'Green Curry',
        descricao: 'Curry verde cremoso com frango, legumes e leite de coco',
        porcao: 'Serve 1 pessoa'
      },
      {
        id: 18,
        foto: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400',
        preco: 38.90,
        nome: 'Tom Yum Soup',
        descricao: 'Sopa picante e azeda com camarões, cogumelos e capim-limão',
        porcao: 'Serve 1 pessoa'
      }
    ]
  },
  {
    id: 5,
    titulo: 'Taco Loco',
    destacado: false,
    tipo: 'Mexicana',
    avaliacao: 4.5,
    descricao: 'Sabores autênticos do México! Tacos, burritos, nachos e guacamole fresquinho. Temperos marcantes e porções generosas para você se deliciar.',
    capa: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800',
    cardapio: [
      {
        id: 19,
        foto: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=400',
        preco: 32.90,
        nome: 'Tacos al Pastor',
        descricao: 'Três tacos de carne de porco marinada com abacaxi e coentro',
        porcao: '3 unidades'
      },
      {
        id: 20,
        foto: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400',
        preco: 45.90,
        nome: 'Burrito Supremo',
        descricao: 'Burrito recheado com carne, feijão, arroz, queijo e guacamole',
        porcao: 'Serve 1 pessoa'
      },
      {
        id: 21,
        foto: 'https://images.unsplash.com/photo-1582169296194-e4d644c48063?w=400',
        preco: 28.90,
        nome: 'Nachos Supreme',
        descricao: 'Nachos crocantes com queijo derretido, jalapeños e creme azedo',
        porcao: 'Serve 2 pessoas'
      }
    ]
  },
  {
    id: 6,
    titulo: 'Le Bistrot Parisien',
    destacado: false,
    tipo: 'Francesa',
    avaliacao: 4.9,
    descricao: 'A sofisticação da culinária francesa ao seu alcance. Pratos refinados, ingredientes nobres e apresentação impecável. Uma experiência gastronômica única.',
    capa: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800',
    cardapio: [
      {
        id: 22,
        foto: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=400',
        preco: 78.90,
        nome: 'Coq au Vin',
        descricao: 'Frango ao vinho tinto com cogumelos, bacon e ervas finas',
        porcao: 'Serve 1 pessoa'
      },
      {
        id: 23,
        foto: 'https://images.unsplash.com/photo-1619365948642-c4f206bf0def?w=400',
        preco: 85.90,
        nome: 'Boeuf Bourguignon',
        descricao: 'Carne bovina cozida lentamente em vinho tinto com legumes',
        porcao: 'Serve 1 pessoa'
      },
      {
        id: 24,
        foto: 'https://images.unsplash.com/photo-1612939453915-ccb4c0b87e21?w=400',
        preco: 65.90,
        nome: 'Ratatouille',
        descricao: 'Legumes provençais gratinados ao estilo tradicional francês',
        porcao: 'Serve 1 pessoa'
      }
    ]
  }
]
