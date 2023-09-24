import { Button } from "../../../../ui_components/shared";
import { getImage } from "../../../utils";

export default function Onboarding() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full py-10">
        <div className="h-full w-full">
          <div className="relative text-center mt-10 mb-[20vh]">
            <img
              className="w-[30vw] cursor-pointer relative z-10 mx-auto"
              src={getImage("logo.svg")}
            />
            <img
              className="w-[45vw] absolute -top-[4vh] left-1/2 -translate-x-1/2"
              src={getImage("logo_pattern.svg")}
            />
          </div>
          <div className="text-center mb-[20vh]">
            <p className="paragraph_bold text-black">Level Up Your Fitness!</p>
            <h1 className="heading1_extrabold uppercase text-green italic">
              Challenge <br /> Track <br /> Conquer!
            </h1>
          </div>
          <div className="text-center">
            <p className="paragraph_regular mb-4">Get started now</p>
            <Button variant={"primary"} label="Connect Lens account" />
          </div>
        </div>
      </div>
    </section>
  );
}
