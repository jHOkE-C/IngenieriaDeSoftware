-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema estuprime
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema estuprime
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `estuprime` DEFAULT CHARACTER SET utf8 ;
USE `estuprime` ;

-- -----------------------------------------------------
-- Table `estuprime`.`docente`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `estuprime`.`docente` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `firstname` VARCHAR(45) NOT NULL,
  `lastname` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 30
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `estuprime`.`estudiante`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `estuprime`.`estudiante` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `firstname` VARCHAR(45) NOT NULL,
  `lastname` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 23
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `estuprime`.`curso`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `estuprime`.`curso` (
  `idCurso` INT NOT NULL AUTO_INCREMENT,
  `titulo` VARCHAR(45) NOT NULL,
  `descripcion` VARCHAR(45) NOT NULL,
  `precio` int not null,
  `ruta` varchar(100) not null,
  `docente_id` INT(11) NOT NULL,
  
  PRIMARY KEY (`idCurso`, `docente_id`),
  INDEX `fk_curso_docente_idx` (`docente_id` ASC) ,
  CONSTRAINT `fk_curso_docente`
    FOREIGN KEY (`docente_id`)
    REFERENCES `estuprime`.`docente` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `estuprime`.`archivo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `estuprime`.`archivo` (
  `idArchivo` INT NOT NULL,
  `ruta` VARCHAR(255) NOT NULL,
  `curso_idCurso` INT NOT NULL,
  `curso_docente_id` INT(11) NOT NULL,
  PRIMARY KEY (`idArchivo`),
  INDEX `fk_archivo_curso1_idx` (`curso_idCurso` ASC, `curso_docente_id` ASC) ,
  CONSTRAINT `fk_archivo_curso1`
    FOREIGN KEY (`curso_idCurso` , `curso_docente_id`)
    REFERENCES `estuprime`.`curso` (`idCurso` , `docente_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

