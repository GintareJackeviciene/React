const get = key => {
    const value = localStorage.getItem(key);
    if (null === value) {
        return [];
    }
    return JSON.parse(value);
};

const set = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
};

export const lsRead = (key) => {
    const items = get(key);
    return items;
}

export const lsWrite = (key, value) => {
    set(key, value);
}