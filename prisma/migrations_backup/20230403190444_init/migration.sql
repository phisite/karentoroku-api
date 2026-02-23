/*
  Warnings:

  - You are about to drop the column `dayName` on the `DateSlot` table. All the data in the column will be lost.
  - You are about to drop the `DateOnTimeSlot` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `DaySlot` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TimeSlot` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "DateOnTimeSlot" DROP CONSTRAINT "DateOnTimeSlot_dateSlotId_fkey";

-- DropForeignKey
ALTER TABLE "DateOnTimeSlot" DROP CONSTRAINT "DateOnTimeSlot_timeSlotId_fkey";

-- DropForeignKey
ALTER TABLE "DateSlot" DROP CONSTRAINT "DateSlot_dayName_fkey";

-- AlterTable
ALTER TABLE "DateSlot" DROP COLUMN "dayName";

-- DropTable
DROP TABLE "DateOnTimeSlot";

-- DropTable
DROP TABLE "DaySlot";

-- DropTable
DROP TABLE "TimeSlot";

-- CreateTable
CREATE TABLE "DateOnDayTimeSlot" (
    "id" SERIAL NOT NULL,
    "dayTimeSlotId" INTEGER NOT NULL,
    "dateSlotId" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DateOnDayTimeSlot_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DayTimeSlot" (
    "id" SERIAL NOT NULL,
    "day" TEXT NOT NULL,
    "startTime" INTEGER NOT NULL,
    "endTime" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DayTimeSlot_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "DateOnDayTimeSlot" ADD CONSTRAINT "DateOnDayTimeSlot_dayTimeSlotId_fkey" FOREIGN KEY ("dayTimeSlotId") REFERENCES "DayTimeSlot"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DateOnDayTimeSlot" ADD CONSTRAINT "DateOnDayTimeSlot_dateSlotId_fkey" FOREIGN KEY ("dateSlotId") REFERENCES "DateSlot"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
