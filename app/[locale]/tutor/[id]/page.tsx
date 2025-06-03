import { ReactNode } from 'react';
import { getTranslations } from 'next-intl/server';
import {
  Anchor,
  AspectRatio,
  Avatar,
  Button,
  Container,
  Grid,
  GridCol,
  Group,
  Image,
  Stack,
  Stepper,
  StepperStep,
  Text,
  Title,
} from '@mantine/core';
import FooterImageBackground from '@/components/FooterImageBackground';
import TickIcon from '@/components/icons/TickIcon';
import StarRating from '@/components/StutorPreview/StarRating';
import { TRWithBR } from '@/components/Translation/TrWithBr';
import APP_COLORS from '@/theme/colors';
import SimilarTutorsSection from './SubComponents/SimilarTutorsSection';
import StudentFeedbackSection from './SubComponents/StudentFeebackSection';

const Indicator = ({
  name,
  content,
}: {
  name: string | ReactNode;
  content: string | number | ReactNode;
}) => {
  return (
    <Stack align="center" gap={0}>
      <Text fz={16} fw={300} ta="center">
        {name}
      </Text>
      {typeof content === 'string' || typeof content === 'number' ? (
        <Text fz={16} fw={700} ta="center">
          {content}
        </Text>
      ) : (
        content
      )}
    </Stack>
  );
};

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const t = await getTranslations('detailed_profile');
  const tCommon = await getTranslations('shared_text');

  console.log('ID:', id);
  return (
    <>
      <Container size="xl">
        <Stack my={50}>
          <Grid gutter={50}>
            <GridCol span={7}>
              <Group wrap="nowrap" gap="xl" align="flex-start">
                <Avatar w={200} h={200} src="/images/tutor_avatar.png" alt="Tutor Image" />
                <Stack flex={1} gap="sm">
                  <Group>
                    <Text fw={800}>Nguyễn Vũ Hoàng Anh</Text>
                    <Image src="/images/cup.svg" alt="Cup" w={30} h={30} />
                  </Group>
                  <Stack gap={4}>
                    <Text fw={800} c={APP_COLORS.primary}>
                      STUTUtor
                    </Text>
                    <Text size="sm" fw={300} ta="justify">
                      “Trên đời này không có bông tuyết nào là trong sạch cả. Lorem ipsum dolor sit
                      amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                      et dolore magna.”
                    </Text>
                  </Stack>
                  <Stack gap={0}>
                    <Text fw={800}>{t('teaching_language')}</Text>
                    <Text size="sm" fw={300}>
                      Tiếng Anh, Tiếng Pháp
                    </Text>
                  </Stack>
                  <Stack gap={0}>
                    <Text fw={800}>{t('tuition_fee')}</Text>
                    <Text size="sm" fw={300}>
                      200,000 - 600.000đ/giờ
                    </Text>
                  </Stack>
                </Stack>
              </Group>
            </GridCol>
            <GridCol span={5}>
              <Stack>
                <AspectRatio ratio={16 / 9}>
                  <iframe
                    src="https://www.youtube.com/embed/_RZPVrmOjdg?si=ltIqo4rwOORPAG4E"
                    title="YouTube video player"
                    style={{ border: 0, borderRadius: 8 }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </AspectRatio>
                <Stack>
                  <Grid columns={10}>
                    <GridCol span={2} offset={1}>
                      <Indicator
                        name={t('ratings_reviews')}
                        content={<StarRating rating={4.9} />}
                      />
                    </GridCol>
                    <GridCol span={2} offset={1}>
                      <Indicator name={t('number_of_students')} content={17} />
                    </GridCol>
                    <GridCol span={2} offset={1}>
                      <Indicator name={t('number_of_sessions')} content={203} />
                    </GridCol>
                    <GridCol span={3} offset={2}>
                      <Indicator
                        name={<TRWithBR keyName="message_response_rate" ns="detailed_profile" />}
                        content="100%"
                      />
                    </GridCol>
                    <GridCol span={3}>
                      <Indicator
                        name={<TRWithBR keyName="class_attendance_rate" ns="detailed_profile" />}
                        content="100%"
                      />
                    </GridCol>
                  </Grid>
                </Stack>
              </Stack>
            </GridCol>
            <GridCol span={7}>
              <Stack gap="xs">
                <Text fw={800}>{t('introduce_yourself')}</Text>
                <Text size="sm" fw={300} ta="justify">
                  Xin chào, mình là Mai Anh. Mình là giáo viên tiếng Anh với 5 năm kinh nghiệm 5 năm
                  luyện thi IELTS. Trong quá trình giảng dạy, mình đã có các chứng chỉ IELTS, TOEIC
                  và SAT với điểm số gần như tuyệt đối, cùng với các chứng chỉ giảng dạy quốc tế
                  CELTA và TESOL. Mình đã dạy tại một số trung tâm tiếng Anh tại Hà Nội và đã gia sư
                  cho hơn 50 học viên. Phương pháp giảng dạy của mình là tạo ra sự kết nối chặt chẽ
                  giữa gia sư và học viên. Từ đó, mình có thể đưa ra những lời khuyên phù hợp
                  nhất...
                </Text>
                <Anchor href="#" size="sm" fw={300} ta="right" c={APP_COLORS.primary} fs="italic">
                  {tCommon('see_more')}
                </Anchor>
              </Stack>
            </GridCol>
            <GridCol span={5}>
              <Stack align="center" gap="lg">
                <Button miw={250}>{t('book_trial_class')}</Button>
                <Button variant="outline" miw={250}>
                  {t('sign_up_for_main_course')}
                </Button>
                <Button disabled miw={250}>
                  {t('message_tutor')}
                </Button>
                <Anchor href="#" size="sm" fw={300} ta="center" underline="always">
                  {t('add_to_favorites')}
                </Anchor>
              </Stack>
            </GridCol>
            <GridCol span={4}>
              <Stack gap="sm" align="flex-start">
                <Stack gap={4}>
                  <Text size="lg" fw={800} ta="center" w="100%">
                    {tCommon('education_background')}
                  </Text>
                  <Group align="flex-start">
                    <Text size="sm" fw={800}>
                      Đại học Quốc gia Singapore
                    </Text>
                    <TickIcon />
                  </Group>
                  <Text size="sm" fw={300} fs="italic">
                    Thạc sĩ Quản trị kinh doanh
                  </Text>
                </Stack>
                <Stack gap={4}>
                  <Group align="flex-start">
                    <Text size="sm" fw={800}>
                      Đại học Quốc gia Singapore
                    </Text>
                    <TickIcon />
                  </Group>
                  <Text size="sm" fw={300} fs="italic">
                    Thạc sĩ Quản trị kinh doanh
                  </Text>
                </Stack>
                <Stack gap={4}>
                  <Group align="flex-start">
                    <Text size="sm" fw={800}>
                      Đại học Quốc gia Singapore
                    </Text>
                    <TickIcon />
                  </Group>
                  <Text size="sm" fw={300} fs="italic">
                    Thạc sĩ Quản trị kinh doanh
                  </Text>
                </Stack>
              </Stack>
            </GridCol>
            <GridCol span={3}>
              <Stack align="flex-start">
                <Stack align="flex-start">
                  <Text size="lg" fw={800} ta="center" w="100%">
                    {tCommon('certifications')}
                  </Text>
                  <Stepper
                    active={-1}
                    orientation="vertical"
                    size="xs"
                    icon={<TickIcon fontSize={20} />}
                    styles={{
                      stepLabel: {
                        fontSize: 18,
                        fontWeight: 800,
                        marginTop: 8,
                        marginLeft: 12,
                      },
                    }}
                  >
                    <StepperStep label="TESOL, 2023" />
                    <StepperStep label="TESOL, 2023" />
                    <StepperStep label="TESOL, 2023" />
                  </Stepper>
                </Stack>
              </Stack>
            </GridCol>
            <GridCol span={5}>
              <Stack
                bg={APP_COLORS.grayBg}
                style={{ borderRadius: 8, border: '1px solid #CECECE' }}
                p="sm"
              >
                <Title order={3} ta="center">
                  {t('teaching_subjects')}
                </Title>
                <Group>
                  <Text flex={1} size="sm" fw={300}>
                    Luyện thi THPTQG
                  </Text>
                  <Text size="sm" fw={300}>
                    200.000đ/giờ
                  </Text>
                </Group>
                <Group>
                  <Text flex={1} size="sm" fw={300} lineClamp={1}>
                    Luyện thi THPTQG
                  </Text>
                  <Text size="sm" fw={300}>
                    200.000đ/giờ
                  </Text>
                </Group>
                <Group>
                  <Text flex={1} size="sm" fw={300}>
                    Luyện thi THPTQG
                  </Text>
                  <Text size="sm" fw={300}>
                    200.000đ/giờ
                  </Text>
                </Group>
                <Group>
                  <Text flex={1} size="sm" fw={300}>
                    Luyện thi THPTQG
                  </Text>
                  <Text size="sm" fw={300}>
                    200.000đ/giờ
                  </Text>
                </Group>
              </Stack>
            </GridCol>
          </Grid>
          <Image src="/images/random_image_1.svg" alt="Line" />
          <SimilarTutorsSection />
          <StudentFeedbackSection />
        </Stack>
      </Container>
      <FooterImageBackground variant="2" />
    </>
  );
}
