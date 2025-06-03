import { useTranslations } from 'next-intl';
import StutuBadge from '../StutuBadge';

export default function ProfessionalBadge() {
  const t = useTranslations('find_tutors');

  return (
    <StutuBadge icon="/images/flower.svg" text="Professional" tooltip={t('professional_badge')} />
  );
}
