import { GovernmentOffice } from './GovernmentOffice';

export interface Offices{
    governmentOffices: GovernmentOffice[];
}
    
export const offices: Offices = {
    governmentOffices: [
      {
        name: 'Kecskemét Kormányablak',
        address: '6000 Kecskemét, Kossuth tér 1.'
      },
      {
        name: 'Kecskemét Kormányablak 2.',
        address: '6000 Kecskemét, Kossuth tér 2.'
      },
      {
        name: 'Kecskemét Kormányablak 3.',
        address: '6000 Kecskemét, Kossuth tér 3.'
      },
      {
        name: 'Baja Kormányablak',
        address: '6500 Baja, Szegedi út 75.'
      },
      {
        name: 'Kiskunhalas Kormányablak',
        address: '6400 Kiskunhalas, Szent István tér 6.'
      },
      {
        name: 'Kecskemét Kormányablak 4.',
        address: '6000 Kecskemét, Kossuth tér 4.',
      },
      {
        name: 'Kiskunhalas Kormányablak 2.',
        address: '6400 Kiskunhalas, Széchenyi tér 10.',
      },
      {
        name: 'Baja Kormányablak 2.',
        address: '6500 Baja, Szegedi út 100.',
      },
      {
        name: 'Kiskőrös Kormányablak',
        address: '6200 Kiskőrös, Kossuth tér 14.',
      },
      {
        name: 'Kalocsa Kormányablak',
        address: '6300 Kalocsa, Bajcsy-Zsilinszky u. 12.',
      }
    ]
};