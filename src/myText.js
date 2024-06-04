import React,{useContext} from "react";
import {AppContext, ColorContext , CountContext } from "./App";

export function MyText(){
    const color = useContext(ColorContext);
    const username = useContext(AppContext);
    const count = useContext(CountContext);

    return(<h1 style={{color:color}}>{username} {count}</h1>);
}

export default MyText;