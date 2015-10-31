CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
  username VARCHAR(100),
  message VARCHAR(100),
  roomname VARCHAR (100)
);

/* Create other tables and define schemas for them here! */

CREATE TABLE user (

);






/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

