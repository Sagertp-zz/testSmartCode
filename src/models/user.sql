CREATE DATABASE smartcode;

USE smartcode;

CREATE TABLE tipo_usuario (
  id_tipo_usuario int NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(200) NOT NULL,
  PRIMARY KEY (id_tipo_usuario)
);

CREATE TABLE usuarios (
  id_usuario int NOT NULL AUTO_INCREMENT,
  id_tipo_usuario int NOT NULL,
  nombre VARCHAR(100) NOT NULL,
  email VARCHAR(200) NOT NULL,
  pass VARCHAR(200) NOT NULL,
  PRIMARY KEY (id_usuario),
  FOREIGN KEY (id_tipo_usuario) REFERENCES tipo_usuario (id_tipo_usuario)
);

CREATE TABLE ticket (
  id_ticket int NOT NULL AUTO_INCREMENT,
  id_usuario int NOT NULL,
  ticket_pedido VARCHAR(100) NOT NULL,
  PRIMARY KEY (id_ticket),
  FOREIGN KEY (id_usuario) REFERENCES usuarios (id_usuario)
);

INSERT INTO tipo_usuario (id_tipo_usuario, nombre) VALUES 
(1, "administrador"),
 (2, "usuario");
INSERT INTO usuarios (id_usuario, id_tipo_usuario, email, nombre, pass) VALUES
(1, 1, "administrador@smartcode.com", "Administrador", "$2a$10$vA0XQA3uFtQROU3cHJhHNu19G4G1IM8k1tx0GmRotvwAQ7rMTEp96"),
(2, 2, "usuario1@smartcode.com", "Usuario 1", "$2a$10$pSGuoDMBhc68jz2MXH95M.AiVXHndndbAfgz7jEp.sypMT7iX.JfO"),
(3, 2, "usuario2@smartcode.com", "Usuario 2", "$2a$10$Pey2MRIpzcl3B3ppztlWnO52KEWcpNSKt6Vx2qt8NGtXqlhUIO4cq");
INSERT INTO ticket (id_ticket, id_usuario, ticket_pedido) VALUES 
(1, 2, ""), 
(2, 2, ""),
(3, 3, ""),
(4, 3, "");