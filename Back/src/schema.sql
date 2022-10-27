CREATE TABLE IF NOT EXISTS usuarios (
    id SERIAL PRIMARY KEY ,
    nome TEXT NOT NULL, 
    email TEXT UNIQUE NOT NULL,
    senha TEXT NOT NULL,
    
)

CREATE TABLE IF NOT EXISTS carros (
    id SERIAL PRIMARY KEY ,
    nome TEXT NOT NULL, 
    marca TEXT NOT NULL,
    modelo TEXT NOT NULL,
    img TEXT NOT NULL
)