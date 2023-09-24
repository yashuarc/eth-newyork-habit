import { useState } from "react";
import {
  CreateChallenge,
  Invite,
  InviteStatus,
  NewChallenge,
} from "../components";

export default function Challenges() {
  const [challenges, setChallenges] = useState("newChallenge");

  const handleUpdateStep = (type: string) => {
    setChallenges(type);
  };

  const getChallengeSteps = (challenges: string) => {
    switch (challenges) {
      case "newChallenge":
        return <NewChallenge handleUpdateStep={handleUpdateStep} />;
      case "createChallenge":
        return <CreateChallenge handleUpdateStep={handleUpdateStep} />;
      case "invite":
        return <Invite handleUpdateStep={handleUpdateStep} />;
      case "status":
        return <InviteStatus />;
    }
  };

  return <>{getChallengeSteps(challenges)}</>;
}
