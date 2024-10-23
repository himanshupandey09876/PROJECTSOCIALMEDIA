/*
  Warnings:

  - Added the required column `desc` to the `Comment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Comment" ADD COLUMN     "desc" TEXT NOT NULL;
