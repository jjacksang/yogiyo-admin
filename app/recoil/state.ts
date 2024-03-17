import { userState } from "@/lib/types";
import { OwnerShopList } from "../../app/services/shopAPI";
import { AtomEffect, atom } from "recoil";

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

export const shoplistState = atom<OwnerShopList | null>({
    key: "shoplistStateAtom",
    default: 
    {id: 1111,
      name: '킨나라',
      icon: 'ㅁㅇㄹㅁㅇㄹㅁㅇㄹ',
    }
})


export const isLoggedInState = atom({
    key: "isLoggedIn",
    default: false,
});
