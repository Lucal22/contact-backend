/*
  Warnings:

  - You are about to drop the column `accountId` on the `Contact` table. All the data in the column will be lost.
  - Added the required column `accountEmail` to the `Contact` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Contact" DROP CONSTRAINT "Contact_accountId_fkey";

-- AlterTable
ALTER TABLE "Contact" DROP COLUMN "accountId",
ADD COLUMN     "accountEmail" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Contact" ADD CONSTRAINT "Contact_accountEmail_fkey" FOREIGN KEY ("accountEmail") REFERENCES "accounts"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
