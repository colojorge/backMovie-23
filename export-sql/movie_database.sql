-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 29-06-2024 a las 22:19:01
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
-- Base de datos: `movie_database`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `actores`
--

CREATE TABLE `actores` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `fecha_nacimiento` date DEFAULT NULL,
  `nacionalidad` varchar(100) DEFAULT NULL,
  `pelicula_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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
(3, 'Psicosis', '1960', 1, 'Alfred Hitchcock', 8.5),
(4, 'El Silencio de los Inocentes', '1991', 1, 'Jonathan Demme', 8.6),
(5, 'El Conjuro', '2013', 1, 'James Wan', 7.5),
(7, 'El Aro', '2002', 1, 'Gore Verbinski', 7.1),
(8, 'La Huérfana', '2009', 1, 'Jaume Collet-Serra', 7.0),
(9, 'Saw', '2004', 1, 'James Wan', 7.6),
(10, 'Anabelle', '2014', 1, 'John R. Leonetti', 5.4),
(11, 'El Juego del Miedo', '2004', 1, 'James Wan', 7.6),
(12, 'El Sexto Sentido', '1999', 1, 'M. Night Shyamalan', 8.1),
(13, 'Drácula', '1992', 1, 'Francis Ford Coppola', 7.4),
(14, 'La Cosa', '1982', 1, 'John Carpenter', 8.1),
(15, 'Nosferatu', '1922', 1, 'F.W. Murnau', 7.9),
(16, 'Carrie', '1976', 1, 'Brian De Palma', 7.4),
(17, 'The Ring', '2002', 1, 'Gore Verbinski', 7.1),
(18, 'El Proyecto de la Bruja de Blair', '1999', 1, 'Daniel Myrick, Eduardo Sánchez', 6.5),
(20, 'Forrest Gump', '1994', 2, 'Robert Zemeckis', 8.8),
(21, 'Titanic', '1997', 2, 'James Cameron', 7.8),
(22, 'El Padrino', '1972', 2, 'Francis Ford Coppola', 9.2),
(23, 'Pulp Fiction', '1994', 2, 'Quentin Tarantino', 8.9),
(24, 'La Lista de Schindler', '1993', 2, 'Steven Spielberg', 8.9),
(25, 'Cadena Perpetua', '1994', 2, 'Frank Darabont', 9.3),
(26, 'Ciudad de Dios', '2002', 2, 'Fernando Meirelles', 8.6),
(27, 'El Club de la Pelea', '1999', 2, 'David Fincher', 8.8),
(28, 'El Pianista', '2002', 2, 'Roman Polanski', 8.5),
(29, 'La Vida es Bella', '1997', 2, 'Roberto Benigni', 8.6),
(30, 'El Rey León', '1994', 2, 'Roger Allers, Rob Minkoff', 8.5),
(32, 'Intocable', '2011', 3, 'Olivier Nakache, Éric Toledano', 8.5),
(33, 'Loco por Mary', '1998', 3, 'Bobby Farrelly, Peter Farrelly', 7.1),
(34, 'Superbad', '2007', 3, 'Greg Mottola', 7.6),
(35, '¿Qué Pasó Ayer?', '2009', 3, 'Todd Phillips', 7.7),
(36, 'Scary Movie', '2000', 3, 'Keenen Ivory Wayans', 6.2),
(37, 'Scary Movie 2', '2001', 3, 'Keenen Ivory Wayans', 5.3),
(38, 'Scary Movie 3', '2003', 3, 'David Zucker', 5.5),
(39, 'Scary Movie 4', '2006', 3, 'David Zucker', 5.1),
(40, 'Scary Movie 5', '2013', 3, 'Malcolm D. Lee', 3.5),
(41, 'Los Vengadores', '2012', 4, 'Joss Whedon', 8.0),
(42, 'Misión Imposible', '1996', 4, 'Brian De Palma', 7.1),
(43, 'Duro de Matar', '1988', 4, 'John McTiernan', 8.2),
(45, 'Rápido y Furioso', '2001', 4, 'Rob Cohen', 6.8),
(46, 'Guardianes de la Galaxia', '2014', 6, 'James Gunn', 8.0),
(48, 'Matrix', '1999', 6, 'Lana Wachowski, Lilly Wachowski', 8.7),
(51, 'Toy Story', '1995', 3, 'John Lasseter', 8.3),
(52, 'Buscando a Nemo', '2003', 3, 'Andrew Stanton', 8.1),
(53, 'Shrek', '2001', 3, 'Andrew Adamson, Vicky Jenson', 7.8),
(54, 'Los Increíbles', '2004', 3, 'Brad Bird', 8.0),
(55, 'Up', '2009', 3, 'Pete Docter', 8.2),
(56, 'Frozen', '2013', 3, 'Chris Buck, Jennifer Lee', 7.4),
(57, 'La Era de Hielo', '2002', 3, 'Chris Wedge, Carlos Saldanha', 7.5),
(58, 'Monster Inc.', '2001', 3, 'Pete Docter, David Silverman, Lee Unkrich', 8.0),
(59, 'Moana', '2016', 3, 'Ron Clements, John Musker', 7.6),
(60, 'Zootopia', '2016', 3, 'Byron Howard, Rich Moore', 8.0),
(62, 'Cars', '2006', 3, 'John Lasseter, Joe Ranft', 7.1),
(63, 'Coco', '2017', 3, 'Lee Unkrich, Adrian Molina', 8.4),
(64, 'Toy Story 4', '2019', 3, 'Josh Cooley', 7.8),
(65, 'La Sirenita', '1989', 3, 'Ron Clements, John Musker', 7.6),
(66, 'Ratatouille', '2007', 3, 'Brad Bird', 8.0),
(67, 'Aladdin', '1992', 3, 'Ron Clements, John Musker', 8.0),
(69, 'La Bella y la Bestia', '1991', 3, 'Gary Trousdale, Kirk Wise', 8.0),
(70, 'Harry Potter y la Piedra Filosofal', '2001', 6, 'Chris Columbus', 7.6),
(71, 'El Señor de los Anillos: La Comunidad del Anillo', '2001', 7, 'Peter Jackson', 8.8),
(72, 'Star Wars: Episodio IV - Una Nueva Esperanza', '1977', 6, 'George Lucas', 8.6),
(73, 'Jurassic Park', '1993', 6, 'Steven Spielberg', 8.1),
(76, 'El Quinto Elemento', '1997', 6, 'Luc Besson', 7.7),
(77, 'Avatar', '2009', 6, 'James Cameron', 7.8),
(80, 'Guardianes de la Galaxia Vol. 2', '2017', 6, 'James Gunn', 7.6),
(81, 'Mad Max: Furia en el Camino', '2015', 6, 'George Miller', 8.1),
(83, 'Inception', '2010', 6, 'Christopher Nolan', 8.8),
(84, 'Interstellar', '2014', 6, 'Christopher Nolan', 8.6),
(85, 'Dunkerque', '2017', 6, 'Christopher Nolan', 7.9),
(88, 'Blade Runner', '1982', 6, 'Ridley Scott', 8.1),
(90, 'Star Wars: Episodio V - El Imperio Contraataca', '1980', 6, 'Irvin Kershner', 8.7),
(91, 'Star Wars: Episodio VI - El Regreso del Jedi', '1983', 6, 'Richard Marquand', 8.3),
(92, 'Star Wars: Episodio VII - El Despertar de la Fuerza', '2015', 6, 'J.J. Abrams', 7.9),
(93, 'Star Wars: Episodio VIII - Los Últimos Jedi', '2017', 6, 'Rian Johnson', 7.0),
(94, 'Star Wars: Episodio IX - El Ascenso de Skywalker', '2019', 6, 'J.J. Abrams', 6.5),
(95, 'Star Wars: Episodio I - La Amenaza Fantasma', '1999', 6, 'George Lucas', 6.5),
(96, 'Star Wars: Episodio II - El Ataque de los Clones', '2002', 6, 'George Lucas', 6.5),
(97, 'Star Wars: Episodio III - La Venganza de los Sith', '2005', 6, 'George Lucas', 7.5),
(98, 'Star Wars: El Despertar de la Fuerza', '2015', 6, 'J.J. Abrams', 7.9),
(100, 'Star Wars: El Ascenso de Skywalker', '2019', 6, 'J.J. Abrams', 6.5),
(101, 'El Gran Hotel Budapest', '2014', 2, 'Wes Anderson', 8.1),
(102, 'El Discurso del Rey', '2010', 2, 'Tom Hooper', 8.0),
(103, 'La La Land', '2016', 2, 'Damien Chazelle', 8.0),
(104, 'Birdman', '2014', 2, 'Alejandro González Iñárritu', 7.7),
(105, 'Whiplash', '2014', 2, 'Damien Chazelle', 8.5),
(107, '1917', '2019', 2, 'Sam Mendes', 8.3),
(108, 'El Renacido', '2015', 2, 'Alejandro González Iñárritu', 8.0),
(109, 'Gravity', '2013', 2, 'Alfonso Cuarón', 7.7),
(110, 'La Red Social', '2010', 2, 'David Fincher', 7.7),
(111, 'The Irishman', '2019', 2, 'Martin Scorsese', 7.9),
(112, 'El Lobo de Wall Street', '2013', 2, 'Martin Scorsese', 8.2),
(114, 'El Origen', '2010', 6, 'Christopher Nolan', 8.8),
(115, 'El Caballero Oscuro', '2008', 6, 'Christopher Nolan', 9.0),
(117, 'Batman Begins', '2005', 6, 'Christopher Nolan', 8.2),
(119, 'El Planeta de los Simios: El Origen', '2011', 6, 'Rupert Wyatt', 7.6),
(120, 'Origen', '2010', 6, 'Christopher Nolan', 8.8),
(122, 'The Dark Knight Rises', '2012', 6, 'Christopher Nolan', 8.4),
(123, 'El Gran Truco', '2006', 6, 'Christopher Nolan', 8.5),
(125, 'Blade Runner 2049', '2017', 6, 'Denis Villeneuve', 8.0),
(126, 'La Llegada', '2016', 6, 'Denis Villeneuve', 7.9),
(127, 'Prisioneros', '2013', 6, 'Denis Villeneuve', 8.1),
(128, 'Sicario', '2015', 6, 'Denis Villeneuve', 7.6),
(129, 'La Forma del Agua', '2017', 6, 'Guillermo del Toro', 7.3),
(130, 'El Laberinto del Fauno', '2006', 6, 'Guillermo del Toro', 8.2),
(131, 'Pacific Rim', '2013', 6, 'Guillermo del Toro', 6.9),
(132, 'Hellboy', '2004', 6, 'Guillermo del Toro', 6.8),
(133, 'El Espinazo del Diablo', '2001', 6, 'Guillermo del Toro', 7.4),
(134, 'El Orfanato', '2007', 6, 'J.A. Bayona', 7.5),
(136, 'E.T. el Extraterrestre', '1982', 6, 'Steven Spielberg', 7.8),
(137, 'Tiburón', '1975', 6, 'Steven Spielberg', 8.0),
(138, 'Indiana Jones: En Busca del Arca Perdida', '1981', 6, 'Steven Spielberg', 8.4),
(139, 'Salvar al Soldado Ryan', '1998', 6, 'Steven Spielberg', 8.6),
(140, 'Minority Report', '2002', 6, 'Steven Spielberg', 7.6),
(141, 'Catch Me If You Can', '2002', 6, 'Steven Spielberg', 8.1),
(142, 'La Terminal', '2004', 6, 'Steven Spielberg', 7.4),
(143, 'War of the Worlds', '2005', 6, 'Steven Spielberg', 6.5),
(144, 'Ready Player One', '2018', 6, 'Steven Spielberg', 7.5),
(145, 'Raiders of the Lost Ark', '1981', 6, 'Steven Spielberg', 8.4),
(146, 'The Color Purple', '1985', 6, 'Steven Spielberg', 7.8),
(147, 'Hook', '1991', 6, 'Steven Spielberg', 6.8),
(148, 'Munich', '2005', 6, 'Steven Spielberg', 7.5),
(150, 'Bridge of Spies', '2015', 6, 'Steven Spielberg', 7.6),
(151, 'La Naranja Mecánica', '1971', 1, 'Stanley Kubrick', 8.3),
(152, 'El Resplandor', '1980', 1, 'Stanley Kubrick', 8.4),
(154, 'La Chaqueta Metálica', '1987', 1, 'Stanley Kubrick', 8.1),
(155, 'Barry Lyndon', '1975', 2, 'Stanley Kubrick', 8.1),
(156, 'Dr. Strangelove', '1964', 2, 'Stanley Kubrick', 8.4),
(157, 'Senderos de Gloria', '1957', 2, 'Stanley Kubrick', 8.4),
(166, '2001: A Space Odyssey', '1968', 8, 'Stanley Kubrick', 8.3),
(186, 'Paths of Glory', '1957', 7, 'Stanley Kubrick', 8.4),
(193, 'The Shining', '1980', 6, 'Stanley Kubrick', 8.4),
(196, 'Eyes Wide Shut', '1999', 1, 'Stanley Kubrick', 7.4),
(197, 'Lolita', '1962', 2, 'Stanley Kubrick', 7.6),
(198, 'Spartacus', '1960', 3, 'Stanley Kubrick', 8.0),
(199, 'A Clockwork Orange', '1971', 4, 'Stanley Kubrick', 8.3),
(200, 'Full Metal Jacket', '1987', 5, 'Stanley Kubrick', 8.1),
(202, 'Seven', '1995', 5, 'David Fincher', 8.6),
(206, 'La Ventana Indiscreta', '1954', 5, 'Alfred Hitchcock', 8.4),
(207, 'Gone Girl', '2014', 5, 'David Fincher', 8.1),
(208, 'Cisne Negro', '2010', 5, 'Darren Aronofsky', 8.0),
(209, 'Black Swan', '2010', 5, 'Darren Aronofsky', 8.0),
(210, 'Shutter Island', '2010', 5, 'Martin Scorsese', 8.2),
(215, 'Memories of Murder', '2003', 5, 'Bong Joon-ho', 8.1),
(216, 'Oldboy', '2003', 5, 'Park Chan-wook', 8.4),
(217, 'El Hombre Invisible', '2020', 5, 'Leigh Whannell', 7.1),
(219, 'Cape Fear', '1991', 5, 'Martin Scorsese', 7.3),
(221, 'Mulholland Drive', '2001', 5, 'David Lynch', 8.0),
(222, 'No Country for Old Men', '2007', 5, 'Joel Coen, Ethan Coen', 8.1),
(223, 'The Machinist', '2004', 5, 'Brad Anderson', 7.7),
(226, 'The Game', '1997', 5, 'David Fincher', 7.8),
(228, 'The Silence of the Lambs', '1991', 5, 'Jonathan Demme', 8.6),
(232, 'Prisoners', '2013', 5, 'Denis Villeneuve', 8.1),
(233, 'The Sixth Sense', '1999', 5, 'M. Night Shyamalan', 8.1),
(234, 'Psycho', '1960', 5, 'Alfred Hitchcock', 8.5),
(235, 'The Others', '2001', 5, 'Alejandro Amenábar', 7.6),
(238, 'Vertigo', '1958', 5, 'Alfred Hitchcock', 8.3),
(239, 'The Prestige', '2006', 5, 'Christopher Nolan', 8.5),
(240, 'Mystic River', '2003', 5, 'Clint Eastwood', 7.9),
(241, 'Zodiac', '2007', 5, 'David Fincher', 7.7),
(242, 'Memento', '2000', 5, 'Christopher Nolan', 8.4),
(243, 'The Girl with the Dragon Tattoo', '2011', 5, 'David Fincher', 7.8),
(248, 'The Vanishing', '1988', 5, 'George Sluizer', 7.7),
(249, 'Gone Baby Gone', '2007', 5, 'Ben Affleck', 7.6),
(250, 'The Sixth Sense', '1999', 5, 'M. Night Shyamalan', 8.1);

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
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `actores`
--
ALTER TABLE `actores`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_actor_pelicula` (`pelicula_id`);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `generos`
--
ALTER TABLE `generos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `peliculas`
--
ALTER TABLE `peliculas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=251;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `actores`
--
ALTER TABLE `actores`
  ADD CONSTRAINT `actores_ibfk_1` FOREIGN KEY (`pelicula_id`) REFERENCES `peliculas` (`id`);

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
