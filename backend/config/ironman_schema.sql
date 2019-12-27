 CREATE DATABASE ironman;

 CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `role` enum('Minimum','Very Low','Low','Medium','High','Very High','Maximum') NOT NULL,
  `username` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `bcrypt_hash` binary(60) NOT NULL,
  `reset_token` varchar(100) DEFAULT NULL,
  `reset_token_expires` float DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
