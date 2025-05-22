CREATE DATABASE epi;
\c epi

CREATE TABLE equipamentos (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    photo VARCHAR(300)
);

CREATE TABLE manutencoes (
    id SERIAL PRIMARy KEY,
    nome VARCHAR(100) NOT NULL,
    equipamento_id INT NOT NULL REFERENCES equipamentos(id) ON DELETE CASCADE
);

INSERT INTO equipamentos (nome, photo) VALUES ('Computador', 'https://m.media-amazon.com/images/I/51Q5lJTUrCL._AC_UF894,1000_QL80_.jpg');
INSERT INTO equipamentos (nome, photo) VALUES ('Nootebok', 'https://bemol.vtexassets.com/arquivos/ids/253419/230514_b.jpg?v=638537668488400000');
INSERT INTO equipamentos (nome, photo) VALUES ('Tablet', 'https://a-static.mlcdn.com.br/1500x1500/tablet-samsung-galaxy-tab-s6-lite-com-caneta-104-64gb-4gb-ram-android-14-exynos-1280-wi-fi/magazineluiza/238104200/279b6d42eb342975dd5235dcaaf49a04.jpg');
INSERT INTO equipamentos (nome, photo) VALUES ('Smartphone', 'https://imgs.casasbahia.com.br/55065634/1g.jpg?imwidth=1000');
INSERT INTO equipamentos (nome, photo) VALUES ('Impressora', 'https://a-static.mlcdn.com.br/1500x1500/impressora-hp-laser-107a-preto-e-branco-usb/magazineluiza/224172700/e27521c90485efa06892ad6e8f07a48e.jpg');
INSERT INTO equipamentos (nome, photo) VALUES ('Monitor', NULL);
INSERT INTO equipamentos (nome, photo) VALUES ('Mouse', NULL);
INSERT INTO equipamentos (nome, photo) VALUES ('Teclado', NULL);
INSERT INTO equipamentos (nome, photo) VALUES ('Webcam', NULL);
INSERT INTO equipamentos (nome, photo) VALUES ('Headset', NULL);
INSERT INTO equipamentos (nome, photo) VALUES ('Projetor', NULL);
INSERT INTO equipamentos (nome, photo) VALUES ('Scanner', NULL);
INSERT INTO equipamentos (nome, photo) VALUES ('Roteador', NULL);
INSERT INTO equipamentos (nome, photo) VALUES ('Switch', NULL);
INSERT INTO equipamentos (nome, photo) VALUES ('Nobreak', NULL);
INSERT INTO equipamentos (nome, photo) VALUES ('Servidor', NULL);
INSERT INTO equipamentos (nome, photo) VALUES ('HD Externo', NULL);
INSERT INTO equipamentos (nome, photo) VALUES ('Pen Drive', NULL);
INSERT INTO equipamentos (nome, photo) VALUES ('Câmera de Segurança', NULL);
INSERT INTO equipamentos (nome, photo) VALUES ('Leitor de Código de Barras', NULL);

INSERT INTO manutencoes (nome, equipamento_id) VALUES ('Troca de placa de vídeo', 1);
INSERT INTO manutencoes (nome, equipamento_id) VALUES ('Troca de HD', 1);
INSERT INTO manutencoes (nome, equipamento_id) VALUES ('Troca de teclado', 2);
INSERT INTO manutencoes (nome, equipamento_id) VALUES ('Troca de tela', 3);
INSERT INTO manutencoes (nome, equipamento_id) VALUES ('Troca de bateria', 4);
INSERT INTO manutencoes (nome, equipamento_id) VALUES ('Troca de cartucho', 5);
INSERT INTO manutencoes (nome, equipamento_id) VALUES ('Limpeza interna', 6);
INSERT INTO manutencoes (nome, equipamento_id) VALUES ('Atualização de firmware', 7);
INSERT INTO manutencoes (nome, equipamento_id) VALUES ('Substituição de cabo', 8);
INSERT INTO manutencoes (nome, equipamento_id) VALUES ('Troca de teclas', 9);
INSERT INTO manutencoes (nome, equipamento_id) VALUES ('Ajuste de foco', 10);
INSERT INTO manutencoes (nome, equipamento_id) VALUES ('Troca de almofada', 11);
INSERT INTO manutencoes (nome, equipamento_id) VALUES ('Troca de lâmpada', 12);
INSERT INTO manutencoes (nome, equipamento_id) VALUES ('Troca de vidro', 13);
INSERT INTO manutencoes (nome, equipamento_id) VALUES ('Configuração de rede', 14);
INSERT INTO manutencoes (nome, equipamento_id) VALUES ('Troca de porta', 15);
INSERT INTO manutencoes (nome, equipamento_id) VALUES ('Troca de bateria', 16);
INSERT INTO manutencoes (nome, equipamento_id) VALUES ('Atualização de sistema', 17);
INSERT INTO manutencoes (nome, equipamento_id) VALUES ('Troca de cabo USB', 18);
INSERT INTO manutencoes (nome, equipamento_id) VALUES ('Formatação', 19);