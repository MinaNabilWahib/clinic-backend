import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';
import { Doctor, DoctorDocument } from './schemas/doctor.schema';

@Injectable()
export class DoctorService {
  constructor(
    @InjectModel(Doctor.name)
    private readonly doctorModel: Model<DoctorDocument>,
  ) {}

  async create(createDoctorDto: CreateDoctorDto) {
    const createdDoctor = await this.doctorModel.create(createDoctorDto);
    return createdDoctor;
  }

  async findAll(): Promise<Doctor[]> {
    return this.doctorModel.find().exec();
  }

  async findOne(id: string): Promise<Doctor> {
    return this.doctorModel.findOne({ _id: id }).exec();
  }

  async update(id: string, updateDoctorDto: UpdateDoctorDto) {
    const updatedDoctor = await this.doctorModel
      .findByIdAndUpdate({ _id: id }, updateDoctorDto)
      .exec();
    return updatedDoctor;
  }

  async remove(id: string) {
    const deletedDoctor = await this.doctorModel
      .findByIdAndDelete({ _id: id })
      .exec();
    return deletedDoctor;
  }
}
