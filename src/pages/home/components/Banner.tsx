import banner from '@shared/assets/img/mecanico-durante-realizacao-de-troca-de-peca-automotiva-em-caminhao.jpg';

const Banner = () => {
  return (
    <div className="relative hero h-200 min-h-200 max-h-200 overflow-hidden">
      <img
        src={banner}
        alt="Banner Inova Peças"
        className="absolute inset-0 w-full h-full object-cover"
        fetchPriority="high"
      />
      <div className="hero-overlay absolute inset-0"></div>
      <div className="hero-content relative text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Inova Peças</h1>
          <p className="mb-5">
            Seu equipamento não pode parar. A Inova Peças oferece qualidade, agilidade e as peças certas para tratores, caminhões e máquinas pesadas, garantindo desempenho e produtividade para o seu trabalho.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;