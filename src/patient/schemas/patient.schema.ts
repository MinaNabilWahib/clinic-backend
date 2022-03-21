import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PatientDocument = Patient & Document;

@Schema()
export class Patient {
  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop()
  disease: string;
}

export const PatientSchema = SchemaFactory.createForClass(Patient);
