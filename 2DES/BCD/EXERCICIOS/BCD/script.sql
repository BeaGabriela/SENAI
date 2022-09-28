-- Comentários. Exclui o banco de dados, caso exista. E cria um novo padrã]o utf8 de caracteres.
drop database if exists pedidos;
create database pedidos charset=UTF8 collate utf8_general_ci;
use pedidos;
--DDL Criação da estrutura do Banco de dados
create table clientes(
    id_cliente integer not null primary key auto_increment,
    pri_nome varchar(20) not null,
    sobrenome varchar(20) not null,
    endereco varchar(100) not null
);

create table telefones(
    id_cliente integer not null,
    telefone varchar(15) not null,
    foreign key (id_cliente) references clientes(id_cliente)


);

create table pedidos(
    num_pedido integer not null primary key auto_increment,
    id_cliente integer not null,
    data timestamp not null,
    valor decimal(8,2) not null ,
    descricao varchar(50) not null,
    quantidade integer(4) not null,
    foreign key (id_cliente) references clientes(id_cliente)
);

describe clientes;
describe telefones;
describe pedidos;
show tables;

--DML Alimentar o banco de dados com dados de testes
insert into clientes values 
(null,'Jorge', 'Silva', 'Rua coisa 1 - Jaguariúna - SP'),
(null,'Vanessa', 'Silva', 'Rua coisa Bureeno - Jaguariúna - SP'),
(null,'Marcus', 'Souza', 'Rua coisinha Burno - Jaguariúna - SP'),
(null,'Diego', 'Camargo', 'Rua Dois - Pedreira - SP'),
(null,'Andreina', 'Andeline', 'Rua Bueno Bureeno - Jaguariúna - SP');

insert into telefones values
(1, '(19) 9 3427-3738'),
(2, '(19) 9 6185-6098'),
(3, '(19) 9 5005-6970'),
(4, '(19) 9 8329-4886'),
(5, '(19) 9 6485-9622');

insert into pedidos values
(null,1,null,10, 'Tampas de garrafa',2),
(null,3,null,2, 'Tampas de pote',2),
(null,1,null,10, 'Tampas de garrafa',2),
(null,2,null,3, 'Tampas de latas',2),
(null,1,null,9, 'Tampas de garrafa',2),
(null,5,null,10, 'Tampas de garrafa',3),
(null,1,null,4, 'Tampas de latinhas',2),
(null,2,null,10, 'Tampas de garrafa',4);


select * from clientes;
select * from pedidos;
