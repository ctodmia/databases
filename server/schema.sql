CREATE DATABASE chat;

USE chat;

CREATE TABLE `Messages` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `username_id` INTEGER NOT NULL,
  `text` VARCHAR NOT NULL,
  `roomname` INTEGER NOT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Users'
-- 
-- ---

DROP TABLE IF EXISTS `Users`;
    
CREATE TABLE `Users` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `username` VARCHAR NOT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Rooms'
-- 
-- ---

DROP TABLE IF EXISTS `Rooms`;
    
-- CREATE TABLE `Rooms` (
--   `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
--   `roomname` VARCHAR NULL DEFAULT NULL,
--   `user_id` INTEGER NULL DEFAULT NULL,
--   PRIMARY KEY (`id`)
-- );

-- ---
-- Foreign Keys 
-- ---

-- ALTER TABLE `Messages` ADD FOREIGN KEY (username_id) REFERENCES `Users` (`id`);
-- ALTER TABLE `Messages` ADD FOREIGN KEY (room_id) REFERENCES `Rooms` (`id`);
-- ALTER TABLE `Rooms` ADD FOREIGN KEY (user_id) REFERENCES `Users` (`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `Messages` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Users` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Rooms` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `Messages` (`id`,`username_id`,`message`,`room_id`,`createdAt`) VALUES
-- ('','','','','');
-- INSERT INTO `Users` (`id`,`username`) VALUES
-- ('','');
-- INSERT INTO `Rooms` (`id`,`roomname`,`user_id`) VALUES
-- ('','','');






/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

