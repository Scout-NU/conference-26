import { BsLinkedin, BsInstagram } from "react-icons/bs";

interface SpeakerProps {
    img: string;
    name: string;
    title: string;
    description: string;
    link1: string;
    link2: string;
}

export default function Speaker({ img, name, title, description, link1, link2 }: SpeakerProps) {
    return (
        <div className="flex flex-col md:flex-row m-10">
            <img className="border-2 rounded-2xl w-54 h-60 object-cover shrink-0" src={img}
                alt="Speaker Image">
            </img>
            <div className="flex flex-col w-54 md:w-2/3 mt-5 md:mt-0 :mt-15 md:ml-15 gap-5">
                <div>
                    <h1 className="text-4xl font-semibold">{name}</h1>
                    <h2>{title}</h2>
                </div>
                <p> {description} </p>
                <div>
                    <h2 className="mb-2 cursor-pointer">LEARN MORE</h2>
                    <div className="flex">
                        <div className="mr-1">
                            <BsLinkedin href={link1} className="text-2xl cursor-pointer" />
                        </div>
                        <div className="mr-1">
                            <BsInstagram href={link2} className="text-2xl cursor-pointer" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}