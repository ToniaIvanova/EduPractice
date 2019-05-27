-- MySQL dump 10.13  Distrib 8.0.15, for Win64 (x86_64)
--
-- Host: localhost    Database: photo_portal
-- ------------------------------------------------------
-- Server version	8.0.15

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `hashtags`
--

DROP TABLE IF EXISTS `hashtags`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `hashtags` (
  `hashtags_id` int(11) NOT NULL AUTO_INCREMENT,
  `amount` int(11) DEFAULT NULL,
  `post_id` int(11) NOT NULL,
  PRIMARY KEY (`hashtags_id`),
  KEY `fk_hashtags_photo_post1_idx` (`post_id`),
  CONSTRAINT `fk_hashtags_photo_post1` FOREIGN KEY (`post_id`) REFERENCES `photo_post` (`post_id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hashtags`
--

LOCK TABLES `hashtags` WRITE;
/*!40000 ALTER TABLE `hashtags` DISABLE KEYS */;
INSERT INTO `hashtags` VALUES (1,2,2002),(2,0,2003),(3,3,2004),(4,5,2005),(5,0,2006),(6,10,2007),(7,4,2008),(8,2,2009),(9,3,2010),(10,1,2011),(11,2,2012),(12,1,2013);
/*!40000 ALTER TABLE `hashtags` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `likes`
--

DROP TABLE IF EXISTS `likes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `likes` (
  `likes_id` int(11) NOT NULL AUTO_INCREMENT,
  `amount` int(11) DEFAULT NULL,
  `post_id` int(11) NOT NULL,
  PRIMARY KEY (`likes_id`),
  KEY `fk_likes_photo_post1_idx` (`post_id`),
  CONSTRAINT `fk_likes_photo_post1` FOREIGN KEY (`post_id`) REFERENCES `photo_post` (`post_id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `likes`
--

LOCK TABLES `likes` WRITE;
/*!40000 ALTER TABLE `likes` DISABLE KEYS */;
INSERT INTO `likes` VALUES (12,10,2002),(13,3,2003),(14,14,2004),(15,22,2005),(16,33,2006),(17,7,2007),(18,11,2008),(19,87,2009),(20,99,2010),(21,4,2011),(22,11,2012),(23,1,2013);
/*!40000 ALTER TABLE `likes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `photo_post`
--

DROP TABLE IF EXISTS `photo_post`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `photo_post` (
  `post_id` int(11) NOT NULL AUTO_INCREMENT,
  `description` varchar(200) DEFAULT NULL,
  `creation_date` date NOT NULL,
  `photo_link` varchar(100) NOT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`post_id`),
  KEY `fk_photo_post_user_idx` (`user_id`),
  CONSTRAINT `fk_photo_post_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2014 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `photo_post`
--

LOCK TABLES `photo_post` WRITE;
/*!40000 ALTER TABLE `photo_post` DISABLE KEYS */;
INSERT INTO `photo_post` VALUES (2002,'pashka','2000-05-20','https://pp.userapi.com/c836330/v836330774/259c/5N9GgEHkEYo.jpg',3),(2003,'python','2019-04-05','https://i.ytimg.com/vi/_JDnTsb1GfE/maxresdefault.jpg',1),(2004,'spacexhello','2013-07-08','https://media.gq.com/photos/57eac35d9228bbed3f6f4ee5/master/pass/elon-musk-is-a-rocket.jpg',2),(2005,'Problems','2017-02-03','https://qph.fs.quoracdn.net/main-qimg-5bcd0509a8c32a59e5d362c1ed531f19',4),(2006,'nature nature nature nature nature nature nature nature nature nature nature nature nature nature nature nature nature nature nature nature nature','2018-04-05','https://s1.1zoom.ru/b5050/41/189587-frederika_1680x1050.jpg',5),(2007,'nature2','2017-05-09','https://prosobachku.ru/wp-content/uploads/2017/04/harakter-djek-rasel-terier.jpg',5),(2008,'nature','2017-05-09','https://s1.1zoom.ru/b5050/41/189587-frederika_1680x1050.jpg',6),(2009,'hello elon','2019-01-01','https://media.gq.com/photos/57eac35d9228bbed3f6f4ee5/master/pass/elon-musk-is-a-rocket.jpg',7),(2010,'ruiner hello','2015-05-09','https://acm.bsu.by/courses/89/problems/890/1.png',8),(2011,'=)','2019-05-01','https://i.ytimg.com/vi/_JDnTsb1GfE/maxresdefault.jpg',9),(2012,'nature5','2018-05-09','https://s1.1zoom.ru/b5050/41/189587-frederika_1680x1050.jpg',10),(2013,'cats)))','2019-05-07','https://s1.1zoom.ru/big3/338/Cats_Kittens_Two_Glance_486349.jpg',5);
/*!40000 ALTER TABLE `photo_post` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `user` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `name_UNIQUE` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (6,'Chernykov'),(9,'Gaevski'),(10,'Gydina'),(8,'Koktev'),(5,'Ohremchuk'),(1,'Radchuk'),(3,'Sosnashenko'),(7,'Speredonov'),(4,'Vadim'),(2,'Veremeychik');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-05-07 14:25:46
