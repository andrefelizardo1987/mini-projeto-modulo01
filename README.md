### Mini Projeto Modulo 01 - SCTEC

Aluno: André Felizardo

## SkillMatch JS

Simulador em JavaScript puro que compara o perfil tecnico de uma pessoa candidata com vagas ficticias de Front-End Junior.


## Como executar

Abra `skillmatch.js` e altere o objeto `candidato` para usar seu nome, suas habilidades verdadeiras e seu tempo real de experiencia. O exemplo atual usa o nome Andre, HTML, CSS, JavaScript e zero meses de experiencia profissional.

### No VS Code

1. Abra a pasta do projeto no VS Code. (https://code.visualstudio.com/download)
2. Instale o Node.js, caso ainda nao esteja instalado. (https://nodejs.org/pt-br/download)
3. Abra o terminal do VS Code.
4. Execute `node skillmatch.js`.

## VS Code e extensoes

Editor recomendado: Visual Studio Code.

- **Code Runner:** opcional, ajuda a executar JavaScript pelo editor.

O projeto tambem pode ser executado sem extensoes usando o console do navegador ou Node.js.

## Regra de compatibilidade

A regra adotada e:

`percentual = habilidades atendidas / total de requisitos da vaga * 100`

O resultado e arredondado com `Math.round`. Todos os requisitos possuem o mesmo peso. Essa regra foi escolhida porque e simples, transparente e pode ser aplicada igualmente a todas as vagas.

Exemplo: se a pessoa possui 3 de 5 requisitos, a conta e `3 / 5 * 100 = 60%`.

## Classificacao

- De 80% a 100%: Alta compatibilidade.
- De 50% a 79%: Media compatibilidade.
- De 0% a 49%: Baixa compatibilidade.

A funcao `classificarCompatibilidade` usa `if-else` e o operador logico `&&` para verificar o limite minimo e o limite maximo de cada faixa.

## Recomendacao de estudo

O sistema conta quantas vezes cada habilidade faltante aparece entre todas as vagas. A habilidade ausente no maior numero de vagas recebe prioridade, pois aprende-la pode melhorar a compatibilidade com mais oportunidades ao mesmo tempo.

## Conceitos usados

- **Strings:** nomes, cargos, mensagens e habilidades.
- **Numeros:** tempo de experiencia, percentuais e contador de analises.
- **Booleanos:** `estaEmFormacao`, `auxilioHomeOffice` e `atendeTodosOsRequisitos`.
- **Arrays:** habilidades, vagas, requisitos e resultados.
- **Objetos:** perfil do candidato e resultados das analises.
- **`const`:** referencias que nao sao reatribuidas.
- **`let`:** contador interno da closure e indice do laco, pois seus valores mudam.
- **`var`:** nao foi usada porque possui escopo de funcao e pode causar comportamentos confusos; `const` e `let` deixam a intencao mais clara.
- **Operadores matematicos:** divisao e multiplicacao no percentual; soma nos contadores.
- **Operador logico `&&`:** exige que os limites minimo e maximo da classificacao sejam verdadeiros ao mesmo tempo.
- **`if-else`:** classificacao e tratamento das decisoes.
- **Operador ternario:** mensagens curtas e escolha do melhor resultado.
- **`for`:** percorre os resultados para montar o relatorio.
- **Funcoes:** separam cada regra do sistema.
- **Arrow functions:** aparecem nos metodos de array.
- **`map`:** transforma cada vaga em um resultado.
- **`filter`:** separa habilidades atendidas e faltantes.
- **`every`:** verifica se todos os requisitos foram atendidos.
- **`find`:** procura a primeira vaga com alta compatibilidade.
- **`reduce`:** encontra a melhor vaga e a habilidade mais importante para estudar.
- **Classe `Vaga`:** modela uma vaga e sabe calcular sua compatibilidade.
- **Construtor:** recebe e guarda empresa, cargo e requisitos.
- **Heranca:** `VagaRemota` estende `Vaga`, adiciona modalidade e auxilio home office e especializa o resumo.
- **`this`:** acessa os atributos da instancia dentro dos metodos.
- **Callback:** `gerarRelatorio` recebe `exibirResumoFinal` para executar depois da listagem.
- **Closure:** `criarContadorDeAnalises` protege e preserva o contador entre chamadas.
- **Promise:** simula a resposta futura do servidor e tambem permite simular erro.
- **`async/await`:** espera as vagas antes de calcular e exibir o relatorio.
- **`try/catch/finally`:** trata uma possivel falha no carregamento.

## Como a internet funciona

A internet e uma rede de computadores. Quando abrimos um site, o navegador envia uma solicitacao pela rede. Essa solicitacao passa por diferentes equipamentos ate encontrar o computador que guarda os dados. Depois, a resposta faz o caminho de volta e aparece na tela. Protocolos sao regras que ajudam os computadores a trocar essas mensagens corretamente.

## Arquitetura cliente-servidor

O **cliente** e o programa que pede alguma coisa, como um navegador. O **servidor** e o computador ou programa que recebe o pedido e devolve dados. Neste projeto, `iniciarSkillMatch` representa o cliente, enquanto `carregarVagasDoServidor` representa uma consulta ao servidor. `setTimeout` cria o atraso e a `Promise` representa a resposta que chegara no futuro. Nenhuma API real foi utilizada.

## Organizacao do Kanban

As colunas obrigatorias sao Backlog, A Fazer, Em Andamento, Teste Final e Concluido.
O planejamento esta no link: https://trello.com/invite/b/6a792ec18c6d7aa25969885d/ATTIfef3b8ce36099427878af32765e225d4022A8ED8/mini-projeto-modulo01-sctec

## Video

O link do vídeo de apresentação: 

## Github

Link do repositório público no GitHub: https://github.com/andrefelizardo1987/mini-projeto-modulo01.git
