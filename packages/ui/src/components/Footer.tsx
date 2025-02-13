import { memo } from "react";
import { useTranslation } from "react-i18next";

import Image from "./Image";

interface FooterProps {
  version: string;
}

function Footer(props: FooterProps) {
  const { version } = props;

  const [t] = useTranslation();

  const web3authIcon = <Image imageId="web3auth" height="14px" width="auto" />;

  return (
    <div className="w3a-modal__footer">
      <div className="w3a-footer">
        <div>
          <div className="w3a-footer__links">
            <a href="https://docs.web3auth.io/legal/terms-and-conditions">{t("modal.footer.terms")}</a>
            <span>|</span>
            <a href="https://docs.web3auth.io/legal/privacy-policy">{t("modal.footer.policy")}</a>
          </div>
          <p>{version}</p>
        </div>
        <div className="w3a-footer__secured">
          <div>{t("modal.footer.message")}</div>
          {web3authIcon}
        </div>
      </div>
    </div>
  );
}

export default memo(Footer);
