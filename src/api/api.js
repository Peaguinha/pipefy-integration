const axios = require("axios");
require('dotenv').config();  // Carrega as variáveis de ambiente

// Configuração da API do Pipefy
const API_URL = "https://api.pipefy.com/graphql";
const PIPEFY_TOKEN = process.env.PIPEFY_TOKEN;

// Configura a instância do Axios para incluir o token de autenticação
const api = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: `Bearer ${PIPEFY_TOKEN}`, // Corrigido para interpolação correta
    "Content-Type": "application/json",
  },
});
console.log("Cabeçalho Authorization:", `Bearer ${PIPEFY_TOKEN}`); // Corrigido para interpolação correta

// Função para executar uma query GraphQL
async function executeQuery(query) {
  try {
    const response = await api.post("", { query });
    return response.data;
  } catch (error) {
    console.error("Erro na API do Pipefy:", error.response?.data || error.message);
    throw error;
  }
}

module.exports = { executeQuery };
