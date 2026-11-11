import mercenariesList from '../mercenaries.json' with { type: 'json' };

type Mercenary = {
    name: string,
    role: string,
    hp: number
};

function getMercenaries(): Mercenary[] {
    return mercenariesList;
}

function groupBy(mercenaries: Mercenary[], property: keyof Mercenary = "role"): Mercenary[] {
    return mercenaries.filter(x => x. );
}



const mercenaries = getMercenaries();
console.log("type of mercenaries:", typeof mercenaries);
