import { userState } from "@/lib/types";
import { atom } from "recoil";
import { OwnerShopList } from "../../app/services/shopAPI"

export const userStateAtom = atom<userState>({
    key: "user",
    default: {
        userId: 1111111,
        nickname: "unknown",
        email: "unknown",
        isLoggedIn: false,
    },
});

export const loginState = atom({
    key: "loginState",
    default: false,
});

export const nicknameState = atom({
    key: "nicknameState",
    default: "",
});

export const tokenState = atom({
    key: "tokenState",
    default: "",
});

export const shoplistState = atom<OwnerShopList | null>({
    key: "shoplistStateAtom",
    default: null, 
  });