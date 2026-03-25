import ToastContext from '@context/toast.context';
import { InstagramLogoIcon, PhoneIcon } from '@phosphor-icons/react';
import { BudgetService } from '@services/budget.service';
import { useContext, useState } from 'react';
import { NavLink } from 'react-router';

const budget = new BudgetService();

const Footer = () => {
  const [email, setEmail] = useState<string>("");
  const { onToast } = useContext(ToastContext);

  const handleClick = async () => {
    try {
      const data = {
        email,
        phoneNumber: '',
        description: 'Gostaria de receber novidades e promoções exclusivas',
        createdAt: new Date()
      }

      await budget.set(data);
      onToast("Mensagem enviada com sucesso!", 'success');
    } catch (error) {
      console.log(error);
      onToast("Ocorreu um erro para enviar, tente novamente mais tarde", 'error');
    } finally {
      setEmail("");
    }
  }

  return (
    <footer className="bg-black text-white mt-10">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h3 className="font-bold text-sm mb-4 tracking-wide">ATENDIMENTO</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <PhoneIcon size={18} className="text-red-500 mt-0.5" />
                <div>
                  <p className="text-gray-400">Whatsapp</p>
                  <p className="text-white font-semibold">(15) 99710-4217</p>
                </div>
              </div>
              <div className="text-gray-400 mt-2">
                <p className="font-semibold text-white">Horário</p>
                <p>Seg à Sex / 8h às 18h</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-sm mb-4 tracking-wide">INFORMAÇÕES</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="hover:text-white cursor-pointer">
                <NavLink to="/sobre-nos">
                  Sobre Nós
                </NavLink>
              </li>
              <li className="hover:text-white cursor-pointer">
                <NavLink to="/orcamento">
                  Orçamentos
                </NavLink>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-sm mb-4 tracking-wide">FIQUE POR DENTRO</h3>
            <p className="text-gray-400 text-sm mb-4">
              Receba novidades e promoções exclusivas
            </p>
            <div className="flex">
              <input
                type="email"
                onChange={(ev) => setEmail(() => ev.target.value)}
                value={email}
                placeholder="E-mail"
                className="w-full px-3 py-2 text-sm bg-transparent border border-gray-600 rounded-l-md focus:outline-none"
              />
              <button className="bg-blue-600 px-4 text-sm font-semibold rounded-r-md hover:bg-blue-700 transition" onClick={handleClick}>
                ENVIAR
              </button>
            </div>
            <div className="flex gap-4 mt-5">
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center border border-gray-600 rounded-full hover:bg-red-600 transition"
              >
                <InstagramLogoIcon size={18} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 my-8"></div>
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm gap-2">
          <p>
            Desenvolvido por <span className="text-white font-semibold">Equipe Telles</span>
          </p>
          <p>
            &copy; 2026 <span className="text-white font-semibold">INOVA</span>. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;