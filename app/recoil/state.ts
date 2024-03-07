import { userState } from "@/lib/types";
<<<<<<< HEAD
import { atom } from "recoil";
import { OwnerShopList } from "../../app/services/shopAPI"
=======
import { AtomEffect, atom } from "recoil";
>>>>>>> chop

const sessionStorageEffect: <T>(key: string) => AtomEffect<T> =
    (key: string) =>
    ({ setSelf, onSet }) => {
        if (typeof window !== "undefined") {
            onSet((newValue, _, isReset) => {
                isReset
                    ? sessionStorage.removeItem(key)
                    : sessionStorage.setItem(key, JSON.stringify(newValue));
            });
        }
    };

export const userStateAtom = atom<userState | null>({
    key: "user",
    default: {
        userId: 1111111,
        nickname: "",
        email: "",
        isLoggedIn: false,
    },
    effects: [sessionStorageEffect("user")],
});

export const tokenState = atom({
    key: "tokenState",
    default: "",
});

<<<<<<< HEAD
export const shoplistState = atom<OwnerShopList | null>({
    key: "shoplistStateAtom",
    default: null, 
  });
=======
export const isLoggedInState = atom({
    key: "isLoggedIn",
    default: false,
});
>>>>>>> chop
