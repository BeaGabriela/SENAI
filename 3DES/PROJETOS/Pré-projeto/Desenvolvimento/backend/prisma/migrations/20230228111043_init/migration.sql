-- AlterTable
ALTER TABLE `manutencao` ADD COLUMN `concluidas` BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `operacoes` ADD COLUMN `concluidas` BOOLEAN NOT NULL DEFAULT false;
