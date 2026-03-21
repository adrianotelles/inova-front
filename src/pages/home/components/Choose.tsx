import ChooseCard from '@shared/components/cards/ChooseCard'
import { CHOOSE_LIST } from '@shared/constants/choose.constant'

const Choose = () => {
    return (
        <section className="py-20">
            <div className="container mx-auto">
                <h1 className="text-[40px] font-semibold text-center">
                   Por que escolher a Inova?
                </h1>

                <div className="grid items-start grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5 mx-5 lg:mx-0 mt-20">
                    {
                        CHOOSE_LIST.map((choose) => (
                            <ChooseCard {...choose} key={choose.id} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Choose;