
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);




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
  "mission__id" int,
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
  "mission__id" int,
  "launch_date" DATE,
  "location" varchar,
  "payload" varchar
);

CREATE TABLE "landing_info" 
(
  "id" SERIAL PRIMARY KEY,
  "mission__id" int,
	"landing_date" date,
  "landing_location" varchar,
  "recovery_ship" varchar
);

CREATE TABLE "orbital_info" 
(
  "id" SERIAL PRIMARY KEY,
  "mission__id" int,
  "altitude" varchar,
  "inclination" varchar,
  "number_of_orbits" varchar,
  "mission_duration" varchar,
  "distance_traveled" varchar
);

CREATE TABLE "lunar_info" 
(
  "id" SERIAL PRIMARY KEY,
  "mission_id" int,
  "landed" boolean,
  "lunar_location" varchar,
  "lunar_coordinates" varchar,
  "time_on_lunar_surface" varchar,
  "rover" boolean,
  "image_gallery" varchar,
  "lunar_activities" varchar	
);

-- /// END DATABASE SETUP ///