create database projetoIndividual;
use projetoIndividual;

create table usuario (
idUsuario int primary key auto_increment,
nome varchar(45) not null,
email varchar(150) unique not null,
senha varchar(45) not null
);

create table quiz (
idQuiz int primary key auto_increment,
nome varchar(45) not null,
qtdPerguntas varchar(45) not null
);

create table historico (
idHistorico int,
fkUsuario int,
fkQuiz int,
pontuacao varchar(45) not null,
dtHora datetime not null,
constraint pkComposta primary key (idHistorico, fkUsuario, fkQuiz),
constraint fkUsuarioHistorico foreign key (fkUsuario) references usuario (idUsuario),
constraint fkQuizHistorico foreign key (fkQuiz) references quiz (idQuiz)
);

select * from usuario;
select * from quiz;


       
       
       





