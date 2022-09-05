Após aplicar o plugin, instale as dependências:


```bash
    yarn
```

```bash
    npm install
```

O plugin atualiza automaticamente o seu arquivo .env.template com a variável de ambiente correspondente a essa nova zona. Copie essa variável e adicione ao seu .env. 


> **Atenção**: Caso você esqueça de adicionar a variável da zona que acabou de ser criada no .env, a aplicação não vai funcionar corretamente. Lembre-se que caso a aplicação já esteja rodando, é necessário parar a execução e rodar novamente!


Por fim, basta executar a aplicação com um dos comandos:

```bash
    yarn dev
```

```bash
    npm run dev
```

Ao rodar a aplicação, abra o browser em `http://localhost:3000/base-path`, onde `base-path` é o mesmo base-path inserido ao executar o plugin.