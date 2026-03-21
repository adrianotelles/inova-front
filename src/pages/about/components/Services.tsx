const services = [
    {
        id: 1,
        title: "Identificação da necessidade",
        description: `
            Primeiro entendemos a necessidade do cliente, seja para manutenção, reposição ou melhoria no desempenho do caminhão. Nosso objetivo é indicar as peças ideais para cada situação.
        `
    },
    {
        id: 2,
        title: "Peças para manutenção",
        description: ` 
            Oferecemos uma linha completa de peças essenciais para manutenção de caminhões, ajudando a manter o veículo seguro, eficiente e pronto para o trabalho diário.
        `
    },
    {
        id: 3,
        title: "Manutenção preventiva",
        description: `
            Também incentivamos a manutenção preventiva, oferecendo peças que ajudam a evitar falhas inesperadas, aumentar a vida útil do caminhão e reduzir custos com reparos emergenciais.
        `
    },
    {
        id: 4,
        title: "Reposição de peças",
        description: `
            Trabalhamos com peças de reposição de qualidade para substituir componentes desgastados ou danificados, garantindo o funcionamento correto do caminhão e evitando problemas futuros.
        `
    },
]


const Services = () => {
    return (
        <>
            <div className="grid lg:grid-cols-2 md:grid-cols-[repeat(auto-fill,minmax(600px,1fr))] justify-center items-center lg:px-0 px-5">
                {
                    services.map((v) => (
                        <div className="relative lg:mt-20 mt-10 w-full max-w-110 mx-auto lg:mb-50" key={v.id}>
                            {
                                v.id === 1 &&
                                <svg xmlns="http://www.w3.org/2000/svg" className="z-0 hidden lg:block w-full absolute top-1/2 -translate-y-1/2 max-w-25 left-[98%]" viewBox="0 0 220 400">
                                    <path d="M20 20 Q20 0 40 10 L200 170 Q230 200 200 230 L40 390 Q20 400 20 380 Z"
                                        fill="#DEE1E6FF" />
                                </svg>
                            }
                            {
                                v.id === 2 &&
                                <svg xmlns="http://www.w3.org/2000/svg" className="z-0 hidden lg:block w-full absolute max-w-50 left-1/2 -translate-x-1/2 top-[96%]" viewBox="0 0 400 220">
                                    <path d="M20 20 Q0 20 10 40 L170 200 Q200 230 230 200 L390 40 Q400 20 380 20 Z"
                                        fill="#DEE1E6FF" />
                                </svg>
                            }
                            {
                                v.id === 3 &&
                                <svg xmlns="http://www.w3.org/2000/svg" className="z-0 hidden lg:block w-full absolute max-w-50 bottom-[96%] left-1/2 -translate-x-1/2" viewBox="0 0 400 220">
                                    <path d="M20 200 Q0 200 10 180 L170 20 Q200 -10 230 20 L390 180 Q400 200 380 200 Z"
                                        fill="#DEE1E6FF" />
                                </svg>
                            }
                            {
                                v.id === 4 &&
                                <svg xmlns="http://www.w3.org/2000/svg" className="z-0 hidden lg:block w-full absolute max-w-25 top-1/2 -translate-y-1/2 right-[98%]" viewBox="0 0 220 400">
                                    <path d="M200 20 Q200 0 180 10 L20 170 Q-10 200 20 230 L180 390 Q200 400 200 380 Z"
                                        fill="#DEE1E6FF" />
                                </svg>
                            }
                            <div className="card shadow-md bg-white border-2 border-gray-300 h-70 z-1">
                                <div className="card-body text-center h-full flex flex-col justify-center items-center">
                                    <h2 className="font-semibold text-xl mb-5">
                                        {v.title}
                                    </h2>
                                    <p className="text-center text-base max-h-fit">
                                        {v.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Services;