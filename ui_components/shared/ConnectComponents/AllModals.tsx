import { useContext, useEffect } from "react";
import { useModals } from "../../../src/utils/hooks/useModals";

import { AnimatePresence } from "framer-motion";
import W3iContext from "../../../src/contexts/W3iContext/context";
import { signatureModalService } from "../../../src/utils/store";
import { SignatureModal } from "../SignatureModal";

const AllModals = () => {
  const { isSignatureModalOpen } = useModals();

  const {
    chatRegisterMessage,
    pushRegisterMessage,
    chatRegisteredKey,
    pushRegisteredKey,
    userPubkey,
  } = useContext(W3iContext);

  useEffect(() => {
    const chatSignatureRequired = !chatRegisteredKey && chatRegisterMessage;
    const pushSignatureRequired = !pushRegisteredKey && pushRegisterMessage;
    if (userPubkey && (chatSignatureRequired || pushSignatureRequired)) {
      signatureModalService.openModal();
    } else {
      signatureModalService.closeModal();
    }
  }, [
    userPubkey,
    chatRegisteredKey,
    pushRegisteredKey,
    chatRegisterMessage,
    pushRegisterMessage,
  ]);

  return (
    <AnimatePresence mode="popLayout">
      {isSignatureModalOpen && (
        <SignatureModal
          message={chatRegisterMessage ?? pushRegisterMessage ?? ""}
          sender={chatRegisterMessage ? "chat" : "push"}
        />
      )}
    </AnimatePresence>
  );
};

export default AllModals;
