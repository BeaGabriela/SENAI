drop database if exits livrocaixa;
create database livrocaixa charset=UTF8 collate utf8_general_ci;
use livrocaixa;

create table lancamentos(
    n_lancamento integer not null primary key auto_increment,
    datas varchar(20) not null,
    descricao varchar(30) not null,
    valor float(6, 2) not null,
    tipo varchar(4) not null
);



describe lancamentos;
show tables;

-- load data infile 'C:/Users/Beatriz/Desktop/JavaScript/BackEnd/Lancamento- front&back/lancamentos_back/lancamentos.csv'
load data infile 'C:/Users/Desenvolvimento.DESKTOP-CJ165MI/Desktop/Projeto---japoneis/Lancamento_front&back/lancamentos_back/lancamentos.csv'
into table lancamentos
fields terminated by ';'
enclosed by '"'
lines terminated by '\r\n'
ignore 1 rows;

select * from lancamentos;