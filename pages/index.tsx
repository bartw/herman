import Head from "next/head";
import { ReactNode } from "react";

const Paragraph = ({ children }: { children: ReactNode }) => (
  <p className="mt-4">{children}</p>
);

const Day = ({ children }: { children: ReactNode }) => (
  <li className="rounded p-4 bg-gray-100 mt-4">{children}</li>
);

const DayTitle = ({ children }: { children: ReactNode }) => (
  <h2 className="font-semibold">{children}</h2>
);

const Home = () => (
  <div className="min-h-screen bg-gray-200 text-gray-900">
    <Head>
      <title>Herman</title>
      <meta name="description" content="Herman" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    </Head>
    <div className="mx-auto max-w-screen-md p-6">
      <header className="">
        <h1 className="font-semibold text-2xl">Herman</h1>
      </header>
      <section className="mt-8 rounded p-4 bg-gray-100">
        <Paragraph>Maak kennis met Herman.</Paragraph>
        <Paragraph>
          Herman is een vriendschapskoek die niet te koop is, maar alleen
          gegeven kan worden. Het is een traditie in Denemarken.
        </Paragraph>
        <Paragraph>
          Herman groeit langzaam, maar liefst 10 dagen. Door de enzymen in het
          deeg kan hij niet bederven.
        </Paragraph>
        <Paragraph>Je moet Herman goed verzorgen!</Paragraph>
        <Paragraph>
          Zet Herman niet in de koelkast maar zorg dat hij warmte krijgt.
        </Paragraph>
        <Paragraph>
          Dek Herman niet af zodat hij goed kan ademen. Een theedoek er overheen
          leggen mag wel.
        </Paragraph>
        <Paragraph>
          Herman zal groeien dus zorg dat je hem bewaart in een ruime schaal die
          niet van metaal is. Roer Herman neit met metaal, maar wel met een
          houten lepel.
        </Paragraph>
      </section>
      <section className="mt-8">
        <ul>
          <Day>
            <DayTitle>Dag 1:</DayTitle>
            <Paragraph>
              Vandaag heb je Herman gekregen. Laat hem wennen aan zijn nieuwe
              omgeving en laat hem een beetje rusten.
            </Paragraph>
          </Day>
          <Day>
            <DayTitle>Dag 2:</DayTitle>
            <Paragraph>
              Roer Herman goed door, gebruik hiervoor een houten lepel. Herman
              houdt niet van metaal.
            </Paragraph>
          </Day>
          <Day>
            <DayTitle>Dag 3:</DayTitle>
            <Paragraph>
              Roer Herman een paar keer per dag goed door. Dat vindt Herman
              fijn.
            </Paragraph>
          </Day>
          <Day>
            <DayTitle>Dag 4:</DayTitle>
            <Paragraph>Herman heeft honger!</Paragraph>
            <Paragraph>
              Geef hem 2 dl melk, 200 g bloem en 250 g suiker.
            </Paragraph>
          </Day>
          <Day>
            <DayTitle>Dag 5:</DayTitle>
            <Paragraph>
              Roer Herman een paar keer per dag goed door. Daar houdt Herman
              van.
            </Paragraph>
          </Day>
          <Day>
            <DayTitle>Dag 6:</DayTitle>
            <Paragraph>
              Roer Herman een paar keer per dag goed door. Dat vindt Herman
              fijn.
            </Paragraph>
          </Day>
          <Day>
            <DayTitle>Dag 7:</DayTitle>
            <Paragraph>
              Roer Herman een paar keer per dag goed door. Daar wordt Herman
              luchtig van.
            </Paragraph>
          </Day>
          <Day>
            <DayTitle>Dag 8:</DayTitle>
            <Paragraph>
              Roer Herman een paar keer per dag goed door. Herman wil graag
              vertroeteld worden.
            </Paragraph>
          </Day>
          <Day>
            <DayTitle>Dag 9:</DayTitle>
            <Paragraph>Herman heeft weer honger!</Paragraph>
            <Paragraph>
              Geef hem te eten: 2 dl melk, 200 g bloem en 250 g suiker.
            </Paragraph>
            <Paragraph>
              Dit is het moment dat Herman zich gaat voortplaten!
            </Paragraph>
            <Paragraph>
              Verdeel Herman over 5 bakjes. 4 bakjes geef je aan vrienden met
              een link naar deze website. Het 5de bakje begruik je om door te
              gaan naar dag 10.
            </Paragraph>
          </Day>
          <Day>
            <DayTitle>Dag 10:</DayTitle>
            <Paragraph>
              Vandaag heeft Herman enorme honger en verwen je hem met een
              feestmaal van 1 dl olie, 150 g bloem, 3 eieren, 1 eetlepel
              bakpoeder, 1 appel in stukjes, 1 zakje vanillesuiker, 200 g noten
              of rozijnen, 2 theelepels kaneel en 1 theelepel zout.
            </Paragraph>
            <Paragraph>
              Meng Herman nog eens goed door elkaar. Vet een bakblik in en
              bestrooi het met suiker. Vul het bakblik met Herman. Zet hem in
              een voorverwarmde oven van 170° en laat hem een uur en 15 minuten
              bakken.
            </Paragraph>
            <Paragraph>Geniet ervan!</Paragraph>
          </Day>
        </ul>
      </section>
    </div>
  </div>
);

export default Home;
