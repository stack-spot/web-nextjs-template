A Stack **matter-web-nextjs** provê uma task, além dos templates e plugins. A task é utilizada para atualizar o arquivo .env de forma automática a partir do arquivo .env.template.

A sugestão é que o arquivo .env.template seja realmente um template das variáveis de ambiente do projeto, contendo as variáveis com dados não sensíveis e para casos onde os dados são sensíveis, apenas a key deve ser colocada, indicando que aquela variável deve ser informada para o correto funcionamento da aplicação.

### Pré-requisitos

Para utilizar este template, é preciso ter instalado na sua máquina os itens abaixo:

- Ter o [**STK CLI**](https://stackspot.com.br/) baixado;
- Uma Aplicação criada com a stack **matter-web-nextjs**
- NodeJS;

## Execução da task

1. Na raíz do projeto execute o comando abaixo:

```bash
   stk run update-env
```

Pronto, o .env da aplicação foi atualizado com os dados do .env.template. Caso o .env não exista antes da execução da task ele será criado.
