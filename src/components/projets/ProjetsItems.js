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

export default function ProjetsItems({projectState}){
    return(
    <React.Fragment>
        
        <div className={`${projectState !== 6 ? "hidden" : 'block'} flex`}  id="6">

            <div className="lg:w-[70%] 2xl:h-full h-full relative group z-10 flex items-center">
                <div className="relative group">
                    <div className={`w-full h-full bg-mediumPurple absolute top-0 l-0 opacity-40 group-hover:opacity-0 z-[50]`}></div>
                    <img src={spotifyProject} alt="spotify clone illustration" className="w-full h-full rounded z-[10]  object-cover block shadow"/>
                </div>
            </div>
            
            <div className="w-[50%] h-[70%] absolute right-0 z-20 flex items-end">
                <div className="w-full h-[70%] flex flex-col items-end text-white space-y-6">
                    <h3 className="text-lightPurple text-lg font-semibold tracking-wide">Spotify Clone</h3>
                    <div className="bg-mediumPurple w-full lg:h-[60%] xl:h-[55%] text-right text-ligthGreyText flex items-center rounded shadow-xl px-6 py-5">
                        <p className="text-xs laptop:text-xs xl:text-sm">Un copie du célèbre site d'écoute de musique en ligne. Le site est <span className="text-lightPurple">totalement fonctionnelle</span>. Il est possible de se connecter avec son <span className="text-lightPurple">compte Spotify</span> et par
                        la suite écouter de la musique, créer une playlist, supprimer une playlist...
                        </p>
                    </div>
                    <ul className="flex space-x-4 text-greyText xl:text-base text-sm">
                        <li>NextJS</li>
                        <li>PostgresSQL</li>
                        <li>Tailwind</li>
                        <li>SpotifyAPI</li>
                    </ul>
                    <div className="mt-2 space-x-4 text-lg">
                        <a className='cursor-pointer' href='https://github.com/Bryan-Krausch/Clone_spotify' target='_blank'>
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <a className='cursor-pointer' href='https://clone-spotify-nine.vercel.app/login' target='_blank'>
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                        </a>
                    </div>
                </div>
            </div>

        </div>

        <div className={`${projectState !== 3 ? "hidden" : 'block'} flex`}  id="3">

            <div className="w-[70%] 2xl:h-full h-full relative group z-10 flex items-center">
                <div className="relative group">
                    <div className={`w-full h-full bg-mediumPurple absolute top-0 l-0 opacity-40 group-hover:opacity-0 z-[50]`}></div>
                    <img src={cryptoMonnaieProject} alt="cryptoMonnaieProject illustration" className="w-full h-full rounded z-[10]  object-cover block shadow"/>
                </div>
            </div>
            
            <div className="w-[50%] h-[70%] absolute right-0 z-20 flex items-end">
                <div className="w-full h-[70%] flex flex-col items-end text-white space-y-6">
                    <h3 className="text-lightPurple text-lg font-semibold tracking-wide">Site de Crypto Monnaie</h3>
                    <div className="bg-mediumPurple w-full lg:h-[60%] xl:h-[55%] text-right text-ligthGreyText flex items-center rounded shadow-xl px-6 py-5">
                    <p className="text-ligthGreyText pt-5 leading-6">
                        Ce site permet aux utilisateur de voir le <strong className="text-lightPurple">top 100 crypto monnaie</strong> actualisé à chaque chargement de la page.
                        Il est aussi possible de <strong className="text-lightPurple">convertir ses crypto monnaie entre elle</strong>.
                    </p>
                    </div>
                    <ul className="flex space-x-4 text-greyText xl:text-base text-sm">
                        <li>NextJS</li>
                        <li>PostgresSQL</li>
                        <li>Tailwind</li>
                        <li>CMCAPI</li>
                        <li>ChartJS</li>
                    </ul>
                    <div className="mt-2 space-x-4 text-lg">
                        <FontAwesomeIcon icon={faGithub} />
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </div>
                </div>
            </div>

        </div>

        <div className={`${projectState !== 4 ? "hidden" : 'block'} flex`}  id="4">

            <div className="w-[70%] 2xl:h-full h-full relative group z-10 flex items-center">
                <div className="relative group">
                    <div className={`w-full h-full bg-mediumPurple absolute top-0 l-0 opacity-40 group-hover:opacity-0 z-[50]`}></div>
                    <img src={irealMindProject} alt="spotify clone illustration" className="w-full h-full rounded z-[10]  object-cover block shadow"/>
                </div>
            </div>
            
            <div className="w-[50%] h-[70%] absolute right-0 z-20 flex items-end">
                <div className="w-full h-[70%] flex flex-col items-end text-white space-y-6">
                    <h3 className="text-lightPurple text-lg font-semibold tracking-wide">Site de E-commerce</h3>
                    <div className="bg-mediumPurple w-full lg:h-[60%] xl:h-[50%] text-right text-ligthGreyText flex items-center rounded shadow-xl px-6 py-5 ">
                        <p className="text-xs laptop:text-xs xl:text-sm">Sur ce site il est possible de voir les différents produits, se connecter, ajouter un article à son panier... Un <strong className="text-lightPurple">système admin</strong> est présent il est possible de voir les stats du site (vente, CA...) ainsi que <strong className="text-lightPurple">gérer</strong> les produits</p>
                    </div>
                    <ul className="flex space-x-4 text-greyText xl:text-base text-sm">
                        <li>NextJS</li>
                        <li>PostgresSQL</li>
                        <li>Tailwind</li>
                        <li>StripeAPI</li>
                        <li>ChartJS</li>
                    </ul>
                    <div className="mt-2 space-x-4 text-lg">
                        <FontAwesomeIcon icon={faGithub} />
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </div>
                </div>
            </div>

        </div>
        <div className={`${projectState !== 1 ? "hidden" : 'block'} flex`}  id="1">

                <a href="https://pac-public.vercel.app/">
                    <div className="w-[70%] 2xl:h-full h-full relative group z-10 flex items-center">
                        <div className="relative group">
                            <div className={`w-full h-full bg-mediumPurple absolute top-0 l-0 opacity-40 group-hover:opacity-0 z-[50]`}></div>
                            <img src={optineoProject} alt="spotify clone illustration" className="w-full h-full rounded z-[10]  object-cover block shadow"/>
                        </div>
                    </div>
                </a>
                
                <div className="w-[50%] h-[70%] absolute right-0 z-20 flex items-end">
                    <div className="w-full h-[70%] flex flex-col items-end text-white space-y-6">
                        <h3 className="text-lightPurple text-lg font-semibold tracking-wide">Optineo</h3>
                        <div className="bg-mediumPurple w-full lg:h-[60%] xl:h-[50%] text-right text-ligthGreyText flex items-center rounded shadow-xl px-6 py-5 ">
                            <p className="text-xs laptop:text-xs xl:text-sm">
                                J'ai créer ce site pour un client que j'ai eu pendant que je travaillais en <strong className="text-lightPurple">freelance</strong>.Je devais créer un 
                                <strong className="text-lightPurple"> site vitrine</strong> pour une entreprise dans le domaine des énergies renouvellable.
                                Le site devait contenir un <strong className="text-lightPurple">formulaire de contact</strong>.
                            </p>
                        </div>
                        <ul className="flex space-x-4 text-greyText xl:text-base text-sm">
                            <li>React</li>
                            <li>MySQL</li>
                            <li>Tailwind</li>
                            <li>Hébergement OVH</li>
                            <li>Google Analytics</li>
                            <li>Tracking</li>
                        </ul>
                        <div className="mt-2 space-x-4 text-lg">
                            <a href="https://github.com/Bryan-Krausch/pac-public"><FontAwesomeIcon icon={faGithub} /></a>
                            <a href="https://pac-public.vercel.app/"><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
                        </div>
                    </div>
                </div>

            </div>
        <div className={`${projectState !== 2 ? "hidden" : 'block'} flex`}  id="1">
            <a href="https://solana-launchpad-17yaop9kh-bryan-krausch.vercel.app/">
                <div className="w-[70%] 2xl:h-full h-full relative group z-10 flex items-center">
                    <div className="relative group">
                        <div className={`w-full h-full bg-mediumPurple absolute top-0 l-0 opacity-40 group-hover:opacity-0 z-[50]`}></div>
                            <img src={solanaProject} alt="spotify clone illustration" className="w-full h-full rounded z-[10]  object-cover block shadow"/>
                    </div>
                </div>
            </a>
                
                
                <div className="w-[50%] h-[70%] absolute right-0 z-20 flex items-end">
                    <div className="w-full h-[70%] flex flex-col items-end text-white space-y-6">
                        <h3 className="text-lightPurple text-lg font-semibold tracking-wide">Solana Launchpad</h3>
                        <div className="bg-mediumPurple w-full lg:h-[60%] xl:h-[50%] text-right text-ligthGreyText flex items-center rounded shadow-xl px-6 py-5 ">
                            <p className="text-xs laptop:text-xs xl:text-sm">
                                Ce site permet de <strong className="text-lightPurple">générer</strong> assez simplement un site pour créer et acheter une <strong className="text-lightPurple">collection NFT basée sur la blockchain solana.</strong> 
                                Ce site est <strong className="text-lightPurple">opensource</strong> et peut être utiliser par d'autre personne pour lancer leur collection NFT
                            </p>
                        </div>
                        <ul className="flex space-x-4 text-greyText xl:text-base text-sm">
                            <li>NextJS</li>
                            <li>Rust</li>
                            <li>Tailwind</li>
                            <li>Metaplex</li>
                        </ul>
                        <div className="mt-2 space-x-4 text-lg">
                            <a href="https://github.com/Bryan-Krausch/solana-launchpad"><FontAwesomeIcon icon={faGithub} /></a>
                            <a href="https://solana-launchpad-17yaop9kh-bryan-krausch.vercel.app/"><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
                        </div>
                    </div>
                </div>

            </div>

        <div className={`${projectState !== 5 ? "hidden" : 'block'} flex`}  id="5">
            <a href="https://solana-launchpad-17yaop9kh-bryan-krausch.vercel.app/">
                <div className="w-[70%] 2xl:h-full h-full relative group z-10 flex items-center">
                    <div className="relative group">
                        <div className={`w-full h-full bg-mediumPurple absolute top-0 l-0 opacity-40 group-hover:opacity-0 z-[50]`}></div>
                            <img src={baseSolanaProject} alt="spotify clone illustration" className="w-full h-full rounded z-[10]  object-cover block shadow"/>
                    </div>
                </div>
            </a>
                
                
                <div className="w-[50%] h-[70%] absolute right-0 z-20 flex items-end">
                    <div className="w-full h-[70%] flex flex-col items-end text-white space-y-6">
                        <h3 className="text-lightPurple text-lg font-semibold tracking-wide">Solana Developper Starter Pack</h3>
                        <div className="bg-mediumPurple w-full lg:h-[70%] xl:h-[60%] text-right text-ligthGreyText flex items-center rounded shadow-xl px-8 py-6 ">
                            <p className="text-xs leading-4 ">
                                Ce projet apporte une <strong className="text-lightPurple">base de développement</strong> avec plusieurs outils de base util
                                pour le développement de <strong className="text-lightPurple">dApp Solana</strong>.
                                Le projet fournit l'intégration de wallet basé sur la <strong className="text-lightPurple">blockchain solana</strong>,
                                plusieurs framework de développement solana, des context développer par moi même et
                                une base de program solana avec une documentation pour la mise en place de l'environnement solana
                            </p>
                        </div>
                        <ul className="flex space-x-4 text-greyText xl:text-base text-sm">
                            <li>Typescript</li>
                            <li>Rust</li>
                            <li>Tailwind</li>
                            <li>Anchor</li>
                        </ul>
                        <div className="mt-2 space-x-4 text-lg">
                            <a href="https://github.com/Bryan-Krausch/solana-scaffold"><FontAwesomeIcon icon={faGithub} /></a>
                        </div>
                    </div>
                </div>

            </div>
        
    </React.Fragment>
    )
}