create database projetoIndividual;
use projetoIndividual;

create table usuario (
idUsuario int primary key auto_increment,
nome varchar(45) not null,
email varchar(150) unique not null,
senha varchar(20) not null
);

