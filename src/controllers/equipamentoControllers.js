const equipamentoModel = require('../models/equipamentoModel');

const getAllEquipamentos = async (req, res) => {
    try {
        const { nome } = req.query;
        const equipamentos = await equipamentoModel.getAllEquipamentos(nome);
        res.json(equipamentos)
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar os equipamentos'});
    }
};

const getEquipamentoById = async (req, res) => {
    const { id } = req.params;
    try {
        const equipamento = await equipamentoModel.getEquipamentoById(id);
        if (!equipamento) {
            return res.status(404).json({ error: 'Equipamento não encontrado'})
        }
        res.json(equipamento)
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar o equipamento'})
    }
};

const createEquipamento = async (req, res) => {
    try {
        const { nome } = req.body;
        const photo = req.file ? req.file.filename : null;
        const newEquipamento = await equipamentoModel.createEquipamento(nome, photo);
        res.status(201).json(newEquipamento);
    } catch (error) {
        res.status(500).json({ message: "Erro ao criar equipamento"})
    }
}

const updateEquipamento = async (req, res) => {
    try {
        const { nome, photo } = req.body;
        const equipamento = await equipamentoModel.updateEquipamento(req.params.id, nome, photo); 
        if (!equipamento) {
            return res.status(404).json({ error: "Equipamento não encontrado"})
        }
        res.json(equipamento);
    } catch (error) {
        res.status(500).json({ message: "Erro ao atualizar um equipamento"})
    }
};

const deleteEquipamento = async (req, res) => {
    try {
        const result = await equipamentoModel.deleteEquipamento(req.params.id);
        if (result.error) {
            return res.status(404).json(result)
        }
        res.json(result);
    } catch (error) {
        console.error('Erro ao buscar o equipamento:', error);
        res.status(500).json({ error: 'Erro ao deletar um equipamento'})
    }
}

module.exports = { getAllEquipamentos, getEquipamentoById, createEquipamento, updateEquipamento, deleteEquipamento };