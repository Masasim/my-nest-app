-- CreateTable
CREATE TABLE "ExampleEntity" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "ExampleEntity_email_key" ON "ExampleEntity"("email");
