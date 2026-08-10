// SkillMatch JS - Simulador de compatibilidade com vagas Front-End Junior

// RF01: objeto simples que representa o candidato.
// Ajuste estes dados para que representem o seu perfil.

const candidato = {
  nome: "Andre",
  areaInteresse: "Desenvolvimento Front-End",
  habilidades: ["HTML", "CSS", "JavaScript", "Git", "React"],
  tempoExperienciaMeses: 0,
  estaEmFormacao: true,
};

// RF09: classe com construtor, atributos e metodos.
class Vaga {
  constructor(empresa, cargo, requisitos) {
    this.empresa = empresa;
    this.cargo = cargo;
    this.requisitos = requisitos;
  }

  // RF11: this acessa os dados do proprio objeto.
  obterResumo() {
    return `${this.cargo} na empresa ${this.empresa}`;
  }

  calcularCompatibilidade(perfil) {
    const habilidadesAtendidas = this.requisitos.filter((requisito) =>
      perfil.habilidades.includes(requisito),
    );

    const habilidadesFaltantes = this.requisitos.filter(
      (requisito) => perfil.habilidades.includes(requisito) === false,
    );

    const percentual = Math.round(
      (habilidadesAtendidas.length / this.requisitos.length) * 100,
    );

    const atendeTodosOsRequisitos = this.requisitos.every((requisito) =>
      perfil.habilidades.includes(requisito),
    );

    return {
      vaga: this,
      percentual,
      classificacao: classificarCompatibilidade(percentual),
      habilidadesAtendidas,
      habilidadesFaltantes,
      atendeTodosOsRequisitos,
    };
  }
}

// RF10: uma vaga remota e um tipo mais especifico de vaga.
class VagaRemota extends Vaga {
  constructor(empresa, cargo, requisitos, auxilioHomeOffice) {
    super(empresa, cargo, requisitos);
    this.modalidade = "Remota";
    this.auxilioHomeOffice = auxilioHomeOffice;
  }

  // Especializa o resumo da classe Vaga com dados do trabalho remoto.
  obterResumo() {
    const possuiAuxilio = this.auxilioHomeOffice ? "com" : "sem";
    return `${super.obterResumo()} - ${this.modalidade}, ${possuiAuxilio} auxilio home office`;
  }
}

// RF02: array com tres vagas ficticias.
// As instancias das classes sao realmente usadas na analise.
const bancoDeVagas = [
  new Vaga("SCtec", "Front-End Junior", ["HTML", "CSS", "JavaScript", "Git", "React"],),
  new VagaRemota("HardCode","Desenvolvedor React Junior",["HTML", "CSS", "JavaScript", "Angular","TypeScript"],
    true,
  ),
  new VagaRemota("DevStart","Desenvolvedor Web Junior",["JavaScript", "TypeScript", "Delphi", "C++","Python"],
    false,
  ),
];

// RF04: estrutura de decisao com os limites exatos pedidos.
function classificarCompatibilidade(percentual) {
  if (percentual >= 80 && percentual <= 100) {
    return "Alta compatibilidade";
  } else if (percentual >= 50 && percentual <= 79) {
    return "Media compatibilidade";
  } else if (percentual >= 0 && percentual <= 49) {
    return "Baixa compatibilidade";
  } else {
    return "Percentual invalido";
  }
}

// RF13: closure. A variavel total fica protegida e continua existindo entre chamadas.
function criarContadorDeAnalises() {
  let total = 0;

  return function contarNovaAnalise() {
    total += 1;
    return total;
  };
}

// RF14: simula a resposta futura de um servidor.
function carregarVagasDoServidor(simularErro = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (simularErro) {
        reject(new Error("Nao foi possivel carregar as vagas."));
      } else {
        resolve(bancoDeVagas);
      }
    }, 1500);
  });
}

function encontrarMelhorVaga(resultados) {
  return resultados.reduce((melhor, resultadoAtual) => {
    return resultadoAtual.percentual > melhor.percentual
      ? resultadoAtual
      : melhor;
  });
}

// RF07: a habilidade que falta em mais vagas recebe prioridade.
function gerarRecomendacaoDeEstudo(resultados) {
  const frequencias = resultados.reduce((contador, resultado) => {
    resultado.habilidadesFaltantes.forEach((habilidade) => {
      if (contador[habilidade] === undefined) {
        contador[habilidade] = 0;
      }

      contador[habilidade] += 1;
    });

    return contador;
  }, {});

  const habilidadesContadas = Object.entries(frequencias);

  if (habilidadesContadas.length === 0) {
    return "Voce ja atende a todos os requisitos. Continue praticando.";
  }

  const habilidadePrioritaria = habilidadesContadas.reduce(
    (maisFrequente, habilidadeAtual) =>
      habilidadeAtual[1] > maisFrequente[1]
        ? habilidadeAtual
        : maisFrequente,
  );

  return `Comece estudando ${habilidadePrioritaria[0]}, pois essa habilidade falta em ${habilidadePrioritaria[1]} vaga(s).`;
}

function exibirUmaVaga(resultado) {
  const textoHabilidadesAtendidas =
    resultado.habilidadesAtendidas.length > 0
      ? resultado.habilidadesAtendidas.join(", ")
      : "Nenhuma";

  const textoHabilidadesFaltantes =
    resultado.habilidadesFaltantes.length > 0
      ? resultado.habilidadesFaltantes.join(", ")
      : "Nenhuma";

  console.log("--------------------------------------------------");
  console.log(resultado.vaga.obterResumo());
  console.log(`Compatibilidade: ${resultado.percentual}%`);
  console.log(`Classificacao: ${resultado.classificacao}`);
  console.log(`Habilidades atendidas: ${textoHabilidadesAtendidas}`);
  console.log(`Habilidades faltantes: ${textoHabilidadesFaltantes}`);
  console.log(
    `Atende a todos os requisitos? ${resultado.atendeTodosOsRequisitos ? "Sim" : "Nao"}`,
  );
}

// RF12: recebe outra funcao pelo parametro aoFinalizar.
function gerarRelatorio(resultados, aoFinalizar) {
  // Laco de repeticao obrigatorio para percorrer e exibir os resultados.
  for (let indice = 0; indice < resultados.length; indice += 1) {
    exibirUmaVaga(resultados[indice]);
  }

  aoFinalizar(resultados);
}

function exibirResumoFinal(resultados) {
  const melhorVaga = encontrarMelhorVaga(resultados);
  const primeiraVagaComAltaCompatibilidade = resultados.find(
    (resultado) => resultado.percentual >= 80,
  );

  console.log("================ RESUMO FINAL ================");
  console.log(
    `Melhor vaga: ${melhorVaga.vaga.obterResumo()} (${melhorVaga.percentual}%)`,
  );
  console.log(`Recomendacao: ${gerarRecomendacaoDeEstudo(resultados)}`);
  console.log(
    primeiraVagaComAltaCompatibilidade
      ? `Existe vaga com alta compatibilidade: ${primeiraVagaComAltaCompatibilidade.vaga.cargo}.`
      : "Ainda nao existe vaga com alta compatibilidade.",
  );
}

// RF14: async indica que esta funcao realiza uma tarefa assincrona.
async function iniciarSkillMatch() {
  console.log("Buscando vagas no servidor simulado...");

  try {
    const vagas = await carregarVagasDoServidor(false);
    const contarAnalise = criarContadorDeAnalises();

    // RF08: map transforma cada vaga em um resultado de compatibilidade.
    const resultados = vagas.map((vaga) => ({
      numeroDaAnalise: contarAnalise(),
      ...vaga.calcularCompatibilidade(candidato),
    }));

    console.log("Vagas carregadas com sucesso.");
    console.log(`Candidato: ${candidato.nome}`);
    console.log(`Area de interesse: ${candidato.areaInteresse}`);
    console.log(`Habilidades: ${candidato.habilidades.join(", ")}`);
    console.log(
      `Tempo de experiencia: ${candidato.tempoExperienciaMeses} mes(es)`,
    );

    gerarRelatorio(resultados, exibirResumoFinal);
  } catch (erro) {
    console.error(`Erro: ${erro.message}`);
  } finally {
    console.log("Analise finalizada.");
  }
}

iniciarSkillMatch();