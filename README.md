
Desenvolvimento de Design System com React e Storybook - Minicurso PET-BCC

# Sumário
- [Design System](#design-system)
- [Desenvolvimento](#desenvolvimento)
- [NPM](#npm)
- [Referências](#referências)

# Design System


Design System é um conjunto de componentes e propriedades de design para facilitar o desenvolvimento de um produto mantendo a mesma identidade visual.

É interessante pensar no Design System como um produto que serve outros produtos:

> [A Design System isn’t a Project. It’s a Product, Serving Products.](https://medium.com/eightshapes-llc/a-design-system-isn-t-a-project-it-s-a-product-serving-products-74dcfffef935)

Assim como um produto, ele não é estático, muda conforme as necessidades de quem irá usar. E também deve ser intuitivo e fácil de testar e utilizar.

Uma grande vantagem de um design system é poder reutilizar componentes e estilos em em outros produtos. Isso acaba diminuindo o tempo de desenvolvimento e logo, aumentando a produtividade.

Exemplos:
- [Github / Primer](https://primer.style/)
- [Material Design](https://material.io/)
- [Polaris](https://polaris.shopify.com/)

Tem alguns sites, produtos que percebemos bastante inconsistências que provavelmente não possuem um design system bem definido:
- [Steam](https://store.steampowered.com/)
- [AWS (console)](https://aws.amazon.com/)
- [Yale School of Art](https://www.art.yale.edu/)

# Desenvolvimento
A concepção de um design system vem dos UX e UI designers. Mas um bom design sytem é acompanhado de códigos, para implementar os componentes e propriedades definidas pelos designers. 

Uma boa forma de realizar essa implementação é desenvolver uma biblioteca, para ser utilizado em vários projetos. Nesse caso, será desenvolvido um pacote npm de componentes em React com a documentação num Storybook.

### Configurações iniciais

Será implementado um design system bem simples definido [nesse figma](https://www.figma.com/file/cIbhpCKPl3n93tIheKhLR1/Minicurso-PET-BCC?node-id=0%3A1).

No diretorio onde vai estar seu projeto rode o seguinte comando para gerar um template com react e storybook:

```bash
npx tsdx create minicurso-petbcc
```

e selecione a opção react-with-storybook.

Depois instale [styled-components](https://github.com/styled-components/styled-components), um pacote para estilizar os componentes com css-in-js, rodando:

```bash
npm install styled-components
npm install -D @types/styled-components
```

Ao rodar:
```bash
npm run storybook
```

será iniciado o storybook de exemplo.

Adicione a string ``'../src/**/*.stories.@(js|jsx|ts|tsx)'`` no arquivo ``.storybook/main.js``:
```js
module.exports = {
	stories: [
		// ... ,
		'../src/**/*.stories.@(js|jsx|ts|tsx)'
	],
	// ...
}
```

Caso preferir, apague os arquivos de exemplo:
- ``src/index.ts``
- ``stories/Thing.stories.tsx``
- ``example/``

### Coding!

Comece definindo as propriedades do design system, no caso, as cores:

```ts
// src/theme/colors.ts

const base = {
	blue: '#008DB9',
	blueDark: '#017194',
	orange: '#F77D04',
	orangeDark: '#BA5E01',
	white: '#FFFFFF',
	gray: '#E9E9E9',
	grayLight: '#F2F2F2',
	almostBlack: '#4D4D4D'
}

export default {
	...base,
	primary: base.blue,
	primaryVariation: base.blueDark,
	secundary: base.orange,
	secundaryVariation: base.orangeDark,
	background: base.white,
	stroke: base.gray,
	backgroundVariation: base.grayLight,
	text: base.almostBlack
}

```

Desenvolva o componente (Button):
```tsx
// src/components/button/Button.tsx

import React, { HTMLAttributes, ReactNode } from 'react'
import StyledButton from './Button.style'

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    disabled?: boolean
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
    children?: ReactNode
}

const Button: React.FC<ButtonProps> = ({ children, ...props}) => 
    <StyledButton {...props}>
        { children }
    </StyledButton>

Button.displayName = 'Button'

Button.defaultProps = {
    disabled: false
}

export default Button
export { ButtonProps }
```

```ts
// src/components/button/Button.style.ts

import styled from 'styled-components'
import colors from '../../theme/colors'

const StyledButton = styled.button`
    background: ${colors.primary};
    box-shadow: 2px 2px 0px 2px ${colors.primaryVariation};
    border-radius: 8px;
    padding: 8px 16px;
    transition: .2s;
    border: none;

    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    color: ${ colors.negativeText };

    &:hover {
        box-shadow: 3px 3px 0px 3px ${colors.primaryVariation};
        transform: translate(-2px, -2px);
    }

    &:active {
        box-shadow: 0px 0px 0px 0px ${colors.primaryVariation};
        background: ${colors.primaryVariation};
        transform: translate(3px, 3px);
    }

    &:disabled {
        box-shadow: 0px 0px 0px 0px ${colors.primaryVariation};
        transform: translate(0, 0) ;
        background: ${colors.backgroundVariation};
        color: ${colors.text};
    }
`

export default StyledButton
```

E então monte o story pro componente:
```tsx
// src/components/button/Button.stories.tsx

import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Button from './Button'

export default {
    title: 'Components/Button',
    component: Button,
    args: Button.defaultProps
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) =>
    <Button {...args}>Click me!</Button>

export const Default = Template.bind({});
```

Exporte o component em ``src/index.ts``:
```ts
// src/index.ts

import Button from './components/button/Button'

export {
    Button
}
```

# NPM
- [Crie sua conta no npm](https://www.npmjs.com/signup)
- [ou faça o login](https://www.npmjs.com/login)

No terminal, digite o comando para fazer o login
```bash
npm login
```

Ajuste o arquivo ``package.json`` com suas preferências. Por exemplo, alterar o nome do pacote para um nome único usando o formato ``@username/package-name``.

Execute o seguinte comando para empacotar o projeto:
```bash
npm run build
```

E publique o pacote:
```bash
npm publish --accesss public
```

E pronto, seu pacote estará disponível em alguns segundos!

# Referências
Youtube:
- [O DESIGN SYSTEM DA ROCKESEAT (DA UI AO CÓDIGO) - Rocketseat](https://www.youtube.com/watch?v=90y5707fJbI)
- [Create your own design system! with Storybook React and TypeScript | Storybook 6 Crash Course - Marius Espejo](https://www.youtube.com/watch?v=qSkHRVLcj6U)

Medium:
- [Entendendo Design Systems - Vanessa Serradas](https://brasil.uxdesign.cc/entendendo-design-system-f375bbb6f704)
- [A Design System isn’t a Project. It’s a Product, Serving Products. - Nathan Curtis](https://medium.com/eightshapes-llc/a-design-system-isn-t-a-project-it-s-a-product-serving-products-74dcfffef935)
- [A Maturity Model for Design Systems — Ben Callahan @Sparkbox — ENG - Kentaro Hosomi](https://medium.com/yousign-engineering-product/a-maturity-model-for-design-systems-ben-callahan-sparkbox-eng-173215652f95)

