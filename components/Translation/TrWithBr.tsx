import { useTranslations } from 'next-intl';

type TRWithBRProps = {
  keyName: string;
  ns?: string;
};

export function TRWithBR({ keyName, ns }: TRWithBRProps) {
  const t = useTranslations(ns);
  return (
    <>
      {t.rich(keyName, {
        br: () => <br />,
      })}
    </>
  );
}
