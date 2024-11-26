class Country {
    constructor(name, capital, population, area) {
        this.name = name;
        this.capital = capital;
        this.population = parseFloat(population);
        this.area = parseFloat(area);
    }

    calculateDensity() {
        return (this.population / this.area).toFixed(2);
    }
}

export default Country;
