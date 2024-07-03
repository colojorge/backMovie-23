-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 03-07-2024 a las 23:41:37
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `cac_movies_db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `actores`
--

CREATE TABLE `actores` (
  `id` int(11) NOT NULL,
  `nombre_actor` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `actores`
--

INSERT INTO `actores` (`id`, `nombre_actor`) VALUES
(1, 'Ellen Burstyn'),
(2, 'Linda Blair'),
(3, 'Anthony Perkins'),
(4, 'Janet Leigh'),
(5, 'Anthony Hopkins'),
(6, 'Jodie Foster'),
(7, 'Patrick Wilson'),
(8, 'Vera Farmiga'),
(9, 'Martin Henderson'),
(10, 'Naomi Watts'),
(11, 'Isabelle Fuhrman'),
(12, 'Peter Sarsgaard'),
(13, 'Cary Elwes'),
(14, 'Danny Glover'),
(15, 'Annabelle Wallis'),
(16, 'Ward Horton'),
(17, 'Bruce Willis'),
(18, 'Haley Joel Osment'),
(19, 'Gary Oldman'),
(20, 'Winona Ryder'),
(21, 'Kurt Russell'),
(22, 'Wilford Brimley'),
(23, 'Max Schreck'),
(24, 'Gustav von Wangenheim'),
(25, 'Sissy Spacek'),
(26, 'Piper Laurie'),
(27, 'Kate Winslet'),
(28, 'Leonardo DiCaprio'),
(29, 'Al Pacino'),
(30, 'Marlon Brando'),
(31, 'John Travolta'),
(32, 'Samuel L. Jackson'),
(33, 'Ben Kingsley'),
(34, 'Liam Neeson'),
(35, 'Morgan Freeman'),
(36, 'Tim Robbins'),
(37, 'Robert De Niro'),
(38, 'Tom Hanks'),
(39, 'Brad Pitt'),
(40, 'Edward Norton'),
(41, 'Adrien Brody'),
(42, 'Thomas Kretschmann'),
(43, 'Nicoletta Braschi'),
(44, 'Roberto Benigni'),
(45, 'Jeremy Irons'),
(46, 'Matthew Broderick'),
(47, 'François Cluzet'),
(48, 'Omar Sy'),
(49, 'Ben Stiller'),
(50, 'Cameron Diaz'),
(51, 'Jonah Hill'),
(52, 'Michael Cera'),
(53, 'Bradley Cooper'),
(54, 'Zach Galifianakis'),
(55, 'Anna Faris'),
(56, 'Regina Hall'),
(57, 'Chris Evans'),
(58, 'Robert Downey Jr.'),
(59, 'Idina Menzel'),
(60, 'Kristen Bell'),
(61, 'John Leguizamo'),
(62, 'Bruce Willis'),
(63, 'Paul Walker'),
(64, 'Vin Diesel'),
(65, 'Chris Pratt'),
(66, 'Zoe Saldana'),
(67, 'Keanu Reeves'),
(68, 'Laurence Fishburne'),
(69, 'Tim Allen'),
(70, 'Tom Hanks'),
(71, 'Albert Brooks'),
(72, 'Ellen DeGeneres'),
(73, 'Eddie Murphy'),
(74, 'Mike Myers'),
(75, 'Craig T. Nelson'),
(76, 'Holly Hunter'),
(77, 'Ed Asner'),
(78, 'Christopher Plummer'),
(79, 'Idina Menzel'),
(80, 'Jonathan Groff'),
(81, 'Josh Gad'),
(82, 'Tom Holland'),
(83, 'Chris Pratt'),
(84, 'Elizabeth Olsen'),
(85, 'Zoe Saldana'),
(86, 'Scarlett Johansson'),
(87, 'Samuel L. Jackson'),
(88, 'Jeremy Renner'),
(89, 'Mark Ruffalo'),
(90, 'Chris Hemsworth'),
(91, 'Chris Evans'),
(92, 'Sebastian Stan'),
(93, 'Chadwick Boseman'),
(94, 'Benedict Cumberbatch'),
(95, 'Tom Holland'),
(96, 'Robert Downey Jr.'),
(97, 'Chris Pratt'),
(98, 'Zoe Saldana'),
(99, 'Josh Brolin'),
(100, 'Tom Hiddleston'),
(102, 'Nuevo Actor'),
(103, 'Emma Stone'),
(104, 'Robert De Nipo'),
(105, 'Carrie-Anne Moss'),
(106, 'coco'),
(107, 'diego');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `actores_peliculas`
--

CREATE TABLE `actores_peliculas` (
  `id` int(11) NOT NULL,
  `actor_id` int(11) NOT NULL,
  `pelicula_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `actores_peliculas`
--

INSERT INTO `actores_peliculas` (`id`, `actor_id`, `pelicula_id`) VALUES
(5, 5, 3),
(6, 6, 3),
(7, 7, 4),
(8, 8, 4),
(9, 9, 5),
(10, 10, 5),
(11, 11, 6),
(12, 12, 6),
(13, 13, 7),
(14, 14, 7),
(15, 15, 8),
(16, 16, 8),
(17, 17, 10),
(18, 18, 10),
(19, 19, 11),
(20, 20, 11),
(21, 21, 12),
(22, 22, 12),
(23, 23, 13),
(24, 24, 13),
(25, 25, 14),
(26, 26, 14),
(27, 27, 18),
(28, 28, 18),
(29, 29, 19),
(30, 30, 19),
(33, 33, 21),
(34, 34, 21),
(35, 35, 22),
(36, 36, 22),
(38, 38, 17),
(39, 39, 24),
(40, 40, 24),
(41, 41, 25),
(42, 42, 25),
(43, 43, 26),
(44, 44, 26),
(45, 45, 27),
(46, 46, 27),
(47, 47, 28),
(48, 48, 28),
(49, 49, 29),
(50, 50, 29),
(51, 51, 30),
(52, 52, 30),
(53, 53, 31),
(54, 54, 31),
(55, 55, 32),
(56, 56, 32),
(57, 57, 37),
(58, 58, 37),
(59, 59, 48),
(60, 60, 48),
(61, 62, 39),
(62, 63, 40),
(63, 64, 40),
(64, 65, 41),
(65, 66, 41),
(66, 67, 42),
(67, 68, 42),
(68, 69, 43),
(69, 70, 43),
(70, 71, 44),
(71, 72, 44),
(72, 73, 45),
(73, 74, 45),
(74, 75, 46),
(75, 76, 46),
(76, 77, 47),
(77, 78, 47),
(129, 31, 273),
(130, 32, 273),
(150, 1, 1),
(151, 2, 1),
(158, 67, 75),
(159, 105, 75),
(164, 106, 279),
(165, 107, 279),
(166, 106, 74),
(167, 107, 74);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comentarios`
--

CREATE TABLE `comentarios` (
  `id` int(11) NOT NULL,
  `usuario_id` int(11) DEFAULT NULL,
  `pelicula_id` int(11) DEFAULT NULL,
  `comentario` text NOT NULL,
  `fecha_comentario` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `comentarios`
--

INSERT INTO `comentarios` (`id`, `usuario_id`, `pelicula_id`, `comentario`, `fecha_comentario`) VALUES
(1, 1, 10, 'Esta es una excelente película.', '2024-06-30 21:41:09'),
(2, 1, 10, 'Esta es una excelente película.', '2024-06-30 21:47:14'),
(3, 1, 10, 'Esta es una excelente película.', '2024-06-30 21:47:56'),
(4, 14, 10, 'muy buena peli!!', '2024-06-30 21:52:26'),
(6, 14, 10, 'muy buena peli!!', '2024-06-30 22:05:11'),
(7, 14, 75, 'la mejor de todas', '2024-06-30 22:11:29'),
(8, 2, 273, 'Esta es una excelente película.', '2024-07-03 00:16:03'),
(9, 14, 273, 'muy buena peli', '2024-07-03 00:16:28');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `generos`
--

CREATE TABLE `generos` (
  `id` int(11) NOT NULL,
  `nombre_genero` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `generos`
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
-- Estructura de tabla para la tabla `peliculas`
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
-- Volcado de datos para la tabla `peliculas`
--

INSERT INTO `peliculas` (`id`, `titulo`, `año_estreno`, `genero_id`, `director`, `calificacion`) VALUES
(1, 'El Exorcista', '1973', 1, 'William Friedkin', 8.0),
(3, 'El Silencio de los Inocentes', '1991', 1, 'Jonathan Demme', 8.6),
(4, 'El Conjuro', '2013', 1, 'James Wan', 7.5),
(5, 'El Aro', '2002', 1, 'Gore Verbinski', 7.1),
(6, 'La Huérfana', '2009', 1, 'Jaume Collet-Serra', 7.0),
(7, 'Saw', '2004', 1, 'James Wan', 7.6),
(8, 'Anabelle', '2014', 1, 'John R. Leonetti', 5.4),
(9, 'El Juego del Miedo', '2004', 1, 'James Wan', 7.6),
(10, 'El Sexto Sentido', '1999', 1, 'M. Night Shyamalan', 8.1),
(11, 'Drácula', '1992', 1, 'Francis Ford Coppola', 7.4),
(12, 'La Cosa', '1982', 1, 'John Carpenter', 8.1),
(13, 'Nosferatu', '1922', 1, 'F.W. Murnau', 7.9),
(14, 'Carrie', '1976', 1, 'Brian De Palma', 7.4),
(15, 'The Ring', '2002', 1, 'Gore Verbinski', 7.1),
(16, 'El Proyecto de la Bruja de Blair', '1999', 1, 'Daniel Myrick, Eduardo Sánchez', 6.5),
(17, 'Forrest Gump', '1994', 2, 'Robert Zemeckis', 8.8),
(18, 'Titanic', '1997', 2, 'James Cameron', 7.8),
(19, 'El Padrino', '1972', 2, 'Francis Ford Coppola', 9.2),
(21, 'La Lista de Schindler', '1993', 2, 'Steven Spielberg', 8.9),
(22, 'Cadena Perpetua', '1994', 2, 'Frank Darabont', 9.3),
(23, 'Ciudad de Dios', '2002', 2, 'Fernando Meirelles', 8.6),
(24, 'El Club de la Pelea', '1999', 2, 'David Fincher', 8.8),
(25, 'El Pianista', '2002', 2, 'Roman Polanski', 8.5),
(26, 'La Vida es Bella', '1997', 2, 'Roberto Benigni', 8.6),
(27, 'El Rey León', '1994', 2, 'Roger Allers, Rob Minkoff', 8.5),
(28, 'Intocable', '2011', 3, 'Olivier Nakache, Éric Toledano', 8.5),
(29, 'Loco por Mary', '1998', 3, 'Bobby Farrelly, Peter Farrelly', 7.1),
(30, 'Superbad', '2007', 3, 'Greg Mottola', 7.6),
(31, '¿Qué Pasó Ayer?', '2009', 3, 'Todd Phillips', 7.7),
(32, 'Scary Movie', '2000', 3, 'Keenen Ivory Wayans', 6.2),
(33, 'Scary Movie 2', '2001', 3, 'Keenen Ivory Wayans', 5.3),
(34, 'Scary Movie 3', '2003', 3, 'David Zucker', 5.5),
(35, 'Scary Movie 4', '2006', 3, 'David Zucker', 5.1),
(36, 'Scary Movie 5', '2013', 3, 'Malcolm D. Lee', 3.5),
(37, 'Los Vengadores', '2012', 4, 'Joss Whedon', 8.0),
(38, 'Misión Imposible', '1996', 4, 'Brian De Palma', 7.1),
(39, 'Duro de Matar', '1988', 4, 'John McTiernan', 8.2),
(40, 'Rápido y Furioso', '2001', 4, 'Rob Cohen', 6.8),
(41, 'Guardianes de la Galaxia', '2014', 6, 'James Gunn', 8.0),
(42, 'Matrix', '1999', 6, 'Lana Wachowski, Lilly Wachowski', 8.7),
(43, 'Toy Story', '1995', 3, 'John Lasseter', 8.3),
(44, 'Buscando a Nemo', '2003', 3, 'Andrew Stanton', 8.1),
(45, 'Shrek', '2001', 3, 'Andrew Adamson, Vicky Jenson', 7.8),
(46, 'Los Increíbles', '2004', 3, 'Brad Bird', 8.0),
(47, 'Up', '2009', 3, 'Pete Docter', 8.2),
(48, 'Frozen', '2013', 3, 'Chris Buck, Jennifer Lee', 7.4),
(49, 'La Era de Hielo', '2002', 3, 'Chris Wedge, Carlos Saldanha', 7.5),
(50, 'Monster Inc.', '2001', 3, 'Pete Docter, David Silverman, Lee Unkrich', 8.0),
(51, 'Moana', '2016', 3, 'Ron Clements, John Musker', 7.6),
(52, 'Zootopia', '2016', 3, 'Byron Howard, Rich Moore', 8.0),
(53, 'Cars', '2006', 3, 'John Lasseter, Joe Ranft', 7.1),
(54, 'Coco', '2017', 3, 'Lee Unkrich, Adrian Molina', 8.4),
(55, 'Toy Story 4', '2019', 3, 'Josh Cooley', 7.8),
(56, 'La Sirenita', '1989', 3, 'Ron Clements, John Musker', 7.6),
(57, 'Ratatouille', '2007', 3, 'Brad Bird', 8.0),
(58, 'Aladdin', '1992', 3, 'Ron Clements, John Musker', 8.0),
(59, 'La Bella y la Bestia', '1991', 3, 'Gary Trousdale, Kirk Wise', 8.0),
(60, 'Harry Potter y la Piedra Filosofal', '2001', 6, 'Chris Columbus', 7.6),
(61, 'El Señor de los Anillos: La Comunidad del Anillo', '2001', 7, 'Peter Jackson', 8.8),
(62, 'Star Wars: Episodio IV - Una Nueva Esperanza', '1977', 6, 'George Lucas', 8.6),
(63, 'Jurassic Park', '1993', 6, 'Steven Spielberg', 8.1),
(64, 'El Quinto Elemento', '1997', 6, 'Luc Besson', 7.7),
(65, 'Avatar', '2009', 6, 'James Cameron', 7.8),
(66, 'Guardianes de la Galaxia Vol. 2', '2017', 6, 'James Gunn', 7.6),
(67, 'Mad Max: Furia en el Camino', '2015', 6, 'George Miller', 8.1),
(68, 'Inception', '2010', 6, 'Christopher Nolan', 8.8),
(69, 'Interstellar', '2014', 6, 'Christopher Nolan', 8.6),
(70, 'Dunkerque', '2017', 6, 'Christopher Nolan', 7.9),
(71, 'Blade Runner', '1982', 6, 'Ridley Scott', 8.1),
(72, 'Star Wars: Episodio V - El Imperio Contraataca', '1980', 6, 'Irvin Kershner', 8.7),
(73, 'Star Wars: Episodio VI - El Regreso del Jedi', '1983', 6, 'Richard Marquand', 8.3),
(74, 'Matrix Reloaded', '2003', 6, 'Lana Wachowski, Lilly Wachowski', 7.2),
(75, 'Matrix Revolutions', '2003', 6, 'Lana Wachowski, Lilly Wachowski', 6.8),
(273, 'Pulp Fiction', '1994', 2, 'Quentin Tarantino', 8.9),
(279, 'la cenicienta', '1994', 2, 'Quentin Tarantino', 8.9);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombre_usuario` varchar(50) NOT NULL,
  `correo_electronico` varchar(100) NOT NULL,
  `contraseña` varchar(255) NOT NULL,
  `fecha_registro` date DEFAULT curdate()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre_usuario`, `correo_electronico`, `contraseña`, `fecha_registro`) VALUES
(1, 'Mica', 'mica@example.com', '$2a$10$UHnN8n3zQSqeN/5rRowcv.k01vfFGYz/aIWoeX43mjKZs.N/vxGdK', '2024-06-30'),
(2, 'Eric', 'eric@example.com', '$2a$10$6mqvTWkw7vEA5U2rIUxxf.dvQp3z8.Ho0wuLSVXkeuAsh3UE6Lwji', '2024-06-30'),
(14, 'plkz', 'plkz@example.com', '$2a$10$yg2RV4S4PXAyzHuFKpkuDOxJBj1M71XiFVEmvH3VvjQhkavXjdO.6', '2024-06-30');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `actores`
--
ALTER TABLE `actores`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `actores_peliculas`
--
ALTER TABLE `actores_peliculas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_actor_id` (`actor_id`),
  ADD KEY `idx_pelicula_id` (`pelicula_id`);

--
-- Indices de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_comentario_usuario` (`usuario_id`),
  ADD KEY `idx_comentario_pelicula` (`pelicula_id`);

--
-- Indices de la tabla `generos`
--
ALTER TABLE `generos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `peliculas`
--
ALTER TABLE `peliculas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_pelicula_genero` (`genero_id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `correo_electronico` (`correo_electronico`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `actores`
--
ALTER TABLE `actores`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=108;

--
-- AUTO_INCREMENT de la tabla `actores_peliculas`
--
ALTER TABLE `actores_peliculas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=168;

--
-- AUTO_INCREMENT de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `generos`
--
ALTER TABLE `generos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `peliculas`
--
ALTER TABLE `peliculas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=280;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `actores_peliculas`
--
ALTER TABLE `actores_peliculas`
  ADD CONSTRAINT `actores_peliculas_ibfk_1` FOREIGN KEY (`actor_id`) REFERENCES `actores` (`id`),
  ADD CONSTRAINT `actores_peliculas_ibfk_2` FOREIGN KEY (`pelicula_id`) REFERENCES `peliculas` (`id`);

--
-- Filtros para la tabla `comentarios`
--
ALTER TABLE `comentarios`
  ADD CONSTRAINT `comentarios_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`),
  ADD CONSTRAINT `comentarios_ibfk_2` FOREIGN KEY (`pelicula_id`) REFERENCES `peliculas` (`id`);

--
-- Filtros para la tabla `peliculas`
--
ALTER TABLE `peliculas`
  ADD CONSTRAINT `peliculas_ibfk_1` FOREIGN KEY (`genero_id`) REFERENCES `generos` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
