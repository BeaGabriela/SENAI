/*
  Warnings:

  - A unique constraint covering the columns `[cpf]` on the table `Motorista` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[cnh]` on the table `Motorista` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `cnh` to the `Motorista` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cpf` to the `Motorista` table without a default value. This is not possible if the table is not empty.
  - Added the required column `modelo` to the `Veiculos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `motorista` ADD COLUMN `cnh` VARCHAR(191) NOT NULL,
    ADD COLUMN `cpf` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `veiculos` ADD COLUMN `modelo` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Motorista_cpf_key` ON `Motorista`(`cpf`);

-- CreateIndex
CREATE UNIQUE INDEX `Motorista_cnh_key` ON `Motorista`(`cnh`);
