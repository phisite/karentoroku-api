/*
  Warnings:

  - You are about to drop the column `daySlotId` on the `DateSlot` table. All the data in the column will be lost.
  - Added the required column `dayName` to the `DateSlot` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "DateSlot" DROP CONSTRAINT "DateSlot_daySlotId_fkey";

-- AlterTable
ALTER TABLE "DateSlot" DROP COLUMN "daySlotId",
ADD COLUMN     "dayName" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "DateSlot" ADD CONSTRAINT "DateSlot_dayName_fkey" FOREIGN KEY ("dayName") REFERENCES "DaySlot"("name") ON DELETE RESTRICT ON UPDATE CASCADE;
