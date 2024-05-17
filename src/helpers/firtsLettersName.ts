export function firstLettersName(name: string) {
    return name
        .split(' ')
        .map(word => word.charAt(0).toUpperCase())
        .join('');
}