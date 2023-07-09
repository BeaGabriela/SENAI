-- CreateTable
CREATE TABLE `Finalizar` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_pedido` INTEGER NOT NULL,
    `entrega` VARCHAR(191) NOT NULL,
    `pagamento` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Finalizar` ADD CONSTRAINT `Finalizar_id_pedido_fkey` FOREIGN KEY (`id_pedido`) REFERENCES `Pedidos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
