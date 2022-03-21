import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ClinicServicesService } from './clinic-services.service';
import { CreateClinicServiceDto } from './dto/create-clinic-service.dto';
import { UpdateClinicServiceDto } from './dto/update-clinic-service.dto';

@Controller('clinic-services')
export class ClinicServicesController {
  constructor(private readonly clinicServicesService: ClinicServicesService) {}

  @Post()
  create(@Body() createClinicServiceDto: CreateClinicServiceDto) {
    return this.clinicServicesService.create(createClinicServiceDto);
  }

  @Get()
  findAll() {
    return this.clinicServicesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clinicServicesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClinicServiceDto: UpdateClinicServiceDto) {
    return this.clinicServicesService.update(+id, updateClinicServiceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clinicServicesService.remove(+id);
  }
}
