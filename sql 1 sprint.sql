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
AUTO_INCREMENT = 14
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
AUTO_INCREMENT = 6
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `estuprime`.`curso`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `estuprime`.`curso` (
  `idcurso` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(255) NOT NULL,
  `descripcion` VARCHAR(255) NOT NULL,
  `elemento1` BLOB NULL,
  `elemento2` BLOB NULL,
  `elemento3` BLOB NULL,
  `elemento4` BLOB NULL,
  `elemento5` BLOB NULL,
  `elemento6` BLOB NULL,
  `elemento7` BLOB NULL,
  `elemento8` BLOB NULL,
  `elemento9` BLOB NULL,
  `elemento10` BLOB NULL,
  `elemento11` BLOB NULL,
  `creacion` DATE NULL,
  `docente_id` INT(11) NOT NULL,
  PRIMARY KEY (`idcurso`),
  INDEX `fk_curso_docente_idx` (`docente_id` ASC) ,
  CONSTRAINT `fk_curso_docente`
    FOREIGN KEY (`docente_id`)
    REFERENCES `estuprime`.`docente` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
