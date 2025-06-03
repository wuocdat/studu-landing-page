import { useTranslations } from 'next-intl';

type TRWithCommonLinkProps = {
  keyName: string;
  ns?: string;
};

export function TRWithCommonLink({ keyName, ns }: TRWithCommonLinkProps) {
  const t = useTranslations(ns);
  return (
    <>
      {t.rich(keyName, {
        br: () => <br />,
      })}
    </>
  );
}
