import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DoctorModule } from './doctor/doctor.module';
import { PatientModule } from './patient/patient.module';
import { AppointmentModule } from './appointment/appointment.module';
import { MedicineModule } from './medicine/medicine.module';
import { EmployeeModule } from './employee/employee.module';
import { PrescriptionModule } from './prescription/prescription.module';
import { InvoiceModule } from './invoice/invoice.module';
import { ClinicServicesModule } from './clinic-services/clinic-services.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/clinic'),
    DoctorModule,
    PatientModule,
    AppointmentModule,
    MedicineModule,
    EmployeeModule,
    PrescriptionModule,
    InvoiceModule,
    ClinicServicesModule,
  ],
})
export class AppModule {}
