# 🟨 #FBCE00

Experiência web interativa que utiliza a câmera do dispositivo para criar uma mensagem visual de impacto, inspirada em campanhas de alerta à saúde. A aplicação solicita acesso à câmera frontal e exibe o vídeo em tela cheia com elementos SVG responsivos sobrepostos.

O projeto foi desenvolvido em HTML, CSS e JavaScript puro, com foco em simplicidade, performance e organização de código.

## 🚀 Funcionalidades

- 🎥 Acesso à câmera frontal do dispositivo
- 🖥️ Layout em tela cheia
- 📱 Responsivo (desktop e mobile)
- 🧩 SVGs adaptativos via Media Queries
- ⚡ JavaScript moderno (async/await, defer)
- 📚 Código documentado com JSDoc

## 🛠️ Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript (ES2020+)
- SVG
- MediaDevices API (getUserMedia)

## ▶️ Como executar o projeto

1. Clone o repositório:

```bash
   git clone https://github.com/lucasbecker/FBCE00
```

2. Execute o projeto:

- Abrir localmente

Abra o arquivo index.html em um navegador moderno como o Chrome, Edge ou Firefox.

- Servidor local (recomendado)

```bash
npx serve
```

E depois acesse o endereço do servidor.

> ⚠️ Alguns navegadores exigem HTTPS para acesso à câmera.

## 🔐 Permissões

A aplicação solicita:

- 📷 Acesso à câmera

Nenhum vídeo ou dado é gravado ou enviado para servidores externos.

## 🧪 Boas práticas aplicadas

- Separação de responsabilidades (HTML / CSS / JS)
- Scripts com defer
- Código documentado com JSDoc
- Sem frameworks ou dependências externas

## ✨ Próximas melhorias

- [ ] Mensagem visual quando a câmera é bloqueada
- [ ] Botão para alternar câmera (frontal / traseira)
- [ ] Animações suaves nos SVGs
- [ ] Build otimizado para produção

## 📄 Licença

Este projeto está sob a licença MIT.
Sinta-se livre para usar, modificar e distribuir.
