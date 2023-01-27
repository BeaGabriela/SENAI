DROP DATABASE IF EXISTS tarefas;
CREATE DATABASE tarefas charset=UTF8 collate utf8_general_ci;
USE tarefas;


CREATE TABLE status_tarefa(
    id_status INTEGER PRIMARY KEY AUTO_INCREMENT,
    status VARCHAR(10) NOT NULL
);

INSERT INTO status_tarefa VALUES(default, 'Aberto'), (default, 'Finalizado'), (default, 'Cancelado');

CREATE TABLE usuarios (
    id_user INTEGER PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(30) NOT NULL,
    senha VARCHAR(30) NOT NULL
);

INSERT INTO usuarios VALUES(default, 'matheus@gmail.com','senha1234'),(default, 'Sebastian@gmail.com','seb123');

CREATE TABLE tarefas(
    id_tarefa INTEGER PRIMARY KEY AUTO_INCREMENT,
    descricao VARCHAR(40) NOT NULL,
    hora_tarefa TIME NOT NULL,
    hora_final TIME,
    id_status_t INTEGER NOT NULL,
    id_user INTEGER NOT NULL,

    FOREIGN KEY (id_status_t) REFERENCES status_tarefa(id_status),
    FOREIGN KEY (id_user) REFERENCES usuarios(id_user)
);

INSERT INTO tarefas VALUES(DEFAULT, "Ir ao supermercado", '12:00', NULL, 1, 1), 
                          (DEFAULT, "Ir para a academia ", '15:00', NULL, 1, 2), 
                          (DEFAULT, "Fazer dieta", '8:00', curtime(), 3, 2), 
                          (DEFAULT, "Lavar roupa", '10:00', '11:00', 2, 1);



DROP VIEW IF EXISTS tarefasGerais;
CREATE View tarefasGerais AS
SELECT t.id_tarefa, t.descricao, t.hora_tarefa, t.hora_final, t.id_status_t, s.status
FROM  tarefas t INNER JOIN status_tarefa s
ON t.id_status_t = s.id_status;

DROP VIEW IF EXISTS tarefasAbertas;
CREATE View tarefasAbertas AS
SELECT t.id_tarefa, t.descricao, t.hora_tarefa, t.hora_final, t.id_status_t, s.status
FROM  tarefas t INNER JOIN status_tarefa s
ON t.id_status_t = s.id_status
WHERE s.id_status= 1 ;

DROP VIEW IF EXISTS tarefasFinalizadas;
CREATE View tarefasFinalizadas AS
SELECT t.id_tarefa, t.descricao, t.hora_tarefa, t.hora_final, t.id_status_t, s.status
FROM  tarefas t INNER JOIN status_tarefa s
ON t.id_status_t = s.id_status
WHERE s.id_status= 2;

DROP VIEW IF EXISTS tarefasCanceladas;
CREATE View tarefasCanceladas AS
SELECT t.id_tarefa, t.descricao, t.hora_tarefa, t.hora_final, t.id_status_t, s.status
FROM  tarefas t INNER JOIN status_tarefa s
ON t.id_status_t = s.id_status
WHERE s.id_status= 3;

