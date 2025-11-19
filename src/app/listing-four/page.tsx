import React from 'react';
import ListingHeader from '@/components/listing-four/ListingHeader';
import ListingGallery from '@/components/listing-four/ListingGallery';
import ListingDetails from '@/components/listing-four/ListingDetails';
import ListingSidebar from '@/components/listing-four/ListingSidebar';
import SchoolsSection from '@/components/listing-four/SchoolsSection';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

const ListingFourPage = () => {
  const propertyData = {
    address: "3092 Mavis Road #45",
    cityStateZip: "Mississauga, ON L5C 1T8",
    price: "$1,429,418",
    mlsNumber: "W12554602",
    status: "For Sale",
    description: `Assignment Sale RESTAURANT & SHISHA LOUNGE Prime Commercial Condo in Mississauga: Located at 3092 Mavis Road in Mississauga prestigious and busy corridor this assignment sale offers an exceptional opportunity to acquire a brand-new commercial condominium.
    
    The ground-level unit boasts approximately 1,361.35 square feet of open-concept space, making it ideally suited for a RESTAURANT & SHISHA LOUNGE. Strategically positioned at the intersection of Mavis Road and Dundas Street, the property benefits from excellent visibility and convenience. It is surrounded by well-established residential subdivisions and is in close proximity to major destinations, including Square One Shopping Centre and the University of Toronto Mississauga.
    
    In addition, quick access to major highways such as the QEW and Highway 403 further enhances its appeal for both customers and staff. Key features include street-front exposure, individual utility metering, and an existing sprinkler system infrastructure with any necessary modifications to be arranged through vendor-approved contractors. The tentative occupancy date for the unit is set for Fall 2026.
    
    As this is an assignment sale, the buyer will assume the terms of the original Agreement of Purchase and Sale, including applicable builder conditions and assignment fees, while taxes and maintenance fees are yet to be assessed. This is a rare opportunity to secure a premium commercial space in a high-demand area of Mississauga, perfect for investors or end-users seeking a strategic location for business operations and long-term growth.`,
    features: [
      { label: "Type", value: "Retail" },
      { label: "Cooling", value: "Yes" },
      { label: "Region", value: "Peel" },
      { label: "Status", value: "Active" },
      { label: "Basement", value: "None" },
      { label: "Security Features", value: "Fire Sprinkler System" },
      { label: "Property Type", value: "Commercial Sale" },
      { label: "Garage/Parking Features", value: "Outside" },
      { label: "Lot Size Dimensions", value: "0.00 x 0.00" },
      { label: "Water Source", value: "Public" },
    ],
    details: [
      { label: "Total Building Area", value: "1,361 sqft / 126.44 m²" },
      { label: "Price per Sq Ft.", value: "$1,050" },
      { label: "Zoning Details", value: "Commercial" },
      { label: "Possession", value: "Immediately" },
      { label: "Tax Year", value: "2025" },
      { label: "Municipality", value: "Mississauga" },
      { label: "Neighbourhood", value: "Mavis-Erindale" },
      { label: "Directions", value: "Mavis Road and Dundas Street, West" },
      { label: "Lease Considered", value: "No" },
      { label: "Listing Brokerage", value: "CITYSCAPE REAL ESTATE LTD." },
      { label: "Listing Brokerage Phone", value: "905-241-2222" },
      { label: "Offers", value: "ASSIGNMENT SALE-CONTACT TO THE LISTING AGENT" },
      { label: "Postal City", value: "Mississauga" },
    ]
  };

  return (
    <div className="min-h-screen bg-background font-sans">
      <Nav />
      
      <main className="mt-24">
        {/* GALLERY + SIDEBAR */}
        <section className="relative w-full max-w-7xl mx-auto px-6 py-10 grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ListingGallery />
          </div>
          <div className="lg:col-span-1">
            <ListingSidebar />
          </div>
        </section>

        {/* HEADER (Address) */}
        <section className="max-w-7xl mx-auto px-6">
          <ListingHeader
            address={propertyData.address}
            cityStateZip={propertyData.cityStateZip}
            mlsNumber={propertyData.mlsNumber}
          />
        </section>

        {/* DETAILS */}
        <section className="max-w-5xl mx-auto px-6 py-10">
          <ListingDetails
            description={propertyData.description}
            features={propertyData.features}
            details={propertyData.details}
          />
          
          <SchoolsSection />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ListingFourPage;
