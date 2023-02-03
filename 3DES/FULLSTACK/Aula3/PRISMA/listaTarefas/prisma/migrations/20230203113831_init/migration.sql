-- CreateTable
CREATE TABLE `statuss` (
    `id_status` INTEGER NOT NULL AUTO_INCREMENT,
    `status` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id_status`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tarefasPrisma` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `descricao` VARCHAR(191) NOT NULL,
    `horaTarefa` DATETIME(3) NOT NULL,
    `horaFinalizada` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `status` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `tarefasPrisma` ADD CONSTRAINT `tarefasPrisma_status_fkey` FOREIGN KEY (`status`) REFERENCES `statuss`(`id_status`) ON DELETE RESTRICT ON UPDATE CASCADE;
