const maintenanceModel = require('../models/maintenanceModel');

const getAllManutencao = async (req, res) => {
    try {
        const manutencao = await maintenanceModel.getAllManutencao();
        res.json(manutencao)
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar as manutenções'})
    }
};

const getManutencaoById = async (req, res) => {
    try {
        const manutencao = await maintenanceModel.getManutencaoById(req.params.id);
        if (!manutencao) {
            return res.status(404).json({ error: 'Manutenção não encontrada.' })
        }
        res.json(manutencao);
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar a manutenção." });
    }
}

const createManutencao = async (req, res) => {
    try {
        const { nome, equipamento_id } = req.body;
        if (!nome || !equipamento_id) {
            return res.status(400).json({ error: "Os campos 'nome' e 'equipamento_id' são obrigatórios."});
        }
        const newManutencao = await maintenanceModel.createManutencao(nome, equipamento_id);
        res.status(201).json(newManutencao);
    } catch (error) {
        console.error("Erro ao criar manutenção: ", error);
        res.status(500).json({ error: "Erro ao criar manuenção."})
    }
};


module.exports = { getAllManutencao, getManutencaoById, createManutencao };