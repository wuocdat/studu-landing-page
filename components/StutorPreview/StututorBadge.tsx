import { useTranslations } from 'next-intl';
import StutuBadge from '../StutuBadge';

export default function StututorBadge() {
  const t = useTranslations('find_tutors');

  return <StutuBadge icon="/images/cup.svg" text="STUTUtor" tooltip={t('STUTUtor_badge')} />;
}
