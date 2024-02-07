import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const app = express();
const PORT = 3001; // Porta do servidor proxy

app.use(express.json());
app.use(cors()); // Adiciona o middleware CORS

// Rota para buscar os produtos
app.get("/api/products", async (req, res) => {
  try {
    const response = await fetch(
      "https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json"
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Erro ao buscar os produtos:", error);
    res.status(500).json({ error: "Erro ao buscar os produtos" });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor proxy rodando na porta ${PORT}`);
});
