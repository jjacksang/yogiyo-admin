"use client";
import { content } from "@/app/recoil/state";
import DashboardMypageMain from "./DashboardMypageMain";
import React, { ReactNode } from "react";
import { useRecoilValue } from "recoil";
import MenuSet from "../menu/MenuSet";
import MenuSoldout from "../menu/MenuSoldout";

interface DashboardMainProps {
    children: ReactNode;
}

interface MenuComponentType {
    menuSet: JSX.Element;
    menuSoldout: JSX.Element;
    [key: string]: JSX.Element;
}

export default function DashboardMain({ children }: DashboardMainProps) {
    const selectMenu = useRecoilValue(content);

    const menuComponent: MenuComponentType = {
        menuSet: <MenuSet onClose={() => console.log("메뉴 닫힘")} />,
        menuSoldout: <MenuSoldout />,
    };

    const showContent = menuComponent[selectMenu] || <DashboardMypageMain />;
    return (
        <div className="flex-1 bg-[#F7F7F7]">
            {/* 여기에 컨텐츠가 들어갑니다. */}
            {showContent}
        </div>
    );
}
