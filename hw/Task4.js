//родительская функция
function Device(name, power) {
    this.name = name;
    this.power = power;
    this.pluggedIn = false;
}

Device.prototype.turnOn = function () {
    this.pluggedIn = true;
    console.log(`You have plugged in the device - ${this.name}. With a power input of ${this.power}`);
}

Device.prototype.turnOff = function () {
    this.pluggedIn = false;
    console.log(`you turned off the device ${this.name}`);
}

//прибор Лампа
function DeskLamp(name, power, lightColor) {
    this.name = name;
    this.power = power;
    this.lightColor = lightColor;
}

DeskLamp.prototype = new Device();

DeskLamp.prototype.shine = function () {
    console.log(`I shine ${this.lightColor}`);
}

//прибор Компьютер
function Computer(name, power, processorSpeed) {
    Device.call(this, name, power);
    this.processorSpeed = processorSpeed;
}

Computer.prototype = new Device();

Computer.prototype.work = function () {
    console.log(`I work with speed - ${this.processorSpeed}`);
}

//мощность всех включённых приборов
function totalPower(...device) {
    let total = 0;
    for (let i = 0; i < device.length; i++) {
        if (device[i].pluggedIn) {
            total += device[i].power;
        }
    }
    console.log(`total power of devices in the network ${total}`);
}

const lamp = new DeskLamp("LG", 150, "red");
const comp = new Computer("Intel", 300, 2400)

lamp.turnOn();
lamp.shine();

comp.turnOn();
comp.work();

totalPower(lamp, comp)

lamp.turnOff();
comp.turnOff()

totalPower(lamp, comp)
