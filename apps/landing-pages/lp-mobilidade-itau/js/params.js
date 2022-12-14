let parceiro_id = false;
const PARTNER_ID_PARAM = 'parceiro_id';

const pageButtons = [
  {
    element: document.getElementById('botao-acessar-icarros'),
    href: 'https://www.icarros.com.br/principal/index.jsp?',
    data: {
      'event': 'navigation_click',
      'location': 'landing-itau',
      'section': 'banner principal',
      'text': 'acessar icarros',
      'title':''
    }
  },
  {
    element: document.getElementById('botao-comprar'),
    href: 'https://www.icarros.com.br/ache/listaanuncios.jsp?reg=city&',
    data: {
      'event': 'navigation_click',
      'location': 'landing-itau',
      'section': 'pra você',
      'text': 'comprar',
      'title':''
    }
  },
  {
    element: document.getElementById('botao-vender'),
    href: 'https://www.icarros.com.br/vender/index.jsp?',
    data: {
      'event': 'navigation_click',
      'location': 'landing-itau',
      'section': 'pra você',
      'text': 'vender',
      'title':''
    }
  },
  {
    element: document.getElementById('botao-financie-seu-veiculo'),
    href: 'https://www.icarros.com.br/financiamento/index.jsp?',
    data: {
      'event': 'navigation_click',
      'location': 'landing-itau',
      'section': 'pra você',
      'text': 'financie seu veículo',
      'title':''
    }
  },
  {
    element: document.getElementById('botao-proteja-seu-veiculo'),
    href: 'https://www.icarros.com.br/seguro-auto/seguroauto.jsp?',
    data: {
      'event': 'navigation_click',
      'location': 'landing-itau',
      'section': 'pro seu veículo',
      'text': 'proteja seu veículo',
      'title':''
    }
  },
  {
    element: document.getElementById('botao-consorcio'),
    href: false,
    data: {
      'event': 'navigation_click',
      'location': 'landing-itau',
      'section': 'o que vem por aí',
      'text': 'consórcio',
      'title':''
    }
  },
  {
    element: document.getElementById('botao-cartao-transporte'),
    href: false,
    data: {
      'event': 'navigation_click',
      'location': 'landing-itau',
      'section': 'o que vem por aí',
      'text': 'cartão transporte',
      'title':''
    }
  },
  {
    element: document.getElementById('botao-ipva'),
    href: false,
    data: {
      'event': 'navigation_click',
      'location': 'landing-itau',
      'section': 'o que vem por aí',
      'text': 'pagar IPVA',
      'title':''
    }
  },
  {
    element: document.getElementById('botao-carro-novo'),
    href: false,
    data: {
      'event': 'navigation_click',
      'location': 'landing-itau',
      'section': 'o que vem por aí',
      'text': 'poupe para o carro novo',
      'title':''
    }
  },
  {
    element: document.getElementById('botao-manutencao'),
    href: false,
    data: {
      'event': 'navigation_click',
      'location': 'landing-itau',
      'section': 'o que vem por aí',
      'text': 'agendar manutenção',
      'title':''
    }
  },
  {
    element: document.getElementById('botao-credito'),
    href: false,
    data: {
      'event': 'navigation_click',
      'location': 'landing-itau',
      'section': 'o que vem por aí',
      'text': 'crédito pré-aprovado',
      'title':''
    }
  },
  {
    element: document.getElementById('botao-documentos'),
    href: false,
    data: {
      'event': 'navigation_click',
      'location': 'landing-itau',
      'section': 'o que vem por aí',
      'text': 'consulta de documentos',
      'title':''
    }
  },
  {
    element: document.getElementById('botao-cadastrar-veiculo'),
    href: false,
    data: {
      'event': 'navigation_click',
      'location': 'landing-itau',
      'section': 'o que vem por aí',
      'text': 'cadastre seu veículo',
      'title':''
    }
  }
]

window.onload = function () {
  try {
    const urlString = (window.location.href).toLocaleLowerCase();
    const url = new URL(urlString);
    parceiro_id = url.searchParams.get(PARTNER_ID_PARAM);
  } catch (e) {
    console.error(e,"Erro ao obter parceiro ID");
  }
}

pageButtons.forEach(({ element, href, data }) => {
  element.addEventListener('click', () => {
    if (href) {
      location.href = `${href}${parceiro_id ? `${PARTNER_ID_PARAM}=${parceiro_id}` : ''}`;
    }
    window.dataLayer.push(data);
    return false;
  })
});
