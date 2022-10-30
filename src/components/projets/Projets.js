import React from "react";
import ProjetsItems from "./ProjetsItems";
import { useState } from "react";
import AvisProjets from "./AvisProjets"
import MobileProjets from "./MobileProjets";


export default function Projets(){
    const [projectState, setProjectState] = useState(1)
    function increaseProjectState(){
        if(projectState === 7){
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
            <section className="h-screen w-full lg:flex justify-between items-center relative overflow-x-auto">

                {projectState !== 1 &&
                    <div className="text-2xl font-bold text-white cursor-pointer hidden lg:block" onClick={() => {decreaseProjectState()}}>&#8592;</div>
                }

                <div className="w-[85%] h-[50%] lg:flex relative hidden">
                    <ProjetsItems projectState={projectState} />
                </div>

                <div className="block lg:hidden pt-[100px]">
                    <MobileProjets projectState={projectState} setProjectState={setProjectState} />
                </div>

                {projectState !== 7 && 
                    <div className="text-2xl font-bold text-white cursor-pointer hidden lg:block" onClick={() => {increaseProjectState()}}>&rarr;</div>
                }

                <AvisProjets />
            </section>
        </React.Fragment>
    )
}