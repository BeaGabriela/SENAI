drop database if exists solicitacoes;
create database solicitacoes charset=utf8 collate utf8_general_ci;
use solicitacoes;
-- SQL - DDL
Create table Funcionarios(
	Cod_Func numeric(4) not null,   
	Nome_Func varchar(50) not null,
	Sexo char(1) not null,            
	Cidade varchar(30),
	Estado varchar(2),
	constraint pk_func_1 primary key(Cod_Func)
);

Create table Departamentos(
	Cod_Depto numeric(4) not null,
	Nome_Depto varchar(50) not null,
	constraint pk_dep_1 primary key(Cod_Depto)
); 

Create table Produtos(
	Cod_Produto numeric(4) not null,  
	Nome_produto varchar(50) not null,
	constraint pk_prod_1 primary key(Cod_Produto)
);

Create table Solicitacoes(
	Num_Sol numeric(4) not null,     
	Data_sol date null,
	Cod_Depto numeric(4) not null,           
	Cod_Func  numeric(4) not null,
	constraint pk_sol_1 primary key(Num_Sol),
	constraint fk_sol_dep_1 Foreign Key(Cod_Depto) references Departamentos(Cod_Depto),
	constraint fk_sol_fun_1 Foreign Key(Cod_Func) references Funcionarios(Cod_Func)
);

Create table Itens_Solicitacao(
	Num_Sol numeric(4) not null,
	Cod_Produto numeric(4) not null,
	Qtde numeric(4) not null,
	Valor numeric(12,2) not null,
	constraint pk_itens_sol primary key(Num_Sol, cod_produto), --Significa que os dois são chaves primarias. Usando pk para definir isso.
	constraint fk_itens_sol_1 foreign Key(Num_Sol) references Solicitacoes(Num_Sol),
	constraint fk_itens_prod_1 Foreign Key(Cod_Produto) references Produtos(Cod_Produto)
);

-- OBS Na tabela Itens_Solicitacao a chave primária é uma chave "COMPOSTA" por (Num_Sol, cod_produto)

-- SQL - DML
insert into Departamentos values
(1000,"Vendas"),
(2000,"Compras"),
(2001,"Recursos Humanos");
insert into Funcionarios values
(100,"Jose Pedro","M","Sumare","SP"),
(150,"Ana Pereira","F","Nova Odessa","SP"),
(200,"Maria da Silva","F","Londrina","PR"),
(300,"Joao Antonio","M","Campinas","SP");
insert into Produtos values
(125,"Parafuso"),
(135,"Arruela"),
(145,"Difusor"),
(155,"Paralama");
insert into Solicitacoes values
(1000,"2018/12/01",1000,100),
(1001,"2018/03/13",2001,200),
(1005,"2018/02/10",2001,150),
(1010,"2019/02/22",2000,100),
(1020,"2019/03/23",1000,200),
(1040,"2019/03/24",2001,300);
insert into Itens_Solicitacao values
(1000,125,2,4.36),
(1000,145,1,85),
(1001,135,3,2.12),
(1001,155,2,522),
(1010,145,2,170),
(1010,135,2,1.06),
(1020,125,1,2.18),
(1020,145,2,170),
(1040,155,3,783),
(1005,125,1,50),
(1005,145,3,54.5);
-- Coluna Valor representa o valor total do item (Não é necessário multiplicar pela quantidade)

-- SQL - DQL
select * from Departamentos;
select * from Funcionarios;
select * from Produtos;
select * from Solicitacoes;
select * from Itens_Solicitacao;
select max(valor) from Itens_Solicitacao;
Select Year(curdate()) as ano;
Select month(curdate()) as mes;
show tables;


create view View_Solicitacoes as 
select s.Num_Sol, s.Data_Sol, s.Cod_Depto, d.Nome_Depto, f.Cod_Func, f.Nome_Func, i.Cod_Produto, p.Nome_produto, i.Qtde, i.valor as Valor
from Solicitacoes s inner join Departamentos d on s.Cod_Depto = d.Cod_Depto
inner join Funcionarios f on s.Cod_Func = f.Cod_Func
inner join Itens_Solicitacao i on s.Num_Sol = i.Num_Sol
inner join Produtos p on p.Cod_Produto = i.Cod_Produto ;

select * from View_Solicitacoes order by Num_Sol desc;

--/Procedure
drop procedure solicita_um_item;
delimiter $ 
create procedure solicita_um_item (n_sol int, depto int, func int, prod int, qtd int, total int )
begin
set @nome = (select Nome_Depto from Departamentos where Cod_Depto = depto);
insert into Departamentos value(depto, @nome);
insert into Solicitacoes value(n_sol, curdate(), depto, func);
insert into Itens_Solicitacao value (last_insert_id(), prod, qtd, total );
end $
delimiter ;

call solicita_um_item( );

select max( Qtde*valor),Nome_Func from Itens_Solicitacao inner join 
Solicitacoes on Itens_Solicitacao.Num_Sol = Solicitacoes.Num_Sol
inner join Funcionarios on Solicitacoes.Cod_Func = Funcionarios.Cod_Func;

--Correcao da anterior Select f.Nome_Func, sum(i.valor) as Total
-- from Itens_Solicitacao i
-- inner join Solicitacoes s on s.Num_Sol = i.Num_Sol
-- inner join Funcionarios f on s.Cod_Func = f.Cod_Func
-- group by f.Cod_Func
-- order by Total desc
-- limit 1;


select  Qtde*valor,Nome_Func from Itens_Solicitacao inner join 
Solicitacoes on Itens_Solicitacao.Num_Sol = Solicitacoes.Num_Sol
inner join Funcionarios on Solicitacoes.Cod_Func = Funcionarios.Cod_Func order by Qtde*valor desc;

select (Qtde*valor) ,Nome_Func from Itens_Solicitacao inner join 
Solicitacoes on Itens_Solicitacao.Num_Sol = Solicitacoes.Num_Sol
inner join Funcionarios on Solicitacoes.Cod_Func = Funcionarios.Cod_Func order by Qtde*valor ;

--Parafusos
select Nome_Depto,Nome_produto from Departamentos inner join
Solicitacoes on Departamentos.Cod_Depto = Solicitacoes.Cod_Depto 
inner join Itens_Solicitacao on Itens_Solicitacao.Num_Sol = Solicitacoes.Num_Sol
inner join Produtos on Produtos.Cod_Produto = Itens_Solicitacao.Cod_Produto where Nome_produto like '%Parafuso%' OR Nome_produto like '%Difusor%'; 


select Cod_Produto from Itens_Solicitacao
 where Num_Sol = (select Num_Sol from Solicitacoes where Data_sol like "%2018-02%")  limit 1;

select Cod_Produto, Data_sol from Itens_Solicitacao 
inner join Produtos on Itens_Solicitacao.Cod_Produto = Produtos.Cod_Produto 
inner join Solicitacoes on Solicitacoes.Num_Sol = Itens_Solicitacao.Num_Sol where  Data_sol like "%2018-02%";

-- -select p.Nome_produto from Produtos p
-- inner join Itens_Solicitacao i on i.Cod_Produto = p.Cod_Produto
-- inner join Solicitacoes s on s.Num_Sol = i.Num_Sol
-- where Year(s.Data_sol) = "2018" AND month(s.Data_sol) = "02";
