import MenuGroup from "../menuSidebar/menuGroup";
import MenuSet from "@/components/menu/menuSet";
import MenuSoldout from "@/components/menu/menuSoldout";
import DashboardMain from "@/components/common/DashboardMain";
import { useRecoilValue } from "recoil";
import { menuState } from "@/app/recoil/state";
import React from "react";

export default function MenuPage() {
    console.log("menupage");
    const selectMenu = useRecoilValue(menuState);

    return (
        <div>
            <DashboardMain>
                <MenuGroup>
                    {selectMenu === "menuSet" && <MenuSet />}
                    {selectMenu === "menuSoldout" && <MenuSoldout />}
                </MenuGroup>
            </DashboardMain>
        </div>
    );
}
