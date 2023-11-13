import * as Card from '@/components/ui/card';

export default async function Home() {
  return (
    <main className="container flex min-h-max flex-col justify-center gap-8">
      <Card.Card className="py-28">
        <Card.CardHeader>
          <Card.CardTitle className="text-center text-5xl font-extrabold">
            My Mood Jazz
          </Card.CardTitle>
        </Card.CardHeader>
        <Card.CardContent className="text-center">
          <p className="text-lg">
            We are building a website to help you find music that matches your
            mood.
          </p>
          <p className="text-lg">
            We are currently in the early stages of development, so please
            excuse the mess.
          </p>
        </Card.CardContent>
      </Card.Card>
    </main>
  );
}
