import type { NiceMercenary } from './utils/types.js';
import { getMercenaries, groupBy, getByRoles, makeMercenariesNiceA, makeMercenariesNiceB, makeMercenariesNiceC } from './utils/mercenaries.js';

const mercenaries = getMercenaries();
const niceMercenariesA: NiceMercenary[] = makeMercenariesNiceA(mercenaries);
const niceMercenariesB: NiceMercenary[] = makeMercenariesNiceB(mercenaries);
const niceMercenariesC: NiceMercenary[] = makeMercenariesNiceC(mercenaries);

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