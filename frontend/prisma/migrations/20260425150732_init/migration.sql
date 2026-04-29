/*
  Warnings:

  - You are about to drop the `GitHubCommit` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ProjectUpdate` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `YouTubeVideo` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "GitHubCommit" DROP CONSTRAINT "GitHubCommit_projectId_fkey";

-- DropForeignKey
ALTER TABLE "ProjectUpdate" DROP CONSTRAINT "ProjectUpdate_authorId_fkey";

-- DropForeignKey
ALTER TABLE "ProjectUpdate" DROP CONSTRAINT "ProjectUpdate_projectId_fkey";

-- DropForeignKey
ALTER TABLE "YouTubeVideo" DROP CONSTRAINT "YouTubeVideo_projectId_fkey";

-- DropTable
DROP TABLE "GitHubCommit";

-- DropTable
DROP TABLE "ProjectUpdate";

-- DropTable
DROP TABLE "YouTubeVideo";

-- CreateTable
CREATE TABLE "github_commit" (
    "id" TEXT NOT NULL,
    "projectId" TEXT NOT NULL,
    "repoName" TEXT NOT NULL,
    "sha" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "authorName" TEXT,
    "authorEmail" TEXT,
    "commitUrl" TEXT,
    "committedAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "github_commit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "youtube_video" (
    "id" TEXT NOT NULL,
    "projectId" TEXT NOT NULL,
    "videoId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "thumbnailUrl" TEXT,
    "publishedAt" TIMESTAMP(3) NOT NULL,
    "isPublic" BOOLEAN NOT NULL DEFAULT false,
    "sharedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "youtube_video_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "project_update" (
    "id" TEXT NOT NULL,
    "projectId" TEXT NOT NULL,
    "authorId" TEXT,
    "title" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "project_update_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "github_commit" ADD CONSTRAINT "github_commit_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "youtube_video" ADD CONSTRAINT "youtube_video_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "project_update" ADD CONSTRAINT "project_update_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "project_update" ADD CONSTRAINT "project_update_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;
