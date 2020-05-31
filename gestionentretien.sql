-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  sam. 30 mai 2020 à 18:37
-- Version du serveur :  5.7.26
-- Version de PHP :  7.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `gestionentretien`
--

-- --------------------------------------------------------

--
-- Structure de la table `agent`
--

DROP TABLE IF EXISTS `agent`;
CREATE TABLE IF NOT EXISTS `agent` (
  `id` bigint(20) NOT NULL,
  `adresse_domicile` varchar(255) DEFAULT NULL,
  `code_agent` varchar(255) DEFAULT NULL,
  `date_entree` datetime DEFAULT NULL,
  `description_drop_down` varchar(255) DEFAULT NULL,
  `entrepriseliee` varchar(255) DEFAULT NULL,
  `nom_agent` varchar(255) DEFAULT NULL,
  `reference` varchar(255) DEFAULT NULL,
  `tel` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `agent`
--

INSERT INTO `agent` (`id`, `adresse_domicile`, `code_agent`, `date_entree`, `description_drop_down`, `entrepriseliee`, `nom_agent`, `reference`, `tel`) VALUES
(145, '9 Derb Sidi Ali Benhamdouch Bab Dokhala', '222.4lb', '2020-05-02 00:00:00', '222.4lb,Shuraih al Baig', 'afrojack ', 'Shuraih al Baig', 'eAkkSp1', '0624385260'),
(38, 'Avenue Mohamed V, Laâyoune-Boujdour-Sakia El Hamra', '255.9lb', '2017-05-18 00:00:00', '255.9lb,Anouar Abouerraja', 'atlas entreprise', 'Anouar Abouerraja', 'lHcCxz1', '0640064524'),
(146, 'Lot 316-317, Z.I., El jadida', '194.0lb', '2020-05-09 00:00:00', '194.0lb,Aamina el Mohamed', 'Auto Parts', 'Aamina el Mohamed', 'vWPCPp2', '0623 344 028'),
(147, '120, Quartier Florida - Sidi Maarouf', '215.6lb', '2020-05-15 00:00:00', '215.6lb,Sanad al Asad', 'Royal Gas', 'Sanad al Asad', 'zpymvS3', '0622 972 052'),
(148, 'ALLEE DES CACTUS AIN SEBAA', '246.6lb', '2020-05-08 00:00:00', '246.6lb,Nizaar el Sayed', 'CSK Auto', 'Nizaar el Sayed', 'eXyuXb4', '0648375837'),
(149, 'Quartier Chabab C, n°273 ElAlia, Grand Casablanca', '178.4lb', '2020-05-17 00:00:00', '178.4lb,Rayyaan al Hashim', 'Muscle Factory', 'Rayyaan al Hashim', 'jYwjWL5', '0523284373'),
(150, '125, Rue des Roses, Beauséjour', '216.5lb', '2020-05-08 00:00:00', '216.5lb,Aaqil al Mahdavi', 'WWW Realty', 'Aaqil al Mahdavi', 'Msyuhv6', '0522365007'),
(151, '514 Lotissement Al Kairaouane Tahnnaout Haouz', '229.0lb', '2020-05-02 00:00:00', '229.0lb,Khaira el Khalaf', 'Magik Grey', 'Khaira el Khalaf', 'JrvSZP7', '0524484824'),
(152, '514 Lotissement Al Kairaouane Tahnnaout Haouz', '229.0lb', '2020-05-02 00:00:00', '229.0lb,Khaira el Khalaf', 'Magik Grey', 'Khaira el Khalaf', 'fWpptR8', '0524484824'),
(153, 'route des Zenatas - r.s. 111 (cotiere), lotiss. Sn', '112.5lb', '2020-05-22 00:00:00', '112.5lb,Badr el Zahra', 'Xray Eye & Vision Clinics', 'Badr el Zahra', 'eqsFKr9', '0640064526'),
(154, 'Rés. Belle Vue, Imm.B, 4ème étage.Anfa', '179.7lb', '2020-05-02 00:00:00', '179.7lb,Fikriyya el Qadir', 'Envirotecture Design Service', 'Fikriyya el Qadir', 'ExZrQy10', '0640064520');

-- --------------------------------------------------------

--
-- Structure de la table `bon_carburant`
--

DROP TABLE IF EXISTS `bon_carburant`;
CREATE TABLE IF NOT EXISTS `bon_carburant` (
  `id` bigint(20) NOT NULL,
  `datebonc` datetime DEFAULT NULL,
  `descriptionc` varchar(255) DEFAULT NULL,
  `fourniassooci` varchar(255) DEFAULT NULL,
  `montantvignettec` double NOT NULL,
  `nom_prestataire` varchar(255) DEFAULT NULL,
  `numbonc` varchar(255) DEFAULT NULL,
  `prixunitairec` double NOT NULL,
  `quantitec` double NOT NULL,
  `reference` varchar(255) DEFAULT NULL,
  `totalbrutc` double NOT NULL,
  `typec` varchar(255) DEFAULT NULL,
  `vehiculeassooci` varchar(255) DEFAULT NULL,
  `fournisseurc` bigint(20) DEFAULT NULL,
  `vehiculec` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKgqdfbnijdg9cti4kesfbxflal` (`fournisseurc`),
  KEY `FKn33q5jk6i38bwhoatnax4jpwe` (`vehiculec`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `bon_carburant`
--

INSERT INTO `bon_carburant` (`id`, `datebonc`, `descriptionc`, `fourniassooci`, `montantvignettec`, `nom_prestataire`, `numbonc`, `prixunitairec`, `quantitec`, `reference`, `totalbrutc`, `typec`, `vehiculeassooci`, `fournisseurc`, `vehiculec`) VALUES
(34, '2020-05-16 00:00:00', 'plein mazotte', 'afriqua,63 RUE ALJOLAN kech', 33344, NULL, '212FFS', 1334, 332, 'ctmJgK1', 324, 'GASOIL', '22211L212,MERCEDES', 49, 6),
(43, '2020-05-09 00:00:00', 'plein mazotte', 'Shell,boulvard moulay driss ', 560, NULL, '223FFFD3', 10.1, 50, 'EtFHox1', 550, 'gasoil', '271FDFD,volkswagen', 157, 36);

-- --------------------------------------------------------

--
-- Structure de la table `bon_reparation`
--

DROP TABLE IF EXISTS `bon_reparation`;
CREATE TABLE IF NOT EXISTS `bon_reparation` (
  `id` bigint(20) NOT NULL,
  `datebonr` datetime DEFAULT NULL,
  `descriptionr` varchar(255) DEFAULT NULL,
  `montantvignetter` double NOT NULL,
  `numbonr` varchar(255) DEFAULT NULL,
  `prixunitairer` double NOT NULL,
  `quantiter` double NOT NULL,
  `reference` varchar(255) DEFAULT NULL,
  `totalbrutr` double NOT NULL,
  `fournisseurr` bigint(20) DEFAULT NULL,
  `vehiculer` bigint(20) DEFAULT NULL,
  `fourniassooci` varchar(255) DEFAULT NULL,
  `vehiculeassooci` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKskxvlyio0vaqshhcpfr1neoou` (`fournisseurr`),
  KEY `FKlli8in470jilgldyksnws1bhw` (`vehiculer`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `bon_reparation`
--

INSERT INTO `bon_reparation` (`id`, `datebonr`, `descriptionr`, `montantvignetter`, `numbonr`, `prixunitairer`, `quantiter`, `reference`, `totalbrutr`, `fournisseurr`, `vehiculer`, `fourniassooci`, `vehiculeassooci`) VALUES
(8, '2020-05-13 00:00:00', '21', 3, '3333', 21, 23, 'qMJHoQ1', 21, 49, 6, 'afriqua,63 RUE ALJOLAN kech', '22211L212,MERCEDES'),
(45, '2020-05-08 00:00:00', 'DDSDS', 0, '223342DDS', 3234, 21, 'PknATl1', 23, 49, 6, 'afriqua ,63 RUE ALJOLAN kech', '22211L212,MERCEDES');

-- --------------------------------------------------------

--
-- Structure de la table `bon_vidange`
--

DROP TABLE IF EXISTS `bon_vidange`;
CREATE TABLE IF NOT EXISTS `bon_vidange` (
  `id` bigint(20) NOT NULL,
  `datebonv` datetime DEFAULT NULL,
  `descriptionv` varchar(255) DEFAULT NULL,
  `kilometragev` double NOT NULL,
  `montantvignettev` double NOT NULL,
  `numbonv` varchar(255) DEFAULT NULL,
  `prixunitairev` double NOT NULL,
  `quantitev` double NOT NULL,
  `reference` varchar(255) DEFAULT NULL,
  `totalbrutv` double NOT NULL,
  `typehuilev` varchar(255) DEFAULT NULL,
  `fournisseurv` bigint(20) DEFAULT NULL,
  `vehiculev` bigint(20) DEFAULT NULL,
  `fourniassooci` varchar(255) DEFAULT NULL,
  `vehiculeassooci` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK42q5oqa8lph1dsbijiyaotev9` (`fournisseurv`),
  KEY `FK13ab610qvnccdkge102y64ol6` (`vehiculev`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `bon_vidange`
--

INSERT INTO `bon_vidange` (`id`, `datebonv`, `descriptionv`, `kilometragev`, `montantvignettev`, `numbonv`, `prixunitairev`, `quantitev`, `reference`, `totalbrutv`, `typehuilev`, `fournisseurv`, `vehiculev`, `fourniassooci`, `vehiculeassooci`) VALUES
(44, '2020-05-09 00:00:00', 'changement huile', 2223332, 1100, 'HDH3328', 200, 5, 'RIRoET1', 1000, 'perfect oil ', 49, 6, 'afriqua ,63 RUE ALJOLAN kech', '22211L212 ,MERCEDES');

-- --------------------------------------------------------

--
-- Structure de la table `entretien`
--

DROP TABLE IF EXISTS `entretien`;
CREATE TABLE IF NOT EXISTS `entretien` (
  `id` bigint(20) NOT NULL,
  `date_entretien` datetime DEFAULT NULL,
  `montant` double NOT NULL,
  `nom_materiel` varchar(255) DEFAULT NULL,
  `num_facture` varchar(255) DEFAULT NULL,
  `prestataire` varchar(255) DEFAULT NULL,
  `loclale` bigint(20) DEFAULT NULL,
  `materiel` bigint(20) DEFAULT NULL,
  `nom_locale` varchar(255) DEFAULT NULL,
  `locale` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKmqt3o3qxceoa711xfsphp99gk` (`loclale`),
  KEY `FKe1b0430xn3cmabm5w5oe8mrd1` (`locale`),
  KEY `FKq6j2xpikeaoevuvbpqavb26wp` (`materiel`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `entretien`
--

INSERT INTO `entretien` (`id`, `date_entretien`, `montant`, `nom_materiel`, `num_facture`, `prestataire`, `loclale`, `materiel`, `nom_locale`, `locale`) VALUES
(181, '2020-04-30 00:00:00', 0, '221EJ12, Pc bureau, DELL', 'XwyRDB1', '255.9lb, Anouar Abouerraja', NULL, 133, 'salle 1 Salle, Informatique', 122);

-- --------------------------------------------------------

--
-- Structure de la table `fournisseursv`
--

DROP TABLE IF EXISTS `fournisseursv`;
CREATE TABLE IF NOT EXISTS `fournisseursv` (
  `id` bigint(20) NOT NULL,
  `adressef` varchar(255) DEFAULT NULL,
  `description_drop_down` varchar(255) DEFAULT NULL,
  `emailf` varchar(255) DEFAULT NULL,
  `nomf` varchar(255) DEFAULT NULL,
  `reference` varchar(255) DEFAULT NULL,
  `telephonef` varchar(255) DEFAULT NULL,
  `typef` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `fournisseursv`
--

INSERT INTO `fournisseursv` (`id`, `adressef`, `description_drop_down`, `emailf`, `nomf`, `reference`, `telephonef`, `typef`) VALUES
(13, '33 RUE ABDELKARIM KHATABI', 'DELL,33 RUE ABDELKARIM KHATABI', 'dell@dell.com', 'DELL', 'ovUuJJ1', '0623543432', 'matériel'),
(156, '77 LOT ERRAQUI ', 'Acer,77 LOT ERRAQUI ', 'acer@acer.com', 'Acer', 'eLiedC1', '0640064525', 'matériel'),
(67, '67 boulvard ahmed tayeb', 'HP,67 boulvard ahmed tayeb', 'hp@hp.com', 'HP', 'VGQCUN1', '0532343234', 'matériel'),
(49, '63 RUE ALJOLAN kech', 'afriqua,63 RUE ALJOLAN kech', 'Example@mail.ri', 'afriqua', 'NISTkW1', '0623428457', 'service'),
(157, 'boulvard moulay driss ', 'Shell,boulvard moulay driss ', 'shell@shell.com', 'Shell', 'sGELWs2', '0640064521', 'service'),
(158, 'boulvard total ', 'Total,boulvard total ', 'total@total.com', 'Total', 'bBQzhv3', '0640064511', 'service'),
(159, 'BOULVARD MOULAY YOUSSEF', 'ZIZ,BOULVARD MOULAY YOUSSEF', 'ZIZ@ZIZ.COM', 'ZIZ', 'IWzHac4', '0621354728', 'service'),
(160, 'Rés. Belle Vue, Imm.B, 4ème étage.Anfa.', 'samsung,Rés. Belle Vue, Imm.B, 4ème étage.Anfa.', 'samsung@samsung.com', 'samsung', 'oBQTFa5', '0640064525', 'matériel'),
(161, '5 Lotissement Jawhara Bir Rami Est', 'Epson,5 Lotissement Jawhara Bir Rami Est', 'epson@epsom.com', 'Epson', 'vcPequ6', '0640044521', 'matériel'),
(162, '9 Rue Tiddas Hassan', 'Olivia,9 Rue Tiddas Hassan', 'olivia@olivia.com', 'Olivia', 'fBvCmQ7', '0642364521', 'service'),
(163, 'Zone Industrielle Sud Ouest', 'LG,Zone Industrielle Sud Ouest', 'LG@LG.COM', 'LG', 'ALRIpt8', '0643164521', 'matériel');

-- --------------------------------------------------------

--
-- Structure de la table `hibernate_sequence`
--

DROP TABLE IF EXISTS `hibernate_sequence`;
CREATE TABLE IF NOT EXISTS `hibernate_sequence` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `hibernate_sequence`
--

INSERT INTO `hibernate_sequence` (`next_val`) VALUES
(198),
(198),
(198),
(198),
(198),
(198),
(198),
(198),
(198),
(198),
(198),
(198),
(198),
(198),
(198),
(198);

-- --------------------------------------------------------

--
-- Structure de la table `locale`
--

DROP TABLE IF EXISTS `locale`;
CREATE TABLE IF NOT EXISTS `locale` (
  `id` bigint(20) NOT NULL,
  `departement` varchar(255) DEFAULT NULL,
  `description_drop_down` varchar(255) DEFAULT NULL,
  `nbr_materiel` double NOT NULL,
  `nom_local` varchar(255) DEFAULT NULL,
  `reference` varchar(255) DEFAULT NULL,
  `type_local` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `locale`
--

INSERT INTO `locale` (`id`, `departement`, `description_drop_down`, `nbr_materiel`, `nom_local`, `reference`, `type_local`) VALUES
(172, 'Mathématique', 'salle 3  Salle, Mathématique', 0, 'salle 3 ', 'uGo9', 'Salle'),
(122, 'Informatique', 'salle 1 Salle, Informatique', 2, 'salle 1', 'uUB1', 'Salle'),
(164, 'Informatique', 'salle 2 Salle, Informatique', 0, 'salle 2', 'iit2', 'Salle'),
(166, 'Autre', 'Amphi 1 Amphi, Autre', 2, 'Amphi 1', 'UVi3', 'Amphi'),
(167, 'Autre', 'Amphi 2 Amphi, Autre', 0, 'Amphi 2', 'Vwi4', 'Amphi'),
(168, 'Autre', 'Amphi 3 Amphi, Autre', 0, 'Amphi 3', 'pIP5', 'Amphi'),
(169, 'Autre', 'Amphi 4 Amphi, Autre', 0, 'Amphi 4', 'DYe6', 'Amphi'),
(171, 'Autre', 'Amphi 5 Amphi, Autre', 0, 'Amphi 5', 'TwY8', 'Amphi'),
(173, 'Informatique', 'salle 4 Salle, Informatique', 0, 'salle 4', 'vEo10', 'Salle'),
(174, 'Informatique', 'salle 5 Salle, Informatique', 0, 'salle 5', 'wel11', 'Salle'),
(175, 'Chimie', 'laboratoire 1 Laboratoire, Chimie', 1, 'laboratoire 1', 'cVW12', 'Laboratoire');

-- --------------------------------------------------------

--
-- Structure de la table `local_details`
--

DROP TABLE IF EXISTS `local_details`;
CREATE TABLE IF NOT EXISTS `local_details` (
  `id` bigint(20) NOT NULL,
  `date_affectation` datetime DEFAULT NULL,
  `description_materiel_locale` varchar(255) DEFAULT NULL,
  `locale_associe` varchar(255) DEFAULT NULL,
  `materiel_locale` varchar(255) DEFAULT NULL,
  `referenceml` varchar(255) DEFAULT NULL,
  `locale` bigint(20) DEFAULT NULL,
  `materiel` bigint(20) DEFAULT NULL,
  `reference` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKafhrdl0sb55mlsucypkabwpp0` (`locale`),
  KEY `FK23whnruo2yy0x60vk99awsrci` (`materiel`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `local_details`
--

INSERT INTO `local_details` (`id`, `date_affectation`, `description_materiel_locale`, `locale_associe`, `materiel_locale`, `referenceml`, `locale`, `materiel`, `reference`) VALUES
(133, '2020-05-22 00:00:00', '221EJ12, Pc bureau, DELL', 'salle 1 Salle, Informatique', 'Pc bureau, DELL', '221EJ12', 122, 132, 'vPc1'),
(191, '2020-05-15 00:00:00', '212dff2, Projecteur, Epson', 'laboratoire 1 Laboratoire, Chimie', 'Projecteur, Epson', '212dff2', 175, 178, 'SCl1'),
(192, '2020-05-05 00:00:00', '4W332D, Télevision, LG', 'Amphi 1 Amphi, Autre', 'Télevision, LG', '4W332D', 166, 165, 'jQe2'),
(193, '2020-05-15 00:00:00', '1, souris , HP', 'salle 1 Salle, Informatique', 'Projecteur, Epson', '213fdfss', 122, 178, 'tQV3'),
(194, '2020-04-29 00:00:00', '339md34, imprimante, samsung', 'Amphi 1 Amphi, Autre', 'imprimante, samsung', '339md34', 166, 177, 'gDN4');

-- --------------------------------------------------------

--
-- Structure de la table `materiel`
--

DROP TABLE IF EXISTS `materiel`;
CREATE TABLE IF NOT EXISTS `materiel` (
  `id` bigint(20) NOT NULL,
  `description_drop_down` varchar(255) DEFAULT NULL,
  `marque` varchar(255) DEFAULT NULL,
  `nbr_entite` double NOT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `reference` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `fournisseur` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKlf1vlu8sf1fv8ua4lmxv88d35` (`fournisseur`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `materiel`
--

INSERT INTO `materiel` (`id`, `description_drop_down`, `marque`, `nbr_entite`, `nom`, `reference`, `type`, `fournisseur`) VALUES
(132, 'Pc bureau, DELL', 'DELL', 1, 'Pc bureau', 'DcYzfV1', 'Informatique', 13),
(165, 'Télevision, LG', 'LG', 1, 'Télevision', 'NFesRf1', 'Enseignement', 163),
(176, 'pc portable, Acer', 'Acer', 0, 'pc portable', 'wCLfrg2', 'Informatique', 156),
(177, 'imprimante, samsung', 'samsung', 1, 'imprimante', 'exzPqY3', 'Informatique', 160),
(178, 'Projecteur, Epson', 'Epson', 2, 'Projecteur', 'QARRmU4', 'Enseignement', 161),
(179, 'souris , HP', 'HP', 0, 'souris ', 'liPWpx5', 'Informatique', 67);

-- --------------------------------------------------------

--
-- Structure de la table `prestation_externe`
--

DROP TABLE IF EXISTS `prestation_externe`;
CREATE TABLE IF NOT EXISTS `prestation_externe` (
  `id` bigint(20) NOT NULL,
  `reclamed` bit(1) NOT NULL,
  `bon_commande` bit(1) NOT NULL,
  `bon_livraison` bit(1) NOT NULL,
  `date` datetime DEFAULT NULL,
  `montant_fac` double NOT NULL,
  `nom_prestataire` varchar(255) DEFAULT NULL,
  `numero_fac` varchar(255) DEFAULT NULL,
  `reference` varchar(255) DEFAULT NULL,
  `refrence_reclamation` varchar(255) DEFAULT NULL,
  `type_entretien` varchar(255) DEFAULT NULL,
  `locale` bigint(20) DEFAULT NULL,
  `pres_bon_commande` bigint(20) DEFAULT NULL,
  `pres_bon_livraison` bigint(20) DEFAULT NULL,
  `reclamede` bit(1) NOT NULL,
  `bon_commandee` bit(1) NOT NULL,
  `bon_livraisone` bit(1) NOT NULL,
  `datee` datetime DEFAULT NULL,
  `montant_face` double NOT NULL,
  `nom_prestatairee` varchar(255) DEFAULT NULL,
  `numero_face` varchar(255) DEFAULT NULL,
  `referencee` varchar(255) DEFAULT NULL,
  `refrence_reclamatione` varchar(255) DEFAULT NULL,
  `type_entretiene` varchar(255) DEFAULT NULL,
  `materiel_locale` bigint(20) DEFAULT NULL,
  `reclamatione` bigint(20) DEFAULT NULL,
  `nom_locale` varchar(255) DEFAULT NULL,
  `nom_materiel` varchar(255) DEFAULT NULL,
  `pres_bon_commandee` bigint(20) DEFAULT NULL,
  `pres_bon_livraisone` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKh1mwn4qyi17me4tctsknn9o63` (`pres_bon_commande`),
  KEY `FK31us8oc84oicdibpgajstg2s5` (`pres_bon_livraison`),
  KEY `FK94npgpirgo45vvo030lxovx7g` (`locale`),
  KEY `FK73qj1nax2w32g17s9ieluv92h` (`materiel_locale`),
  KEY `FK21nw3wdmgvp30ie97ujup2mlt` (`pres_bon_commandee`),
  KEY `FKd0j806ytedpwjw0uor1arxy12` (`pres_bon_livraisone`),
  KEY `FK6nstdh3nja9xuw1j466lqfutp` (`reclamatione`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `prestation_interne`
--

DROP TABLE IF EXISTS `prestation_interne`;
CREATE TABLE IF NOT EXISTS `prestation_interne` (
  `id` bigint(20) NOT NULL,
  `date` datetime DEFAULT NULL,
  `nom_agent` varchar(255) DEFAULT NULL,
  `nom_locale` varchar(255) DEFAULT NULL,
  `reference` varchar(255) DEFAULT NULL,
  `refrence_reclamation` varchar(255) DEFAULT NULL,
  `type_entretien` varchar(255) DEFAULT NULL,
  `agent` bigint(20) DEFAULT NULL,
  `locale` bigint(20) DEFAULT NULL,
  `materiel_loclae` bigint(20) DEFAULT NULL,
  `reclamedi` bit(1) NOT NULL,
  `datei` datetime DEFAULT NULL,
  `nom_agenti` varchar(255) DEFAULT NULL,
  `nom_localei` varchar(255) DEFAULT NULL,
  `nom_materieli` varchar(255) DEFAULT NULL,
  `referencei` varchar(255) DEFAULT NULL,
  `refrence_reclamationi` varchar(255) DEFAULT NULL,
  `type_entretieni` varchar(255) DEFAULT NULL,
  `materiel_locale` bigint(20) DEFAULT NULL,
  `reclamationi` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK51n2a5x5454pgoyj6sa7v7s5o` (`materiel_loclae`),
  KEY `FK7d2f01ewevuqi5g8kcgfc6ru8` (`agent`),
  KEY `FKpthdb13x0h3uaevwv70rx8k4j` (`locale`),
  KEY `FKb0atqn9srcnla7j01dtrj3hor` (`materiel_locale`),
  KEY `FKpou7tnfub59auvmeh4jno2vtx` (`reclamationi`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `prestation_interne`
--

INSERT INTO `prestation_interne` (`id`, `date`, `nom_agent`, `nom_locale`, `reference`, `refrence_reclamation`, `type_entretien`, `agent`, `locale`, `materiel_loclae`, `reclamedi`, `datei`, `nom_agenti`, `nom_localei`, `nom_materieli`, `referencei`, `refrence_reclamationi`, `type_entretieni`, `materiel_locale`, `reclamationi`) VALUES
(182, NULL, NULL, NULL, NULL, NULL, NULL, 38, 122, NULL, b'1', '2020-04-30 00:00:00', '255.9lb, Anouar Abouerraja', 'salle 1 Salle, Informatique', '221EJ12, Pc bureau, DELL', 'XwyRDB1', NULL, 'materiel', 133, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `pres_bon_commande`
--

DROP TABLE IF EXISTS `pres_bon_commande`;
CREATE TABLE IF NOT EXISTS `pres_bon_commande` (
  `id` bigint(20) NOT NULL,
  `date_bon_commande` datetime DEFAULT NULL,
  `montant` double NOT NULL,
  `nom_prestataire` varchar(255) DEFAULT NULL,
  `numero_bon_commande` double NOT NULL,
  `prestation_externe` bigint(20) DEFAULT NULL,
  `nom_prestation_associe` varchar(255) DEFAULT NULL,
  `montantc` double NOT NULL,
  `nom_prestatairec` varchar(255) DEFAULT NULL,
  `reference` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK41ixjeh3fsk4g1h6y861jedii` (`prestation_externe`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `pres_bon_livraison`
--

DROP TABLE IF EXISTS `pres_bon_livraison`;
CREATE TABLE IF NOT EXISTS `pres_bon_livraison` (
  `id` bigint(20) NOT NULL,
  `date_bon_livraison` datetime DEFAULT NULL,
  `montant` double NOT NULL,
  `nom_prestataire` varchar(255) DEFAULT NULL,
  `numero_bon_livraison` double NOT NULL,
  `prestation_externe` bigint(20) DEFAULT NULL,
  `nom_prestation_associe` varchar(255) DEFAULT NULL,
  `montantl` double NOT NULL,
  `nom_prestatairel` varchar(255) DEFAULT NULL,
  `reference` varchar(255) DEFAULT NULL,
  `prestation_externel` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKmy7kqgndg8de3xntv6wo7m2et` (`prestation_externe`),
  KEY `FK5ldlk4as0tauh0aeq5u6p2wld` (`prestation_externel`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `reclamation`
--

DROP TABLE IF EXISTS `reclamation`;
CREATE TABLE IF NOT EXISTS `reclamation` (
  `id` bigint(20) NOT NULL,
  `date` datetime DEFAULT NULL,
  `descreption_drop_down_reclamation` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `etat` varchar(255) DEFAULT NULL,
  `nom_locale` varchar(255) DEFAULT NULL,
  `nom_materiel` varchar(255) DEFAULT NULL,
  `objet` varchar(255) DEFAULT NULL,
  `reclament_name` varchar(255) DEFAULT NULL,
  `reference` varchar(255) DEFAULT NULL,
  `locale` bigint(20) DEFAULT NULL,
  `materiel` bigint(20) DEFAULT NULL,
  `reclament` bigint(20) DEFAULT NULL,
  `prestation_externe` bigint(20) DEFAULT NULL,
  `prestation_interne` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKohap9hrp7t1607k0kfmml42wv` (`locale`),
  KEY `FKps6k6doyidq5rb84nrm0wod58` (`materiel`),
  KEY `FKt4w4gdyl3lfigv5xjlau7lovs` (`prestation_externe`),
  KEY `FKqfy2wkdlja80d2exm38l4gf2k` (`prestation_interne`),
  KEY `FKdqj9b71xmr9m2mfu9d37djh16` (`reclament`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `reclamation`
--

INSERT INTO `reclamation` (`id`, `date`, `descreption_drop_down_reclamation`, `description`, `etat`, `nom_locale`, `nom_materiel`, `objet`, `reclament_name`, `reference`, `locale`, `materiel`, `reclament`, `prestation_externe`, `prestation_interne`) VALUES
(141, '2020-05-28 00:29:44', 'eRjCwe2, dsds', 'fds', 'Pas Encore Vu', 'salle 1 Salle, Informatique', '221EJ12, Pc bureau, DELL', 'dsds', 'CHAKIR, ZAKARIA', 'eRjCwe2', 122, 133, 2, NULL, NULL),
(142, '2020-05-28 09:34:08', 'PKRIUm1, hey', 'sadda', 'Sous Traitement', 'salle 1 Salle, Informatique', '221EJ12, Pc bureau, DELL', 'hey', 'CHAKIR, AHMED', 'PKRIUm1', 122, 133, 39, NULL, NULL),
(143, '2020-05-28 09:45:59', 'HZoYGT2, hhhh', 'fdf', 'Sous Traitement', 'salle 1 Salle, Informatique', '221EJ12, Pc bureau, DELL', 'hhhh', 'CHAKIR, AHMED', 'HZoYGT2', 122, 133, 39, NULL, NULL),
(195, '2020-05-28 22:44:44', 'smvqDE1, objet 1', 'saas', 'Pas Encore Vu', 'laboratoire 1 Laboratoire, Chimie', 'Pas de materiel', 'objet 1', 'KHALID, BARTAOUCH', 'smvqDE1', 175, NULL, 17, NULL, NULL),
(196, '2020-05-28 22:47:42', 'LAVPUx2, hhh', 'lllkh', 'Pas Encore Vu', 'salle 5 Salle, Informatique', 'Pas de materiel', 'hhh', 'KHALID, BARTAOUCH', 'LAVPUx2', 174, NULL, 17, NULL, NULL),
(197, '2020-05-28 22:50:02', 'FZlIao3, dssd', 'fdsds', 'Pas Encore Vu', 'salle 4 Salle, Informatique', 'Pas de materiel', 'dssd', 'KHALID, BARTAOUCH', 'FZlIao3', 173, NULL, 17, NULL, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` bigint(20) NOT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `prenom` varchar(255) DEFAULT NULL,
  `reference` varchar(255) DEFAULT NULL,
  `telephone` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `nom`, `password`, `prenom`, `reference`, `telephone`, `type`, `username`) VALUES
(2, 'CHAKIR', 'CHAKIR', 'ZAKARIA', 'GbxnrY1', '0640064521', 'administrateur', 'ZAKARIA'),
(17, 'KHALID', 'bart', 'BARTAOUCH', 'XtGrHu1', '0640064522', 'administrateur', 'khalid'),
(39, 'CHAKIR', '11', 'AHMED', 'JmdpEh1', '640064526', 'employé', 'ahmed');

-- --------------------------------------------------------

--
-- Structure de la table `vehicule`
--

DROP TABLE IF EXISTS `vehicule`;
CREATE TABLE IF NOT EXISTS `vehicule` (
  `id` bigint(20) NOT NULL,
  `date_entrer_parc` datetime DEFAULT NULL,
  `description_drop_down` varchar(255) DEFAULT NULL,
  `marque` varchar(255) DEFAULT NULL,
  `matricule` varchar(255) DEFAULT NULL,
  `reference` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `utilite` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `vehicule`
--

INSERT INTO `vehicule` (`id`, `date_entrer_parc`, `description_drop_down`, `marque`, `matricule`, `reference`, `type`, `utilite`) VALUES
(6, '2020-05-20 00:00:00', '22211L212,MERCEDES', 'MERCEDES', '22211L212', 'ktGOTw1', 'Automobile', 'transport'),
(36, '2020-05-14 00:00:00', '271FDFD,volkswagen', 'volkswagen', '271FDFD', 'eGHuTU1', 'Bus', 'transport'),
(183, '2020-05-14 00:00:00', '23U2134,DACIA', 'DACIA', '23U2134', 'McbzKJ1', 'Automobile', 'Transport'),
(184, '2020-05-20 00:00:00', '283H328,RENAULT', 'RENAULT', '283H328', 'RblJFk2', 'Automobile', 'transport'),
(185, '2020-05-07 00:00:00', '221H948,Scania', 'Scania', '221H948', 'YMIsZa3', 'Bus', 'transport'),
(186, '2020-05-13 00:00:00', '635H94,AUDI', 'AUDI', '635H94', 'xYJuEY4', 'Automobile', 'transport'),
(187, '2020-04-30 00:00:00', '764J343,PEUGAUT', 'PEUGAUT', '764J343', 'RPYrGV5', 'Automobile', 'transport'),
(188, '2020-04-30 00:00:00', '762J349,alpha romeo', 'alpha romeo', '762J349', 'FHfNYR6', 'Automobile', 'transport'),
(189, '2020-05-08 00:00:00', '334J34,SCODA', 'SCODA', '334J34', 'jdEpJW7', 'Automobile', 'transport'),
(190, '2020-04-28 00:00:00', '73J439,MERCEDES', 'MERCEDES', '73J439', 'NtdbkG8', 'Bus', 'transport');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
