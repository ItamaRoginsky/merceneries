import mercenariesList from '../data/mercenaries.json' with { type: 'json' };
import type { Mercenary, NiceMercenary } from './types.js';

export function sayHello<T extends { name: string }>(object: T): void {
    console.log(`Hi! My name is ${object.name}, nice to meet you`);
}

export function getMercenaries(): Mercenary[] {
    return mercenariesList;
}

export function groupBy(mercenaries: Mercenary[], property: keyof Mercenary = "role") {
    return Object.groupBy(mercenaries, currentMercenary => currentMercenary[property]);
}

export function getByRoles(mercenaries: Mercenary[], roles: string[]): Mercenary[] {
    return mercenaries.filter(currentMercenary => roles.includes(currentMercenary.role));
}

export function makeMercenariesNiceA(mercenaries: Mercenary[]): NiceMercenary[] {
    return mercenaries.map((currentMercenary) => ({ ...currentMercenary, sayHello: () => sayHello(currentMercenary) }));
}

export function makeMercenariesNiceB(mercenaries: Mercenary[]): NiceMercenary[] {
    return mercenaries.map((currentMercenary) => Object.assign(currentMercenary, { sayHello: () => sayHello(currentMercenary) }));
}

export function makeMercenariesNiceC(mercenaries: Mercenary[]): NiceMercenary[] {
    return mercenaries.map(currentMercenary => ({ name: currentMercenary.name, role: currentMercenary.role, hp: currentMercenary.hp, sayHello: () => sayHello(currentMercenary) }));
}