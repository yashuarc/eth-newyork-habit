import { FC } from "react";
import { Button } from "../../../../ui_components/shared";
import { getImage } from "../../../utils";
import { ISearchResultProps } from "./types";

const SearchResult: FC<ISearchResultProps> = ({ handleUpdateStep }) => {
  return (
    <div className="bg-white border border-grey2 rounded-4xl relative">
      <div className="relative">
        <img className="rounded-t-4xl" src={getImage("search_result_bg.png")} />
        <img
          className="rounded-full w-[74px] absolute -bottom-8 left-1/2 -translate-x-1/2"
          src={getImage("profile.png")}
        />
      </div>
      <div className="text-center px-5 py-5">
        <p className="paragraph_bold text-black mt-5 mb-8">Jason_12</p>
        <Button
          variant={"primary"}
          label="Invite for challenge"
          onClick={() => handleUpdateStep("status")}
        />
      </div>
    </div>
  );
};

export default SearchResult;
