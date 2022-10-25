import './first.css'
import pdf from "../../BryanKrausch_CV.pdf"

export default function First({setDiapo, isOpenPdf, setIsOpenPDF}){
    return(
        <div>
        {!isOpenPdf ?
        <section className={`h-full w-full max-w-[1000px] mx-auto flex flex-col justify-start 
        lg:justify-center items-start laptop:-mt-[50px] min-h-screen tallMobile:pb-[10vh] xl:p-0 mt-[20px] lg:-mt-[110px]`}>
            <div className="w-full relative overflow-x-hidden overflow-y-hidden">

                <div className={`text-lightPurple relative`}>
                    <p className='animate-revealText text-base md:[15px] font-thin tracking-widest ml-0.5 mb-[15px] md:mb-[10px] md:ml-[4px]'>Bonjour, je m'appelle,</p>
                </div>

                <div className="text-ligthGreyText pt-0 tracking-wide relative">
                    <p className='opacity-0 animate-revealText animation-delay-500 text-[2.06rem] sm:text-[2.5rem] md:text-[3.75rem] laptop:text-[3.75rem] lg:text-[4.1rem] 2xl:text-[4.5rem] font-semibold'>Krausch Bryan.</p>
                </div>

                <div className="text-slateGreyText mt-2 lg:-mt-3 lg:pt-0 
                relative">
                    <p className='opacity-0 animate-revealText animation-delay-1000 text-[20px] sm:text-[25px] md:text-[40px] laptop:text-[40px]  lg:text-[45px] 2xl:text-[3.125rem] font-semibold tracking-wide'>
                        Développeur Web Junior
                    </p>
                </div>

                <div className="lg:pt-0  font-thin tracking-wide w-full  mt-[20px]
               relative">
                    <p className='animate-revealDescriptionFirst opacity-0 animation-delay-2000 text-slate-500 text-[18px] text-left max-w-[600px]' style={style}>
                        Je suis un développeur spécialisé dans le <strong className="text-lightPurple">développement web</strong>. Je viens de terminer mon BTS SIO.
                        Je suis à la recherche d'un emploi dans ce secteur d'une <strong className="text-lightPurple">durée maximum de 10 mois</strong>. Je souhaite par la suite faire une licence pro.
                    </p>
                </div>
                <div className='mt-[50px] relative cursor-pointer'>
                    <a className='opacity-0 animate-revealText animation-delay-2000 px-[28px] py-[20px] border-lightPurple border-[1px] text-lightPurple bg-transparent inline-block' onClick={() => {setIsOpenPDF(true)}}>Voir mon CV</a>
                </div>

            </div>
        </section>
        :

        <section className='h-full w-full max-w-[1000px] mx-auto flex flex-col justify-center items-start min-h-screen tallMobile:pb-[10vh] xl:p-0 -mt-[110px]'>
            <iframe src={pdf} width="100%" height="600px" />
        </section>
        }
        </div>
    )
}

const style = {
    display: 'block',
    marginBlockStart: '1em',
    marginBlockEnd: '1em',
    marginInlineStart: '0px', 
    marginInlineEnd: '0px'
}