"use client";
export default function MapSection() {
  return (
    <section className="relative bg-background py-20 px-6 text-heading">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div>
          <p className="text-sm uppercase tracking-widest text-accent mb-2">
            Our Headquarters
          </p>
          <h2 className="text-4xl font-bold mb-4">
            At the Heart of Mississauga
          </h2>
          <p className="text-muted text-lg leading-relaxed mb-6">
            Based in the vibrant city of Mississauga, Arif Realtor serves the
            entire GTA with unmatched precision and loyalty. Whether you're
            looking for your first home or a luxurious estate, our doors are
            always open.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
            <div>
              <p className="font-semibold text-heading">Location</p>
              <p className="text-muted mt-1">
                885 Plymouth Dr. Unit 2<br />
                Mississauga, ON. L5V 0B5
              </p>
            </div>
            <div>
              <p className="font-semibold text-heading">Hours</p>
              <p className="text-muted mt-1">Monday – Sunday: 9 AM – 9 PM</p>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="overflow-hidden rounded-2xl shadow-xl border border-heading/10">
          <iframe
            title="Arif Realtor Location"
            src="https://maps.google.com/maps?q=885%20Plymouth%20Dr.%20Unit%202,%20Mississauga,%20ON.%20L5V%200B5&amp;t=m&amp;z=13&amp;ie=UTF8&amp;output=embed"
            width="100%"
            height="400"
            loading="lazy"
            className="w-full h-full"
            style={{ border: 0 }}
          />
        </div>
      </div>
    </section>
  );
}
