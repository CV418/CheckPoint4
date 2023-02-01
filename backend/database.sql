CREATE TABLE `checkpoint4`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `lastName` VARCHAR(45) NOT NULL,
  `firstName` VARCHAR(45) NOT NULL,
  `adress` VARCHAR(255) NOT NULL,
  `postalCode` INT NOT NULL,
  `city` VARCHAR(45) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `hashedPassword` VARCHAR(255) NOT NULL,
  `profilPic` VARCHAR(255) NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE);

CREATE TABLE `checkpoint4`.`bien` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `idUser` INT NOT NULL,
  `title` VARCHAR(255) NOT NULL,
  `type` VARCHAR(255) NOT NULL,
  `piece` INT NOT NULL,
  `exterieur` VARCHAR(45) NOT NULL,
  `surface` INT NOT NULL,
  `prix` INT NOT NULL,
  `ville` VARCHAR(255) NOT NULL,
  `description` TEXT NOT NULL,
  `venteLocation` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE);
