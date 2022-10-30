import spotifyProject from "../../img/projet/spotifyProject.png"
import cryptoMonnaieProject from "../../img/projet/cryptoProject.png"
import irealMindProject from "../../img/projet/irealMindProject.png"
import optineoProject from "../../img/projet/optineo.png"
import solanaProject from "../../img/projet/solana.png"
import baseSolanaProject from "../../img/projet/baseSolana.png"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"

export default function MobileProjets({ projectState, setProjectState }) {
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

    return (
        <div className="cards">    
            <div className={`${projectState !== 1 ? "hidden" :  "block"} w-full h-full`} id='1'>
                <h2 className="text-white text-xl pb-5">Optineo</h2>
                <a href="https://pac-public.vercel.app/"><img src={optineoProject} alt="Projet Optineo" /></a>
                <ul className="flex flex-wrap gap-x-4 text-greyText text-sm pt-2">
                    <li>React</li>
                    <li>Tailwind</li>
                    <li>Hebergement OVH</li>
                    <li>Google Analytics</li>
                    <li>Tracking</li>
                </ul>
                <div>
                    <p className="text-ligthGreyText pt-5 leading-6">J'ai créer ce site pour un client que j'ai eu pendant que je travaillais en <strong className="text-lightPurple">freelance</strong>.
                        Je devais créer un <strong className="text-lightPurple">site vitrine</strong> pour une entreprise dans le domaine des énergies renouvellable.
                        Le site devait contenir un <strong className="text-lightPurple">formulaire de contact</strong>.</p>
                </div>
                <div className="mt-2 space-x-4 text-lg text-right text-white">
                    <a className='cursor-pointer' href='https://github.com/Bryan-Krausch/Pac' target='_blank'>
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a className='cursor-pointer' href='https:/optineo.info/' target='_blank'>
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </a>
                </div>
            </div>

            <div className={`${projectState !== 2 ? "hidden" :  "block"} w-full h-full`} id='2'>
                <h2 className="text-white text-xl pb-5">Solana Launchpad</h2>
                <img src={solanaProject} alt="Projet Solana Launchpad" />
                <ul className="flex flex-wrap gap-x-4 text-greyText text-sm pt-2">
                    <li>NextJS</li>
                    <li>Rust</li>
                    <li>Tailwind</li>
                    <li>Metaplex</li>
                </ul>
                <div>
                    <p className="text-ligthGreyText pt-5 leading-6">
                        Ce site permet de <strong className="text-lightPurple">générer</strong> assez simplement un site pour
                        <strong className="text-lightPurple">créer et acheter une collection NFT basée sur la blockchain solana</strong>.
                        Ce site est <strong className="text-lightPurple">opensource</strong> et peut être utiliser par d'autre personne pour lancer leur collection NFT
                    </p>
                </div>
                <div className="mt-2 space-x-4 text-lg text-right text-white">
                    <a className='cursor-pointer' href='https://github.com/Bryan-Krausch/solana-launchpad' target='_blank'>
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a className='cursor-pointer' href='https://solana-launchpad-17yaop9kh-bryan-krausch.vercel.app' target='_blank'>
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </a>
                </div>
            </div>

            <div className={`${projectState !== 3 ? "hidden" :  "block"} w-full h-full`} id='3'>
                <h2 className="text-white text-xl pb-5">Site de Crypto Monnaie</h2>
                <img src={cryptoMonnaieProject} alt="Projet Crypto Monnaie" />
                <ul className="flex flex-wrap gap-x-4 text-greyText text-sm pt-2">
                    <li>NextJS</li>
                    <li>PostgresSQL</li>
                    <li>Tailwind</li>
                    <li>CMCAPI</li>
                    <li>ChartJS</li>
                </ul>
                <div>
                    <p className="text-ligthGreyText pt-5 leading-6">
                        Ce site permet aux utilisateur de voir le <strong className="text-lightPurple">top 100 crypto monnaie</strong> actualisé à chaque chargement de la page.
                        Il est aussi possible de <strong className="text-lightPurple">convertir ses crypto monnaie entre elle</strong>.
                    </p>
                </div>
            </div>

            <div className={`${projectState !== 4 ? "hidden" :  "block"} w-full h-full`} id='3'>
                <h2 className="text-white text-xl pb-5">Site de E-commerce</h2>
                <img src={irealMindProject} alt="Projet E-commerce" />
                <ul className="flex flex-wrap gap-x-4 text-greyText text-sm pt-2">
                    <li>NextJS</li>
                    <li>PostgresSQL</li>
                    <li>Tailwind</li>
                    <li>StripeAPI</li>
                    <li>ChartJS</li>
                </ul>
                <div>
                    <p className="text-ligthGreyText pt-5 leading-6">
                        Sur ce site il est possible de voir les différents produits, se connecter, ajouter un article à son panier...
                        <strong className="text-lightPurple">Un système admin</strong> est présent il est possible de voir les stats du site (vente, CA...)
                        ainsi que <strong className="text-lightPurple">gérer les produits</strong>
                    </p>
                </div>
            </div>

            <div className={`${projectState !== 5 ? "hidden" :  "block"} w-full h-full`} id='5'>
                <h2 className="text-white text-xl pb-5">Solana Developper Starter Pack</h2>
                <img src={baseSolanaProject} alt="Projet solana starter pack" />
                <ul className="flex flex-wrap gap-x-4 text-greyText text-sm pt-2">
                    <li>Typescript</li>
                    <li>Rust</li>
                    <li>Tailwind</li>
                    <li>Anchor</li>
                </ul>
                <div>
                    <p className="text-ligthGreyText pt-5 leading-6">
                        Ce projet apporte une <strong className="text-lightPurple">base de développement</strong>
                        avec plusieurs outils de base util pour le développement de <strong className="text-lightPurple">dApp Solana</strong>.
                        Le projet fournit l'intégration de wallet basé sur la blockchain solana, <strong className="text-lightPurple">plusieurs framework de développement solana</strong>,
                        des context développer par moi même et une base de program solana avec une
                        documentation pour la mise en place de l'environnement solana
                    </p>
                </div>
                <div className="mt-2 space-x-4 text-lg text-right text-white">
                    <a className='cursor-pointer' href='https://github.com/Bryan-Krausch/solana-scaffold' target='_blank'>
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </div>
            </div>

            <div className={`${projectState !== 6 ? "hidden" :  "block"} w-full h-full`} id='6'>
                <h2 className="text-white text-xl pb-5">Spotify Clone</h2>
                <img src={spotifyProject} alt="Projet Spotify clone" />
                <ul className="flex flex-wrap gap-x-4 text-greyText text-sm pt-2">
                    <li>NextJS</li>
                    <li>PostgresSQL</li>

                </ul>
                <div>
                    <p className="text-ligthGreyText pt-5 leading-6">
                        Un copie du célèbre site d'écoute de musique en ligne. Le site est <strong className="text-lightPurple">totalement fonctionnelle</strong>.
                        Il est possible de se connecter avec son <strong className="text-lightPurple">compte Spotify</strong> et par la suite écouter de la musique, créer une playlist, supprimer une playlist...
                    </p>
                </div>
                <div className="mt-2 space-x-4 text-lg text-right text-white">
                        <a className='cursor-pointer' href='https://github.com/Bryan-Krausch/Clone_spotify' target='_blank'>
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <a className='cursor-pointer' href='https://clone-spotify-nine.vercel.app/login' target='_blank'>
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                        </a>
                </div>
            </div>

            <div className={`${projectState !== 7 ? "hidden" :  "block"} w-full h-full`} id='7'>
                <h2 className="text-white text-xl pb-5">Solana whitelist builder</h2>
                <img src={baseSolanaProject} alt="Projet solana starter pack" />
                <ul className="flex flex-wrap gap-x-4 text-greyText text-sm pt-2">
                    <li>Python</li>
                    <li>JSON</li>
                </ul>
                <div>
                    <p className="text-ligthGreyText pt-5 leading-6">
                        Ce projet est un petit outils qui permet de créer un fichier JSON avec les wallets de toute les personne whitelist.
                        Cet outils permet de faire gagner beaucoup à cause du grand nombre de wallet présent.
                    </p>
                </div>
                <div className="mt-2 space-x-4 text-lg text-right text-white">
                    <a className='cursor-pointer' href='https://github.com/Bryan-Krausch/whitelist-drop' target='_blank'>
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </div>
            </div>

            <div className="absolute bottom-5 h-14 w-full bg-black bg-opacity-30 rounded flex justify-center gap-x-5 items-center">
                {projectState !== 1 &&
                    <div className="text-lg font-bold text-white cursor-pointer -mt-1" onClick={() => {decreaseProjectState()}}>&#8592;</div>
                }

                <div className="text-white">{projectState}</div>

                {projectState !== 7 && 
                    <div className="text-lg font-bold text-white cursor-pointer -mt-1" onClick={() => {increaseProjectState()}}>&rarr;</div>
                }
            </div>
        </div>
    )
}