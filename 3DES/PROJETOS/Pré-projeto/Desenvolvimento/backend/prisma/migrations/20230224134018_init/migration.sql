/*
  Warnings:

  - You are about to drop the `frotas` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[email]` on the table `Usuario` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[placa]` on the table `Veiculos` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE `frotas` DROP FOREIGN KEY `Frotas_id_Motorista_fkey`;

-- DropForeignKey
ALTER TABLE `frotas` DROP FOREIGN KEY `Frotas_id_veiculo_fkey`;

-- AlterTable
ALTER TABLE `motorista` ADD COLUMN `ocupado` BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `veiculos` ADD COLUMN `uso` BOOLEAN NOT NULL DEFAULT false;

-- DropTable
DROP TABLE `frotas`;

-- CreateIndex
CREATE UNIQUE INDEX `Usuario_email_key` ON `Usuario`(`email`);

-- CreateIndex
CREATE UNIQUE INDEX `Veiculos_placa_key` ON `Veiculos`(`placa`);
