-- CreateTable
CREATE TABLE `nivel` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nivel` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Usuario` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `senha` VARCHAR(191) NOT NULL,
    `funcao` VARCHAR(191) NOT NULL,
    `nivel` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Motorista` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Tipo_Veiculos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tipo` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Veiculos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `placa` VARCHAR(191) NOT NULL,
    `tipo` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Frotas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_Motorista` INTEGER NOT NULL,
    `id_veiculo` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Operacoes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `veiculo` INTEGER NOT NULL,
    `motorista` INTEGER NOT NULL,
    `data_saida` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `descricao` VARCHAR(191) NOT NULL,
    `data_retorno` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Manutencao` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `veiculo` INTEGER NOT NULL,
    `data_inicio` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `valor` DOUBLE NOT NULL,
    `descricao` VARCHAR(191) NOT NULL,
    `data_fim` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Relatorio_Manutencao` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `manutencao` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Relatorio_Operacao` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `operacao` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Usuario` ADD CONSTRAINT `Usuario_nivel_fkey` FOREIGN KEY (`nivel`) REFERENCES `nivel`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Veiculos` ADD CONSTRAINT `Veiculos_tipo_fkey` FOREIGN KEY (`tipo`) REFERENCES `Tipo_Veiculos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Frotas` ADD CONSTRAINT `Frotas_id_Motorista_fkey` FOREIGN KEY (`id_Motorista`) REFERENCES `Motorista`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Frotas` ADD CONSTRAINT `Frotas_id_veiculo_fkey` FOREIGN KEY (`id_veiculo`) REFERENCES `Veiculos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Operacoes` ADD CONSTRAINT `Operacoes_veiculo_fkey` FOREIGN KEY (`veiculo`) REFERENCES `Veiculos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Operacoes` ADD CONSTRAINT `Operacoes_motorista_fkey` FOREIGN KEY (`motorista`) REFERENCES `Motorista`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Manutencao` ADD CONSTRAINT `Manutencao_veiculo_fkey` FOREIGN KEY (`veiculo`) REFERENCES `Veiculos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Relatorio_Manutencao` ADD CONSTRAINT `Relatorio_Manutencao_manutencao_fkey` FOREIGN KEY (`manutencao`) REFERENCES `Manutencao`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Relatorio_Operacao` ADD CONSTRAINT `Relatorio_Operacao_operacao_fkey` FOREIGN KEY (`operacao`) REFERENCES `Operacoes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
