import Header from "Components/Header/Header";
import React from "react";
import "./styles.css";
import { useTranslation } from "react-i18next";
function TermsAndConditions() {
  const { t } = useTranslation("translation");

  return (
    <>
      <Header
        headingText={t("terms-and-conditions.terms-and-conditions")}
        noButtons={"lg:ml-52 lg:mx-0 mx-8 2xl:ml-96 3xl:ml-100"}
        restaurant
        logoYellow
        bgHeader="bg-greyBg"
        lastModificationDate={t("terms-and-conditions.last-update")}
      />
      <div className="lg:ml-52 2xl:ml-96 3xl:ml-100 mx-8 lg:mx-0 lg:my-26 my-12 max-w-3.5xl lg:mr-52">
        <p class="p1">{t("terms-and-conditions.welcome-message")}</p>
        <p class="p2">
          <br />
        </p>
        <p class="p1">
          {t("terms-and-conditions.disclaimer")}
          <span class="Apple-converted-space">&nbsp;</span>
        </p>
        <p class="p2">
          <br />
        </p>
        <p class="p1">
          <strong> {t("terms-and-conditions.our-service")}</strong>
        </p>
        <p class="p2">
          <br />
        </p>
        <p class="p1">{t("terms-and-conditions.service-description")}</p>
        <p class="p2">
          <br />
        </p>
        <p class="p1">{t("terms-and-conditions.eligibility")}</p>
        <p class="p3">
          <br />
        </p>
        <p class="p1">{t("terms-and-conditions.eligibility-description")}</p>
        <p class="p2">
          <br />
        </p>
        <p class="p1">{t("terms-and-conditions.limited-license")}</p>
        <p class="p3">
          <br />
        </p>
        <p class="p1">
          {t("terms-and-conditions.limited-license-description")}
        </p>
        <p class="p2">
          <br />
        </p>
        <p class="p1">{t("terms-and-conditions.user-accounts")}</p>
        <p class="p3">
          <br />
        </p>
        <p class="p1">{t("terms-and-conditions.user-accounts-description1")}</p>
        <p class="p1">{t("terms-and-conditions.user-accounts-description2")}</p>
        <p class="p1">{t("terms-and-conditions.user-accounts-description3")}</p>
        <p class="p2">
          <br />
        </p>
        <p class="p1">{t("terms-and-conditions.service-rules")}</p>
        <p class="p3">
          <br />
        </p>
        <p class="p1">{t("terms-and-conditions.service-rules-description")}</p>
        <p class="p2">
          <br />
        </p>
        <p class="p1">{t("terms-and-conditions.service-modifications")}</p>
        <p class="p3">
          <br />
        </p>
        <p class="p1">
          {t("terms-and-conditions.service-modifications-description")}
        </p>
        <p class="p2">
          <br />
        </p>
        <p class="p1">{t("terms-and-conditions.user-disputes")}</p>
        <p class="p3">
          <br />
        </p>
        <p class="p1">{t("terms-and-conditions.user-disputes-description")}</p>
        <p class="p2">
          <br />
        </p>
        <p class="p1">{t("terms-and-conditions.service-location")}</p>
        <p class="p3">
          <br />
        </p>
        <p class="p1">
          {t("terms-and-conditions.service-location-description")}
        </p>
        <p class="p2">
          <br />
        </p>
        <p class="p2">
          <br />
        </p>
        <p class="p1">
          <strong>{t("terms-and-conditions.user-content")}</strong>
        </p>
        <p class="p2">
          <br />
        </p>
        <p class="p1">{t("terms-and-conditions.user-content-description1")}</p>
        <p class="p1">{t("terms-and-conditions.user-content-description2")}</p>
        <p class="p4">
          {t("terms-and-conditions.user-content-description2-bullet1")}
        </p>
        <p class="p4">
          {t("terms-and-conditions.user-content-description2-bullet2")}
        </p>
        <p class="p5">
          <br />
        </p>
        <p class="p1">{t("terms-and-conditions.user-content-description3")}</p>
        <p class="p2">
          <br />
        </p>
        <p class="p1">{t("terms-and-conditions.user-content-description4")}</p>
        <p class="p2">
          <br />
        </p>
        <p class="p4">
          {t("terms-and-conditions.user-content-description4-bullet1")}
        </p>
        <p class="p4">
          {t("terms-and-conditions.user-content-description4-bullet2")}
        </p>
        <p class="p4">
          {t("terms-and-conditions.user-content-description4-bullet3")}
        </p>
        <p class="p4">
          {t("terms-and-conditions.user-content-description4-bullet4")}
        </p>
        <p class="p4">
          {t("terms-and-conditions.user-content-description4-bullet5")}
        </p>
        <p class="p5">
          <br />
        </p>
        <p class="p1">{t("terms-and-conditions.user-content-description5")}</p>
        <p class="p2">
          <br />
        </p>
        <p class="p1">
          <strong>{t("terms-and-conditions.property-rights")}</strong>
        </p>
        <p class="p2">
          <br />
        </p>
        <p class="p1">
          {t("terms-and-conditions.property-rights-description1")}
        </p>

        <p class="p2">
          <br />
        </p>
        <p class="p1">
          {t("terms-and-conditions.property-rights-description2")}
        </p>
        <p class="p2">
          <br />
        </p>
        <p class="p1">
          <strong>{t("terms-and-conditions.risk-of-loss")}</strong>
        </p>
        <p class="p2">
          <br />
        </p>
        <p class="p1">{t("terms-and-conditions.risk-of-loss-description")}</p>
        <p class="p2">
          <br />
        </p>
        <p class="p1">
          <strong>{t("terms-and-conditions.email-and-text-messages")}</strong>
        </p>
        <p class="p2">
          <br />
        </p>
        <p class="p1">
          {t("terms-and-conditions.email-and-text-messages-description")}
        </p>
        <p class="p2">
          <br />
        </p>
        <p class="p1">
          <strong>{t("terms-and-conditions.privacy")}</strong>
        </p>
        <p class="p2">
          <br />
        </p>
        <p class="p1">{t("terms-and-conditions.privacy-description")}</p>
        <p class="p2">
          <br />
        </p>
        <p class="p1">
          <strong>{t("terms-and-conditions.security")}</strong>
        </p>
        <p class="p2">
          <br />
        </p>
        <p class="p1">{t("terms-and-conditions.security-description")}</p>
        <p class="p2">
          <br />
        </p>
        <p class="p1">
          <strong>{t("terms-and-conditions.DMCA.title")}</strong>
        </p>
        <p class="p2">
          <br />
        </p>
        <p class="p1">{t("terms-and-conditions.DMCA.description1")}</p>
        <p class="p1">{t("terms-and-conditions.DMCA.description2")}</p>
        <p class="p4">{t("terms-and-conditions.DMCA.info1")}</p>
        <p class="p4">{t("terms-and-conditions.DMCA.info2")}</p>
        <p class="p4">{t("terms-and-conditions.DMCA.info3")}</p>
        <p class="p4">{t("terms-and-conditions.DMCA.info4")}</p>
        <p class="p4">{t("terms-and-conditions.DMCA.info5")}</p>
        <p class="p4">{t("terms-and-conditions.DMCA.info6")}</p>
        <p class="p4">{t("terms-and-conditions.DMCA.send-info")}</p>
        <p class="p1">{t("terms-and-conditions.DMCA.line-info1")}</p>
        <p class="p1">{t("terms-and-conditions.DMCA.line-info2")}</p>
        <p class="p1">{t("terms-and-conditions.DMCA.line-info3")}</p>
        <p class="p1">{t("terms-and-conditions.DMCA.line-info4")}</p>
        <p class="p1">{t("terms-and-conditions.DMCA.line-info5")}</p>
        <p class="p1">{t("terms-and-conditions.DMCA.line-info6")}</p>
        <p class="p1">{t("terms-and-conditions.DMCA.line-info7")}</p>
        <p class="p1">{t("terms-and-conditions.DMCA.line-info8")}</p>
        <p class="p2">
          <br />
        </p>
        <p class="p1">{t("terms-and-conditions.DMCA.description3")}</p>
        <p class="p2">
          <br />
        </p>
        <p class="p1">
          <strong>{t("terms-and-conditions.links-and-info")}</strong>
        </p>
        <p class="p2">
          <br />
        </p>
        <p class="p1">{t("terms-and-conditions.links-and-info-description")}</p>
        <p class="p2">
          <br />
        </p>
        <p class="p1">
          <strong>{t("terms-and-conditions.compensations")}</strong>
        </p>
        <p class="p2">
          <br />
        </p>
        <p class="p1">{t("terms-and-conditions.compensations-description")}</p>
        <p class="p2">
          <br />
        </p>
        <p class="p1">
          <strong>{t("terms-and-conditions.without-warranty")}</strong>
        </p>
        <p class="p2">
          <br />
        </p>
        <p class="p1">
          {t("terms-and-conditions.without-warranty-description1")}
        </p>
        <p class="p2">
          <br />
        </p>
        <p class="p1">
          {t("terms-and-conditions.without-warranty-description2")}
        </p>
        <p class="p2">
          <br />
        </p>
        <p class="p1">
          <strong>{t("terms-and-conditions.liability-limitations")}</strong>
        </p>
        <p class="p2">
          <br />
        </p>
        <p class="p1">
          {t("terms-and-conditions.liability-limitations-description1")}
        </p>
        <p class="p2">
          <br />
        </p>
        <p class="p1">
          {t("terms-and-conditions.liability-limitations-description2")}
        </p>
        <p class="p2">
          <br />
        </p>
        <p class="p1">
          {t("terms-and-conditions.liability-limitations-description3")}
        </p>
        <p class="p2">
          <br />
        </p>
        <p class="p6">
          <strong>{t("terms-and-conditions.applicable-law")}</strong>
        </p>
        <br />

        <p class="p6">
          {t("terms-and-conditions.applicable-law-description1")}
        </p>
        <p class="p6">
          {t("terms-and-conditions.applicable-law-description2")}
          <span class="Apple-converted-space">&nbsp;</span>
        </p>
        <p class="p6">
          {t("terms-and-conditions.applicable-law-description3")}
          <span class="Apple-converted-space">&nbsp;</span>
        </p>
        <br />
        <p class="p1">
          <strong>{t("terms-and-conditions.additional-terms")}</strong>
        </p>
        <p class="p2">
          <br />
        </p>
        <p class="p1">
          {t("terms-and-conditions.additional-terms-description1")}
        </p>
        <p class="p2">
          <br />
        </p>
        <p class="p1">
          {t("terms-and-conditions.additional-terms-description2")}
        </p>
        <p class="p2">
          <br />
        </p>
        <p class="p1">
          {t("terms-and-conditions.additional-terms-description3")}
        </p>
        <p class="p2">
          <br />
        </p>
        <p class="p1">
          <strong>{t("terms-and-conditions.general")}</strong>
        </p>
        <p class="p2">
          <br />
        </p>
        <p class="p1">{t("terms-and-conditions.general-description1")}</p>
        <p class="p2">
          <br />
        </p>
        <p class="p1">{t("terms-and-conditions.general-description2")}</p>
        <p class="p2">
          <br />
        </p>
        <p class="p1">{t("terms-and-conditions.general-description3")}</p>
        <p class="p2">
          <br />
        </p>
        <p class="p1">{t("terms-and-conditions.general-description4")}</p>
        <p class="p2">
          <br />
        </p>
        <p class="p1">{t("terms-and-conditions.general-description5")}</p>
        <p class="p2">
          <br />
        </p>
        <p class="p1">
          <strong>{t("terms-and-conditions.delivery")}</strong>
        </p>
        <br />

        <p class="p1">{t("terms-and-conditions.delivery-description")}</p>
        <p class="p2">
          <br />
        </p>
        <p class="p1">
          <strong>{t("terms-and-conditions.refund")}</strong>
        </p>
        <br />
        <p class="p1">{t("terms-and-conditions.refund-description1")}</p>
        <p class="p2">
          <br />
        </p>
        <p class="p1">{t("terms-and-conditions.refund-description2")}</p>
      </div>
    </>
  );
}

export default TermsAndConditions;
