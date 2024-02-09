import { useTranslation } from "../i18n/client";

interface Props {
  lng: string;
}

export const SecondSection = ({ lng }: Props): JSX.Element => {
  const { t } = useTranslation(lng, "sections");

  return (
    <section className="flex justify-center items-center px-10 h-screen sect">
      <div className="bg"></div>
      <p className="text-[#1D0202] text-2xl text-center font-bold w-5/6 h-[260px] p-5 flex justify-center items-center bg-[#b2967d]/50">
        {t("section1")}
      </p>
    </section>
  );
};
