import { FC, useState } from "react";
import {
  BackBtn,
  Button,
  InputField,
  SlidingTab,
} from "../../../../ui_components/shared";
import { getImage } from "../../../utils";
import { challengeTabs } from "../../../../constants";

import { INewChallengeProps } from "./types";

const NewChallenge: FC<INewChallengeProps> = ({ handleUpdateStep }) => {
  const [activeTab, setActiveTab] = useState("steps");

  const handleTabClick = (id: string) => {
    setActiveTab(id);
  };

  return (
    <section className="relative h-full">
      <div className="container mx-auto h-full relative">
        <div className="h-full w-full pb-[100px]">
          <div className="pt-4">
            <BackBtn className="mb-2" />
            <h2 className="heading2_bold mb-10">
              What do you want to <br /> Achieve?
            </h2>
            <div className="bg-green rounded-4xl p-5 relative overflow-clip mb-20">
              <div className="flex items-end justify-between relative z-10">
                <div className="flex items-center gap-2">
                  <img className="w-[70px]" src={getImage("walk_icon.svg")} />
                  <div>
                    <p className="paragraph_regular text-grey5 mb-1">Steps</p>
                    <p className="heading2_extrabold text-grey4">5,000</p>
                  </div>
                </div>
                <p className="text-right paragraph_regular text-grey5">
                  in <br /> 1 days
                </p>
              </div>
              <img
                className="w-full absolute left-0 top-0 z-0"
                src={getImage("steps_pattern.png")}
              />
            </div>
            <div className="mb-6">
              <SlidingTab
                tabData={challengeTabs}
                handleTabClick={handleTabClick}
                activeTab={activeTab}
              />
            </div>
            <div>
              {activeTab === "steps" ? (
                <div>
                  <InputField
                    className="mb-[30px]"
                    label={"Goal"}
                    rightText="Steps"
                  />
                  <InputField label={"Duration"} rightText="Days" />
                </div>
              ) : null}
              {activeTab === "distance" ? (
                <div>
                  <InputField
                    className="mb-[30px]"
                    label={"Goal"}
                    rightText="Steps"
                  />
                  <InputField label={"Duration"} rightText="Days" />
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
      <div className="fixed bottom-12 w-[calc(100%-40px)] left-1/2 -translate-x-1/2 z-10">
        <Button
          variant={"primary"}
          onClick={() => handleUpdateStep("createChallenge")}
          className="w-full"
        >
          <div className="flex items-center justify-center gap-2">
            Set goal
            <img src={getImage("arrow_right_white.svg")} />
          </div>
        </Button>
      </div>
    </section>
  );
};

export default NewChallenge;
