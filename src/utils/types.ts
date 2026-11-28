export type Roles = "attacker" | "defender" | "special";

export interface Mercenary {
    name: string;
    role: Roles;
    hp: number;
};

export interface NiceMercenary extends Mercenary {
    sayHello(): void;
};