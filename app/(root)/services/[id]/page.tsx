import { CTABanner } from "@/components/shared/cta/cta-banner";
import { Header } from "@/components/shared/headers/header";
import { getServiceBySlug } from "@/lib/utils";
import { notFound } from "next/navigation";

interface ServicePageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { id } = await params;

  // Find the service by slug
  const service = getServiceBySlug(id);

  if (!service) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-6xl px-4 font-workSans">
      <div className="mt-10 h-64 overflow-hidden">
        <Header heading={service.title} />
      </div>

      <section className="py-24">
        <div className="my-16 grid grid-cols-1 gap-4 md:grid-cols-2">
          {service.offerings.map((offering, index) => (
            <div
              key={index}
              className={`rounded-lg border p-4 ${service.textColor} border-opacity-20 font-workSans`}
            >
              <p className="text-sm font-medium text-foreground">{offering}</p>
            </div>
          ))}
        </div>

        <CTABanner />
      </section>
    </main>
  );
}
