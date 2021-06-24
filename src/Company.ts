import faker from 'faker';
import { EntityToMap } from './CustomMap';

export class Company implements EntityToMap {
    name: string;
    slogan: string;
    location: {
        lat: number;
        lng: number;
    }

    constructor() {
        this.name = faker.company.companyName();
        this.slogan = faker.company.catchPhrase();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude()),
        };
    }

    markerContent(): string {
        return `
            <div>
                <h2>Company: ${ this.name }</h2>
                <h5>Slogan: ${ this.slogan }</h5>
            </div>
        `;
    }
}
