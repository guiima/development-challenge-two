"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class PatientSchema extends Schema {
  up() {
    this.create("patients", table => {
      table.increments();
      table.string("name").notNullable();
      table
        .string("rg")
        .notNullable()
        .unique();
      table
        .string("cpf")
        .notNullable()
        .unique();
      table.date("birth").notNullable();
      table.string("street").notNullable();
      table.string("number").notNullable();
      table.string("city").notNullable();
      table.string("state").notNullable();
      table.string("zip_code").notNullable();
      table
        .string("email")
        .notNullable()
        .unique();
      table
        .string("fone")
        .notNullable()
        .unique();
      table.timestamps();
    });
  }

  down() {
    this.drop("patients");
  }
}

module.exports = PatientSchema;
