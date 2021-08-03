const COFF_PREM = 1.25;


class Worker {
  constructor(name, lastname, days, salaryPerDey, getPremium) {
    if (typeof (name && lastname) === "string") {
      this.name = name;
      this.lastname = lastname;
    } else {
      throw new TypeError('Name and lastname data must be "string" type');
    }

    if (typeof (days && salaryPerDey) === "number") {
      if (days >= 0 && salaryPerDey >= 0) {
        this.days = days;
        this.salaryPerDey = salaryPerDey;
      } else {
        throw new RangeError(
          "Days and salaryPerDay data must be positive value"
        );
      }
    } else {
      throw new TypeError('Bays and salaryPerDay data type must be "NUMBER"');
    }

    if (typeof getPremium === "boolean") {
      this.getPremium = getPremium;
    } else {
      throw new TypeError("getPremium data must be boolean");
    }
  }

  getFullName() {
    return `${this.name} ${this.lastname}`;
  }

  getSalary() {
    if (this.getPremium) {
      return this.salaryPerDey * this.days * COFF_PREM;
    }
    return this.days * this.salaryPerDey;
  }
}

const Oleg = new Worker("Oleg", "NeOleg", 12, 2000, true);
const Jack = new Worker("Jack", "BadWorker", 6, 600, false);
