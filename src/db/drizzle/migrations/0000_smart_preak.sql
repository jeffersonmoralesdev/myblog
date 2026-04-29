CREATE TABLE `posts` (
	`id` text NOT NULL,
	`slug` text NOT NULL,
	`title` text NOT NULL,
	`excerpt` text NOT NULL,
	`content` text NOT NULL,
	`coverImageUrl` text NOT NULL,
	`published` boolean NOT NULL,
	`createdAt` text NOT NULL,
	`updateAt` text NOT NULL,
	`author` text NOT NULL,
	CONSTRAINT `posts_id` PRIMARY KEY(`id`),
	CONSTRAINT `posts_slug_unique` UNIQUE(`slug`)
);
