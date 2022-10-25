export default function AvisProjets(){
    return(
        <div className="absolute bottom-4 left-2/4 transform -translate-x-2/4 h-[15vh] w-[70vw]">
            <div className="-mt-10 text-white">Avis Projets</div>
            <div className="flex items-center gap-x-5">
                <div className="text-white mt-5 w-[33%] h-full bg-greyBG text-xs leading-5 p-3 rounded drop-shadow-lg">
                    <h4 className="text-base text-lightPurple">JulesFahkouri60</h4>
                    <p className="pt-2 text-ligthGreyText">J'ai contacté le prestataire pour réaliser un mini projet à l'écoute de son client rapide et un code claire et compréhensible, je recommande à 100 %</p>
                </div>
                <div className="text-white mt-5 w-[33%] h-full bg-greyBG text-xs leading-5 p-3 rounded drop-shadow-lg">
                    <h4 className="text-base text-lightPurple">aka9333</h4>
                    <p className="pt-2 text-ligthGreyText">travail sérieux et rapide ! je recommande ce prestataire. Merci !</p>
                </div>
                <div className="text-white mt-5 w-[33%] h-full bg-greyBG text-xs leading-5 p-3 rounded drop-shadow-lg">
                    <h4 className="text-base text-lightPurple">digixandy</h4>
                    <p className="pt-2 text-ligthGreyText">Excellent prestataire ! Très disponible et professionnel. Je recommande sans hésitation. Merci</p>
                </div>
            </div>
        </div>
    )
}