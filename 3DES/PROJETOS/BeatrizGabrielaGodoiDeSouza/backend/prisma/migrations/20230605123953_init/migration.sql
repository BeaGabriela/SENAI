/*
  Warnings:

  - You are about to drop the `venda` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `venda` DROP FOREIGN KEY `Venda_cliente_fkey`;

-- DropForeignKey
ALTER TABLE `venda` DROP FOREIGN KEY `Venda_concessionaria_fkey`;

-- DropTable
DROP TABLE `venda`;

-- CreateTable
CREATE TABLE `Vendas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `client` INTEGER NOT NULL,
    `concessionari` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Vendas` ADD CONSTRAINT `Vendas_client_fkey` FOREIGN KEY (`client`) REFERENCES `Cliente`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Vendas` ADD CONSTRAINT `Vendas_concessionari_fkey` FOREIGN KEY (`concessionari`) REFERENCES `Concessionaria`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
