import { useTranslations } from 'next-intl';
import Markdown from 'react-markdown';
import {
  Box,
  Button,
  Center,
  Container,
  Group,
  Image,
  Stack,
  Stepper,
  StepperStep,
  Text,
  Title,
} from '@mantine/core';
import ActivitySection from '@/components/ActivitySection';
import FrequentlyQuestions from '@/components/FrequentlyQuesions';
import PacmanIcon from '@/components/icons/PacmanIcon';
import { TRWithBR } from '@/components/Translation/TrWithBr';
import APP_COLORS from '@/theme/colors';
import { QuestionType } from '@/types';
import OutstandingCollaboratorSection from './SubComponents/OutstandingCollaboratorSection';

export default function ReferralProgramPage() {
  const tShared = useTranslations('shared_text');
  const t = useTranslations('referral_program');

  const questions: QuestionType[] = [
    {
      question: t('frequently_asked_questions.how_is_my_income_calculated.question'),
      answer: t('frequently_asked_questions.how_is_my_income_calculated.answer'),
    },
    {
      question: t('frequently_asked_questions.how_do_i_receive_my_income.question'),
      answer: t('frequently_asked_questions.how_do_i_receive_my_income.answer'),
    },
    {
      question: t('frequently_asked_questions.income_payout_time.question'),
      answer: t('frequently_asked_questions.income_payout_time.answer'),
    },
  ];

  const tutorBenefits = [
    {
      icon: <Image src="/images/wifi_icon.svg" />,
      title: t('benefit.remote_work.title'),
      description: t('benefit.remote_work.content'),
    },
    {
      icon: <Image src="/images/save_money.svg" />,
      title: t('benefit.unlimited_income.title'),
      description: t('benefit.unlimited_income.content'),
    },
    {
      icon: <Image src="/images/tree_and_hand.svg" />,
      title: t('benefit.share_opportunity.title'),
      description: t('benefit.share_opportunity.content'),
    },
  ];

  return (
    <Stack mt={50} align="stretch">
      <Group justify="space-evenly" align="stretch">
        <Stack>
          <Title order={1} lh={1.2}>
            <TRWithBR keyName="big_title" ns="referral_program" />
          </Title>
          <Text variant="subtitle" fz={22}>
            {t('subtitle')}
          </Text>
          <Stack justify="center" align="flex-start" flex={1}>
            <Button variant="outline" leftSection={<PacmanIcon color={APP_COLORS.primary} />}>
              {tShared('try_now')}
            </Button>
          </Stack>
        </Stack>
        <div>
          <Image w={500} src="/images/referral_program.svg" alt="Referral Program" />
        </div>
      </Group>
      <Container size="xl">
        <Stepper
          active={0}
          orientation="vertical"
          size="xl"
          styles={{
            stepLabel: {
              fontSize: 43,
              fontWeight: 800,
            },
            stepBody: {
              paddingLeft: 24,
            },
            stepDescription: {
              marginBottom: 100,
              textAlign: 'justify',
            },
          }}
        >
          <StepperStep
            label={tShared('sign_up')}
            description={
              <Stack>
                <Text size="md" fs="italic" fw={300}>
                  {t('sign_up.subtitle')}
                </Text>
                <Text>{t('sign_up.description')}</Text>
              </Stack>
            }
          />
          <StepperStep
            label={t('generate_referral_code.title')}
            description={
              <Stack>
                <Text size="md" fs="italic" fw={300}>
                  {t('generate_referral_code.subtitle')}
                </Text>
                <Text>{t('generate_referral_code.description')}</Text>
              </Stack>
            }
          />
          <StepperStep
            label={t('invite_friends.title')}
            description={
              <Stack>
                <Text size="md" fs="italic" fw={300}>
                  {t('invite_friends.subtitle')}
                </Text>
                <Box fz={20} lh={1.5} c={APP_COLORS.primaryText}>
                  <Markdown>{t('invite_friends.description')}</Markdown>
                </Box>
                <Center>
                  <Image src="/images/reward.png" alt="Referral Program" />
                </Center>
              </Stack>
            }
          />
        </Stepper>
      </Container>

      <ActivitySection
        title=""
        actionTitle={tShared('try_now')}
        description=""
        items={tutorBenefits}
      />
      <OutstandingCollaboratorSection />
      <FrequentlyQuestions title={t('frequently_asked_questions.title')} data={questions} />
    </Stack>
  );
}
