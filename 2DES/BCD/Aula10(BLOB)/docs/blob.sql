drop database if exists clientes_blo;
create database clientes_blo charset= UTF8 collate utf8_general_ci;
use clientes_blo;

create table clientes (
    login varchar(10) primary key not null,
    nome varchar(15),
    nascimento date not null,
    telefone varchar(50),
    avatar mediumblob
);

insert into clientes values ('marcos12', 'Marcos', '2002-09-12', '19 98023-2345', to_base64(LOAD_FILE("C:/Users/Desenvolvimento.DESKTOP-CJ165MI/Desktop/SENAI/2DES/BCD/Aula10(BLOB)/docs/assets/marcos.png")));
insert into clientes values ('ericasantos', 'Erica', '2000-06-10', '19 98023-9080', to_base64(LOAD_FILE('C:/Users/Desenvolvimento.DESKTOP-CJ165MI/Desktop/SENAI/2DES/BCD/Aula10(BLOB)/docs/assets/erica.png')));
insert into clientes values ('anareb', 'Ana', '2002-09-12', '19 98023-2345', to_base64(LOAD_FILE('C:/Users/Desenvolvimento.DESKTOP-CJ165MI/Desktop/SENAI/2DES/BCD/Aula10(BLOB)/docs/assets/moca.png')));
insert into clientes values ('gargfeiticeiro', 'Gargamel', '1990-07-12', '19 94578-3062', to_base64(LOAD_FILE('C:/Users/Desenvolvimento.DESKTOP-CJ165MI/Desktop/SENAI/2DES/BCD/Aula10(BLOB)/docs/assets/feiticeiro.png')));

select login, nome, nascimento, telefone, avatar from clientes;

