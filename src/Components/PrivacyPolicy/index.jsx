import Header from "Components/Header/Header";
import React from "react";
import "./styles.css";
import { useTranslation } from "react-i18next";
function PrivacyPolicy() {
  const { t } = useTranslation("translation");
  return (
    <>
      <Header
        headingText={t("privacy-policy.title")}
        home={"text-2xl"}
        noButtons={"lg:ml-52 lg:mx-0 mx-8 2xl:ml-96 3xl:ml-100"}
        bgHeader="bg-bluePrimary"
        lastModificationDate={t("privacy-policy.last-modification-date")}
      />
      <div className="lg:ml-52 2xl:ml-96 3xl:ml-100 mx-8 lg:mx-0 lg:my-26 my-12 max-w-3.5xl lg:mr-52">
        <p class="p1">{t("privacy-policy.welcome-message")}</p>
        <p class="p1">{t("privacy-policy.explanation")}</p>
        <p class="p2">
          <br />
        </p>
        <p class="p1">
          <strong>{t("privacy-policy.what-is-personal-info")}</strong>
        </p>
        <p class="p2">
          <br />
        </p>
        <p class="p1">{t("privacy-policy.personal-info-definition")}</p>
        <p class="p2">
          <br />
        </p>
        <p class="p1">
          <strong>{t("privacy-policy.our-collection-of-personal-info")}</strong>
        </p>
        <p class="p2">
          <br />
        </p>
        <p class="p1">{t("privacy-policy.how-we-collect-personal-info")}</p>site
        <p class="p2">
          <br />
        </p>
        <p class="p1">
          <strong>
            <em>{t("privacy-policy.site")}</em>
          </strong>
        </p>
        <p class="p2">
          <br />
        </p>
        <p class="p1">{t("privacy-policy.personal-info-sent")}</p>
        <p class="p2">
          <br />
        </p>
        <p class="p1">{t("privacy-policy.collect-info-from-visitors")}</p>
        <p class="p2">
          <br />
        </p>
        <p
          dangerouslySetInnerHTML={{
            __html: t("privacy-policy.contact-info"),
          }}
          class="p3"
        ></p>
        <p
          dangerouslySetInnerHTML={{
            __html: t("privacy-policy.request-info"),
          }}
          class="p3"
        ></p>
        <p class="p4">
          <br />
        </p>
        <p
          dangerouslySetInnerHTML={{
            __html: t("privacy-policy.personal-info-collect"),
          }}
          class="p1"
        ></p>
        <p class="p2">
          <br />
        </p>
        <p
          dangerouslySetInnerHTML={{
            __html: t("privacy-policy.info-we-collect-automatically"),
          }}
          class="p1"
        ></p>
        <p
          dangerouslySetInnerHTML={{
            __html: t("privacy-policy.log-file-data"),
          }}
          class="p3"
        ></p>
        <p
          dangerouslySetInnerHTML={{
            __html: t("privacy-policy.analytical-data"),
          }}
          class="p3"
        ></p>
        <p
          dangerouslySetInnerHTML={{
            __html: t("privacy-policy.location-data"),
          }}
          class="p3"
        ></p>
        <p class="p4">
          <br />
        </p>
        <p
          dangerouslySetInnerHTML={{
            __html: t("privacy-policy.info-about-cookies"),
          }}
          class="p1"
        ></p>
        <p class="p2">
          <br />
        </p>
        <p
          dangerouslySetInnerHTML={{
            __html: t("privacy-policy.online-account-services"),
          }}
          class="p1"
        ></p>
        <p class="p2">
          <br />
        </p>
        <p
          dangerouslySetInnerHTML={{
            __html: t("privacy-policy.info-we-collect-about-online-account"),
          }}
          class="p1"
        ></p>
        <p
          dangerouslySetInnerHTML={{
            __html: t("privacy-policy.online-account-info"),
          }}
          class="p3"
        ></p>
        <p
          dangerouslySetInnerHTML={{
            __html: t("privacy-policy.all-contact-info"),
          }}
          class="p3"
        ></p>
        <p
          dangerouslySetInnerHTML={{
            __html: t("privacy-policy.other-profile-info"),
          }}
          class="p3"
        ></p>
        <p
          dangerouslySetInnerHTML={{
            __html: t("privacy-policy.sweepstakes-info"),
          }}
          class="p3"
        ></p>
        <p
          dangerouslySetInnerHTML={{
            __html: t("privacy-policy.account-assistance"),
          }}
          class="p3"
        ></p>
        <p
          dangerouslySetInnerHTML={{
            __html: t("privacy-policy.pay-info"),
          }}
          class="p3"
        ></p>
        <p class="p4">
          <br />
        </p>
        <p class="p4">
          <br />
        </p>
        <p
          dangerouslySetInnerHTML={{
            __html: t("privacy-policy.personal-info-from-third-parties"),
          }}
          class="p1"
        ></p>
        <p class="p2">
          <br />
        </p>
        <p
          dangerouslySetInnerHTML={{
            __html: t("privacy-policy.info-combination"),
          }}
          class="p1"
        ></p>
        <p
          dangerouslySetInnerHTML={{
            __html: t("privacy-policy.third-party-categories"),
          }}
          class="p1"
        ></p>
        <p
          dangerouslySetInnerHTML={{
            __html: t("privacy-policy.business-partners"),
          }}
          class="p3"
        ></p>
        <p
          dangerouslySetInnerHTML={{
            __html: t("privacy-policy.your-employer"),
          }}
          class="p3"
        ></p>
        <p
          dangerouslySetInnerHTML={{
            __html: t("privacy-policy.restaurants-and-suppliers"),
          }}
          class="p3"
        ></p>
        <p
          dangerouslySetInnerHTML={{
            __html: t("privacy-policy.social-media"),
          }}
          class="p3"
        ></p>
        <p
          dangerouslySetInnerHTML={{
            __html: t("privacy-policy.service-providers"),
          }}
          class="p3"
        ></p>
        <p
          dangerouslySetInnerHTML={{
            __html: t("privacy-policy.other-third-parties"),
          }}
          class="p3"
        ></p>
        <p
          dangerouslySetInnerHTML={{
            __html: t("privacy-policy.public-sources"),
          }}
          class="p3"
        ></p>
        <p class="p4">
          <br />
        </p>
        <p
          dangerouslySetInnerHTML={{
            __html: t("privacy-policy.use-of-personal-info-title"),
          }}
          class="p1"
        ></p>
        <p class="p2">
          <br />
        </p>
        <p
          dangerouslySetInnerHTML={{
            __html: t("privacy-policy.use-of-personal-info-desc"),
          }}
          class="p1"
        ></p>
        <p class="p2">
          <br />
        </p>
        <p
          dangerouslySetInnerHTML={{
            __html: t("privacy-policy.fulfill-purpose"),
          }}
          class="p3"
        ></p>
        <p
          dangerouslySetInnerHTML={{
            __html: t("privacy-policy.manage-org"),
          }}
          class="p3"
        ></p>
        <p
          dangerouslySetInnerHTML={{
            __html: t("privacy-policy.communicate"),
          }}
          class="p3"
        ></p>
        <p
          dangerouslySetInnerHTML={{
            __html: t("privacy-policy.surveys"),
          }}
          class="p3"
        ></p>
        <p
          dangerouslySetInnerHTML={{
            __html: t("privacy-policy.marketing"),
          }}
          class="p3"
        ></p>
        <p
          dangerouslySetInnerHTML={{
            __html: t("privacy-policy.service-improvement"),
          }}
          class="p3"
        ></p>
        <p
          dangerouslySetInnerHTML={{
            __html: t("privacy-policy.operating-service"),
          }}
          class="p3"
        ></p>
        <p
          dangerouslySetInnerHTML={{
            __html: t("privacy-policy.event-preparation"),
          }}
          class="p3"
        ></p>
        <p
          dangerouslySetInnerHTML={{
            __html: t("privacy-policy.contests"),
          }}
          class="p3"
        ></p>
        <p
          dangerouslySetInnerHTML={{
            __html: t("privacy-policy.eligibility-proof"),
          }}
          class="p3"
        ></p>
        <p
          dangerouslySetInnerHTML={{
            __html: t("privacy-policy.account-maintenance"),
          }}
          class="p3"
        ></p>
        <p
          dangerouslySetInnerHTML={{
            __html: t("privacy-policy.payment-processing"),
          }}
          class="p3"
        ></p>
        <p
          dangerouslySetInnerHTML={{
            __html: t("privacy-policy.user-services"),
          }}
          class="p3"
        ></p>
        <p
          dangerouslySetInnerHTML={{
            __html: t("privacy-policy.site-analysis"),
          }}
          class="p3"
        ></p>
        <p
          dangerouslySetInnerHTML={{
            __html: t("privacy-policy.research"),
          }}
          class="p3"
        ></p>
        <p
          dangerouslySetInnerHTML={{
            __html: t("privacy-policy.service-offering-improvement"),
          }}
          class="p3"
        ></p>
        <p
          dangerouslySetInnerHTML={{
            __html: t("privacy-policy.technical-testing"),
          }}
          class="p3"
        ></p>
        <p
          dangerouslySetInnerHTML={{
            __html: t("privacy-policy.security-maintenance"),
          }}
          class="p3"
        ></p>
        <p
          dangerouslySetInnerHTML={{
            __html: t("privacy-policy.business-transactions"),
          }}
          class="p3"
        ></p>
        <p
          dangerouslySetInnerHTML={{
            __html: t("privacy-policy.legal-obligations"),
          }}
          class="p3"
        ></p>
        <p
          dangerouslySetInnerHTML={{
            __html: t("privacy-policy.fraud-prevention"),
          }}
          class="p3"
        ></p>
        <p
          dangerouslySetInnerHTML={{
            __html: t("privacy-policy.law-abiding"),
          }}
          class="p3"
        ></p>
        <p class="p4">
          <br />
        </p>
        <p
          dangerouslySetInnerHTML={{
            __html: t("privacy-policy.contact-us"),
          }}
          class="p1"
        ></p>
        <p class="p2">
          <br />
        </p>
        <p
          dangerouslySetInnerHTML={{
            __html: t(
              "privacy-policy.disclosure-of-personal-information.title"
            ),
          }}
          class="p1"
        ></p>
        <p class="p2">
          <br />
        </p>
        <p
          dangerouslySetInnerHTML={{
            __html: t(
              "privacy-policy.disclosure-of-personal-information.introduction"
            ),
          }}
          class="p1"
        ></p>
        <p class="p2">
          <br />
        </p>
        <p
          dangerouslySetInnerHTML={{
            __html: t(
              "privacy-policy.disclosure-of-personal-information.affiliates"
            ),
          }}
          class="p3"
        ></p>
        <p
          dangerouslySetInnerHTML={{
            __html: t(
              "privacy-policy.disclosure-of-personal-information.business-partners"
            ),
          }}
          class="p3"
        ></p>
        <p
          dangerouslySetInnerHTML={{
            __html: t(
              "privacy-policy.disclosure-of-personal-information.your-employer"
            ),
          }}
          class="p3"
        ></p>
        <p
          dangerouslySetInnerHTML={{
            __html: t(
              "privacy-policy.disclosure-of-personal-information.restaurants-and-suppliers"
            ),
          }}
          class="p3"
        ></p>
        <p
          dangerouslySetInnerHTML={{
            __html: t(
              "privacy-policy.disclosure-of-personal-information.service-providers"
            ),
          }}
          class="p3"
        ></p>
        <p
          dangerouslySetInnerHTML={{
            __html: t(
              "privacy-policy.disclosure-of-personal-information.other-businesses"
            ),
          }}
          class="p3"
        ></p>
        <p
          dangerouslySetInnerHTML={{
            __html: t(
              "privacy-policy.disclosure-of-personal-information.other-third-parties"
            ),
          }}
          class="p3"
        ></p>
        <p
          dangerouslySetInnerHTML={{
            __html: t(
              "privacy-policy.disclosure-of-personal-information.business-transaction"
            ),
          }}
          class="p3"
        ></p>
        <p
          dangerouslySetInnerHTML={{
            __html: t(
              "privacy-policy.disclosure-of-personal-information.legal-obligations-rights"
            ),
          }}
          class="p3"
        ></p>
        <p
          dangerouslySetInnerHTML={{
            __html: t(
              "privacy-policy.disclosure-of-personal-information.legal-claims"
            ),
          }}
          class="p3"
        ></p>
        <p
          dangerouslySetInnerHTML={{
            __html: t(
              "privacy-policy.disclosure-of-personal-information.comply-laws"
            ),
          }}
          class="p3"
        ></p>
        <p
          dangerouslySetInnerHTML={{
            __html: t(
              "privacy-policy.disclosure-of-personal-information.protect-rights"
            ),
          }}
          class="p3"
        ></p>
        <p
          dangerouslySetInnerHTML={{
            __html: t(
              "privacy-policy.disclosure-of-personal-information.detect-fraud"
            ),
          }}
          class="p3"
        ></p>
        <p
          dangerouslySetInnerHTML={{
            __html: t(
              "privacy-policy.disclosure-of-personal-information.protect-health-safety"
            ),
          }}
          class="p3"
        ></p>
        <p
          dangerouslySetInnerHTML={{
            __html: t(
              "privacy-policy.disclosure-of-personal-information.applicable-legal-provisions"
            ),
          }}
          class="p3"
        ></p>
        <p
          dangerouslySetInnerHTML={{
            __html: t(
              "privacy-policy.disclosure-of-personal-information.otherwise-consent-instruction"
            ),
          }}
          class="p3"
        ></p>
        <p class="p4">
          <br />
        </p>
        <p class="p4">
          <br />
        </p>
        <p
          dangerouslySetInnerHTML={{
            __html: t("privacy-policy.social-media-title"),
          }}
          class="p1"
        ></p>
        <p class="p2">
          <br />
        </p>
        <p
          dangerouslySetInnerHTML={{
            __html: t("privacy-policy.our-services"),
          }}
          class="p1"
        ></p>
        <p class="p2">
          <br />
        </p>
        <p
          dangerouslySetInnerHTML={{
            __html: t("privacy-policy.directed-advertise"),
          }}
          class="p1"
        ></p>
        <p class="p1">
          {t("privacy-policy.advertising-publicity")}
          <a
            target="blank"
            href="https://www.facebook.com/help/109378269482053."
          >
            <span class="s1">https://www.facebook.com/help</span>
          </a>
        </p>
        <p class="p2">
          <br />
        </p>
        <p
          dangerouslySetInnerHTML={{
            __html: t("privacy-policy.personal-info-child"),
          }}
          class="p1"
        ></p>
        <p class="p2">
          <br />
        </p>
        <p
          dangerouslySetInnerHTML={{
            __html: t("privacy-policy.our-web-services"),
          }}
          class="p1"
        ></p>
        <p class="p2">
          <br />
        </p>
        <p
          dangerouslySetInnerHTML={{
            __html: t("privacy-policy.links"),
          }}
          class="p1"
        ></p>
        <p class="p2">
          <br />
        </p>
        <p
          dangerouslySetInnerHTML={{
            __html: t("privacy-policy.included-links"),
          }}
          class="p1"
        ></p>
        <p class="p2">
          <br />
        </p>
        <p
          dangerouslySetInnerHTML={{
            __html: t("privacy-policy.your-economic-rights"),
          }}
          class="p1"
        ></p>
        <p class="p2">
          <br />
        </p>
        <p
          dangerouslySetInnerHTML={{
            __html: t("privacy-policy.see-info"),
          }}
          class="p1"
        ></p>
        <p
          dangerouslySetInnerHTML={{
            __html: t("privacy-policy.copy-info"),
          }}
          class="p3"
        ></p>
        <p
          dangerouslySetInnerHTML={{
            __html: t("privacy-policy.right-restriction"),
          }}
          class="p3"
        ></p>
        <p
          dangerouslySetInnerHTML={{
            __html: t("privacy-policy.right-deleted"),
          }}
          class="p3"
        ></p>
        <p
          dangerouslySetInnerHTML={{
            __html: t("privacy-policy.right-correct"),
          }}
          class="p3"
        ></p>
        <p
          dangerouslySetInnerHTML={{
            __html: t("privacy-policy.right-portability"),
          }}
          class="p3"
        ></p>
        <p
          dangerouslySetInnerHTML={{
            __html: t("privacy-policy.right-retrait"),
          }}
          class="p3"
        ></p>
        <p class="p2">
          <br />
        </p>
        <p
          dangerouslySetInnerHTML={{
            __html: t("privacy-policy.right-decision"),
          }}
          class="p1"
        ></p>
        <p class="p2">
          <br />
        </p>
        <p
          dangerouslySetInnerHTML={{
            __html: t("privacy-policy.see-info-accessed"),
          }}
          class="p1"
        ></p>
        <p class="p2">
          <br />
        </p>
        <p
          dangerouslySetInnerHTML={{
            __html: t("privacy-policy.data-allowance"),
          }}
          class="p1"
        ></p>
        <p class="p2">
          <br />
        </p>
        <p
          dangerouslySetInnerHTML={{
            __html: t("privacy-policy.personal-info-allowance"),
          }}
          class="p1"
        ></p>
        <p class="p2">
          <br />
        </p>
        <p
          dangerouslySetInnerHTML={{
            __html: t("privacy-policy.collect-data-just"),
          }}
          class="p1"
        ></p>
        <p
          dangerouslySetInnerHTML={{
            __html: t("privacy-policy.consent"),
          }}
          class="p3"
        ></p>
        <p
          dangerouslySetInnerHTML={{
            __html: t("privacy-policy.use-of-info"),
          }}
          class="p3"
        ></p>
        <p
          dangerouslySetInnerHTML={{
            __html: t("privacy-policy.third-parties-interest"),
          }}
          class="p3"
        ></p>
        <p
          dangerouslySetInnerHTML={{
            __html: t("privacy-policy.obligation-law"),
          }}
          class="p3"
        ></p>
        <p class="p2">
          <br />
        </p>
        <p class="p1">
          {t("privacy-policy.see-personal-info")}
          <a href="mailto:contact@horecaorders.com">
            <span class="s1">contact@horecaorders.com</span>
          </a>
          <span class="Apple-converted-space">&nbsp;</span>
        </p>
        <p class="p2">
          <br />
        </p>
        <p
          dangerouslySetInnerHTML={{
            __html: t("privacy-policy.attention-request"),
          }}
          class="p1"
        ></p>
        <p class="p2">
          <br />
        </p>
        <p
          dangerouslySetInnerHTML={{
            __html: t("privacy-policy.confidential-issues"),
          }}
          class="p1"
        ></p>
        <p class="p2">
          <br />
        </p>
        <p
          dangerouslySetInnerHTML={{
            __html: t("privacy-policy.privacy-updates"),
          }}
          class="p1"
        ></p>
        <p class="p2">
          <br />
        </p>
        <p
          dangerouslySetInnerHTML={{
            __html: t("privacy-policy.update-privacy-policy"),
          }}
          class="p1"
        ></p>
        <p class="p2">
          <br />
        </p>
        <p
          dangerouslySetInnerHTML={{
            __html: t("privacy-policy.contact-us-privacy"),
          }}
          class="p1"
        ></p>
        <p class="p2">
          <br />
        </p>
        <p class="p1">
          {t("privacy-policy.contact-us-for-questions")}
          <a href="mailto:contact@horecaorders.com">
            <span class="s1">contact@horecaorders.com</span>
          </a>
          <span class="Apple-converted-space">&nbsp;</span>
        </p>
        <p class="p2">
          <br />
        </p>
        <p
          dangerouslySetInnerHTML={{
            __html: t("privacy-policy.alternative-questions"),
          }}
          class="p1"
        ></p>
        <p
          dangerouslySetInnerHTML={{
            __html: t("privacy-policy.alternative-info1"),
          }}
          class="p1"
        ></p>
        <p
          dangerouslySetInnerHTML={{
            __html: t("privacy-policy.alternative-info2"),
          }}
          class="p1"
        ></p>
        <div className="flex items-center space-x-1">
          <p
            dangerouslySetInnerHTML={{
              __html: t("privacy-policy.alternative-info3"),
            }}
            class="p1"
          ></p>
          <a href="mailto:contact@horecaorders.com">
            <span class="s1">contact@horecaorders.com</span>
          </a>
        </div>
        <p
          dangerouslySetInnerHTML={{
            __html: t("privacy-policy.alternative-info4"),
          }}
          class="p1"
        ></p>
        <p
          dangerouslySetInnerHTML={{
            __html: t("privacy-policy.alternative-info5"),
          }}
          class="p1"
        ></p>
        <p
          dangerouslySetInnerHTML={{
            __html: t("privacy-policy.alternative-info6"),
          }}
          class="p1"
        ></p>
        <p
          dangerouslySetInnerHTML={{
            __html: t("privacy-policy.alternative-info7"),
          }}
          class="p1"
        ></p>
      </div>
    </>
  );
}

export default PrivacyPolicy;
