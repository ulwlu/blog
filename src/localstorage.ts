import { writable as internal, get } from "svelte/store";

export function writable(key: string, initialValue) {
  const store = internal(initialValue);
  const { subscribe, set } = store;
  const json = typeof (localStorage) !== "undefined" ? localStorage.getItem(key) : null;

  if (json) {
    set(JSON.parse(json));
  }

  function updateStorage(key: string, value: string) {
    if (typeof (localStorage) === "undefined") return;

    localStorage.setItem(key, JSON.stringify(value));
  }

  return {
    set(value: string) {
      updateStorage(key, value);
      set(value);
    },
    update(cb: (n:string) => string) {
      const value = cb(get(store));

      updateStorage(key, value);
      set(value);
    },
    subscribe,
  };
}
