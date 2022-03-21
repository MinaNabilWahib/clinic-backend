import { PartialType } from '@nestjs/mapped-types';
import { CreateClinicServiceDto } from './create-clinic-service.dto';

export class UpdateClinicServiceDto extends PartialType(CreateClinicServiceDto) {}
