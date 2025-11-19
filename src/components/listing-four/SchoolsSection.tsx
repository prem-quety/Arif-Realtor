import React from 'react';

const schools = [
  {
    name: "St. John XXIII Catholic Elementary School",
    type: "Public Schools",
    distance: "0.73 km",
    grades: "JK-8"
  },
  {
    name: "Father Daniel Zanon Elementary School",
    type: "Public Schools",
    distance: "0.80 km",
    grades: "JK-8"
  },
  {
    name: "McBride Avenue Public School",
    type: "Public Schools",
    distance: "0.94 km",
    grades: "JK-6"
  }
];

const SchoolsSection: React.FC = () => {
  return (
    <section className="mt-12">
      <h2 className="font-serif text-3xl font-bold text-heading mb-6">Nearby Schools</h2>
      <div className="overflow-hidden rounded-2xl ring-1 ring-black/10 shadow">
        <div className="flex flex-col">
          {schools.map((school, index) => (
            <div key={index} className="flex flex-col md:flex-row justify-between items-start md:items-center p-4 border-b border-black/5 last:border-none even:bg-black/[0.02]">
              <div>
                <h3 className="font-bold text-heading">{school.name}</h3>
                <p className="text-sm text-muted">{school.type} • Grades: {school.grades}</p>
              </div>
              <div className="mt-2 md:mt-0">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white border border-gray-200 text-gray-800 shadow-sm">
                  {school.distance}
                </span>
              </div>
            </div>
          ))}
        </div>
       
      </div>
      <p className="text-xs text-muted mt-4 italic">
        *All information displayed is believed to be accurate but is not guaranteed and should be independently verified.
      </p>
    </section>
  );
};

export default SchoolsSection;
