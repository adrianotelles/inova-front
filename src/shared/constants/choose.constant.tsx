import {
    TagIcon,
    ChartBarIcon,
    GlobeIcon,
    HeadsetIcon
} from "@phosphor-icons/react";

export const CHOOSE_LIST = [
    {
        id: 1,
        title: 'Qualidade e Confiabilidade',
        description: 'Trabalhamos com peças para caminhões e acessórios de alto padrão, garantindo durabilidade, segurança e excelente desempenho para o seu veículo.',
        icon: <TagIcon size={40} weight="fill" />
    },
    {
        id: 2,
        title: 'Ótimo Custo-Benefício',
        description: 'Prezamos por preços competitivos, transparência e condições comerciais vantajosas, garantindo que você faça um investimento seguro e inteligente.',
        icon: <ChartBarIcon size={40} />
    },
    {
        id: 3,
        title: 'Variedade de Produtos',
        description: 'Oferecemos um amplo portfólio de peças e acessórios, facilitando a compra em um só lugar e atendendo diferentes necessidades do setor.',
        icon: <GlobeIcon size={40} />
    },
    {
        id: 4,
        title: 'Atendimento Especializado',
        description: 'Nossa equipe está preparada para orientar você na escolha correta, oferecendo suporte técnico e soluções rápidas e eficientes.',
        icon: <HeadsetIcon size={40} />
    },
];