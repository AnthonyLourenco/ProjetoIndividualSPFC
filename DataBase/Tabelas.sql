create database projetoIndividual;
use projetoIndividual;

create table usuario (
idUsuario int primary key auto_increment,
nome varchar(45) not null,
email varchar(45) unique not null,
senha varchar(45) not null
);

create table quiz (
idQuiz int primary key auto_increment,
pontuacao varchar(45) not null,
dtHora datetime not null
);



