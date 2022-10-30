import optineoProject from "../../img/projet/optineo.png"
import solanaLaunchpadProject from "../../img/projet/solana.png"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"

export default function MobileProjets({ projectState }) {
    return (
        <React.Fragment>

            <div className={`${projectState !== 1 ? "hidden" :  "block"} w-full h-full`} id='1'>
                <h2 className="text-white text-xl pb-5">Optineo</h2>
                <img src={optineoProject} alt="Projet Optineo" />
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
                <img src={solanaLaunchpadProject} alt="Projet Solana Project" />
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
                <h2 className="text-white text-xl pb-5">Optineo</h2>
                <img src={optineoProject} alt="Projet Optineo" />
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
        </React.Fragment>
    )
}