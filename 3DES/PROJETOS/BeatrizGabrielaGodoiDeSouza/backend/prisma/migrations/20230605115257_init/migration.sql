-- CreateTable
CREATE TABLE `Cliente` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Automovel` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `modelo` VARCHAR(191) NOT NULL,
    `preco` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Concessionaria` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `concessionaria` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Alocacao` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `area` INTEGER NOT NULL,
    `automovel` INTEGER NOT NULL,
    `concessionaria` INTEGER NOT NULL,
    `quantidade` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Venda` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `cliente` INTEGER NOT NULL,
    `concessionaria` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Alocacao` ADD CONSTRAINT `Alocacao_automovel_fkey` FOREIGN KEY (`automovel`) REFERENCES `Automovel`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Alocacao` ADD CONSTRAINT `Alocacao_concessionaria_fkey` FOREIGN KEY (`concessionaria`) REFERENCES `Concessionaria`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Venda` ADD CONSTRAINT `Venda_cliente_fkey` FOREIGN KEY (`cliente`) REFERENCES `Cliente`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Venda` ADD CONSTRAINT `Venda_concessionaria_fkey` FOREIGN KEY (`concessionaria`) REFERENCES `Concessionaria`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
