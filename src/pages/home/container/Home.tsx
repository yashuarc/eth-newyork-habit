import { useNavigate } from "react-router-dom";
import { Button } from "../../../../ui_components/shared";
import { getImage } from "../../../utils";

// import { useWeb3Modal } from "@web3modal/wagmi/react";
export default function Home() {
  // const modal = useWeb3Modal();
  const navigate = useNavigate();
  return (
    <section className="mt-4">
      <div className="container mx-auto h-full">
        <div className="h-full w-full">
          <div className="relative">
            <img src={getImage("profile_bg.png")} />
            <img
              className="rounded-full w-[86px] absolute -bottom-8 left-[-2px]"
              src={getImage("profile.png")}
            />
          </div>
          <div className="mt-10 mb-11">
            <p className="paragraph_regular text-black mb-7">Hey abhishek!</p>

            <h2 className="heading2_bold mb-2 pr-[100px]">
              Looks like there are no active goals set.
            </h2>
            <p className="paragraph_regular mb-5 pr-[120px]">
              Set a goal and challenge your friends to complete them & Grow
              together !
            </p>
            <Button
              variant={"primary"}
              onClick={() => navigate("create-challenge")}
            >
              Create a challenge
            </Button>
          </div>
          <div className="p-5 border border-grey2 rounded-4xl">
            <img className="w-6 h-6 mb-2" src={getImage("connect_icon.png")} />
            <p className="paragraph_regular text-black mb-[14px]">
              Link your Strava account to track <br /> accurately
            </p>
            <Button variant={"ghost"}>Connect</Button>
          </div>
          {/* <Button variant={"primary"} onClick={() => modal.open()}>
          Connect Wallet
        </Button> */}
        </div>
      </div>
    </section>
  );
}
