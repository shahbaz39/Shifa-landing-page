import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center bg-gradient-to-b from-secondary to-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 bg-white border border-primary/20 rounded-full px-4 py-2 w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-xs font-semibold text-primary">
                HIPAA Compliant
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl font-bold text-foreground leading-tight text-balance">
              Healthcare Management{" "}
              <span className="text-primary">Simplified</span>
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
              ShifaCom is a comprehensive HIPAA-compliant platform designed for
              modern healthcare facilities. Manage patients, staff, pharmacies,
              and clinical workflows with confidence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 text-base font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Request Demo
              </Link>
              <Link
                href="/features"
                className="inline-flex items-center justify-center rounded-lg border-2 border-primary px-8 py-3 text-base font-semibold text-primary hover:bg-primary/5 transition-colors"
              >
                Learn More
              </Link>
            </div>

            <div className="flex items-center gap-8 pt-8 border-t border-border">
              <div>
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">
                  Healthcare Facilities
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">1M+</div>
                <div className="text-sm text-muted-foreground">
                  Patient Records
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime SLA</div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative hidden lg:flex justify-center items-center">
            {/* Decorative background blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[650px] bg-primary/10 rounded-full blur-3xl -z-10"></div>

            {/* Mobile Frame */}
            <div className="relative mx-auto border-gray-900 bg-gray-900 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-2xl">
              <div className="w-[148px] h-[18px] bg-gray-900 top-0 left-1/2 -translate-x-1/2 absolute rounded-b-[1rem] z-10"></div>
              <div className="h-[46px] w-[3px] bg-gray-900 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
              <div className="h-[46px] w-[3px] bg-gray-900 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
              <div className="h-[64px] w-[3px] bg-gray-900 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
              <div className="relative rounded-[2rem] overflow-hidden w-full h-full bg-white">
                <Image
                  src="/Home.png"
                  alt="App Screenshot"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
