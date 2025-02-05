import { HeaderMenu } from '@/components/Header';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Welcome } from '../components/Welcome/Welcome';

export default function HomePage() {
  return (
    <>
      <HeaderMenu />
      <Welcome />
      <ColorSchemeToggle />
    </>
  );
}
