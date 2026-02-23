/*
  Warnings:

  - You are about to drop the column `eventTypeId` on the `DateOnTimeSlot` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "DateOnTimeSlot" DROP CONSTRAINT "DateOnTimeSlot_eventTypeId_fkey";

-- AlterTable
ALTER TABLE "DateOnTimeSlot" DROP COLUMN "eventTypeId";
