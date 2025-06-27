import Image from "next/image";

export default function UnderConstruction() {
    return (

        <div>
            <div className="pt-14 px-[143px] max-sm:px-[20px]">
                <Image
                    src="/logo.png"
                    alt="Logo Rombux"
                    width={240}
                    height={39}
                    className="max-sm:w-[200px] "
                />
            </div>
            <div className="relative w-full h-[915px] flex flex-col items-center justify-center text-white overflow-hidden">
                <div className="absolute -bottom-10 -left-40 max-lg:-left-20  max-lg:bottom-9 max-xl:-left-20 max-xl:bottom-9 max-md:-left-10 max-md:bottom-15 max-sm:-left-5  max-sm:bottom-60 z-0 w-[30vw] max-w-[541px] h-[30vw] max-h-[541px]">
                    <Image
                        src="/group182.png"
                        fill
                        alt=""
                        className="object-contain absolute top-0 left-0 animate-spin [animation-duration:150s]"
                    />
                </div>
                <div className="absolute top-[10px] -right-20 max-xl:-right-10 max-lg:-right-5 max-lg:top-[40px] max-sm:hidden z-0 w-[15vw] max-w-[299px] h-[15vw] max-h-[299px]">
                    <Image
                        src="/group182.png"
                        fill
                        alt=""
                        className="object-contain absolute top-0 left-0 animate-spin [animation-direction:reverse] [animation-duration:150s]"
                    />
                </div>
                <div className="mb-40 max-sm:w-[390px] flex flex-col max-sm:mb-60">
                    <div>
                        <iframe
                            width="450"
                            height="290"
                            src="https://www.youtube.com/embed/IBasr17SVMA"
                            title="YouTube video player"
                            allow="accelerometer; encrypted-media;"
                            allowFullScreen
                            className="mx-auto mb-6 rounded-3xl max-sm:w-[350px] "
                        ></iframe>
                    </div>

                    <div className="z-10 text-center px-4 leading-[32px] mt-15 max-sm:mt-5 ">
                        <h1 className="text-[24px] font-medium">Estamos renovando nuestro sitio.</h1>
                        <h2 className="text-[22px] mt-1">¡Pronto te contaremos más!</h2>
                    </div>
                </div>

            </div>
        </div>
    );
}
