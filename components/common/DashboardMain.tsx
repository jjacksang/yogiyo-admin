"use client";
import { OwnerInfo } from "@/app/dashboard/DashboardMyInfo";
import { content } from "@/app/recoil/state";
import React, { ReactNode } from "react";
import { useRecoilValue } from "recoil";
import MenuSet from "../menu/menuSet";
import MenuSoldout from "../menu/menuSoldout";

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
        menuSet: <MenuSet />,
        menuSoldout: <MenuSoldout />,
    };

    const showContent = menuComponent[selectMenu] || <OwnerInfo />;
    return (
        <div className="flex-1 bg-[#F7F7F7]">
            {/* 여기에 컨텐츠가 들어갑니다. */}
            {showContent}
        </div>
    );
}
