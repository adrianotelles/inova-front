import { CheckFatIcon, MagnifyingGlassPlusIcon, WrenchIcon } from "@phosphor-icons/react";

const values = [
    {
        id: 1,
        title: "Ampla Variedade",
        description: `
            Trabalhamos com uma grande diversidade de peças para caminhões, desde componentes de pequeno porte até peças maiores e mais complexas. Nosso objetivo é oferecer soluções completas para manutenção, reposição e desempenho de veículos pesados.
        `,
        icon: <MagnifyingGlassPlusIcon size={30} />
    },
    {
        id: 2,
        title: "Qualidade e Procedência",
        description: `
            Trabalhamos com uma grande diversidade de peças para caminhões, desde componentes de pequeno porte até peças maiores e mais complexas. Nosso objetivo é oferecer soluções completas para manutenção, reposição e desempenho de veículos pesados.
        `,
        icon: <CheckFatIcon size={30} />
    },
    {
        id: 3,
        title: "Atendimento Especializado",
        description: `
            Trabalhamos com uma grande diversidade de peças para caminhões, desde componentes de pequeno porte até peças maiores e mais complexas. Nosso objetivo é oferecer soluções completas para manutenção, reposição e desempenho de veículos pesados.
        `,
        icon: <WrenchIcon size={30} />
    },
]

const Values = () => {
    return (
        <div className="flex items-center gap-10 justify-center flex-wrap relative lg:px-0 px-5">
            {
                values.map((v) => (
                    <div className="relative mt-20" key={v.id}>
                        <div className="absolute -top-25 left-1/2 -translate-x-1/2">
                            <div className="bg-gray-300 border-3 border-gray-400 w-15 h-15 rounded-full flex items-center justify-center">
                                {v.icon}
                            </div>
                            <div className="absolute top-15 left-1/2 -translate-x-1/2 w-1 h-10 bg-gray-300"></div>
                        </div>
                        <div className="card shadow-md bg-white w-full max-w-100 border-2 border-base-300">
                            <div className="card-body text-center">
                                <h2 className="font-semibold text-xl mb-5">
                                    {v.title}
                                </h2>
                                <p className="text-center text-base">
                                    {v.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Values;