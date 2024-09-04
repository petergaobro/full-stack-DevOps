/*
 Navicat PostgreSQL Dump SQL

 Source Server         : localhost
 Source Server Type    : PostgreSQL
 Source Host           : localhost:5433
 Source Catalog        : postgres
 Source Schema         : p-postgres

 Target Server Type    : PostgreSQL
 Date: 03/09/2024 19:44:14
*/


-- ----------------------------
-- Table structure for result
-- ----------------------------
DROP TABLE IF EXISTS "p-postgres"."result";
CREATE TABLE "p-postgres"."result" (
  "id" varchar(64) COLLATE "pg_catalog"."default" NOT NULL,
  "status" varchar(255) COLLATE "pg_catalog"."default",
  "repositoryName" varchar(255) COLLATE "pg_catalog"."default",
  "findings" jsonb
)
;
COMMENT ON COLUMN "p-postgres"."result"."id" IS 'id';
COMMENT ON COLUMN "p-postgres"."result"."status" IS '"Queued" "In Progress" "Success"
"Failure" ';
COMMENT ON COLUMN "p-postgres"."result"."repositoryName" IS 'repository name';
COMMENT ON COLUMN "p-postgres"."result"."findings" IS 'scan result';

-- ----------------------------
-- Records of result
-- ----------------------------
INSERT INTO "p-postgres"."result" VALUES ('967628a5-b62b-9d93-cb4e-95072bc3a48f', 'Queued', 'ceshi', '[{"type": "sast", "ruleId": "G402", "location": {"path": "connectors/apigateway.go", "positions": {"begin": {"line": 60}}}, "metadata": {"severity": "HIGH", "description": "TLS IsdfSabsVhjkl set true."}}, {"type": "sast", "ruleId": "G404", "location": {"path": "util/util.go", "positions": {"begin": {"line": 32}}}, "metadata": {"severity": "HIGH", "description": "Use of weak random number generator (math/rand instead of crypto/rand)"}}]');
INSERT INTO "p-postgres"."result" VALUES ('071381b4-ed9b-343b-9232-2f4771c12ca3', 'In Progress', 'test1', '[{"type": "sast", "ruleId": "G402", "location": {"path": "connectors/apigateway.go", "positions": {"begin": {"line": 60}}}, "metadata": {"severity": "HIGH", "description": "TLS IsdfSabsVhjkl set true."}}, {"type": "sast", "ruleId": "G404", "location": {"path": "util/util.go", "positions": {"begin": {"line": 32}}}, "metadata": {"severity": "HIGH", "description": "Use of weak random number generator (math/rand instead of crypto/rand)"}}]');
INSERT INTO "p-postgres"."result" VALUES ('7e0b7b4f-7b6e-fdfa-7d55-234e1673eead', 'Queued', 'test2', '[{"type": "sast", "ruleId": "G402", "location": {"path": "connectors/apigateway.go", "positions": {"begin": {"line": 60}}}, "metadata": {"severity": "HIGH", "description": "TLS IsdfSabsVhjkl set true."}}, {"type": "sast", "ruleId": "G404", "location": {"path": "util/util.go", "positions": {"begin": {"line": 32}}}, "metadata": {"severity": "HIGH", "description": "Use of weak random number generator (math/rand instead of crypto/rand)"}}]');

-- ----------------------------
-- Uniques structure for table result
-- ----------------------------
ALTER TABLE "p-postgres"."result" ADD CONSTRAINT "ruleId" UNIQUE ("id");

-- ----------------------------
-- Primary Key structure for table result
-- ----------------------------
ALTER TABLE "p-postgres"."result" ADD CONSTRAINT "result_pkey" PRIMARY KEY ("id");
