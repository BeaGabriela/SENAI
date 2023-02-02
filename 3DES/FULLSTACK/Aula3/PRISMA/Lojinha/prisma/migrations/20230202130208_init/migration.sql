-- CreateTable
CREATE TABLE `Setor` (
    `id_setor` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `comissao` INTEGER NOT NULL,

    PRIMARY KEY (`id_setor`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Produtos` (
    `id_produto` INTEGER NOT NULL AUTO_INCREMENT,
    `nomeProduto` VARCHAR(191) NOT NULL,
    `valorProduto` DOUBLE NOT NULL,
    `setores` INTEGER NOT NULL,

    PRIMARY KEY (`id_produto`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Vendedor` (
    `id_vendedor` INTEGER NOT NULL AUTO_INCREMENT,
    `nomeVendedor` VARCHAR(191) NOT NULL,
    `salario` DOUBLE NOT NULL,
    `setorCuida` INTEGER NOT NULL,

    PRIMARY KEY (`id_vendedor`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Produtos` ADD CONSTRAINT `Produtos_setores_fkey` FOREIGN KEY (`setores`) REFERENCES `Setor`(`id_setor`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Vendedor` ADD CONSTRAINT `Vendedor_setorCuida_fkey` FOREIGN KEY (`setorCuida`) REFERENCES `Setor`(`id_setor`) ON DELETE RESTRICT ON UPDATE CASCADE;
