import React from "react";
import { useSelector , useDispatch } from "react-redux";
import { updateText } from "./TextSlice";
import { useState } from "react";

export function MyText2(){
    const text2 = useSelector((state)=>state.text2.value)
    const dispatch = useDispatch()

    return(
        <div>
            <div>
                <input
                    aria-label="Set increment amount"
                    value={text2}
                    onChange={e=>{dispatch(updateText(String(e.target.value)))}}
                />
                <h1>
                    {text2}
                </h1>
            </div>
        </div>
    )
}