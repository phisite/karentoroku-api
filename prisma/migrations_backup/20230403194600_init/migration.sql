/*
  Warnings:

  - You are about to drop the column `date` on the `DateSlot` table. All the data in the column will be lost.
  - You are about to drop the `DateOnDayTimeSlot` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `DayTimeSlot` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `daySlotId` to the `DateSlot` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `DateSlot` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "DateOnDayTimeSlot" DROP CONSTRAINT "DateOnDayTimeSlot_dateSlotId_fkey";

-- DropForeignKey
ALTER TABLE "DateOnDayTimeSlot" DROP CONSTRAINT "DateOnDayTimeSlot_dayTimeSlotId_fkey";

-- AlterTable
ALTER TABLE "DateSlot" DROP COLUMN "date",
ADD COLUMN     "daySlotId" INTEGER NOT NULL,
ADD COLUMN     "name" TIMESTAMP(3) NOT NULL;

-- DropTable
DROP TABLE "DateOnDayTimeSlot";

-- DropTable
DROP TABLE "DayTimeSlot";

-- CreateTable
CREATE TABLE "DaySlot" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DaySlot_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DateOnTimeSlot" (
    "id" SERIAL NOT NULL,
    "timeSlotId" INTEGER NOT NULL,
    "dateSlotId" INTEGER NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'available',
    "eventTypeId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DateOnTimeSlot_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TimeSlot" (
    "id" SERIAL NOT NULL,
    "startTime" INTEGER NOT NULL,
    "endTime" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TimeSlot_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DaySlot_name_key" ON "DaySlot"("name");

-- CreateIndex
CREATE UNIQUE INDEX "TimeSlot_startTime_endTime_key" ON "TimeSlot"("startTime", "endTime");

-- AddForeignKey
ALTER TABLE "DateSlot" ADD CONSTRAINT "DateSlot_daySlotId_fkey" FOREIGN KEY ("daySlotId") REFERENCES "DaySlot"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DateOnTimeSlot" ADD CONSTRAINT "DateOnTimeSlot_timeSlotId_fkey" FOREIGN KEY ("timeSlotId") REFERENCES "TimeSlot"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DateOnTimeSlot" ADD CONSTRAINT "DateOnTimeSlot_dateSlotId_fkey" FOREIGN KEY ("dateSlotId") REFERENCES "DateSlot"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DateOnTimeSlot" ADD CONSTRAINT "DateOnTimeSlot_eventTypeId_fkey" FOREIGN KEY ("eventTypeId") REFERENCES "EventType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
