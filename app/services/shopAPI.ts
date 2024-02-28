import axios from "axios";
import { getAxios } from "./loginAPI";

interface ShopInfo {
    id: number;
    name: string;
    callNumber: string;
    address: string;
    categories: null;
}
