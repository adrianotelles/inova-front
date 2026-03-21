import type { JSX } from "react";

const ChooseCard = (props: { title: string, description: string, icon: JSX.Element }) => {
  return (
    <div className="card card-border bg-neutral-100 w-full h-full rounded-lg">
      <div className="card-body">
        <div className="p-5 w-20 mx-auto bg-neutral-300 rounded-full text-neutral-700">
          {props.icon}
        </div>
        <div className="mt-5 text-center">
          <h2 className="text-xl font-semibold">
            {props.title}
          </h2>
          <p className="text-sm mt-3">
            {props.description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default ChooseCard;