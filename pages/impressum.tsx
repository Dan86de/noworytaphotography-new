"use client";

import { useRouter } from "next/router";
export default function Impressum() {
  const router = useRouter();
  return (
    <div className="mx-auto container max-w-screen-2xl px-4 sm:px-6 text-lg text-brand leading-loose">
      {/*<button*/}
      {/*  className="hidden md:inline-flex items-center justify-center rounded-md bg-brand p-2 text-white border-2 border-brand hover:bg-white hover:text-brand focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand "*/}
      {/*  onClick={() => router.back()}*/}
      {/*>*/}
      {/*  Zurück*/}
      {/*</button>*/}

      <p className="text-right text-brand">Angaben gemäß § 5 TMG</p>
      <h1 className="text-brand font-headings text-4xl text-center">
        Impressum
      </h1>
      <h2 className="text-brand font-headings font-bold text-4xl mt-8">
        Kontakt:
      </h2>

      <strong>Immobilienfotograf Katarzyna Noworyta</strong>
      <strong>Grungurtelstr. 10</strong>
      <strong>50996, Koeln</strong>
      <p>
        <strong>Steuernummer:</strong> 219/5240/3581
      </p>
      <p>
        <strong>E-mail:</strong> contact@noworytaphotography.com
      </p>
      <p>
        <strong>Internet:</strong> www.noworytaphotography.com
      </p>
 

      <h2 className="text-brand font-headings font-bold text-4xl mt-8">
        Haftungsausschluss:
      </h2>
      <h2 className="text-brand font-headings font-bold text-4xl mt-8">
        Haftung für Inhalte
      </h2>
      <p>
        Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die
        Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir
        jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7
        Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen
        Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
        Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
        gespeicherte fremde Informationen zu überwachen oder nach Umständen zu
        forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
        Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
        Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
        Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
        Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von
        entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend
        entfernen.
      </p>
      <h2 className="text-brand font-headings font-bold text-4xl mt-8">
        Haftung für Links
      </h2>
      <p>
        Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren
        Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden
        Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
        Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten
        verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
        Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte
        waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente
        inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete
        Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden
        von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
      </p>
      <h2 className="text-brand font-headings font-bold text-4xl mt-8">
        Urheberrecht
      </h2>
      <p>
        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
        Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
        Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
        Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
        jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite
        sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
        Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden,
        werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte
        Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
        Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
        entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden
        wir derartige Inhalte umgehend entfernen.
      </p>
    </div>
  );
}
