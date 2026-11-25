export type Mercenary = {
    name: string,
    role: string,
    hp: number
};

export type NiceMercenary = Mercenary & { sayHello(): void };

