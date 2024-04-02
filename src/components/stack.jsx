import { lenguajes } from "../data/stack"
import { otros } from "../data/stack"
import { frameworks } from "../data/stack"
export default function Stack () {

    return (<>

        <h2 className="w-full font-bold text-red-600 h-max p-20 text-center text-4xl kalam bg-zinc-800 bg-opacity-70">Tecnologias</h2>

        <div className="w-full h-max grid grid-cols-2 text-white gap-4 bg-white-200 px-5 pb-20 pt-10">

            <section className="col-span-1 grid grid-rows-2 gap-4">
                <div className="animacion1 row-span-1 p-4 bg-zinc-900 rounded-lg justify-center flex flex-col items-center justify-center">
                <h3 className=" text-xl p-3">Lenguajes</h3>
                <div className="flex flex-row gap-10">
                {
                 lenguajes.map((lenguaje,i)=>{
                    return(
                        <div className="flex flex-col items-center justify-center  w-max">
                         <img className="w-12" src={`/icons/${lenguaje.img}`} alt={`img ${lenguaje.name}`} />
                         <p>{lenguaje.name}</p>
                        </div>
                    )
                 })
                }
                </div>
                </div>
                <div className="animacion1 row-span-1 p-4 bg-zinc-900 flex flex-col rounded-lg justify-center items-center">
                <h3 className=" text-xl p-3">Herramientas</h3>
                <div className="flex flex-row gap-10">
                   {
                    otros.map((otro,i)=>{
                        return(
                            <div className="flex flex-col items-center justify-center w-max">
                                <img className="w-12" src={`/icons/${otro.img}`} alt={`img ${otro.name}`} />
                                <p>{otro.name}</p>
                            </div>
                        )
                    })
                   }
                   </div>
                </div>
            </section>
            <section className="animacion1 col-span-1 p-4 bg-zinc-900 rounded-lg  flex flex-col items-center gap-4 ">
                <h3 className="text-xl p-3">Frameworks</h3>
                <div className="grid grid-cols-[1fr,1fr] grid-rows-auto gap-4 w-full h-max">
                {
                    frameworks.map((framework,i)=>{
                        return(
                            <div className="flex flex-col items-center justify-center ">
                                <img className="w-12" src={`/icons/${framework.img}`} alt={`img ${framework.name}`} />
                                <p>{framework.name}</p>
                            </div>
                        )
                    })
                }
           </div>
            </section>

        </div>

        </>  )
}