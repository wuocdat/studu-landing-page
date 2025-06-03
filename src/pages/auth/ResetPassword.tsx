import { Button, Title, Stack, Center, Input } from '@mantine/core';
import classes from './SignIn.module.css';
import * as yup from 'yup';
import { useForm, yupResolver } from '@mantine/form';
import { useTranslation } from 'react-i18next';

export default function ResetPassword() {
  const { t } = useTranslation();

  const schema = yup.object().shape({
    email: yup
      .string()
      .required(t('tutor-register.enter-email-warning'))
      .email(t('tutor-register.invalid-email')),
  });

  const form = useForm({
    initialValues: {
      email: '',
    },
    validate: yupResolver(schema),
  });

  async function handleSubmit(values: { email: string }) {}

  return (
    <div>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <div className={classes.wrapper}>
          <Center h="calc(80vh - 80px)">
            <Stack align="center" w={350}>
              <Title order={3} fw={900}>
                {t('reset-password.title')}
              </Title>
              <Input
                {...form.getInputProps('email')}
                w="100%"
                name={'email'}
                placeholder={t('login-page.your-email')}
              />
              <Button mt="lg" type={'submit'}>
                {t('reset-password.confirm')}
              </Button>
            </Stack>
          </Center>
        </div>
      </form>
    </div>
  );
}
