import Image from "next/image";
import { FiSun } from "react-icons/fi";
import { BsExclamationTriangle } from "react-icons/bs";
import { RxLightningBolt } from "react-icons/rx";

export default function Home() {
  return (
    <div
      className="lg:h-screen text-white flex flex-col items-center justify-center 
    px-2 my-16"
    >
      <h1 className="text-5xl font-bold mb-20">ChatGPT</h1>
      <div className="flex flex-col lg:flex-row space-x-2 text-center text-sm">
        <div className="">
          <div className="flex flex-col items-center justify-center mb-5">
            {/* Icon */}
            <FiSun className="h-7 w-7 mb-1 " />
            <h2>Examples</h2>
          </div>

          <div className="space-y-2">
            <p className="infoText">'Explain Something to me'</p>
            <p className="infoText">
              'What is the difference between a dog and a cat?'
            </p>
            <p className="infoText">'What is the color of the Sun?'</p>
          </div>
        </div>

        <div className="">
          <div className="flex flex-col items-center justify-center mb-5">
            {/* Icon */}
            <RxLightningBolt className="h-7 w-7 mb-1 " />
            <h2>Capabilities</h2>
          </div>

          <div className="space-y-2">
            <p className="infoText">'Explain Something to me'</p>
            <p className="infoText">
              'What is the difference between a dog and a cat?'
            </p>
            <p className="infoText">'What is the color of the Sun?'</p>
          </div>
        </div>

        <div className="">
          <div className="flex flex-col items-center justify-center mb-5">
            {/* Icon */}
            <BsExclamationTriangle className="h-7 w-7 mb-1 " />
            <h2>Limitations</h2>
          </div>

          <div className="space-y-2">
            <p className="infoText">'Explain Something to me'</p>
            <p className="infoText">
              'What is the difference between a dog and a cat?'
            </p>
            <p className="infoText">'What is the color of the Sun?'</p>
          </div>
        </div>
      </div>
    </div>
  );
}
