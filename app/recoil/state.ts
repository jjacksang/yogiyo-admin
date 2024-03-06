import { userState } from "@/lib/types";
import { AtomEffect, atom } from "recoil";

const localStorageEffect: <T>(key: string) => AtomEffect<T> =
    (key: string) =>
    ({ setSelf, onSet }) => {
        if (typeof window !== "undefined") {
            const savedValue = localStorage.getItem(key);
            if (savedValue != null) {
                setSelf(JSON.parse(savedValue));
            }
            onSet((newValue, _, isReset) => {
                isReset
                    ? localStorage.removeItem(key)
                    : localStorage.setItem(key, JSON.stringify(newValue));
            });
        }
    };

export const userStateAtom = atom<userState | null>({
    key: "user",
    default: null,
    effects: [localStorageEffect("user")],
});

export const tokenState = atom({
    key: "tokenState",
    default: "",
});

export const isLoggedInState = atom({
    key: "isLoggedIn",
    default: false,
});
