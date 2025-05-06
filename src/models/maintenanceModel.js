const pool = require("../config/database");

const getAllManutencao = async () => {
  const result = await pool.query(
    `SELECT manutencoes.*, equipamentos.nome AS equipamento_nome FROM manutencoes LEFT JOIN equipamentos ON manutencoes.equipamento_id = equipamentos.id`
  );
  return result.rows;
};

const getManutencaoById = async (id) => {
    const result = await pool.query(
      `SELECT manutencoes.*, equipamentos.nome AS equipamento_nome FROM manutencoes LEFT JOIN equipamentos ON manutencoes.equipamento_id = equipamentos.id WHERE manutencoes.id = $1`, [id]
    );
    return result.rows[0];
  };

  const createManutencao = async (nome, equipamento_id) => {
    const result = await pool.query(`INSERT INTO manutencoes (nome, equipamento_id) VALUES ($1, $2) RETURNING *`, [nome, equipamento_id]
    );
    return result.rows[0];
};

module.exports = { getAllManutencao, getManutencaoById, createManutencao };