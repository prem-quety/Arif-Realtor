import React from 'react';

interface ListingDetailsProps {
  description: string;
  features: { label: string; value: string }[];
  details: { label: string; value: string }[];
}

const ListingDetails: React.FC<ListingDetailsProps> = ({
  description,
  features,
  details,
}) => {
  return (
    <div className="space-y-12">
      <section className="text-lg leading-relaxed text-muted">
        <h2 className="font-serif text-3xl mb-6 text-heading">About This Property</h2>
        <p className="whitespace-pre-line">{description}</p>
      </section>

      <section>
        <h2 className="font-serif text-3xl mb-6 text-heading">Property Features</h2>
        <div className="overflow-hidden rounded-2xl ring-1 ring-black/10 shadow">
          <table className="min-w-full text-sm md:text-base">
            <tbody>
              {features.map((feature, index) => (
                <tr key={index} className="even:bg-black/[0.02]">
                  <td className="px-4 py-3 font-medium text-heading/90">{feature.label}</td>
                  <td className="px-4 py-3 text-muted">{feature.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="font-serif text-3xl mb-6 text-heading">Additional Details</h2>
        <div className="overflow-hidden rounded-2xl ring-1 ring-black/10 shadow">
          <table className="min-w-full text-sm md:text-base">
            <tbody>
              {details.map((detail, index) => (
                <tr key={index} className="even:bg-black/[0.02]">
                  <td className="px-4 py-3 font-medium text-heading/90">{detail.label}</td>
                  <td className="px-4 py-3 text-muted">{detail.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default ListingDetails;
