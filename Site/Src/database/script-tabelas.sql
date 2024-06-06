-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

create database projetoIndividual;
use projetoIndividual;

create table usuario (
idUsuario int primary key auto_increment,
nome varchar(45) unique,
email varchar(150) unique not null,
senha varchar(45) not null
);

create table quiz (
idQuiz int primary key auto_increment,
nome varchar(45) unique,
qtdPerguntas varchar(45) not null
);

create table historico (
idHistorico int auto_increment,
fkUsuario varchar(45),
fkQuiz int,
pontuacao int not null,
dtHora datetime not null,
constraint pkComposta primary key (idHistorico, fkUsuario, fkQuiz),
constraint fkUsuarioHistorico foreign key (fkUsuario) references usuario (nome),
constraint fkQuizHistorico foreign key (fkQuiz) references quiz (idQuiz)
);

INSERT INTO quiz (nome, qtdPerguntas) VALUES
('Quiz São Paulo F.C.', '20');

select * from usuario;
select * from quiz;
select * from historico;

SELECT pontuacao 
    FROM historico
    ORDER BY pontuacao DESC;

SELECT u.nome AS nome, h.pontuacao AS pontuacao
FROM usuario u
JOIN historico h ON u.nome = h.fkUsuario ORDER BY h.pontuacao DESC;