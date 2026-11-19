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

function groupBy(mercenaries: Mercenary[], prop: keyof Mercenary = "role") {
    return Object.groupBy(mercenaries, mercenary => mercenary[prop]);
}

function getByRoles(mercenaries: Mercenary[], roles: string[]) {
    return mercenaries.filter(mercenary => roles.includes(mercenary.role));
}

function makeMercenariesNiceA(merc: Mercenary[]): NiceMercenary[] {
    return merc.map((currMercenary) => ({ ...currMercenary, sayHello(): void { greetByName(currMercenary.name); } }));
}

function makeMercenariesNiceB(merc: Mercenary[]): NiceMercenary[] {
    return merc.map((currMercenary) => Object.assign({}, currMercenary, { sayHello(): void { greetByName(currMercenary.name); } }));
}

function makeMercenariesNiceC(mercenaries: Mercenary[]): NiceMercenary[] {
    return mercenaries.map(currMercenary => ({ name: currMercenary.name, role: currMercenary.role, hp: currMercenary.hp, sayHello: () => greetByName(currMercenary.name) }));
}

const mercenaries = getMercenaries();
const niceMercenariesA = makeMercenariesNiceA(mercenaries);
const niceMercenariesB = makeMercenariesNiceB(mercenaries);
const niceMercenariesC = makeMercenariesNiceC(mercenaries);

console.log(groupBy(mercenaries));
console.log(groupBy(mercenaries, "hp"));
console.log(getByRoles(mercenaries, ["attacker", "defender"]));

if (niceMercenariesA[0] !== undefined) {
    niceMercenariesA[0].sayHello();
}

if (niceMercenariesB[0] !== undefined) {
    niceMercenariesB[0].sayHello();
}

if (niceMercenariesC[0] !== undefined) {
    niceMercenariesC[0].sayHello();
}