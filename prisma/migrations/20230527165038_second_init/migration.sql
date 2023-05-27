/*
  Warnings:

  - You are about to drop the column `eventId` on the `Quote` table. All the data in the column will be lost.
  - You are about to drop the column `location` on the `Quote` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Quote` table. All the data in the column will be lost.
  - You are about to drop the `Event` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `quoted_by` to the `Quote` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Quote" DROP CONSTRAINT "Quote_eventId_fkey";

-- DropForeignKey
ALTER TABLE "Quote" DROP CONSTRAINT "Quote_userId_fkey";

-- AlterTable
ALTER TABLE "Quote" DROP COLUMN "eventId",
DROP COLUMN "location",
DROP COLUMN "userId",
ADD COLUMN     "quoted_by" TEXT NOT NULL,
ALTER COLUMN "date_created" SET DEFAULT CURRENT_TIMESTAMP;

-- DropTable
DROP TABLE "Event";

-- DropTable
DROP TABLE "User";
