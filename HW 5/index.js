// task-01
class Circle {
    constructor(centerX, centerY, radius) {
        this.centerX = centerX;
        this.centerY = centerY;
        this.radius = radius;
    }
    lenghtCicle() {
        let lenghtCicle = 2 * Math.PI * this.radius;
        console.log(lenghtCicle);
        return lenghtCicle;
    };
    static getlenghtCircle(r) {
        let lenghtCicle = 2 * Math.PI * r;
        console.log(lenghtCicle);
        return lenghtCicle;
    };
    copy() {
        return Object.assign({}, this);
    };
    static getCircleByParams(centerX, centerY, radius) {
        return new Circle(centerX, centerY, radius);
    };
    checkPoint(x, y) {
        let distance = Math.sqrt((x - this.centerX) ** 2 + (y - this.centerY) ** 2);
        return distance <= this.radius;
    };
    toString() {
        return `Circle with center (${this.centerX},${this.centerY}) and radius ${this.radius}`;
    };
}

// task-02
let mentor = {
    course: "JS fundamental",
    duration: 3,
    direction: "web-development",
};

function propsCount(currentObject) {
    let count = 0;
    for (const key in currentObject) {
        count += 1;
    }
    return count;
}
console.log(propsCount(mentor));

// task-03
class Person {
    constructor(name, surName) {
        this.name = name;
        this.surName = surName;
    };
    showFullName() {
        console.log(this.name, this.surName);
    }
}

class Student extends Person {
    constructor(name, surName, year) {
        super(name, surName);
        this.year = year;
    };
    showFullName(midleName) {
        super.showFullName();
        console.log(midleName);
    };
    showCourse() {
        let dateNow = new Date().getFullYear();
        let course = dateNow - this.year;

        if (course > 6) {
            return 'You are not student';
        } else {
            return course;
        }
    };
}

const stud1 = new Student("Petro", "Petrenko", '2019');
console.log(stud1.showFullName("Petrovych")); // Petrenko Petro Petrovych
console.log("Current course: " + stud1.showCourse()); //Current course: 4

// task-04
class Marker {
    constructor(color, amountInk) {
        this.color = color;
        this.amountInk = amountInk;
    };
    printText(stringText) {
        let inkNeeded = stringText.replace(/\s/g, '').length * 0.5;
        if (inkNeeded <= this.amountInk) {
            this.amountInk -= inkNeeded;
            document.writeln(`<h4 style="color:${this.color};">${stringText}</h4>`);
        } else {
            console.log('Out of ink!');
        }
    }
}

const marker = new Marker('red', 50);
marker.printText('Hello, world!');

const secondMarker = new Marker('blue', 3);
secondMarker.printText('Hello, world!');

class RefillableMarker extends Marker {
    constructor(color, amountInk, amount) {
        super(color, amountInk);
        this.amount = amount;
    };

    refill(amount) {
        this.amountInk += amount;
        if (this.amountInk > 100) {
            this.amountInk = 100;
        }
        console.log(`Marker refilled. Ink level: ${this.amountInk}%`);
    }
}

const refillableMarker = new RefillableMarker('blue', 30);

refillableMarker.printText('This is a refillable marker.');

refillableMarker.refill(50);

// task-05
class Worker {
    #experience;
    constructor(fullName, dayRate, workingDays, experience) {
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
        this.#experience = 1.2;
    };

    showSalary() {
        let salary = this.dayRate * this.workingDays;
        console.log(`${this.fullName} has salary: ${salary}`);
    };

    showSalaryWithExperience() {
        let salaryWithExperience = this.dayRate * this.workingDays * this.#experience;
        console.log(`${this.fullName} has salary with experience: ${salaryWithExperience}`);
    };

    get showExp() {
        return this.#experience;
    };

    set setExp(value) {
        this.#experience = value;
    };

    static sortBySalary(workers) {
        workers.sort((a, b) => {
            return (
                a.dayRate * a.workingDays * a.#experience -
                b.dayRate * b.workingDays * b.#experience
            );
        });
    }

}

let worker1 = new Worker("John Johnson", 20, 23);
console.log(worker1.fullName);                 
worker1.showSalary();
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();
worker1.setExp = 1.5;
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();

let worker2 = new Worker("Tom Tomson", 48, 22);
console.log(worker2.fullName);      
worker2.showSalary();
console.log("New experience: " + worker2.showExp);
worker2.showSalaryWithExperience();
worker2.setExp = 1.5;
console.log("New experience: " + worker2.showExp);
worker2.showSalaryWithExperience();

let worker3 = new Worker("Andy Ander", 29, 23);
console.log(worker3.fullName);      
worker3.showSalary();
console.log("New experience: " + worker3.showExp);
worker3.showSalaryWithExperience();
worker3.setExp = 1.5;
console.log("New experience: " + worker3.showExp);
worker3.showSalaryWithExperience();

let workers = [worker1, worker2, worker3];
Worker.sortBySalary(workers);
for (const worker of workers) {
  console.log(`${worker.fullName}: ${worker.dayRate * worker.workingDays * worker1.showExp}`);
}
