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
idHistorico int auto_increment,
fkUsuario int,
fkQuiz int,
pontuacao int not null,
dtHora datetime not null,
constraint pkComposta primary key (idHistorico, fkUsuario, fkQuiz),
constraint fkUsuarioHistorico foreign key (fkUsuario) references usuario (idUsuario),
constraint fkQuizHistorico foreign key (fkQuiz) references quiz (idQuiz)
);

INSERT INTO quiz (nome, qtdPerguntas) VALUES
('Quiz São Paulo F.C.', '20');

select * from usuario;
select * from quiz;

SELECT pontuacao 
    FROM historico
    ORDER BY pontuacao DESC;

SELECT u.nome AS NomeUsuario, h.pontuacao AS Pontuacao
FROM usuario u
JOIN historico h ON u.idUsuario = h.fkUsuario ORDER BY h.pontuacao DESC;



       
       
       





