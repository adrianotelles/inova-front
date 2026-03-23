import Doubt from "@shared/components/Doubt";
import Services from "./components/Services";
import Values from "./components/Values";
import { Helmet } from "react-helmet-async";

const AboutPage = () => {
    return (
        <>
            <Helmet>
                <title>Peças para Caminhões e Máquinas Pesadas | Inova Peças de Máquinas Pesadas</title>
                <meta name="description" content="Peças para tratores, caminhões e máquinas pesadas com qualidade e agilidade. Consulte compatibilidade e compre na Inova Peças." />
                <link rel="canonical" href="https://inova-pecas.com/" />
            </Helmet>
            <section className="container py-20 pt-0 mx-auto">
                <h1 className="lg:text-4xl font-semibold border-b pb-5 pt-10 border-b-neutral-300 mb-15 lg:px-0 px-5 text-2xl">
                    Sobre nós
                </h1>

                <div className="w-full max-w-190 mx-auto text-center">
                    <p className="mb-10">
                        Nossa empresa é especializada na comercialização de peças para caminhões, atendendo com excelência às demandas do setor de transporte e logística. Atuamos com a venda de peças de pequeno, médio e grande porte, oferecendo soluções completas para manutenção, reposição e desempenho de veículos pesados.
                    </p>
                    <p>
                        Trabalhamos com uma ampla variedade de componentes essenciais para caminhões, incluindo peças de motor, suspensão, freios, transmissão, sistemas elétricos e demais itens fundamentais para o pleno funcionamento e segurança do veículo. Nosso compromisso é fornecer produtos de qualidade, procedência confiável e alto padrão de desempenho, atendendo tanto transportadoras quanto mecânicos, frotistas e proprietários de caminhões.
                    </p>
                </div>
            </section>
            <section className="bg-base-200 py-20">
                <div className="container mx-auto">
                    <h1 className="text-2xl font-semibold border-b pb-5 border-b-neutral-300 mb-20 lg:px-0 px-5 w-75">
                        Nossos valores
                    </h1>
                    <Values />
                </div>
            </section>
            <section className="py-20">
                <div className="container mx-auto">
                    <h1 className="text-2xl font-semibold border-b pb-5 border-b-neutral-300 mb-20 lg:px-0 px-5 w-75">
                        Serviços
                    </h1>
                    <Services />
                </div>
                <Doubt isBorder={false} />
            </section>
        </>
    )
}

export default AboutPage;