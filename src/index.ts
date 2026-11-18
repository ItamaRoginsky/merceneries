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

const mercenaries = getMercenaries();
const niceMercenariesA = makeMercenariesNiceA(mercenaries);
const niceMercenariesB = makeMercenariesNiceB(mercenaries);

console.log(groupBy(mercenaries));
console.log(groupBy(mercenaries, "hp"));
console.log(getByRoles(mercenaries, ["attacker", "defender"]));

if (niceMercenariesA[0] !== undefined) {
    niceMercenariesA[0].sayHello();
}

if (niceMercenariesB[0] !== undefined) {
    niceMercenariesB[0].sayHello();
}