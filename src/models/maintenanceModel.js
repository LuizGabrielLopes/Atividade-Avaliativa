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

const updateManutencao = async (id, nome, equipamento_id) => {
    const result = await pool.query(
        `UPDATE manutencoes SET nome = $1, equipamento_id = $2 WHERE id = $3 RETURNING *`,
        [nome, equipamento_id, id]
    );
    return result.rows[0];
}

const deleteManutencao = async (id) => {
    const result = await pool.query(`DELETE FROM manutencoes WHERE id = $1 RETURNING *`, [id])
    if (result.rowCount === 0) {
        return { error: "Manutenção não encontrada!" };
    }
    return { message: "Manutenção deletada com sucesso!" };
}

module.exports = { getAllManutencao, getManutencaoById, createManutencao, updateManutencao, deleteManutencao };