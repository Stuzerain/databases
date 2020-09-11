CREATE DATABASE chat;

USE chat;

CREATE TABLE usernames (
  id integer NOT NULL AUTO_INCREMENT,
  username varchar(255) NOT NULL,

  PRIMARY KEY(ID)
);

CREATE TABLE messages (
  id integer NOT NULL AUTO_INCREMENT,
  username integer NOT NULL,
  roomname varchar(255),
  body varchar(255) NOT NULL,
  -- createdAt varchar(255),
  -- updatedAt varchar(255),

  PRIMARY KEY(ID),
  FOREIGN KEY(username) REFERENCES usernames(id)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

