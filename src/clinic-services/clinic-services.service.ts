import { Injectable } from '@nestjs/common';
import { CreateClinicServiceDto } from './dto/create-clinic-service.dto';
import { UpdateClinicServiceDto } from './dto/update-clinic-service.dto';

@Injectable()
export class ClinicServicesService {
  create(createClinicServiceDto: CreateClinicServiceDto) {
    return 'This action adds a new clinicService';
  }

  findAll() {
    return `This action returns all clinicServices`;
  }

  findOne(id: number) {
    return `This action returns a #${id} clinicService`;
  }

  update(id: number, updateClinicServiceDto: UpdateClinicServiceDto) {
    return `This action updates a #${id} clinicService`;
  }

  remove(id: number) {
    return `This action removes a #${id} clinicService`;
  }
}
