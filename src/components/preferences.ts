import { writable } from "../localstorage";

export const preferences = writable(
  "preferences",
  { theme: "light" },
);
