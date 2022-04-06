export class Persoon {
    constructor(
        public id: number,
        public familienaam: string,
        public wagen: string,
        public voornaam?: string // voornaam is optioneel, en moet achteraan
    ) { }
}
