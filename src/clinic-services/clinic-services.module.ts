import { Module } from '@nestjs/common';
import { ClinicServicesService } from './clinic-services.service';
import { ClinicServicesController } from './clinic-services.controller';

@Module({
  controllers: [ClinicServicesController],
  providers: [ClinicServicesService]
})
export class ClinicServicesModule {}
