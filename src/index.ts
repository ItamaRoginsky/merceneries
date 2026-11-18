import mercenariesList from '../mercenaries.json' with { type: 'json' };

type Mercenary = {
    name: string,
    role: string,
    hp: number
};

type NiceMercenary = Mercenary & { sayHello(): void };

function greetByName(name: string): void {
    console.log(`Hi! My name is ${name}, nice to meet you`);
}

function getMercenaries(): Mercenary[] {
    return mercenariesList;
}

function groupBy(mercenaries: Mercenary[], prop: keyof Mercenary = 'role') {
    return Object.groupBy(mercenaries, x => x[prop]);
}

function getByRoles(mercenaries: Mercenary[], roles: string[]) {
    return mercenaries.filter(mercenary => roles.includes(mercenary.role));
}

function makeMercenariesNiceA(merc: Mercenary[]): NiceMercenary[] {
    return merc.map((m) => ({ ...m, sayHello(): void { greetByName(m.name); } }));
}

function makeMercenariesNiceB(merc: Mercenary[]): NiceMercenary[] {
    return merc.map((m) => Object.assign(m, { sayHello(): void { greetByName(m.name); } }));
}

function makeMercenariesNiceC(merc: Mercenary[]): NiceMercenary[] {
    return merc.map((m) => ({ ...m, sayHello() { greetByName(this.name); } }));
}


const mercenaries = getMercenaries();
// console.log(groupBy(mercenaries, 'role')); 
const filtered = getByRoles(mercenaries, ["attacker", "defender"]);
const grouped = groupBy(filtered, 'role');

console.log(grouped);
// const niceMercenaries = makeMercenariesNiceA(mercenaries);
// if (niceMercenaries[0] !== undefined) {
//     niceMercenaries[0].sayHello();
// }