DROP DATABASE IF EXISTS lanchonete;
CREATE DATABASE lanchonete charset=UTF8 collate utf8_general_ci;
USE lanchonete;

CREATE TABLE entregadores(
  id_entregador INTEGER PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(25) NOT NULL,
  email VARCHAR(25) NOT NULL,
  senha VARCHAR(25) NOT NULL,
  veiculo VARCHAR(25) NOT NULL
);


-- LOAD DATA INFILE 'C:/Users/Beatriz/Desktop/SENAI/3DES/FULLSTACK/Aula1/dados/entregadores.csv'
LOAD DATA INFILE 'C:/Users/Desenvolvimento.DESKTOP-CJ165MI/Desktop/SENAI/3DES/FULLSTACK/Aula1/dados/entregadores.csv'
INTO TABLE entregadores
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

CREATE TABLE pedidos(
    id_pedido INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    cliente VARCHAR(25) NOT NULL,
    endereco VARCHAR(25) NOT NULL,
    produto VARCHAR(25) NOT NULL,
    data DATE NOT NULL,
    hora_pedido TIME NOT NULL,
    hora_entrega TIME,
    hora_fim TIME,
    id_entregador INTEGER NOT NULL,

    FOREIGN KEY (id_entregador) REFERENCES entregadores(id_entregador)
);

-- LOAD DATA INFILE 'C:/Users/Beatriz/Desktop/SENAI/3DES/FULLSTACK/Aula1/dados/pedidos.csv'
LOAD DATA INFILE 'C:/Users/Desenvolvimento.DESKTOP-CJ165MI/Desktop/SENAI/3DES/FULLSTACK/Aula1/dados/pedidos.csv'
INTO TABLE pedidos
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;


DROP IF EXISTS vw_entregadores;
CREATE View vw_entregadores AS
SELECT p.id_pedido,p.cliente,p.endereco,p.produto,p.data,p.hora_pedido,p.hora_entrega,p.hora_fim,e.nome  
FROM pedidos p INNER JOIN entregadores e 
ON p.id_entregador = e.id_entregador;
