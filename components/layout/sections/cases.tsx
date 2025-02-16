/* eslint-disable @next/next/no-img-element */
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { cases } from '@/data/cases';

function CasesSection() {
  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Projetos</h2>
        <p className="text-lg text-muted-foreground mb-12">
          Conheça as soluções que criamos para impulsionar negócios e
          transformar ideias em realidade.
        </p>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {cases.map((case_) => (
            <div
              key={case_.id}
              className="bg-muted/60 dark:bg-card rounded-lg shadow-lg p-6 flex flex-col justify-between"
            >
              <img
                src={case_.logo}
                alt={case_.title}
                className="rounded-md mb-4 h-36 mx-auto"
              />
              <p className="text-card-foreground">{case_.shortDescription}</p>
              <Link href={`/cases/${case_.id}`}>
                <Button className="mt-4 w-full">Ver mais</Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CasesSection;
