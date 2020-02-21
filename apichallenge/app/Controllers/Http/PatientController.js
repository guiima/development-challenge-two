"use strict";

const Patient = use("App/Models/Patient");

class PatientController {
  async index() {
    const data = await Patient.all();

    return data;
  }

  async store({ request }) {
    const data = request.only([
      "name",
      "rg",
      "cpf",
      "birth",
      "street",
      "number",
      "city",
      "state",
      "zip_code",
      "email",
      "phone"
    ]);

    const patient = await Patient.create(data);

    return patient;
  }

  async show({ params }) {
    const data = await Patient.findOrFail(params.id);

    return data;
  }

  async update({ params, request }) {
    const patient = await Patient.findOrFail(params.id);

    const data = request.only([
      "name",
      "rg",
      "cpf",
      "birth",
      "street",
      "number",
      "city",
      "state",
      "zip_code",
      "email",
      "phone"
    ]);

    patient.merge(data);
    await patient.save();

    return patient;
  }

  async destroy({ params }) {
    const patient = await Patient.findOrFail(params.id);

    await patientinde.delete();
  }
}

module.exports = PatientController;
