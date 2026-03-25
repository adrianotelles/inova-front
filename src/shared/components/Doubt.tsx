import { ChatCircleTextIcon } from "@phosphor-icons/react";
import openWhats from "@shared/constants/whats.constants";

const Doubt = ({ isBorder }: { isBorder: boolean }) => {
    return (
        <section className="py-12">
            <div className="card bg-base-200 rounded-2xl border border-primary/20 shadow-lg">
                <div className="card-body items-center text-center">
                    {
                        !isBorder &&
                        <div className="mb-4">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-base-100 border-3 border-gray-400">
                                <ChatCircleTextIcon size={32} />
                            </div>
                        </div>
                    }
                    {
                        !isBorder &&
                        <h2 className="card-title text-3xl lg:text-4xl font-bold text-primary">Dúvidas?</h2>
                        || isBorder &&
                        <h2 className="card-title text-lg font-bold text-primary">
                            Não encontrou a peça que procurava?
                        </h2>
                    }
                    <div className="space-y-4 my-6 max-w-2xl">
                        {
                            !isBorder &&
                            <>
                                <p className="text-base lg:text-lg text-base-content/80 leading-relaxed">
                                    Entre em contato com nosso suporte. Nossa equipe está sempre pronta para solucionar qualquer questão.
                                </p>
                                <p className="text-base lg:text-lg text-base-content/80 leading-relaxed">
                                    Estamos sempre disponíveis para solucionar seus problemas.
                                </p>
                            </>
                            || isBorder &&
                            <p className="text-base lg:text-md text-base-content/80 leading-relaxed">
                                Nossa equipe de consultores técnicos está pronta para ajudar você a encontrar a solução exata para sua máquina.
                            </p>
                        }


                    </div>

                    <div className="card-actions justify-center mt-8">
                        <a
                            href={openWhats('Gostaria de falar com um consultor', "15997104217")}
                            target="_blank"
                            className="btn btn-primary btn-lg gap-2 rounded-lg"
                        >
                            <ChatCircleTextIcon size={20} />
                            Fale com Consultor
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Doubt;