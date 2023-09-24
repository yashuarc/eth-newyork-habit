import React, { useCallback, useEffect, useState } from "react";

import { Modal } from ".";
import { signatureModalService } from "../../src/utils/store";
import { formatJsonRpcRequest } from "@walletconnect/jsonrpc-utils";

export const SignatureModal: React.FC<{
  message: string;
  sender: "chat" | "push";
}> = ({ message, sender }) => {
  const purpose: "identity" | "sync" = message.includes("did:key")
    ? "identity"
    : "sync";
  /*
   * If identity was already signed, and sync was requested then we are in the
   * final step.
   */
  const [signing, setSigning] = useState(false);

  const onSign = useCallback(() => {
    setSigning(true);
    window.web3inbox
      .signMessage(message)
      .then((signature) => {
        switch (sender) {
          case "chat":
            window.web3inbox.chat.postMessage(
              formatJsonRpcRequest("chat_signature_delivered", { signature })
            );
            break;
          case "push":
            window.web3inbox.notify.postMessage(
              formatJsonRpcRequest("notify_signature_delivered", { signature })
            );
            break;
          default:
            console.error("No correct sender for signature modal");
        }
      })
      .catch(() => {
        setSigning(false);
      })
      .finally(() => setSigning(false));
  }, [message, sender, setSigning]);

  // Modal is ready to sign when given a new purpose
  useEffect(() => {
    setTimeout(() => {
      setSigning(false);
    }, 0);
  }, [purpose, setSigning]);

  // const purposeMessage =
  //   purpose === "identity"
  //     ? "Sign for your identity key."
  //     : "Sign for syncing capabilities";

  return (
    <Modal onToggleModal={signatureModalService.toggleModal}>
      <div className="SignatureModal">
        <p className="SignatureModal__title">
          {signing ? "Requesting sign-in" : "Sign in to enable notifications"}
        </p>
        <p className="SignatureModal__url">app.web3inbox.com</p>
        <p className="SignatureModal__description">
          To fully use Web3Inbox, please sign into app.web3inbox.com with your
          wallet.
        </p>
        <div className="SignatureModal__button">
          <button disabled={signing} onClick={onSign}>
            {signing ? <div className="spinner"></div> : "Sign in with wallet"}
          </button>
        </div>
      </div>
    </Modal>
  );
};
