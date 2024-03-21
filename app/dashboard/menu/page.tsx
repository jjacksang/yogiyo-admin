import { MenuNav } from "@/app/dashboard/menu/menuNavbar";
import MenuGroup from "../menuSidebar/menuGroup";
import MenuSet from "@/app/dashboard/menu/menuSet";
import MenuSoldout from "@/app/dashboard/menu/menuSoldout";
import DashboardMain from "@/components/common/DashboardMain";
import { useRecoilValue } from "recoil";
import { menuState } from "@/app/recoil/state";
import React from "react";

export default function MenuPage() {
    const selectMenu = useRecoilValue(menuState);
    console.log(selectMenu);
    return (
        <div>
            <DashboardMain>
                <MenuNav />
                <MenuGroup>
                    {selectMenu === "menuSet" && <MenuSet />}
                    {selectMenu === "menuSoldout" && <MenuSoldout />}
                </MenuGroup>
            </DashboardMain>
        </div>
    );
}
