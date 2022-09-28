drop database if exists Contas;
create database Contas charset=UTF8 collate utf8_general_ci;
use Contas;

create table Clientes (
    cod_cli integer not null primary key auto_increment,
    nome varchar(30) not null,
    rua_num varchar(20) not null,
    bairro varchar(50) not null,
    cidade varchar(50) not null,
    uf varchar(20) not null
);

create table telefones(
    cod_cli integer not null auto_increment,
    tipo varchar(50) not null,
    numero varchar(50) not null,
    foreign key(cod_cli) references Clientes(cod_cli)
);

create table Duplicadas(
    num_dupli integer not null primary key auto_increment,
    cod_cli integer not null,
     data_compra varchar(20) not null,
     vencimento varchar(20) not null,
     pagamento varchar(20) not null,
    valor varchar(50) not null,
    diferenca varchar(20) not null,
    foreign key(cod_cli) references Clientes(cod_cli)
);

describe Clientes;
describe telefones;
describe Duplicadas;
show tables;


-- Importação de arquivos CSV
LOAD DATA INFILE 'C:/Users/Desenvolvimento.DESKTOP-CJ165MI/Desktop/JavaScript/BackEnd/Aula 4/contas/docs/clientes.csv'
INTO TABLE Clientes
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

select * from Clientes;

-- Importação de arquivos CSV
LOAD DATA INFILE 'C:/Users/Desenvolvimento.DESKTOP-CJ165MI/Desktop/JavaScript/BackEnd/Aula 4/contas/docs/telefones.csv'
INTO TABLE telefones
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

select * from telefones;

-- Importação de arquivos CSV
LOAD DATA INFILE 'C:/Users/Desenvolvimento.DESKTOP-CJ165MI/Desktop/JavaScript/BackEnd/Aula 4/contas/docs/duplicatas.csv'
INTO TABLE Duplicadas
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

select * from Duplicadas;