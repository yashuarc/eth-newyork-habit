import { FC } from "react";
import { BackBtn, Button } from "../../../../ui_components/shared";
import { getImage } from "../../../utils";

import { ICreateChallengeProps } from "./types";

const CreateChallenge: FC<ICreateChallengeProps> = ({ handleUpdateStep }) => {
  return (
    <section className="relative h-full">
      <div className="container mx-auto h-full">
        <div className="h-full w-full">
          <div className="pt-4">
            <BackBtn className="mb-2" />
            <h2 className="heading2_bold mb-4">
              How much is the reward <br /> for the challenge?
            </h2>
            <p className="paragraph_regular mb-[70px]">
              * If you fail to complete the challenge this amount will be
              deducted from your balance
            </p>
            <div className="mb-10">
              <img src={getImage("ethereum.svg")} className="mb-2" />
              <p className="paragraph_regular mb-1">Your balance</p>
              <p className="paragraph_bold text-black mb-1">2.990 ETH</p>
            </div>
            <div>
              <div className="rounded-large bg-grey3 px-5 py-[14px] flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <img src={getImage("ethereum.svg")} className="w-5 h-5" />
                  <p className="paragraph_regular text-black">0.02</p>
                </div>
                <p className="paragraph_regular">ETH</p>
              </div>
              <div className="rounded-large border border-grey2 px-5 py-[14px] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <p className="paragraph_regular">Reward pool</p>
                  <img src={getImage("help_circle.svg")} className="w-4 h-4" />
                </div>
                <p className="paragraph_regular text-black">0.04 ETH</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-12 w-[calc(100%-40px)] left-1/2 -translate-x-1/2">
        <Button
          variant={"primary"}
          onClick={() => handleUpdateStep("invite")}
          className="w-full"
        >
          <div className="flex items-center justify-center gap-2">
            Create challenge
            <img src={getImage("arrow_right_white.svg")} />
          </div>
        </Button>
      </div>
    </section>
  );
};

export default CreateChallenge;
