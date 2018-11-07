export class Hero {
    id: number; //affectation
    name: string;
    addresses: Address[];//type
}

export class Address {
    street: string ;
    city: string ;
    state: string ;
    zip: number ;
}