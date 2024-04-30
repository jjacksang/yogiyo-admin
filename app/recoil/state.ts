import { AddMenu, AddMenuGroup, MenuItem, MenuList, menusItems, userState } from "@/lib/types";
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
        shopId: 111111,
    },
    effects: [sessionStorageEffect("user")],
});

export const tokenState = atom({
    key: "tokenState",
    default: "",
});

export const shoplistState = atom<OwnerShopList[] | null>({
    key: "shoplistStateAtom",
    default: null,
});

// export const shopIdState = atom<ShopId | null>({
//     key: "shopId",
//     default: null,
// });

export const isLoggedInState = atom({
    key: "isLoggedIn",
    default: false,
});

// export const menuState = atom({
//     key: "menuState",
//     default: "",
// });

export const ownerAddMenu = atom<AddMenuGroup>({
    key: "addMenuGroup",
    default: {
        shopId: 123121,
        name: "",
        content: "",
    },
});

export const content = atom({
    key: "dashboardState",
    default: "ownerInfo",
});

export const menuListState = atom<MenuList[]>({
    key: "menuList",
    default: [],
});

export const addMenuGroup = atom<AddMenu>({
    key: "menuItems",
    default: {
        picture: "",
        menuData: {
            name: "",
            content: "",
            price: 10000,
        },
    },
});
