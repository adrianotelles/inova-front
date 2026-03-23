import ToastContext from "@context/toast.context";
import { useMaskito } from "@maskito/react";
import { EnvelopeIcon, PhoneIcon } from "@phosphor-icons/react";
import { BudgetService } from "@services/budget.service";
import isValidPhone from "@shared/validations/phoneValidator";
import openWhats from "@shared/constants/whats.constants";
import phoneMask from "@shared/mask/phone.mask";
import { format } from "date-fns";
import React, { useContext, useState } from "react";
import isValidEmail from "@shared/validations/email.validation";
import { Helmet } from "react-helmet-async";

const budgetService = new BudgetService();
const date = format(new Date(), 'dd/MM/yyyy');
const BudgetPage = () => {
    const { onToast } = useContext(ToastContext);
    const inputRef = useMaskito({
        options: phoneMask
    });

    const [form, setForm] = useState({
        email: '',
        phoneNumber: '+55',
        description: '',
        createdAt: date
    });

    function handleChange({ currentTarget }: React.InputEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { id, value } = currentTarget;
        setForm((prev) => ({ ...prev, [id]: value }));
    }

    async function onSubmit(event: React.SubmitEvent<HTMLFormElement>) {
        event.preventDefault();
        try {
            const hasValueEmail: boolean = form.email.trim().length > 0;
            const hasValueDescription: boolean = form.email.trim().length > 0;
            const errors: string[] = [];

            if (!hasValueEmail || !isValidEmail(form.email)) {
                errors.push('Insira um endereço de E-mail válido');
            }

            if (!hasValueDescription) {
                errors.push('Insira uma descrição');
            }

            if (!isValidPhone(form.phoneNumber)) {
                errors.push('Insira um número de telefone válido');
            }

            console.log(errors);

            if (!errors.length) {
                await budgetService.set(form);
                onToast('Formulário enviado com sucesso!', 'success');
            } else {
                onToast('Ocorreu um erro para enviar! - ' + errors.join(' > '), 'error');
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <Helmet>
                <title>Realize seu orçamento | Inova Peças</title>
                <meta name="description" content="Peças para tratores, caminhões e máquinas pesadas com qualidade e agilidade. Consulte compatibilidade e compre na Inova Peças." />
                <link rel="canonical" href="https://inova-pecas.com/" />
            </Helmet>
            <section className="container py-20 pt-0 mx-auto">
                <h1 className="lg:text-4xl font-semibold border-b pb-5 pt-10 border-b-neutral-300 mb-15 lg:px-0 px-5 text-2xl w-full max-w-120">
                    Faça seu orçamento
                </h1>
                <div className="card bg-white border-2 border-base-200 shadow-sm w-full max-w-140 mx-auto rounded-2xl">
                    <div className="card-body">
                        <form onSubmit={onSubmit}>
                            <div className="flex flex-wrap items-center gap-3 justify-between">
                                <div className="mb-5 w-full">
                                    <label htmlFor="email" className="w-full block">E-mail</label>
                                    <label className="input w-full mt-2">
                                        <EnvelopeIcon size={32} className="text-gray-500" />
                                        <input value={form.email} type="email" id="email" className="w-full" placeholder="Insira seu e-mail" required onInput={handleChange} />
                                    </label>
                                </div>
                                <div className="mb-5 w-full">
                                    <label htmlFor="phoneNumber" className="w-full block">Número do Celular</label>
                                    <label className="input w-full mt-2">
                                        <PhoneIcon size={32} className="text-gray-500" />
                                        <input value={form.phoneNumber} id="phoneNumber" ref={inputRef} type="text" className="w-full" placeholder="Insira seu número do celular" required onInput={handleChange} />
                                    </label>
                                </div>
                                <div className="mb-5 w-full">
                                    <label htmlFor="description" className="w-full block">
                                        Descrição
                                    </label>
                                    <textarea id="description" value={form.description} className="textarea w-full mt-2" placeholder="Descrição do orçamento" rows={5} required onInput={handleChange}></textarea>
                                </div>

                                <button className="btn btn-primary mt-10 w-full py-7 rounded-lg">
                                    Enviar
                                </button>
                                <div className="flex w-full flex-col">
                                    <div className="divider">OU</div>
                                </div>
                                <a href={openWhats('Gostaria de fazer um orçamento')} target="_blank" className="btn btn-success w-full py-7 rounded-lg">
                                    Falar no whatsapp
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>

    )
}

export default BudgetPage;