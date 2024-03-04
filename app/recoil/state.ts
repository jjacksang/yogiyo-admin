import { userState } from "@/lib/types";
import { atom } from "recoil";
import { OwnerShopList } from "../../app/services/shopAPI"

export const userStateAtom = atom<userState>({
    key: "user",
    default: {
        userId: 1111111,
        nickname: "",
        email: "",
        isLoggedIn: false,
    },
});

export const tokenState = atom({
    key: "tokenState",
    default: "",
});

export const shopListState = atom<OwnerShopList[] | null>({
    key: "shopListStateAtom", 
    default: [],
});