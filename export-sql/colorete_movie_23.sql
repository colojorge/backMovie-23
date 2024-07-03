-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: mysql-colorete.alwaysdata.net
-- Generation Time: Jun 28, 2024 at 12:04 AM
-- Server version: 10.6.17-MariaDB
-- PHP Version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `colorete_movie_23`
--

-- --------------------------------------------------------

--
-- Table structure for table `actores`
--

CREATE TABLE `actores` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `fecha_nacimiento` date DEFAULT NULL,
  `nacionalidad` varchar(100) DEFAULT NULL,
  `pelicula_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `actores`
--

INSERT INTO `actores` (`id`, `nombre`, `fecha_nacimiento`, `nacionalidad`, `pelicula_id`) VALUES
(38, 'Linda Blair', '1959-01-22', 'EE.UU.', 3),
(39, 'Jamie Lee Curtis', '1958-11-22', 'EE.UU.', 4),
(40, 'Bill Skarsgård', '1990-08-09', 'Suecia', 5),
(41, 'Marlon Brando', '1924-04-03', 'EE.UU.', 6),
(42, 'Tom Hanks', '1956-07-09', 'EE.UU.', 7),
(43, 'Liam Neeson', '1952-06-07', 'Reino Unido', 8),
(44, 'Jonah Hill', '1983-12-20', 'EE.UU.', 9),
(45, 'Bradley Cooper', '1975-01-05', 'EE.UU.', 10),
(46, 'Bill Murray', '1950-09-21', 'EE.UU.', 11),
(47, 'Bruce Willis', '1955-03-19', 'EE.UU.', 12),
(48, 'Tom Hardy', '1977-09-15', 'Reino Unido', 13),
(49, 'Keanu Reeves', '1964-09-02', 'Canadá', 14);

-- --------------------------------------------------------

--
-- Table structure for table `comentarios`
--

CREATE TABLE `comentarios` (
  `id` int(11) NOT NULL,
  `comentario` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `comentarios`
--

INSERT INTO `comentarios` (`id`, `comentario`) VALUES
(1, 'Es una aplicación impresionante.'),
(2, 'Me encantó la aplicación.'),
(3, 'El profe explica muy bien.'),
(4, 'Una plataforma maestra del cine moderno.'),
(5, 'No recomendaría esta aplicación.'),
(6, 'La plataforma es un poco lenta.'),
(7, 'Clásicos que siempre disfruto.'),
(8, 'El profe tiene preparada las clases, 10 puntos.'),
(9, 'Disfruto mucho las películas de esta página.'),
(11, 'Vale la pena usar esta aplicación');

-- --------------------------------------------------------

--
-- Table structure for table `generos`
--

CREATE TABLE `generos` (
  `id` int(11) NOT NULL,
  `nombre_genero` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `generos`
--

INSERT INTO `generos` (`id`, `nombre_genero`) VALUES
(1, 'Terror'),
(2, 'Drama'),
(3, 'Comedia'),
(4, 'Acción'),
(5, 'Suspenso'),
(6, 'Ciencia Ficción'),
(7, 'Aventura'),
(8, 'Documentales');

-- --------------------------------------------------------

--
-- Table structure for table `peliculas`
--

CREATE TABLE `peliculas` (
  `id` int(11) NOT NULL,
  `titulo` varchar(255) NOT NULL,
  `año_estreno` year(4) NOT NULL,
  `genero_id` int(11) DEFAULT NULL,
  `director` varchar(255) DEFAULT NULL,
  `calificacion` decimal(2,1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `peliculas`
--

INSERT INTO `peliculas` (`id`, `titulo`, `año_estreno`, `genero_id`, `director`, `calificacion`) VALUES
(3, 'El Exorcista', '1973', 1, 'William Friedkin', 8.0),
(4, 'La noche de Halloween', '1978', 1, 'John Carpenter', 7.8),
(5, 'IT', '2017', 1, 'Andy Muschietti', 7.4),
(6, 'El Padrino', '1972', 2, 'Francis Ford Coppola', 9.2),
(7, 'Forrest Gump', '1994', 2, 'Robert Zemeckis', 8.8),
(8, 'La lista de Schindler', '1993', 2, 'Steven Spielberg', 8.9),
(9, 'Superbad', '2007', 3, 'Greg Mottola', 7.6),
(10, 'Hangover', '2009', 3, 'Todd Phillips', 7.7),
(11, 'Groundhog Day', '1993', 3, 'Harold Ramis', 8.0),
(12, 'Die Hard', '1988', 4, 'John McTiernan', 8.2),
(13, 'Mad Max: Fury Road', '2015', 4, 'George Miller', 8.1),
(14, 'John Wick', '2014', 4, 'Chad Stahelski', 7.4);

-- --------------------------------------------------------

--
-- Table structure for table `preferencias`
--

CREATE TABLE `preferencias` (
  `preferencia_id` int(11) NOT NULL,
  `id_pelicula` int(11) DEFAULT NULL,
  `id_usuario` int(11) DEFAULT NULL,
  `comentario` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombre_usuario` varchar(50) NOT NULL,
  `correo_electronico` varchar(100) NOT NULL,
  `contraseña` varchar(255) NOT NULL,
  `fecha_registro` date DEFAULT NULL,
  `pelicula_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre_usuario`, `correo_electronico`, `contraseña`, `fecha_registro`, `pelicula_id`) VALUES
(25, 'juan.perez', 'juan.perez@example.com', 'contraseña123', '2023-01-01', 13),
(26, 'maria.gomez', 'maria.gomez@example.com', 'contraseña123', '2023-01-02', 13),
(27, 'pedro.lopez', 'pedro.lopez@example.com', 'contraseña123', '2023-01-03', 3),
(28, 'ana.martinez', 'ana.martinez@example.com', 'contraseña123', '2023-01-04', 4),
(29, 'carlos.sanchez', 'carlos.sanchez@example.com', 'contraseña123', '2023-01-05', 5),
(30, 'lucia.diaz', 'lucia.diaz@example.com', 'contraseña123', '2023-01-06', 6),
(31, 'david.fernandez', 'david.fernandez@example.com', 'contraseña123', '2023-01-07', 7),
(32, 'julia.ramirez', 'julia.ramirez@example.com', 'contraseña123', '2023-01-08', 8),
(33, 'francisco.torres', 'francisco.torres@example.com', 'contraseña123', '2023-01-09', 9),
(34, 'paula.ruiz', 'paula.ruiz@example.com', 'contraseña123', '2023-01-10', 10),
(35, 'jorge.moreno', 'jorge.moreno@example.com', 'contraseña123', '2023-01-11', 11),
(36, 'laura.mendez', 'laura.mendez@example.com', 'contraseña123', '2023-01-12', 12);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `actores`
--
ALTER TABLE `actores`
  ADD PRIMARY KEY (`id`),
  ADD KEY `pelicula_id` (`pelicula_id`);

--
-- Indexes for table `comentarios`
--
ALTER TABLE `comentarios`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `generos`
--
ALTER TABLE `generos`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `peliculas`
--
ALTER TABLE `peliculas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `genero_id` (`genero_id`);

--
-- Indexes for table `preferencias`
--
ALTER TABLE `preferencias`
  ADD PRIMARY KEY (`preferencia_id`),
  ADD KEY `id_pelicula` (`id_pelicula`),
  ADD KEY `id_usuario` (`id_usuario`);

--
-- Indexes for table `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `pelicula_id` (`pelicula_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `actores`
--
ALTER TABLE `actores`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;

--
-- AUTO_INCREMENT for table `comentarios`
--
ALTER TABLE `comentarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `generos`
--
ALTER TABLE `generos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `peliculas`
--
ALTER TABLE `peliculas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `preferencias`
--
ALTER TABLE `preferencias`
  MODIFY `preferencia_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `actores`
--
ALTER TABLE `actores`
  ADD CONSTRAINT `actores_ibfk_1` FOREIGN KEY (`pelicula_id`) REFERENCES `peliculas` (`id`);

--
-- Constraints for table `peliculas`
--
ALTER TABLE `peliculas`
  ADD CONSTRAINT `peliculas_ibfk_1` FOREIGN KEY (`genero_id`) REFERENCES `generos` (`id`);

--
-- Constraints for table `preferencias`
--
ALTER TABLE `preferencias`
  ADD CONSTRAINT `preferencias_ibfk_1` FOREIGN KEY (`id_pelicula`) REFERENCES `peliculas` (`id`),
  ADD CONSTRAINT `preferencias_ibfk_2` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id`);

--
-- Constraints for table `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `usuarios_ibfk_1` FOREIGN KEY (`pelicula_id`) REFERENCES `peliculas` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
