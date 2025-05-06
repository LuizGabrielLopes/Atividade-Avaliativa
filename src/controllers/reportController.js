const PDFDocument = require("pdfkit");
const equipamentoModel = require("../models/equipamentoModel");

const exportUserPDF = async (req, res) => {
    try {
        const equipamentos = await equipamentoModel.getAllEquipamentos();

        res.setHeader("Content-Type", "application/pdf");
        res.setHeader("Content-Disposition", "inline; filename=equipamentos.pdf");

        const doc = new PDFDocument();
        doc.pipe(res);

        doc.fontSize(20).text("Relatório de Equipamentos", {align: "center"});
        doc.moveDown();

        doc.fontSize(12).text("Id | Nome, ", {underline: true});
        doc.moveDown(0.5);

        equipamentos.forEach((equipamento) => {
            doc.text(
                `${equipamento.id} | ${equipamento.nome} `
            )
        })
        doc.end()
    } catch (error) {
        res.status(500).json({ message: "Erro ao gerar o PDF"});
    }
}

module.exports = { exportUserPDF }