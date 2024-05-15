CREATE DATABASE  IF NOT EXISTS `estuprime` /*!40100 DEFAULT CHARACTER SET utf8mb3 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `estuprime`;
-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: estuprime
-- ------------------------------------------------------
-- Server version	8.0.37

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `aprendiz`
--

DROP TABLE IF EXISTS `aprendiz`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `aprendiz` (
  `IDAPRENDIZ` int NOT NULL AUTO_INCREMENT,
  `IDESTUDIANTE` int DEFAULT NULL,
  `IDDOCENTE` int DEFAULT NULL,
  PRIMARY KEY (`IDAPRENDIZ`),
  KEY `FK_APRENDIZ_SEGUIDOPO_DOCENTE` (`IDDOCENTE`),
  KEY `FK_APRENDIZ_SIGUIENDO_ESTUDIAN` (`IDESTUDIANTE`),
  CONSTRAINT `FK_APRENDIZ_SEGUIDOPO_DOCENTE` FOREIGN KEY (`IDDOCENTE`) REFERENCES `docente` (`IDDOCENTE`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FK_APRENDIZ_SIGUIENDO_ESTUDIAN` FOREIGN KEY (`IDESTUDIANTE`) REFERENCES `estudiante` (`IDESTUDIANTE`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `aprendiz`
--

LOCK TABLES `aprendiz` WRITE;
/*!40000 ALTER TABLE `aprendiz` DISABLE KEYS */;
/*!40000 ALTER TABLE `aprendiz` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `archivodecurso`
--

DROP TABLE IF EXISTS `archivodecurso`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `archivodecurso` (
  `IDARCHIVO` int NOT NULL AUTO_INCREMENT,
  `IDCURSO` int DEFAULT NULL,
  `NOMBREARCHIVO` varchar(75) DEFAULT NULL,
  `ARCHIVO` longblob,
  `RUTA` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`IDARCHIVO`),
  KEY `FK_ARCHIVOD_TIENE_ARC_CURSO` (`IDCURSO`),
  CONSTRAINT `FK_ARCHIVOD_TIENE_ARC_CURSO` FOREIGN KEY (`IDCURSO`) REFERENCES `curso` (`IDCURSO`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `archivodecurso`
--

LOCK TABLES `archivodecurso` WRITE;
/*!40000 ALTER TABLE `archivodecurso` DISABLE KEYS */;
/*!40000 ALTER TABLE `archivodecurso` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `curso`
--

DROP TABLE IF EXISTS `curso`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `curso` (
  `IDCURSO` int NOT NULL AUTO_INCREMENT,
  `NOMBRECURSO` varchar(100) DEFAULT NULL,
  `DESCRIPCIONCURSO` varchar(200) DEFAULT NULL,
  `OBJETIVOSCURSO` varchar(100) DEFAULT NULL,
  `FECHACREACION` date DEFAULT NULL,
  `FECHAACTUALIZACION` date DEFAULT NULL,
  `CATEGORIACURSO` varchar(50) DEFAULT NULL,
  `PRECIOCURSO` int DEFAULT NULL,
  `DURACIONCURSO` time DEFAULT NULL,
  `REQUISITOSCURSO` varchar(300) DEFAULT NULL,
  `INSCRITOS` int DEFAULT NULL,
  `BUSQUEDAS` int DEFAULT NULL,
  PRIMARY KEY (`IDCURSO`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `curso`
--

LOCK TABLES `curso` WRITE;
/*!40000 ALTER TABLE `curso` DISABLE KEYS */;
/*!40000 ALTER TABLE `curso` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `docente`
--

DROP TABLE IF EXISTS `docente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `docente` (
  `IDDOCENTE` int NOT NULL AUTO_INCREMENT,
  `NOMBREDOCENTE` varchar(50) DEFAULT NULL,
  `APELLIDODOCENTE` varchar(75) DEFAULT NULL,
  `EMAILDOCENTE` varchar(50) DEFAULT NULL,
  `CONTRASENADOCENTE` varchar(50) DEFAULT NULL,
  `CREDENCIALDOCENTE` varchar(200) DEFAULT NULL,
  `EXPERIENCIA` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`IDDOCENTE`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `docente`
--

LOCK TABLES `docente` WRITE;
/*!40000 ALTER TABLE `docente` DISABLE KEYS */;
/*!40000 ALTER TABLE `docente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `estudiante`
--

DROP TABLE IF EXISTS `estudiante`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `estudiante` (
  `IDESTUDIANTE` int NOT NULL AUTO_INCREMENT,
  `NOMBREESTUDIANTE` varchar(50) DEFAULT NULL,
  `APELLIDOESTUDIANTE` varchar(75) DEFAULT NULL,
  `EMAILESTUDIANTE` varchar(50) DEFAULT NULL,
  `CONTRASENAESTUDIANTE` varchar(50) DEFAULT NULL,
  `PREFERENCIACURSOS` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`IDESTUDIANTE`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `estudiante`
--

LOCK TABLES `estudiante` WRITE;
/*!40000 ALTER TABLE `estudiante` DISABLE KEYS */;
/*!40000 ALTER TABLE `estudiante` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `estudiantedecurso`
--

DROP TABLE IF EXISTS `estudiantedecurso`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `estudiantedecurso` (
  `IDESTDECURSO` int NOT NULL AUTO_INCREMENT,
  `IDCURSO` int DEFAULT NULL,
  `IDESTUDIANTE` int DEFAULT NULL,
  `FECHAINSCRIPCION` date DEFAULT NULL,
  `CURSOFAVORITO` tinyint(1) DEFAULT NULL,
  `CALIFICACIONFINAL` int DEFAULT NULL,
  `CALIFTAREASCURSO` int DEFAULT NULL,
  `CALIFEVALUACIONES` int DEFAULT NULL,
  PRIMARY KEY (`IDESTDECURSO`),
  KEY `FK_ESTUDIAN_CURSANDO_ESTUDIAN` (`IDESTUDIANTE`),
  KEY `FK_ESTUDIAN_TIENE_APR_CURSO` (`IDCURSO`),
  CONSTRAINT `FK_ESTUDIAN_CURSANDO_ESTUDIAN` FOREIGN KEY (`IDESTUDIANTE`) REFERENCES `estudiante` (`IDESTUDIANTE`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FK_ESTUDIAN_TIENE_APR_CURSO` FOREIGN KEY (`IDCURSO`) REFERENCES `curso` (`IDCURSO`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `estudiantedecurso`
--

LOCK TABLES `estudiantedecurso` WRITE;
/*!40000 ALTER TABLE `estudiantedecurso` DISABLE KEYS */;
/*!40000 ALTER TABLE `estudiantedecurso` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `maestro`
--

DROP TABLE IF EXISTS `maestro`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `maestro` (
  `IDMAESTRO` int NOT NULL AUTO_INCREMENT,
  `IDDOCENTE` int DEFAULT NULL,
  `IDCURSO` int DEFAULT NULL,
  `FECHAYHORA` datetime DEFAULT NULL,
  PRIMARY KEY (`IDMAESTRO`),
  KEY `FK_MAESTRO_ENSENANDO_DOCENTE` (`IDDOCENTE`),
  KEY `FK_MAESTRO_TIENE_MAE_CURSO` (`IDCURSO`),
  CONSTRAINT `FK_MAESTRO_ENSENANDO_DOCENTE` FOREIGN KEY (`IDDOCENTE`) REFERENCES `docente` (`IDDOCENTE`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FK_MAESTRO_TIENE_MAE_CURSO` FOREIGN KEY (`IDCURSO`) REFERENCES `curso` (`IDCURSO`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `maestro`
--

LOCK TABLES `maestro` WRITE;
/*!40000 ALTER TABLE `maestro` DISABLE KEYS */;
/*!40000 ALTER TABLE `maestro` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'estuprime'
--

--
-- Dumping routines for database 'estuprime'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-05-14 21:59:33
