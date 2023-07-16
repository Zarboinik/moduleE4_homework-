class Device {
    constructor(name, power) {
        this.name = name;
        this.power = power;
        this.pluggedIn = false;
    }

    turnOn() {
        this.pluggedIn = true;
        console.log(`You have plugged in the device - ${this.name}. With a power input of ${this.power}`);
    }

    turnOff() {
        this.pluggedIn = false;
        console.log(`You turned off the device ${this.name}`);
    }
}

class DeskLamp extends Device {
    constructor(name, power, lightColor) {
        super(name, power);
        this.lightColor = lightColor;
    }

    shine() {
        console.log(`I shine ${this.lightColor}`);
    }
}

class Computer extends Device {
    constructor(name, power, processorSpeed) {
        super(name, power);
        this.processorSpeed = processorSpeed;
    }

    work() {
        console.log(`I work with speed - ${this.processorSpeed}`);
    }
}

class Energy {
    static totalPower(...devices) {
        let total = 0;
        for (let i = 0; i < devices.length; i++) {
            if (devices[i].pluggedIn) {
                total += devices[i].power;
            }
        }
        console.log(`Total power of devices in the network: ${total}`);
    }
}

const lamp = new DeskLamp("LG", 150, "red");
const comp = new Computer("Intel", 300, 2400);

lamp.turnOn();
lamp.shine();
1231231
comp.turnOn();
comp.work();

Energy.totalPower(lamp, comp);

lamp.turnOff();
comp.turnOff();

Energy.totalPower(lamp, comp);
