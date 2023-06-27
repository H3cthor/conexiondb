-- CreateTable
CREATE TABLE `vista_product` (
    `product_name` VARCHAR(191) NOT NULL,
    `product_description` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `vista_product_product_name_key`(`product_name`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
