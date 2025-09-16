"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    name: "Nadia Minetto",
    date: "18-1-2021",
    statement:
      "Mr. Rajer was the agent for the home we rented in December 2020. Arif was helpful, open, transparent, and reliable throughout the process. He cared about us, understood our needs, and fought hard for us in a difficult situation. From the first time I spoke to him, he was very reassuring and professional, making it comforting to work with and trust him. I highly recommend him to anyone looking to rent or buy a home.",
  },
  {
    name: "Sarath Kumarasinghe",
    date: "20-11-2024",
    statement:
      "Hi Arif, Thank you for facilitating Kushal's apartment rental and coordinating it professionally. I appreciate it.",
  },
  {
    name: "Arvind Nair and Resmi Nair",
    date: "05-09-2023",
    statement:
      "I got Arif's contact information from my friend, whom he helped last year with a property Rental. From the beginning, Arif listened to my complete requirements and followed up periodically. He took time and sent me the exact listings without spamming my inbox with MLS listings that wouldn't add any value. Being a working professional, he ensured that visitations could be arranged without hampering my work schedule. There were no hiccups, and the second property, which he showed me on the same day within a 5 km radius, was 100% aligned with my and my Spouse's expectations. Arif ensured that all formalities were completed on time and bridged the gap between the Landlord and his Realtor. I would like to take this opportunity to thank him for his rare trait of being soft-spoken, polite, and professional. Despite closing the deal, he drove to the property during the Key handover to adjust his work commitments. We would strongly recommend Arif for any kind of real estate requirements and would definitely work with him for our next Rental or Property Buying. Thanks a lot!!!!! With Warm Regards,",
  },
  {
    name: "Shariq",
    date: "14 July 2022",
    statement:
      "Hi Arif, I would like to take a moment to thank you for all your help and support with not only purchasing the property but renting it as well. You made my search easier, explained, and went over everything step by step. You gave me all the information I needed and helped me contact a lawyer. I could see you were serious about what you do. If someone asks if I know who could help them, I will not hesitate to name you as a reference, as you are honest. Once again, thank you so much. Regards,",
  },
  {
    name: "Rehan Ali",
    date: "10th Aug,2022",
    statement:
      "Arif has been excellent in all my interactions with him. He is professional, courteous, honest and on top of things all the time. In the world of deceitful and pushy sales tactics by real estate salespeople, he is a breath of fresh air! The one thing that stood out for me with Arif was the attitude of going beyond what was needed to make sure I received the best service possible. He helped me find a tenant for my property and ensured that all the matters related to the tenancy were handled to the tenant's and my satisfaction. I was delighted with his services and would love to use his services in all my future transactions.",
  },
  {
    name: "Mr. & Mrs. Aurangzeb",
    date: "02-11-2024",
    statement:
      "Hi, Arif was a joy to work with! The breadth of his local knowledge of Kingston and its environs and his thorough real estate expertise were invaluable. He introduced us to the market and showed us many houses, so we had great choices to work with. Arif also understood and worked with our time frame, responding quickly to all queries. Our experience was great from start to finish, thanks to Arif. We highly recommend him!!",
  },
  {
    name: "DARREN GRIFFITHS",
    date: "13 Sept 2022",
    statement:
      "I was in the market for a rental home and had the pleasure of meeting Arif Rajer, the listing agent. Arif was extremely accommodating and negotiated with the homeowner on my behalf, which resulted in favorable lease terms. Customer service was both prompt and professional. I couldn't have asked for a better experience.",
  },
  {
    name: "Ashfaq Mohammed",
    date: "13 June 2022",
    statement:
      "Mr. Arif Rajer is phenomenal. Super professional, respectful, and always available. He will respond almost immediately. He always takes care of the client's direction and gives the proper recommendations following a detailed analysis. I was ready to buy my first home around February 2022; however, he recommended waiting another 3 months. According to his insight, the market will go down by June 2022. The same thing happened by June, the market dropped significantly, and I saved plenty of money by buying a house in June instead of Feb 2022 (Million Thanks to him). Moreover, he actively helped me to find my dream home. He is such a dynamic realtor that he has travelled back and forth from Cambridge (home) to Kingston, ON, for a property showing. Finally, in June 2022, we bought our dream home in Kingston's prime location. I am so grateful to him for helping me buy such a fantastic property, and I highly recommend you contact Mr. Arif Rajer to buy/sell your property. ",
  },
  {
    name: "DARREN GRIFFITHS",
    date: "03/07/2023",
    statement:
      "I was in the market for a rental home and had the pleasure of meeting Arif Rajer, the listing agent. Arif was extremely accommodating and negotiated with the homeowner on my behalf, which resulted in favorable lease terms. Customer service was both prompt and professional. I couldn't have asked for a better experience.",
  },
  {
    name: "Mohd & Lana",
    date: "19 Jul 2023",
    statement:
      "Thank you, Arif, for the fantastic experience we had. From the first day, my wife and I both enjoyed the service. You were so patient with us and professionally did your job, took us to view different houses that we already liked and chose, and then agreed with the Seller’s representative for the house we wanted in a smooth & easy way. You took care of every single detail. Thank you again,",
  },

  {
    name: "TALIB BAEJAW",
    date: "02-11-2024",
    statement:
      "I had the pleasure of working with Arif to rent out my property, and I couldn’t be more pleased with his services. Arif demonstrated excellent communication from the beginning, keeping me informed at every step. He was professional, thorough, and went above and beyond to ensure my property was well presented and reached the right audience. Arif's attention to detail in vetting prospective tenants gave me peace of mind, knowing I was placing my property in reliable hands. Thanks to his hard work and dedication, we secured the perfect tenants quickly. I highly recommend Arif for anyone looking for a trustworthy and efficient real estate agent!",
  },
  {
    name: "Fred Vo and Lana Tran",
    date: "02-11-2024",
    statement:
      "Working with Arif was one of our best decisions during our home-buying journey. From the very first conversation, it was clear that honesty and transparency were at the heart of everything he does. He never pressured or rushed the process; however, he patiently walked us through each step, ensuring we understood all the details before moving forward. What really stood out was Arif’s genuine care for our needs. He listened closely, answered every question thoroughly, and gave advice that always felt in our best interest—not just to close a deal. It’s rare to find someone who blends professionalism with such warmth and integrity. Thanks to Arif, we found the right home and felt truly supported every step of the way.",
  },
  {
    name: "Mariam & Ayyaz",
    date: "02-11-2024",
    statement:
      "Hello Mr. Arif Rajer, I hope my email finds you well. Thank you so much for your kind words, sincere efforts, and support throughout this process. We are truly grateful for your guidance and professionalism in helping us secure this apartment. It has been a smooth and positive experience, and we appreciate your efforts to make it happen. We’ve moved in and are setting up the place these days. Due to this, I just saw your email today. I truly apologize for the late response. Your attention to detail and thoroughness have been very reassuring to us. It was a pleasure working with you, and we’ll be happy to recommend your services to family and friends. We look forward to staying in touch with you. Warm regards,",
  },
];

export default function Testimonials() {
  const [expanded, setExpanded] = useState(false);

  // Show only first 2 unless expanded
  const visibleTestimonials = expanded
    ? testimonials
    : testimonials.slice(0, 2);

  return (
    <section id="testimonials" className="relative bg-[#faf7f0] py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="tracking-[0.18em] uppercase text-xs font-semibold text-[#7c6a2b]">
            Testimonials
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-neutral-900">
            Client Reviews
          </h2>
          <div className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {visibleTestimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="relative overflow-hidden rounded-[28px] border border-amber-100/60 bg-white/90 p-12 shadow-[0_18px_60px_rgba(0,0,0,0.10)] hover:shadow-[0_28px_80px_rgba(0,0,0,0.14)] backdrop-blur-sm transition"
            >
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />

              {/* elegant watermark quote */}
              <span
                aria-hidden
                className="pointer-events-none absolute -right-6 -top-4 text-[140px] leading-none font-serif text-amber-200/30 select-none"
              >
                &ldquo;
              </span>

              <p className="relative mt-2 text-[1.06rem] leading-8 text-neutral-700 italic">
                “{t.statement}”
              </p>

              <div className="mt-10 flex items-end justify-between">
                <p className="text-neutral-900">
                  <span className="block text-xs tracking-[0.18em] uppercase text-amber-700/70">
                    — Client
                  </span>
                  <p className="font-serif text-xl italic text-neutral-900 border-b border-[#d4af37] inline-block pb-1">
                    {t.name}
                  </p>
                </p>
                {t.date && (
                  <span className="text-xs text-neutral-500">{t.date}</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Expand / Collapse Button */}
        {testimonials.length > 2 && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setExpanded(!expanded)}
              className="px-6 py-2 rounded-full bg-[#d4af37] text-white font-medium hover:bg-[#b08d2c] transition"
            >
              {expanded ? "Show Less" : "Show More"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
