type Mods = Record<string, boolean | string>

export function classNames(cls?:string | any, mods?: Mods, additional?:string[]): string {
    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(mods)
        .filter(([key , value]) => Boolean(value))
        .map(([key, value]) =>key)
    ].join(' ')

}