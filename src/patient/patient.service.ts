import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { Patient, PatientDocument } from './schemas/patient.schema';

@Injectable()
export class PatientService {
  constructor(
    @InjectModel(Patient.name)
    private readonly patientModel: Model<PatientDocument>,
  ) {}

  async create(createPatientDto: CreatePatientDto) {
    const createdPatient = await this.patientModel.create(createPatientDto);
    return createdPatient;
  }

  async findAll(): Promise<Patient[]> {
    return this.patientModel.find().exec();
  }

  async findOne(id: string) {
    return this.patientModel.findOne({ _id: id }).exec();
  }

  async update(id: string, updatePatientDto: UpdatePatientDto) {
    const updatedPatient = await this.patientModel
      .findByIdAndUpdate({ _id: id }, updatePatientDto)
      .exec();
    return updatedPatient;
  }

  async remove(id: string) {
    const deletedPatient = await this.patientModel
      .findByIdAndDelete({ _id: id })
      .exec();
    return deletedPatient;
  }
}
