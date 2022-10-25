import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moi from '../../img/moi.jpg'

export default function About({diapo}){
    return(
        <section className={`h-full mx-auto w-full flex flex-col lg:justify-center items-start lg:items-start notLaptop:-mt-[100px]`}>
            <div className="max-w-[1100px] lg:flex lg:flex-col lg:justify-start h-full mx-auto overflow-y-scroll md:overflow-y-hidden relative ">

                <div className="h-[4%] w-[90%] xl:w-[60%] text-white text-xl flex items-center overflow-x-hidden lg:overflow-y-hidden space-x-4 relative mb-[20px] opacity-0 animate-revealPresentationText animation-delay-500 mt-8 ">
                    <FontAwesomeIcon icon={faUser} className='text-base text-lightPurple '/>
                    <h1 className="relative block ">Présentation</h1>
                    <hr className="ml-10 h-[1px] w-full xl:w-[400px] border-none bg-greyText"/>
                </div>
  
                <div className="w-full h-full flex flex-col xl:flex-row justify-start items-center 
                xl:items-start overflow-y-scroll scrollbar-none 2xl:overflow-y-hidden  xl:space-y-0 xl:space-x-[50px] px-6 relative ">

                    <div className="text-sm w-full md:text-base xl:text-lg xl:w-[60%] xl:h-full text-greyText xl:pr-10 space-y-4 md:space-y-6 xl:space-y-8 animate-revealPresentationText animation-delay-500 opacity-0 -mt-4 ">
                        <div className="absolute top-0 left-0 w-full h-full bg-darkPurple -z-[1]"></div>
                        <p className="leading-6 md:leading-8 xl:leading-10 ">Bonjour, je m'appelle <strong className="text-lightPurple">Krausch Bryan</strong> j'ai 20 ans. J'ai commencé le développement en 2018 cela fait maintenant <strong className="text-lightPurple">quatre ans que je développe</strong> diverses choses.
                        J'ai d'abord commencé par apprendre le développement par moi-même puis j'ai continué avec mes études. Je viens d'obtenir mon <strong className="text-lightPurple">BTS SIO option SLAM</strong>.
                        </p>
                        <p className="leading-6 md:leading-8 xl:leading-10 ">J'ai développé diverses applications dans le cadre de mes études mais aussi pour des entreprises en tant que <strong className="text-lightPurple">freelance</strong>. 
                        Je sais créer des site web <strong className="text-lightPurple">performant et responsive</strong> en accord avec la demande du client.
                        </p>
                       
                    </div>

                    <div className="w-[70%] xl:w-[30%] mx-auto pt-[30px] max-w-[300px]  relative pb-10">
                        <div className=' relative opacity-0 xl:before:absolute xl:before:top-[20px] xl:before:left-[20px] xl:before:border-[2px] xl:before:rounded xl:before:border-lightPurple xl:before:z-[1] xl:before:block xl:before:w-full xl:before:h-full animate-revealPrensentaionImage animation-delay-1000 group'> 
                            <div className="absolute top-0 left-0 bg-lightPurple w-full h-full z-[3] opacity-20 group-hover:opacity-0"></div>
                            <img className="w-full z-[2] rounded absolute left-2/4 transform -translate-x-2/4 xl:relative " src={moi} alt="moi" />
                        </div>
                    </div>

                </div>


            </div>
        </section>
    )
}   