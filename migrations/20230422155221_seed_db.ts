import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("readings", (table) => {
    table.dateTime("timestamp").notNullable();
    table.float("temperature");
    table.integer("humidity");
    table.jsonb("wind");
    table.integer("pressure");
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("readings");
}
