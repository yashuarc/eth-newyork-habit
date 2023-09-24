import { FC, useState } from "react";
import { BackBtn, InputField } from "../../../../ui_components/shared";

import { SearchResult } from ".";
import { useDebounce } from "../../../utils/hooks";
import { getImage } from "../../../utils";
import { IInviteProps } from "./types";

const Invite: FC<IInviteProps> = ({ handleUpdateStep }) => {
  const [inputValue, setInputValue] = useState("");
  const [loader, setLoader] = useState(false);
  const [searchValue] = useDebounce(inputValue, 300);

  const handleChangeInput = (e: string) => {
    setInputValue(e);
  };
  const handleClearInput = () => {
    setInputValue("");
  };
  return (
    <section className="relative h-full">
      <div className="container mx-auto h-full">
        <div className="h-full w-full">
          <div className="pt-4">
            <BackBtn className="mb-2" />
            <h2 className="heading2_bold mb-4">
              Who do you want to <br /> challenge?
            </h2>
            <p className="paragraph_regular mb-[70px]">
              * If you fail to complete the challenge this amount will be
              deducted from your balance
            </p>
          </div>
          <InputField
            placeholder="Search your friend"
            isSearch
            searchIcon={getImage("search_icon.svg")}
            onChange={(e) => handleChangeInput(e.target.value)}
            value={inputValue}
            OnClear={handleClearInput}
          />
          {/* <img
            className="mx-auto mt-[60px]"
            src={getImage("search_nostate.svg")}
          /> */}
          <p className="paragraph_regular mb-2 mt-6">Found 1 matching result</p>
          <SearchResult handleUpdateStep={handleUpdateStep} />
        </div>
      </div>
    </section>
  );
};

export default Invite;
