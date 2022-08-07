-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:8889
-- Généré le : dim. 07 août 2022 à 18:53
-- Version du serveur : 5.7.34
-- Version de PHP : 8.0.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `calendrier`
--

-- --------------------------------------------------------

--
-- Structure de la table `event`
--

CREATE TABLE `event` (
  `id` int(11) NOT NULL,
  `date_deb` datetime DEFAULT NULL,
  `date_fin` datetime DEFAULT NULL,
  `titre` varchar(255) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `categorie` varchar(100) DEFAULT NULL,
  `statut` varchar(10) DEFAULT NULL,
  `description` text,
  `transparence` varchar(15) DEFAULT NULL,
  `nbMaj` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `event`
--

INSERT INTO `event` (`id`, `date_deb`, `date_fin`, `titre`, `location`, `categorie`, `statut`, `description`, `transparence`, `nbMaj`) VALUES
(1, '2022-08-12 00:00:00', '2022-08-09 00:00:00', 'Event 1 ', 'Marseille', 'Test', 'Ouvert', 'Un petit premier test pour afficher correctement le projet', 'null', 3),
(2, '2022-08-13 00:00:00', '2022-08-08 00:00:00', 'Event 2', 'Marseille', 'null', 'null', 'null', 'null', 1),
(3, '2022-08-08 00:00:00', '2022-08-09 00:00:00', 'Evénement 3', 'Ici', 'Aucune', 'Fermé', '', 'Oui', 2),
(4, '2022-08-08 00:00:00', '2022-08-08 00:00:00', 'Événement 4', 'B', 'C', 'D', 'E', 'FF', 1),
(5, '2022-08-07 00:00:00', '2022-08-09 00:00:00', 'Event 5', 'PT', '14', 'Uc', 'Uc', 'OK', 4),
(7, '2022-08-03 00:00:00', '2022-08-08 00:00:00', 'Event numéro 6', 'PT', 'PT', 'PT', 'PT', 'PT', 2);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `event`
--
ALTER TABLE `event`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `event`
--
ALTER TABLE `event`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
