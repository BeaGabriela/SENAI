drop database if exists estacionamento;
create database estacionamento charset=utf8 collate utf8_general_ci;
use estacionamento;

create table entrada (
    id integer not null auto_increment  primary key,
    vaga varchar(5) not null,
    placa varchar(10) not null,
    hora_entrada time not null,
    datas_entrada date not null,
    datas_saida date,
    hora_saida time,
    tipo varchar(6) not null
);

create table valor(  
      id integer not null,
      tempo float(5,2),
      valor_total float (5,2) ,
      foreign key (id) references entrada(id)
);


show tables;

insert into entrada values (default, 'A0', 'ABC1234', curtime(), curdate(), null, null, 'C');
update entrada set datas_saida = curdate() where id=1;
update entrada set hora_saida = '14:00' where id=1;

insert into entrada values (default, 'A2', 'CDE345', '13:23:00', '2022-11-13', null, null, 'C');
update entrada set datas_saida = '2022-11-06' where id=2;
update entrada set hora_saida = '15:00' where id=2;


insert into valor values (1, 0.30, 30.00);
insert into valor values (2, 0.20, 25.00);


drop trigger if exists update_valor;
delimiter //
create trigger update_valor
after insert on entrada
for each row
begin
    insert  into  valor values
    (3, (select sum((hora_saida-hora_entrada)*60) from entrada where id =3),'12')
    
end //
delimiter ;

-- select hora_entrada, hora_saida,  TIMESTAMPDIFF(hour, hora_entrada, hora_saida) from entrada;
-- SELECT id, Date_FORMAT(datas_entrada, '%d/%m/%Y') as data_entrada,  Date_FORMAT(datas_saida, '%d/%m/%Y')  as datas_saida, TIMESTAMPDIFF(HOUR, hora_entrada, hora_saida) as tempo from entrada;
-- CAST(DATEADD(MINUTE, TIMESTAMPDIFF(MINUTE,hora_entrada, hora_saida)0) as time(0)) as jornada from entrada;

-- select * timediff(hora_saida, hora_entrada) as horas from entrada;

-- insert into entrada values(default, 'A0', 'abc123', curtime(), curdate(), 'C');
-- insert into entrada values(default, 'A2', 'qwe234', curtime(), curdate(), 'C');
-- insert into entrada values(default, 'M2', 'asd567', curtime(), curdate(), 'M');
-- insert into entrada values(default, 'M0', 'MLO097', curtime(), curdate(), 'M');

-- insert into saida values(1, '2022-11-06',curtime());
-- insert into saida values(2,'2022-09-15','17:10' );
-- insert into saida values(3, '2022-08-10','12:10' );

-- insert into estacionar values(1, 20);
-- insert into estacionar values(2, 50);
-- insert into estacionar values(3, 100);

-- select * from entrada;
-- select * from saida;
-- select * from estacionar;

-- drop  view if exists View_vizua;
-- create view View_vizua as
-- select e.id, e.vaga, e.placa, e.hora_entrada, e.datas_entrada, s.datas_saida, s.hora_saida, es.valor_total as estacionar from 
-- entrada e inner join saida s 
-- on e.id = s.id
-- inner join estacionar es 
-- on s.id = es.id;

