import React from 'react';

interface ListingHeaderProps {
  address: string;
  cityStateZip: string;
  mlsNumber: string;
}

const ListingHeader: React.FC<ListingHeaderProps> = ({
  address,
  cityStateZip,
  mlsNumber,
}) => {
  return (
    <div className="py-10">
      <h1 className="font-serif text-4xl md:text-5xl text-heading">
        {address} {cityStateZip}
      </h1>
      <p className="mt-2 text-muted">MLS® #{mlsNumber}</p>
    </div>
  );
};

export default ListingHeader;
