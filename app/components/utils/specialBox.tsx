import { BsQuote } from "react-icons/bs"

const TestimonialBox = ({ owner, body }: { owner: string; body: string }) => {
	return (
		<>
			<div className="m-auto w-8/12 mobile:w-10/12 normal:pt-10 normal:pb-20">
				<p className="opacity-75 text-sm mb-5 italic">
					Here is what {owner} says:
				</p>
				<p className="mb-5 uppercase font-bold opacity-90">{owner}</p>
				<BsQuote className="absolute right-10 top-6 opacity-60 text-6xl rotate-180 mobile:hidden" />
				<p className="opacity-80 mobile:h-[250px] mobile:overflow-x-auto">
					{body}
				</p>
				<p className="normal:hidden tablet:hidden text-center mt-5 opacity-80">
					scroll for more ⬆
				</p>
				<BsQuote className="absolute left-10 bottom-6 opacity-60 text-6xl mobile:hidden" />
			</div>
		</>
	)
}

export default TestimonialBox
