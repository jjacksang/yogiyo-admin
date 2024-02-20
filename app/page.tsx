"use client";
import React from "react";
import { Navbar } from "../components/home/navbar";
import { MainPage } from "../components/home/main";
import { Footer } from "../components/home/footer";

export default function Home() {
    return (
        <>
            <Navbar />
            <MainPage />
            <Footer />
        </>
    );
}
