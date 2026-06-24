--
-- PostgreSQL database dump
--

-- Dumped from database version 12.22 (Ubuntu 12.22-0ubuntu0.20.04.4)
-- Dumped by pg_dump version 12.22 (Ubuntu 12.22-0ubuntu0.20.04.4)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE universe;
--
-- Name: universe; Type: DATABASE; Schema: -; Owner: freecodecamp
--

CREATE DATABASE universe WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'C.UTF-8' LC_CTYPE = 'C.UTF-8';


ALTER DATABASE universe OWNER TO freecodecamp;

\connect universe

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: comet; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.comet (
    comet_id integer NOT NULL,
    name character varying(100) NOT NULL,
    speed_km_per_sec integer NOT NULL,
    is_periodic boolean NOT NULL,
    description text
);


ALTER TABLE public.comet OWNER TO freecodecamp;

--
-- Name: comet_comet_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.comet_comet_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.comet_comet_id_seq OWNER TO freecodecamp;

--
-- Name: comet_comet_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.comet_comet_id_seq OWNED BY public.comet.comet_id;


--
-- Name: galaxy; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.galaxy (
    galaxy_id integer NOT NULL,
    name character varying(100) NOT NULL,
    galaxy_type character varying(50) NOT NULL,
    age_in_millions_of_years integer NOT NULL,
    distance_from_earth numeric(15,2),
    has_life boolean NOT NULL,
    description text
);


ALTER TABLE public.galaxy OWNER TO freecodecamp;

--
-- Name: galaxy_galaxy_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.galaxy_galaxy_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.galaxy_galaxy_id_seq OWNER TO freecodecamp;

--
-- Name: galaxy_galaxy_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.galaxy_galaxy_id_seq OWNED BY public.galaxy.galaxy_id;


--
-- Name: moon; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.moon (
    moon_id integer NOT NULL,
    name character varying(100) NOT NULL,
    planet_id integer NOT NULL,
    diameter_in_km integer,
    is_spherical boolean NOT NULL,
    has_water boolean NOT NULL,
    description text
);


ALTER TABLE public.moon OWNER TO freecodecamp;

--
-- Name: moon_moon_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.moon_moon_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.moon_moon_id_seq OWNER TO freecodecamp;

--
-- Name: moon_moon_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.moon_moon_id_seq OWNED BY public.moon.moon_id;


--
-- Name: planet; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.planet (
    planet_id integer NOT NULL,
    name character varying(100) NOT NULL,
    star_id integer NOT NULL,
    planet_type character varying(50) NOT NULL,
    age_in_millions_of_years integer,
    has_life boolean NOT NULL,
    distance_from_star numeric(10,2),
    description text
);


ALTER TABLE public.planet OWNER TO freecodecamp;

--
-- Name: planet_planet_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.planet_planet_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.planet_planet_id_seq OWNER TO freecodecamp;

--
-- Name: planet_planet_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.planet_planet_id_seq OWNED BY public.planet.planet_id;


--
-- Name: star; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.star (
    star_id integer NOT NULL,
    name character varying(100) NOT NULL,
    galaxy_id integer NOT NULL,
    star_type character varying(50) NOT NULL,
    temperature_in_kelvin integer,
    is_spherical boolean NOT NULL,
    description text
);


ALTER TABLE public.star OWNER TO freecodecamp;

--
-- Name: star_star_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.star_star_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.star_star_id_seq OWNER TO freecodecamp;

--
-- Name: star_star_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.star_star_id_seq OWNED BY public.star.star_id;


--
-- Name: comet comet_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.comet ALTER COLUMN comet_id SET DEFAULT nextval('public.comet_comet_id_seq'::regclass);


--
-- Name: galaxy galaxy_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.galaxy ALTER COLUMN galaxy_id SET DEFAULT nextval('public.galaxy_galaxy_id_seq'::regclass);


--
-- Name: moon moon_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.moon ALTER COLUMN moon_id SET DEFAULT nextval('public.moon_moon_id_seq'::regclass);


--
-- Name: planet planet_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.planet ALTER COLUMN planet_id SET DEFAULT nextval('public.planet_planet_id_seq'::regclass);


--
-- Name: star star_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.star ALTER COLUMN star_id SET DEFAULT nextval('public.star_star_id_seq'::regclass);


--
-- Data for Name: comet; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.comet VALUES (1, 'Halley', 54, true, 'Most famous periodic comet');
INSERT INTO public.comet VALUES (2, 'Hale-Bopp', 44, false, 'Bright comet seen in 1997');
INSERT INTO public.comet VALUES (3, 'Encke', 70, true, 'Shortest orbital period comet');


--
-- Data for Name: galaxy; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.galaxy VALUES (1, 'Milky Way', 'Spiral', 13600, 0.00, true, 'Home galaxy of Earth');
INSERT INTO public.galaxy VALUES (2, 'Andromeda', 'Spiral', 10000, 2537000.00, false, 'Nearest major galaxy');
INSERT INTO public.galaxy VALUES (3, 'Triangulum', 'Spiral', 12000, 3000000.00, false, 'Small spiral galaxy');
INSERT INTO public.galaxy VALUES (4, 'Whirlpool', 'Spiral', 400, 23000000.00, false, 'Interacting grand-design galaxy');
INSERT INTO public.galaxy VALUES (5, 'Sombrero', 'Elliptical', 13000, 29000000.00, false, 'Galaxy with bright nucleus');
INSERT INTO public.galaxy VALUES (6, 'Black Eye', 'Spiral', 13200, 17000000.00, false, 'Galaxy with dark band');


--
-- Data for Name: moon; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.moon VALUES (1, 'Moon', 3, 3474, true, true, 'Earth natural satellite');
INSERT INTO public.moon VALUES (2, 'Phobos', 4, 22, false, false, 'Moon of Mars');
INSERT INTO public.moon VALUES (3, 'Deimos', 4, 12, false, false, 'Small moon of Mars');
INSERT INTO public.moon VALUES (4, 'Io', 5, 3643, true, false, 'Volcanic moon');
INSERT INTO public.moon VALUES (5, 'Europa', 5, 3121, true, true, 'Ice-covered moon');
INSERT INTO public.moon VALUES (6, 'Ganymede', 5, 5268, true, true, 'Largest moon');
INSERT INTO public.moon VALUES (7, 'Callisto', 5, 4821, true, true, 'Heavily cratered moon');
INSERT INTO public.moon VALUES (8, 'Titan', 6, 5150, true, true, 'Largest moon of Saturn');
INSERT INTO public.moon VALUES (9, 'Rhea', 6, 1528, true, false, 'Saturn moon');
INSERT INTO public.moon VALUES (10, 'Iapetus', 6, 1469, true, false, 'Two-tone moon');
INSERT INTO public.moon VALUES (11, 'Dione', 6, 1123, true, false, 'Icy moon');
INSERT INTO public.moon VALUES (12, 'Tethys', 6, 1062, true, false, 'Cratered moon');
INSERT INTO public.moon VALUES (13, 'Enceladus', 6, 504, true, true, 'Water geysers present');
INSERT INTO public.moon VALUES (14, 'Miranda', 7, 471, true, false, 'Moon of Uranus');
INSERT INTO public.moon VALUES (15, 'Ariel', 7, 1158, true, false, 'Bright Uranus moon');
INSERT INTO public.moon VALUES (16, 'Umbriel', 7, 1169, true, false, 'Dark Uranus moon');
INSERT INTO public.moon VALUES (17, 'Titania', 7, 1578, true, false, 'Largest Uranus moon');
INSERT INTO public.moon VALUES (18, 'Oberon', 7, 1523, true, false, 'Outer Uranus moon');
INSERT INTO public.moon VALUES (19, 'Triton', 8, 2706, true, true, 'Largest Neptune moon');
INSERT INTO public.moon VALUES (20, 'Nereid', 8, 340, false, false, 'Irregular Neptune moon');


--
-- Data for Name: planet; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.planet VALUES (1, 'Mercury', 1, 'Rocky', 4500, false, 57.90, 'Closest planet to Sun');
INSERT INTO public.planet VALUES (2, 'Venus', 1, 'Rocky', 4500, false, 108.20, 'Hottest planet');
INSERT INTO public.planet VALUES (3, 'Earth', 1, 'Rocky', 4500, true, 149.60, 'Planet with life');
INSERT INTO public.planet VALUES (4, 'Mars', 1, 'Rocky', 4500, false, 227.90, 'Red planet');
INSERT INTO public.planet VALUES (5, 'Jupiter', 1, 'Gas Giant', 4500, false, 778.50, 'Largest planet');
INSERT INTO public.planet VALUES (6, 'Saturn', 1, 'Gas Giant', 4500, false, 1433.50, 'Planet with rings');
INSERT INTO public.planet VALUES (7, 'Uranus', 1, 'Ice Giant', 4500, false, 2872.50, 'Tilted planet');
INSERT INTO public.planet VALUES (8, 'Neptune', 1, 'Ice Giant', 4500, false, 4495.10, 'Farthest major planet');
INSERT INTO public.planet VALUES (9, 'Kepler-22b', 2, 'Exoplanet', 4000, false, 600.50, 'Potentially habitable');
INSERT INTO public.planet VALUES (10, 'Proxima b', 5, 'Exoplanet', 4800, false, 7.50, 'Closest exoplanet');
INSERT INTO public.planet VALUES (11, 'Gliese 581g', 6, 'Exoplanet', 5000, false, 20.00, 'Possibly habitable');
INSERT INTO public.planet VALUES (12, 'HD 209458 b', 4, 'Gas Giant', 3500, false, 150.00, 'Hot Jupiter');


--
-- Data for Name: star; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.star VALUES (1, 'Sun', 1, 'G-Type', 5778, true, 'Star of the Solar System');
INSERT INTO public.star VALUES (2, 'Sirius', 1, 'A-Type', 9940, true, 'Brightest night sky star');
INSERT INTO public.star VALUES (3, 'Betelgeuse', 1, 'Red Supergiant', 3500, true, 'Massive dying star');
INSERT INTO public.star VALUES (4, 'Rigel', 1, 'Blue Supergiant', 12100, true, 'Bright blue star');
INSERT INTO public.star VALUES (5, 'Proxima Centauri', 1, 'Red Dwarf', 3042, true, 'Closest star to Sun');
INSERT INTO public.star VALUES (6, 'Alpha Centauri A', 1, 'G-Type', 5790, true, 'Binary star system');


--
-- Name: comet_comet_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.comet_comet_id_seq', 3, true);


--
-- Name: galaxy_galaxy_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.galaxy_galaxy_id_seq', 6, true);


--
-- Name: moon_moon_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.moon_moon_id_seq', 20, true);


--
-- Name: planet_planet_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.planet_planet_id_seq', 12, true);


--
-- Name: star_star_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.star_star_id_seq', 6, true);


--
-- Name: comet comet_name_key; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.comet
    ADD CONSTRAINT comet_name_key UNIQUE (name);


--
-- Name: comet comet_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.comet
    ADD CONSTRAINT comet_pkey PRIMARY KEY (comet_id);


--
-- Name: galaxy galaxy_name_key; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.galaxy
    ADD CONSTRAINT galaxy_name_key UNIQUE (name);


--
-- Name: galaxy galaxy_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.galaxy
    ADD CONSTRAINT galaxy_pkey PRIMARY KEY (galaxy_id);


--
-- Name: moon moon_name_key; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.moon
    ADD CONSTRAINT moon_name_key UNIQUE (name);


--
-- Name: moon moon_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.moon
    ADD CONSTRAINT moon_pkey PRIMARY KEY (moon_id);


--
-- Name: planet planet_name_key; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.planet
    ADD CONSTRAINT planet_name_key UNIQUE (name);


--
-- Name: planet planet_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.planet
    ADD CONSTRAINT planet_pkey PRIMARY KEY (planet_id);


--
-- Name: star star_name_key; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.star
    ADD CONSTRAINT star_name_key UNIQUE (name);


--
-- Name: star star_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.star
    ADD CONSTRAINT star_pkey PRIMARY KEY (star_id);


--
-- Name: moon moon_planet_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.moon
    ADD CONSTRAINT moon_planet_id_fkey FOREIGN KEY (planet_id) REFERENCES public.planet(planet_id);


--
-- Name: planet planet_star_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.planet
    ADD CONSTRAINT planet_star_id_fkey FOREIGN KEY (star_id) REFERENCES public.star(star_id);


--
-- Name: star star_galaxy_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.star
    ADD CONSTRAINT star_galaxy_id_fkey FOREIGN KEY (galaxy_id) REFERENCES public.galaxy(galaxy_id);


--
-- PostgreSQL database dump complete
--
