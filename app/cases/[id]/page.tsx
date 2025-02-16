import { cases } from '@/data/cases';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ProjectImages } from './components/project-images';

export async function generateStaticParams() {
  return cases.map((case_) => ({
    id: case_.id,
  }));
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const caseStudy = cases.find((c) => c.id === params.id);

  return {
    title: `Caso de Sucesso - ${caseStudy?.title}`,
    description: caseStudy?.fullDescription || 'Caso de Sucesso',
  };
}

export default function CasePage({ params }: { params: { id: string } }) {
  const caseStudy = cases.find((c) => c.id === params.id);

  if (!caseStudy) {
    notFound();
  }

  return (
    <div className="container py-24 sm:py-32">
      <div className="flex flex-col items-center mb-12">
        <Image
          src={caseStudy.logo}
          alt={caseStudy.title}
          width={200}
          height={200}
        />
        {/* <p className="text-xl text-muted-foreground text-center max-w-3xl">
          {caseStudy.fullDescription}
        </p> */}
      </div>

      <div dangerouslySetInnerHTML={{ __html: caseStudy.content }} />

      <ProjectImages images={caseStudy.images} projectTitle={caseStudy.title} />
    </div>
  );
}
