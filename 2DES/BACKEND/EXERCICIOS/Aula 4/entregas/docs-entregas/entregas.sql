drop database if exists entregas;
create database entregas charset=UTF8 collate utf8_general_ci;
use entregas;

create table clientes(
    id_clientes integer not null primary key auto_increment ,
    cpf varchar(12) not null,
    nome varchar(25) not null,
    cep varchar(25) not null,
    numero varchar(25) not null,
    complemento varchar(50)

);

create table telefones(
    id_clientes integer not null,
    telefones varchar(50) not null,
    foreign key (id_clientes) references clientes (id_clientes)
);

create table entregadores(
    id_entregador integer not null primary key auto_increment, 
    nome varchar (50) not null,
    veiculo varchar(20) not null
);

create table produtos(
    id_produto integer not null primary key auto_increment,
    nome varchar(20) not null,
    preco integer(20) not null
);

create table pedidos(
    id_clientes integer not null,
    id_pedidos integer not null auto_increment primary key,
     id_entregador integer not null,
    datas varchar(50) not null,
    hora_pedido varchar(50) not null,
    hora_entrega varchar(20) not null,
    hora_fim varchar(20) not null,
    foreign key (id_clientes) references clientes(id_clientes),
    foreign key (id_entregador) references entregadores(id_entregador)
);

-- create table entrega(
--     taxa_entrega integer not null,
--      id_pedidos integer not null,
--     foreign key (id_pedidos) references pedidos(id_pedidos)
-- );


create table itens(
    id_pedidos integer not null,
    quantidade int not null,
    id_produto integer not null,
    foreign key(id_pedidos) references pedidos(id_pedidos),
    foreign key(id_produto) references produtos(id_produto)
);



describe clientes;
describe telefones;
describe entregadores;
describe produtos;
describe pedidos;
describe itens;

show tables;



LOAD DATA INFILE 'C:/Users/Desenvolvimento.DESKTOP-CJ165MI/Desktop/JavaScript/BackEnd/Aula 4/entregas/clientes.csv' 
INTO TABLE clientes
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

select * from clientes;


LOAD DATA INFILE 'C:/Users/Desenvolvimento.DESKTOP-CJ165MI/Desktop/JavaScript/BackEnd/Aula 4/entregas/telefones.csv' 
INTO TABLE telefones
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

select * from telefones;

LOAD DATA INFILE 'C:/Users/Desenvolvimento.DESKTOP-CJ165MI/Desktop/JavaScript/BackEnd/Aula 4/entregas/entregadores.csv' 
INTO TABLE entregadores
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

select * from entregadores;

LOAD DATA INFILE 'C:/Users/Desenvolvimento.DESKTOP-CJ165MI/Desktop/JavaScript/BackEnd/Aula 4/entregas/produtos.csv' 
INTO TABLE produtos
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

select * from produtos;


LOAD DATA INFILE 'C:/Users/Desenvolvimento.DESKTOP-CJ165MI/Desktop/JavaScript/BackEnd/Aula 4/entregas/pedidos.csv' 
INTO TABLE pedidos
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

select * from pedidos;



LOAD DATA INFILE 'C:/Users/Desenvolvimento.DESKTOP-CJ165MI/Desktop/JavaScript/BackEnd/Aula 4/entregas/items.csv' 
INTO TABLE itens
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

select * from itens;

select * from clientes join telefones on clientes.id_clientes = telefones.id_clientes;
select * from clientes c  join telefones t on c.id_clientes = t.id_clientes;

select  * from clientes c 
join telefones t
on c.id_clientes = t.id_clientes;


insert into clientes values (null,"11122233311","Marcelo","13458777","1A","Fundos");
-- Exemplo de inner
select * from clientes c
inner join telefones t
on c.id_clientes = t.id_clientes;
-- Exemplo de Left
select * from clientes c
left join telefones t
on c.id_clientes = t.id_clientes;
-- Exemplo de Right
select * from telefones t
right join clientes c
on c.id_clientes = t.id_clientes;

-- Salvando a Consulta
create view vw_clientes as
select c.id_clientes, c.cpf, c.nome, c.cep, c.numero, c.complemento, t.telefones as telefones from clientes c
inner join telefones t
on c.id_clientes = t.id_clientes;

select * from vw_clientes;
