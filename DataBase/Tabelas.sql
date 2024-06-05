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

SELECT u.nome AS NomeUsuario, h.pontuacao AS Pontuacao
FROM usuario u
JOIN historico h ON u.nome = h.fkUsuario ORDER BY h.pontuacao DESC;





       
       
       





