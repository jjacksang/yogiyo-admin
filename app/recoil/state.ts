import { userState } from "@/lib/types";
import { atom } from "recoil";

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
