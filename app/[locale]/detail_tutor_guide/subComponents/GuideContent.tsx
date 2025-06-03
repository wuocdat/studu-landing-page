import { notFound } from 'next/navigation';

export default async function GuideContentPage({ locale }: { locale: string }) {
  try {
    const Content = (await import(`./${locale}.mdx`)).default;
    return (
      <div style={{ textAlign: 'justify' }}>
        <Content />
      </div>
    );
  } catch (error) {
    notFound();
  }
}
