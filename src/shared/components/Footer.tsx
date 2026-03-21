import { InstagramLogoIcon, MapPinIcon, EnvelopeOpenIcon, PhoneIcon } from '@phosphor-icons/react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral text-neutral-content mt-10">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-start">
            <div className="mb-4">
              <h1 className="text-2xl lg:text-3xl font-bold text-white">
                INOVA
              </h1>
              <p className="text-sm text-neutral-300 mt-2">
                Suas melhores soluções em peças automotivas
              </p>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <PhoneIcon size={20} className="shrink-0 mt-0.5 text-primary" />
                <div className="flex flex-col">
                  <a
                    href="tel:+551133334444"
                    className="text-neutral-300 hover:text-white transition"
                  >
                    (11) 3333-4444
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <EnvelopeOpenIcon size={20} className="shrink-0 mt-0.5 text-primary" />
                <div className="flex flex-col">
                  <a
                    href="mailto:contato@inova.com.br"
                    className="text-neutral-300 hover:text-white transition"
                  >
                    contato@inova.com.br
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Localização</h3>
            <div className="flex items-start gap-2">
              <MapPinIcon size={20} className="shrink-0 mt-0.5 text-primary" />
              <div className="flex flex-col">
                <p className="text-neutral-300 text-sm">
                  Rua das Peças, 1234<br />
                  São Paulo, SP<br />
                  CEP: 01234-567<br />
                  Brasil
                </p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Redes Sociais</h3>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/inova"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-neutral-700 hover:bg-primary transition"
                aria-label="Instagram"
              >
                <InstagramLogoIcon size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="divider my-8"></div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left text-sm text-neutral-400">
            <p>
              Desenvolvido por <span className="font-semibold text-neutral-200">Equipe Telles</span>
            </p>
          </div>
          <div className="text-center text-sm text-neutral-400">
            <p>
              &copy; {currentYear} <span className="font-semibold text-neutral-200">INOVA</span>. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;