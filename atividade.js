// 1. Buscar Usuário - função que simula busca de dados com atraso de 2 segundos
function buscarUsuario(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulando dados de usuário
      const usuarios = {
        1: { id: 1, nome: "João", email: "joao@email.com" },
        2: { id: 2, nome: "Maria", email: "maria@email.com" },
        3: { id: 3, nome: "Pedro", email: "pedro@email.com" }
      };
      
      if (usuarios[id]) {
        resolve(usuarios[id]);
      } else {
        reject(new Error("Usuário não encontrado"));
      }
    }, 2000);
  });
}

// 2. Somar com Delay - função que retorna Promise resolvendo com soma após 1 segundo
function somarComDelay(a, b) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(a + b);
    }, 1000);
  });
}

// 3. Obter Dados de API - usar fetch e await para simular chamada a API
async function obterDadosAPI(url) {
  try {
    const resposta = await fetch(url);
    
    if (!resposta.ok) {
      throw new Error(`Erro HTTP: ${resposta.status}`);
    }
    
    const dados = await resposta.json();
    return dados;
  } catch (erro) {
    console.error("Erro ao obter dados:", erro);
    throw erro;
  }
}

// 4. Carregar Dados - função assíncrona com try/catch e finally
async function carregarDados(id) {
  console.log("Iniciando carregamento de dados...");
  
  try {
    const dados = await buscarUsuario(id);
    console.log("Dados carregados com sucesso:", dados);
    return dados;
  } catch (erro) {
    console.error("Erro ao carregar dados:", erro.message);
    throw erro;
  } finally {
    console.log("Processo de carregamento finalizado");
  }
}

// 5. Funções Assíncronas: Simulação de API com Erro
async function fetchProductData(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id < 1) {
        reject(new Error("ID do produto inválido"));
      } else {
        resolve({ id: id, nome: "Notebook", preco: 3500 });
      }
    }, 2000);
  });
}

// Chamada da função fetchProductData com tratamento de erro
async function testarFetchProduct() {
  try {
    const produto = await fetchProductData(101);
    console.log(produto);
  } catch (erro) {
    console.error("Erro:", erro.message);
  }
  
  try {
    const produtoInvalido = await fetchProductData(-1);
    console.log(produtoInvalido);
  } catch (erro) {
    console.error("Erro:", erro.message);
  }
}

// 6. Arrays: Agrupamento de Palavras por Tamanho
function groupWordsByLength(words) {
  const resultado = {};
  
  words.forEach(palavra => {
    const tamanho = palavra.length;
    
    if (!resultado[tamanho]) {
      resultado[tamanho] = [];
    }
    
    resultado[tamanho].push(palavra);
  });
  
  return resultado;
}

// 7. Números: FizzBuzz
function fizzBuzz(n) {
  const resultado = [];
  
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      resultado.push("FizzBuzz");
    } else if (i % 3 === 0) {
      resultado.push("Fizz");
    } else if (i % 5 === 0) {
      resultado.push("Buzz");
    } else {
      resultado.push(i);
    }
  }
  
  return resultado;
}

// 8. Arrays: Soma de Quadrados com map e reduce
function sumOfSquares(nums) {
  return nums
    .map(num => num * num)
    .reduce((soma, quadrado) => soma + quadrado, 0);
}

// Testes

// Testando buscarUsuario
console.log("--- Teste buscarUsuario ---");
buscarUsuario(1)
  .then(usuario => console.log("Usuário encontrado:", usuario))
  .catch(erro => console.error("Erro:", erro.message));

// Testando somarComDelay
console.log("--- Teste somarComDelay ---");
somarComDelay(5, 7)
  .then(resultado => console.log("Resultado da soma:", resultado));

// Testando obterDadosAPI (simulado)
console.log("--- Teste obterDadosAPI ---");
// Comentado para evitar erros já que não temos uma API real para testar
// obterDadosAPI('https://api.exemplo.com/dados')
//   .then(dados => console.log("Dados da API:", dados))
//   .catch(erro => console.error("Erro na API:", erro.message));

// Testando carregarDados
console.log("--- Teste carregarDados ---");
carregarDados(2)
  .then(dados => console.log("Teste carregarDados concluído"))
  .catch(erro => console.error("Teste carregarDados falhou:", erro.message));

// Testando fetchProductData
console.log("--- Teste fetchProductData ---");
testarFetchProduct();

// Testando groupWordsByLength
console.log("--- Teste groupWordsByLength ---");
const words = ["apple", "banana", "pear", "kiwi", "grape"];
console.log(groupWordsByLength(words));

// Testando fizzBuzz
console.log("--- Teste fizzBuzz ---");
console.log(fizzBuzz(15));

// Testando sumOfSquares
console.log("--- Teste sumOfSquares ---");
const nums = [1, 2, 3, 4];
console.log(sumOfSquares(nums));