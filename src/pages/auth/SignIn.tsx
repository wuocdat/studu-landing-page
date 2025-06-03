import { useState } from 'react';
import {
  PasswordInput,
  Button,
  Title,
  Text,
  Stack,
  Center,
  Input,
  Group,
  Checkbox,
  Anchor,
  Divider,
  ActionIcon,
} from '@mantine/core';
import classes from './SignIn.module.css';
import * as yup from 'yup';
import { useForm, yupResolver } from '@mantine/form';
import useAuth from '@/utils/hooks/useAuth';
import { useTranslation } from 'react-i18next';
import FacebookIcon from '@/components/Icons/FacebookIcon';
import GoogleIcon from '@/components/Icons/GoogleIcon';
import AppleIcon from '@/components/Icons/AppleIcon';
import { Link } from 'react-router-dom';

export default function SignIn() {
  const [loading, setLoading] = useState<boolean>(false);
  const { signIn } = useAuth();
  const { t } = useTranslation();

  const schema = yup.object().shape({
    email: yup.string().required('Please enter a email').email('Invalid email'),
    password: yup.string().required('Please enter a password'),
  });

  const form = useForm({
    initialValues: {
      email: 'admin@test.com',
      password: '12345qwerty',
    },
    validate: yupResolver(schema),
  });

  async function handleSubmit(values: { email: string; password: string }) {
    setLoading(true);
    try {
      const res = await signIn(values);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <div className={classes.wrapper}>
          <Center pt={100}>
            <Stack w={350}>
              <Title order={3} fw={900}>
                {t('login-page.login')}
              </Title>
              <Input
                {...form.getInputProps('email')}
                name={'email'}
                placeholder={t('login-page.your-email')}
              />
              <PasswordInput
                {...form.getInputProps('password')}
                name={'password'}
                placeholder={t('login-page.password-placeholder')}
              />
              <Group justify="space-between">
                <Checkbox
                  size="xs"
                  label={t('login-page.save-account')}
                  styles={{ label: { fontSize: 14 } }}
                />
                <Anchor fz={14} href="#">
                  {t('login-page.forgot-password')}
                </Anchor>
              </Group>
              <Button loading={loading} type={'submit'}>
                {t('login-page.login')}
              </Button>
              <Text fw={600} size="sm" ta="center">
                {t('login-page.dont-have-account')}{' '}
                <Anchor ml="xs" component={Link} to="/login-selection" underline="always">
                  {t('login-page.signup-now')}
                </Anchor>
              </Text>
              <Divider label={t('login-page.or-login-with')} labelPosition="center" />
              <Group grow>
                <ActionIcon variant="outline" size="lg" radius="md">
                  <FacebookIcon />
                </ActionIcon>
                <ActionIcon variant="outline" size="lg" radius="md">
                  <GoogleIcon />
                </ActionIcon>
                <ActionIcon variant="outline" size="lg" radius="md">
                  <AppleIcon />
                </ActionIcon>
              </Group>
              <Text fz={12} ta="center">
                {t('login-page.accept')}{' '}
                <Anchor variant="dark" size="xs" href="#">
                  {t('login-page.terms')}
                </Anchor>
                ,{' '}
                <Anchor variant="dark" size="xs" href="#">
                  {t('login-page.privacy-policy')}
                </Anchor>{' '}
                {t('login-page.and')}{' '}
                <Anchor variant="dark" href="#" size="xs">
                  {t('login-page.code-conduct')}
                </Anchor>{' '}
                {t('login-page.of-stutu')}
              </Text>
            </Stack>
          </Center>
        </div>
      </form>
    </div>
  );
}
