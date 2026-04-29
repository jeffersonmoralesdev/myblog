ALTER TABLE `posts` MODIFY COLUMN `id` varchar(36) NOT NULL DEFAULT (uuid());--> statement-breakpoint
ALTER TABLE `posts` MODIFY COLUMN `published` tinyint NOT NULL;