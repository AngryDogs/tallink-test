CREATE TABLE `participants` (
	`participant_id`	INTEGER PRIMARY KEY AUTOINCREMENT,
	`name`	VARCHAR(255) NOT NULL,
	`birth_date`	DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`FK_conference_id`	INTEGER NOT NULL,
	FOREIGN KEY(`FK_conference_id`) REFERENCES `conferences`(`conference_id`) ON DELETE CASCADE
);

CREATE TABLE `conferences` (
	`conference_id`	INTEGER PRIMARY KEY AUTOINCREMENT,
	`conference_name`	VARCHAR(150) NOT NULL,
	`date_time`	DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`FK_room_id`	INTEGER NOT NULL,
	FOREIGN KEY(`FK_room_id`) REFERENCES `rooms`(`room_id`) ON DELETE CASCADE
);

CREATE TABLE `rooms` (
	`room_id`	INTEGER PRIMARY KEY AUTOINCREMENT,
	`name`	VARCHAR(255) NOT NULL,
	`location`	VARCHAR(255) NOT NULL,
	`max_seats`	INTEGER NOT NULL
);