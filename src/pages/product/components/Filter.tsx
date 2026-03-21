import Doubt from "@shared/components/Doubt";
import type { FilterModel } from "@shared/models/filter.model";
import { useState } from "react";

const FilterComponent = ({ producers, onFilter }: { producers: string[], onFilter: (data: FilterModel) => void }) => {
    const [filter, setFilter] = useState<FilterModel>({});
    function handleChange({ target }: React.ChangeEvent<HTMLInputElement>) {
        const { id, value, type, checked } = target;
        if (type === 'text') {
            setFilter(({ ...filter, [id]: value }));
        } else {
            if (!checked) {
                const filtered = filter?.producer?.some((pr) => pr !== id) ? filter?.producer?.filter((pr) => pr !== id) : undefined;
                setFilter(({ ...filter, producer: filtered }));
            } else {
                setFilter(({ ...filter, producer: [...filter.producer ?? [], id] }));
            }
        }
    }

    function resetFilter() {
        setFilter({});
        onFilter({});
    }

    return (
        <>
            <div className="card shadow-md rounded-xl lg:block hidden border border-base-300">
                <div className="card-body">
                    <label htmlFor="search" className="label uppercase font-semibold">Termo de busca</label>
                    <label className="input rounded-lg border-base-200">
                        <input id='search' type="text" placeholder="Search" value={filter?.search ?? ''} onChange={handleChange} />
                        <svg className="h-[1.3em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="4"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                    </label>

                    <div className="flex items-center justify-between mb-3 mt-4">
                        <div className="uppercase font-semibold text-[12px]">
                            Filtros avançados
                        </div>
                        <div className="cursor-pointer uppercase font-semibold text-[12px]" onClick={resetFilter}>
                            Limpar tudo
                        </div>
                    </div>
                    <p className="m-0 p-0 text-sm font-medium mb-2">Fabricante</p>
                    {
                        producers.length > 0 ?
                            producers.map((producer) => (
                                <div key={producer}>
                                    <label className="flex items-center gap-2 mb-2" >
                                        <input type="checkbox" id={producer} checked={filter.producer?.some((p) => p === producer) ?? false} onChange={handleChange} className="checkbox rounded-sm w-5 h-5" />
                                        <p className="text-sm font-normals">
                                            {producer}
                                        </p>
                                    </label>
                                </div>
                            )) :
                            <p>
                                Não contém fabricantes
                            </p>
                    }
                    <button className="btn btn-primary w-full mt-5 rounded-lg uppercase py-6" onClick={() => onFilter(filter)}>
                        Aplicar Filtros
                    </button>
                </div>
            </div>
            <div className="drawer">
                <input id="my-drawer-1" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <label htmlFor="my-drawer-1" className="btn btn-primary drawer-button mx-10 lg:hidden">Filtros</label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-1" aria-label="close sidebar" className="drawer-overlay"></label>
                    <div className="menu bg-base-200 min-h-full w-80 p-4 pt-25">
                        <label htmlFor="search" className="label uppercase font-semibold">Termo de busca</label>
                        <label className="input rounded-lg border-base-200">
                            <input id='search' type="text" placeholder="Search" value={filter?.search ?? ''} onChange={handleChange} />
                            <svg className="h-[1.3em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth="4"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <path d="m21 21-4.3-4.3"></path>
                                </g>
                            </svg>
                        </label>

                        <div className="flex items-center justify-between mb-3 mt-4">
                            <div className="uppercase font-semibold text-[12px]">
                                Filtros avançados
                            </div>
                            <div className="cursor-pointer uppercase font-semibold text-[12px]" onClick={resetFilter}>
                                Limpar tudo
                            </div>
                        </div>
                        <p className="m-0 p-0 text-sm font-medium mb-2">Fabricante</p>
                        {
                            producers.length > 0 ?
                                producers.map((producer) => (
                                    <div key={producer}>
                                        <label className="flex items-center gap-2 mb-2" >
                                            <input type="checkbox" id={producer} checked={filter.producer?.some((p) => p === producer) ?? false} onChange={handleChange} className="checkbox rounded-sm w-5 h-5" />
                                            <p className="text-sm font-normals">
                                                {producer}
                                            </p>
                                        </label>
                                    </div>
                                )) :
                                <p>
                                    Não contém fabricantes
                                </p>
                        }
                        <button className="btn btn-primary w-full mt-5 rounded-lg uppercase py-6" onClick={() => onFilter(filter)}>
                            Aplicar Filtros
                        </button>

                        <Doubt isBorder={true} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default FilterComponent;