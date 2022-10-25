import React from "react";
import ProjetsItems from "./ProjetsItems";
import { useState } from "react";
import AvisProjets from "./AvisProjets"


export default function Projets(){
    const [projectState, setProjectState] = useState(1)
    function increaseProjectState(){
        if(projectState === 5){
            return
        }else{
            setProjectState(projectState + 1)
        }
    }
    function decreaseProjectState(){
        if(projectState === 1){
            return
        }else{
            setProjectState(projectState - 1)
        }
    }


    return(
        <React.Fragment>
            <section className="h-screen w-full flex  justify-between items-center relative overflow-x-auto">

                {projectState !== 1 &&
                    <div className="text-2xl font-bold text-white cursor-pointer" onClick={() => {decreaseProjectState()}}>&#8592;</div>
                }

                <div className="w-[85%] h-[50%] flex relative">
                    <ProjetsItems projectState={projectState} />
                </div>

                {projectState !== 5 && 
                    <div className="text-2xl font-bold text-white cursor-pointer" onClick={() => {increaseProjectState()}}>&rarr;</div>
                }

                <AvisProjets />
            </section>
        </React.Fragment>
    )
}