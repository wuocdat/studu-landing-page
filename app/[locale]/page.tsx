import ActivitySection from '@/components/ActivitySection';
import HeroSection from '@/components/HeroSection';
import IntroductionSection from '@/components/IntroductionSection';
import { features } from '@/utils/constants';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <IntroductionSection />
      <ActivitySection
        title="Trở thành học viên STUTU"
        actionTitle="Đăng ký"
        description="Bởi vì bạn là thuyền trưởng trên con tàu của mình"
        items={features.map((feature) => ({
          icon: <feature.icon />,
          title: feature.title,
          description: feature.description,
        }))}
      />
      <ActivitySection
        title="Trở thành học viên STUTU"
        actionTitle="Tạo hồ sơ"
        description="Bởi vì bạn là thuyền trưởng trên con tàu của mình"
        items={features.map((feature) => ({
          icon: <feature.icon />,
          title: feature.title,
          description: feature.description,
        }))}
      />
      {/* <CTASection /> */}
    </>
  );
}
