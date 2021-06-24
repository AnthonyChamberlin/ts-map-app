import faker from 'faker';
import { EntityToMap } from './CustomMap';

export class User implements EntityToMap {
    name: string;
    location: {
        lat: number;
        lng: number;
    }

    constructor() {
        this.name = faker.name.firstName();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude()),
        }
    }

    markerContent(): string {
        return `
            <h3>User: ${ this.name }</h3>
        `;
    }
}
