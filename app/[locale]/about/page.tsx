import React from 'react';
import NextImage from 'next/image';
import { useTranslations } from 'next-intl';
import { Box, Button, Group, Image, Stack, Text } from '@mantine/core';
import IntroCard from '@/components/ActivitySection/subComponents/IntroCard';
import CenterIntroSection from '@/components/CenterIntroSection';
import aboutImage from '@/public/images/about_bg.svg';
import treeImage from '@/public/images/about_us_2.svg';
import companionship from '@/public/images/companionship.svg';
import connection from '@/public/images/connection.svg';
import spreading from '@/public/images/spreading.svg';
import understanding from '@/public/images/understanding.svg';
import APP_COLORS from '@/theme/colors';
import MemberCard from './subComponents/MemberCard';

const AboutUsPage: React.FC = () => {
  const t = useTranslations('about_us');

  return (
    <Stack gap={0}>
      <Box pos="relative">
        <Image
          component={NextImage}
          src={aboutImage}
          alt="aboutUs"
          fit="contain"
          sizes="100vw"
          style={{
            width: '100%',
            height: 'auto',
          }}
        />
        <Stack pos="absolute" bottom="65%" right="8%" align="center" gap="xl">
          <CenterIntroSection
            title={t.rich('title', {
              br: (chunks) => (
                <>
                  <br />
                  {chunks}
                </>
              ),
            })}
            subtitle={t('subtitle')}
            skipImage
          />
          <Button size="xl">{t('join_with_us')}</Button>
        </Stack>
      </Box>
      <Group w="80%" wrap="nowrap" py={50} gap="xl" style={{ alignSelf: 'center' }}>
        <Stack>
          <Text ta="center" variant="big">
            {t('stutu_story')}
          </Text>
          <Text ta="center">{t('stutu_story_content_1')}</Text>
          <Text ta="center">{t('stutu_story_content_2')}</Text>
        </Stack>
        <Image component={NextImage} src={treeImage} alt="about_us_2" />
      </Group>
      <Stack py={50} bg={APP_COLORS.grayBg}>
        <Text ta="center" variant="big">
          {t('vision.title')}
        </Text>
        <Text w="60%" ta="center" mx="auto">
          {t('vision.description')}
        </Text>
      </Stack>
      <Stack py={50} bg={APP_COLORS.grayBg} align="center" gap={30}>
        <Text ta="center" variant="big">
          {t('mission.title')}
        </Text>
        <Group align="flex-start" gap={200}>
          <IntroCard
            data={{
              icon: <Image component={NextImage} src={understanding} alt="understanding" />,
              title: t('mission.details.understanding.title'),
              description: t('mission.details.understanding.description'),
            }}
          />
          <IntroCard
            data={{
              icon: <Image component={NextImage} src={companionship} alt="companionship" />,
              title: t('mission.details.companionship.title'),
              description: t('mission.details.companionship.description'),
            }}
          />
        </Group>
        <Group align="flex-start" gap={200} pt={50}>
          <IntroCard
            data={{
              icon: <Image mr={-16} component={NextImage} src={connection} alt="connection" />,
              title: t('mission.details.connection.title'),
              description: t('mission.details.connection.description'),
            }}
          />
          <IntroCard
            data={{
              icon: <Image component={NextImage} src={spreading} alt="spreading" />,
              title: t('mission.details.spreading.title'),
              description: t('mission.details.spreading.description'),
            }}
          />
        </Group>
      </Stack>
      {/*  */}
      <Stack m={50} gap={70}>
        <Stack>
          <Text ta="center" variant="big">
            Đội ngũ
          </Text>
          <Text w="60%" ta="center" mx="auto">
            Thế giới này được xây dựng bởi những người mơ mộng như bạn, như chúng tôi. Đây là những
            người giúp tạo dựng nên STUTU
          </Text>
        </Stack>
        <Group justify="space-evenly" align="flex-start">
          <MemberCard
            avatar="/images/tutor_avatar.png"
            name="Đoàn Thị Mai Anh"
            teamRole="Giám đốc Điều hành"
            slogan="“Là thuyền trưởng, tôi không cho phép mình rời bỏ con tàu.”"
          />
          <MemberCard
            avatar="/images/tutor_avatar.png"
            name="Đoàn Thị Mai Anh"
            teamRole="Giám đốc Điều hành"
            slogan="“Là thuyền trưởng, tôi không cho phép mình rời bỏ con tàu.”"
          />
        </Group>
        <MemberCard
          avatar="/images/bubbles.svg"
          name="Đoàn Thị Mai Anh"
          teamRole="Giám đốc Điều hành"
          slogan="“Là thuyền trưởng, tôi không cho phép mình rời bỏ con tàu.”"
        />
        <Group justify="space-evenly" align="flex-start">
          <MemberCard
            avatar="/images/tutor_avatar.png"
            name="Đoàn Thị Mai Anh"
            teamRole="Giám đốc Điều hành"
            slogan="“Là thuyền trưởng, tôi không cho phép mình rời bỏ con tàu.”"
          />
          <MemberCard
            avatar="/images/tutor_avatar.png"
            name="Đoàn Thị Mai Anh"
            teamRole="Giám đốc Điều hành"
            slogan="“Là thuyền trưởng, tôi không cho phép mình rời bỏ con tàu.”"
          />
        </Group>
      </Stack>
    </Stack>
  );
};

export default AboutUsPage;
