import axios from "axios";

const API_URL = "http://localhost:8080/api/pedidos";

interface PedidoData {
  sabor: string;
  nome: string;
  brigadeiro: string;
  coxinha: string;
  data: string;
  horario: string;
  valor: number;
}

export const adicionarPedido = async (pedido: PedidoData) => {
  try {
    const response = await axios.post(API_URL, pedido);
    return response.data;
  } catch (error) {
    throw error;
  }
};
