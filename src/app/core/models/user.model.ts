import { Address } from './address.model';
import { Company } from './company.model';
import { EnumSelector } from './enum-selector.model';
import { DaysOfWeek } from './daysOfWeek.mode';

export class User {
  id: number;
  name: string;
  username: string;
  email: string;
  address?: Address;
  phone?: string;
  website?: string;
  company?: Company;
  posts?: number;
  albums?: number;
  photos?: number;
  daysOfWeek?: DaysOfWeek;
  rideInGroup?: string;
}
