"use client";

export default function AreasCoveredSection() {
  const areas = [
    { name: "Mississauga", image: "/images/areas/mississauga.jpg" },
    { name: "Oakville", image: "/images/areas/oakville.jpg" },
    { name: "Milton", image: "/images/areas/milton.jpg" },
    { name: "Waterloo", image: "/images/areas/waterloo.jpg" },
    { name: "Ajax", image: "/images/areas/ajax.jpg" },
    { name: "Toronto", image: "/images/areas/toronto.jpg" },
    { name: "Oshawa", image: "/images/areas/oshawa.jpg" },
    { name: "Niagara Falls", image: "/images/areas/niagara.jpg" },
    { name: "Pickering", image: "/images/areas/pickering.jpg" },
  ];

  return (
    <section className="bg-white">
      <div className="text-center py-16">
        <p className="text-accent text-sm font-semibold uppercase tracking-wide">
          Apart from Mississauga Homes for Sale
        </p>
        <h2 className="mt-2 text-4xl font-serif font-medium text-heading">
          Areas We Covered
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0">
        {areas.map((area) => (
          <div key={area.name} className="relative aspect-[4/3]">
            <img
              src={area.image}
              alt={area.name}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />
            <h3 className="absolute inset-0 flex items-center justify-center text-white text-2xl font-serif font-medium">
              {area.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
