const pool = require("../config/database");

const getAllEquipamentos = async ( nome ) => {
    if (!nome) {
        const result = await pool.query("SELECT * FROM equipamentos");
        return result.rows;
    } else {
        const result = await pool.query("SELECT * FROM equipamentos WHERE nome ILIKE $1", [`%${nome}%`]);
        return result.rows;
    }
}

const getEquipamentoById = async (id) => {
    const result = await pool.query("SELECT * FROM equipamentos WHERE id = $1", [id]);
    return result.rows[0];
}

const createEquipamento = async (nome, photo) => {
    const result = await pool.query("INSERT INTO equipamentos (nome, photo) VALUES ($1, $2) RETURNING *", [nome, photo]);
    return result.rows[0];
}

const updateEquipamento = async (id, nome, photo) => {
    const result = await pool.query("UPDATE equipamentos SET nome = $1, photo = $2 WHERE id = $3 RETURNING *", [nome, photo, id]);
    return result.rows[0];
}

const deleteEquipamento = async (id) => {
    const result = await pool.query("DELETE FROM equipamentos WHERE id = $1 RETURNING *", [id]);

    if (result.rowCount === 0) {
        return { error: "Equipamento não encontrado." };
    }
    return { message: "Equipamento deletado com sucesso." };
}

module.exports = { getAllEquipamentos, getEquipamentoById, createEquipamento, updateEquipamento, deleteEquipamento }