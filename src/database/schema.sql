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

INSERT INTO manutencoes (nome, equipamento_id) VALUES ('Troca de placa de vídeo', 1);
INSERT INTO manutencoes (nome, equipamento_id) VALUES ('Troca de HD', 1);
INSERT INTO manutencoes (nome, equipamento_id) VALUES ('Troca de teclado', 2);
INSERT INTO manutencoes (nome, equipamento_id) VALUES ('Troca de tela', 3);
INSERT INTO manutencoes (nome, equipamento_id) VALUES ('Troca de bateria', 4);
INSERT INTO manutencoes (nome, equipamento_id) VALUES ('Troca de cartucho', 5);