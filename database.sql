
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);


-- /// SQL QUERY SETUP FOR DATA RETURN ///

SELECT * FROM "mission"
JOIN "launch_info" ON "mission"."launch_id" = "launch_info"."launch_id"
JOIN "landing_info" ON "mission"."landing_id" = "landing_info"."landing_id"
JOIN "crew" ON "mission"."crew_id" = "crew"."crew_id"
JOIN "orbital_info" ON "mission"."orbit_id" = "orbital_info"."orbit_id"
JOIN "lunar_info" ON "mission"."lunar_id" = "lunar_info"."lunar_id"
ORDER BY "mission_name" DESC;

-- /// DATA SETUP FOR API DATABASE ///

CREATE TABLE "mission" 
 (
  "id" SERIAL PRIMARY KEY,
  "mission_name" varchar,
  "crewed" boolean,
  "mission_patch" varchar,
  "mission_overview" varchar,
  "mission_problems" varchar,
  "crew_id" int,
  "launch_id" int,
  "orbit_id" int,
  "landing_id" int,
  "lunar_id" int
);

CREATE TABLE "crew" 
 (
  "id" SERIAL PRIMARY KEY,
  "crew_id" int,
	"commander" varchar,
  "command_module_pilot" varchar,
  "lunar_module_pilot" varchar,
  "crew_image" varchar,
  "backup_commander" varchar,
  "backup_command_module_pilot" varchar,
  "backup_lunar_module_pilot" varchar
);

CREATE TABLE "launch_info" 
(
  "id" SERIAL PRIMARY KEY,
  "launch_id" int,
  "launch_date" DATE,
  "location" varchar,
  "payload" varchar
);

CREATE TABLE "landing_info" 
(
  "id" SERIAL PRIMARY KEY,
  "landing_id" int,
	"landing_date" date,
  "landing_location" varchar,
  "recovery_ship" varchar
);

CREATE TABLE "orbital_info" 
(
  "id" SERIAL PRIMARY KEY,
  "orbit_id" int,
  "altitude" varchar,
  "inclination" varchar,
  "number_of_orbits" varchar,
  "mission_duration" varchar,
  "distance_traveled" varchar
);

CREATE TABLE "lunar_info" 
(
  "id" SERIAL PRIMARY KEY,
  "lunar_id" int,
  "landed" boolean,
  "lunar_location" varchar,
  "lunar_coordinates" varchar,
  "time_on_lunar_surface" varchar,
  "rover" boolean,
  "image_gallery" varchar,
  "lunar_activities" varchar	
);

-- /// END DATABASE SETUP ///