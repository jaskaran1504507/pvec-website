export const cards = [
  {
    seq: 1,
    id: 'service-1',
    text: `
        A comprehensive exam includes a refraction check as well as complete health
        examination of the front and back of your eyes.

        We provide the best care for your eyes which includes; full
        comprehensive exams, prescription eye glasses sunglasses, contact
        lenses, and top notch vitamins and drops especially to promote eye
        health!
      `,
    img: "/images/Rectangle 1-6.jpg",
    head: "Comprehensive exam starting from $100",
    head2: "Comprehensive eye exam",
  },
  {
    seq: 2,
    id: 'service-2',
    img: "/images/AboutUs_Unslapsh.png",
    head: (
      <>
        Children/Senior Eye exams
        <br />
        <p className="font-bold">Children: $30 - Seniors: $45</p>
      </>
    ),
    head2: 'Children/Senior Eye exams',
    text: `Children under 19 and adults 65 and older are covered by MSP for their
          comprehensive eyes exams. Any other person between the ages of 18-65
          who is referenced from a family doctor or other specialist for a
          health condition will be partly covered by MSP*.`,
    conditions: `( *conditions apply, see associate for details. Please call us or email us to inquire about
            charges.)`,
  },
  {
    seq: 3,
    id: 'service-3',
    img: "/images/PVEC_ContactLenses.jpeg",
    head: (
      <>
        Contact Lens Fitting
        <br />
        <p className="font-bold">Fitting Fee: $30 to $90</p>
      </>
    ),
    head2: 'Contact Lens Fitting',
    text: `Whether you are a first time wearer, or a
    seasoned Contact Lens veteran, we can help you get the most out of your contact lenses
    by providing you with options
    from all of the top brands. We can educate,
    fit and recommend the contacts that best suit
    your lifestyle needs. 
    Ask about how to get free trial contacts!`,
  },
  {
    seq: 4,
    id: 'service-4',
    img: "/images/Rectangle 1.jpg",
    head: (
      <>
        Pink Red, Sore Eyes, or Eyelid Care
        <br />
        <p className="font-bold">Minor Eye exam: $30 - $60</p>
      </>
    ),
    head2: 'Irritated Eyes or Eyelid Care',
    text: `Eye irritation or redness due to allergies, excessive computer use, prolonged contact
    lens wear, or foreign objects can be
    treated same day.
    We also specialize in treating Chalazion or Stye with proper education along with a suite of products to provide vou with the
    relief you are looking for.`,
  },
  {
    seq: 5,
    id: 'service-5',
    img: "/images/Rectangle 1-4.jpg",
    head: "Dry Eye Treatment",
    head2: 'Dry Eye Treatment',
    text: "Dry eye syndrome is an extremely common issue amongst young and old patients alike. It can be as a result of the surrounding environment, seasonal changes, medications, use of screens, and many other reasons. It can also have a variety of symptoms ranging from burning and irritation to headaches and blurry vision. There are many viable treatment options available nowadays.",
  },
  {
    seq: 6,
    id: 'service-6',
    head: "LASIK/PRK Surgery Consultation",
    head2: 'LASIK/PRK Consultation',
    text: "Pre-Op and Post-Op Care Cataract Surgery Management, Glaucoma Treatment, Macular Degeneration Care, Diabetic Eye Care",
    img: "/images/Rectangle 1-5.jpg",
  },
  {
    seq: 7,
    id: 'service-7',
    head: "Rigid Gas Permeable (RGPs) & Scleral Lenses Fitting",
    head2: 'RGPs & Scleral Lenses Fitting',
    text: `Treatment for corneal conditions
    such as keratoconus, severe dry eye, past refractive complications,
    complicated prescriptions, and post corneal transplants`,
    img: "/images/lens-fitting.jpg",
  },
  {
    seq: 8,
    id: 'service-8',
    img: "/images/Rectangle 1-7.jpg",
    text: `Patients experiencing ocular emergencies can be fit in same if necessary; even if we are
    fully booked. Eye Emergencies can include irritated red eyes, foreign object removal,
    sudden vision loss and blur, sudden peripheral vision loss, severe eye pain, and
    symptoms of flashes, sparks and/or heavy floaters.
    If urgent surgical care is required, we can refer to an ophthalmologist same day.
    (Usual wait times for an appointment is 6 to 9 months currently for non emergency)`,
    head: "Eye Emergencies",
    head2: 'Eye Emergencies',
  },
  {
    seq: 9,
    id: 'service-9',
    img: "/images/Rectangle 1-3.jpg",
    head: "Light Sensitivity Treatment",
    head2: 'Light Sensitivity Treatment',
    text: "Light sensitivity, or photophobia, is a condition in which bright light hurts your eyes. This condition can range from mild to severe.",
  },
  {
    seq: 10,
    id: 'service-10',
    img: "/images/Rectangle 1-2.jpg",
    head: (
      <>
        Eye exams, Glasses, Sunglasses, and Contact Lenses
        <br />
        <p className="font-bold">Direct Billing</p>
      </>
    ),
    head2: 'Billing Insurance',
    text: `
        If you have private extended health insurance from one of the below
        companies, we offer direct billing for all glasses and contact lens
        orders. This means you can walk away with glasses or contacts with
        little to no out of pocket expenses.
      
          Most of our common health benefits providers are: Blue Cross, Chamber
          of Commerce, Crown, Desjardins, Great-West life, Canada Life,
          Industrial Alliance, Johnson Inc., Manulife financial, Maximun
          Benefit/Johnson Group, Standard Life, Sun Life Financial and more.`,
  },

];
export const navArr = [
  { name: "Home", path: "/" },
  { name: "Bookings", path: "/bookings" },
  { name: "Promotions", path: "/promotions" },
  { path: "/service-products", name: "Services & Products" },
  { name: "Glasses & Contacts", path: "/glasses-contacts" },
  { path: "/about-us", name: "About Us" },
];

export const eyeBrand = [
  "Tome Ford",
  "Marc Jacobs",
  "Oakley",
  "Fysh",
  "Tory Burch",
  "Silhouette",
  "Wiley X",
  "La Font",
  "Eco",
  "Kate Spade",
  "Ray-Ban",
  "Emporio Armani",
  "Vogue",
  "Coach",
  "Hugo Boss",
  "Tommy Hilfiger",
  "Kliik",
  "Rec Specs",
  "Versace",
  "Gucci",
  "Maui Jim",
  "Michael Kors",
  "Tura",
  "Stepper",
];

export const productCatalogue = [
  {
    img: "/images/man-lenses.jpg",
    head: "Contact Lenses",
    text: "Experience clear vision with our wide selection of contact lenses. Perfect for any need, prescription or non-prescription available.",
    link: "/glasses-contacts?query=contacts",
  },
  {
    img: "/images/eye-drops.jpg",
    head: "Eye Care Products",
    text: "Relieve dry, irritated eyes with our collection of high-quality eye drops. Perfect for daily use and for contact lens wearers.",
    link: "/products?query=eye-medic",
  },
  {
    img: "/images/modern-elegance-glasses.jpg",
    head: "Eyewears",
    text: "Upgrade your style with our collection of trendy eye wears. From classic to modern, bold or conservative, and even safety protective, we have something for everyone.",
    link: "/glasses-contacts?query=glasses",
  },
];

export const brandsArr = [
  {
    sequence: 1, image: "fysh-logo.jpg", redirectUrl: "https://fyshuk.com", title: "FYSH",
    backgroundImage: "Best-glasses-for-blonde-hair.webp"
  },
  {
    sequence: 2,
    image: "guess_logo_.jpeg",
    redirectUrl: "https://www.guess.com/us/en/women/accessories/sunglasses",
    title: "Guess",
    backgroundImage: "Guess_bk.avif"
  },
  {
    sequence: 3,
    image: "PVEC_HugoBoss.png",
    redirectUrl: "https://www.hugoboss.com/men-glasses/",
    title: "Hugo Boss",
    backgroundImage: "hugo-boss-glasses-henry-carvell.jpg"
  },
  {
    sequence: 4,
    image: "PVEC_KateSpade.png",
    redirectUrl: "https://www.katespade.com/shop/accessories/sunglasses-reading-glasses",
    title: "Kate Spade",
    backgroundImage: "kate_spade_bk.webp"
  },
  {
    sequence: 5,
    image: "kliik-logo.jpg",
    redirectUrl: "https://www.kliik.com/",
    title: "KLiik",
    backgroundImage: "kliik-k-716.jpg"
  },
  {
    sequence: 6,
    image: "PVEC_LaFont.png",
    redirectUrl: "https://www.lafont.com/the-collection/",
    title: "Lafont",
    backgroundImage: "lofant_bk.jpeg"
  },
  {
    sequence: 7,
    image: "marc-jacobs-logo-vector.png",
    redirectUrl: "https://www.marcjacobs.com/default/the-marc-jacobs/the-accessories/sunglasses/",
    title: "Marc Jacobs",
    backgroundImage: "mj-banner.jpeg"
  },
  {
    sequence: 8,
    image: "Michael_Kors_(brand)_logo.png",
    redirectUrl: "https://www.michaelkors.ca/men/accessories/sunglasses/_/N-285v",
    title: "Michael Kors",
    backgroundImage: "micheal-kors-banner.png"
  },
  {
    sequence: 9,
    image: "PVEC_Moleskine.png",
    redirectUrl: "https://moleskine-eyewear.com/en/",
    title: "Moleskine",
    backgroundImage: "moleskine-banner.jpeg"
  },
  {
    sequence: 10,
    image: "oakley9768.jpg",
    redirectUrl: "https://www.oakley.com/en-eu",
    title: "Oakley",
    backgroundImage: "ookley.jpeg"
  },
  {
    sequence: 11,
    image: "Ray-Ban-logo.png",
    redirectUrl: "https://www.ray-ban.com/canada/en",
    title: "Ray Ban",
    backgroundImage: "ray-ban-banner.png"
  },
  {
    sequence: 12, image: "PVEC_Superflex.jpeg", redirectUrl: "", title: "Superflex",
    backgroundImage: "superflex_bk.jpg"
  },
  {
    sequence: 13,
    title: "Tom Ford",
    image: "PVEC_TF.png",
    redirectUrl: "https://www.tomford.com/eyewear/men/optical/",
    backgroundImage: "tom_ford_bk.jpeg"
  },

  // {
  //   link: "PVEC_EmporioArmani.jpeg",
  //   addr: "https://www.armani.com/en-in/emporio-armani/man/eyewear",
  //   name: "Armani",
  // },

  // {
  //   link: "PVEC_Gucci.png",
  //   addr: "https://www.gucci.com/us/en/st/capsule/women-eyewear",
  //   name: "Gucci",
  // },
  // { link: "PVEC_Staag.png", addr: "", name: "Staag" },
];

export const banner = [
  {
    // textColor: "white",
    sequence : 1,
    image: "banner-about-us-img",
    text: `<div className="d-none d-sm-inline-block text-3xl bg-slate-950" style="font-size:6vh;background: rgba(255, 255, 255, 0.2);backdrop-filter: blur(8px); margin-top:0.5rem; " >
    <a
      className=""
      data-scroll-nav="0"
      href="https://docs.google.com/forms/d/e/1FAIpQLSeciQeXbMzKdezp0kkCx1Itxm1SCnUL5bv1C7rT1m1aBp1vsg/viewform?usp=sf_link"
      target="_blank"
    >
      <span className="px-2 font-bold">Order Contacts</span>
    </a>
  </div>
  <div className=" d-none d-sm-inline-block ml-2 text-3xl bg-slate-950" style="font-size:6vh; background: rgba(255, 255, 255, 0.2);backdrop-filter: blur(8px); margin-top:0.5rem;">
    <a
      className=""
      data-scroll-nav="0"
      href="/bookings#appointment"
    >
      <span className="px-2 font-bold">Book Appointment</span>
    </a>
  </div>`,
  },
  // {
  //   textColor: "white",
  //   img: "banner-home-img-4",
  //   text: <>We direct bill to all major insurance providers.<br />We also partner with First Nation Health Authority (FNHA) and People with Disability (PwD) on government assistance.</>,
  // },
  // {
  //   textColor: "white",
  //   img: "banner-home-img-3",
  //   text: "The best use of your performance vision is spotting a good deal!",
  //   subText: <>Clearance Sale! <br />Now on selected eyewear from <span style={{ color: 'red' }}>50-90% off </span> with fully coated lenses purchase.</>,
  //   subText2: <a href="https://www.alternativeeyes.com/catalog/one-sun" target="_blank" rel="noopener noreferrer">Limited time offer! <br />Fully coated polarized sun glasses reg price <span style={{ color: 'red' }}><s>200$</s></span> now for <span style={{ color: 'red' }}>99$</span> while supplies last.</a>,
  //   subText3: <>Are you a student or senior citizen?<br />Please ask about our special pricing just for you.</>,
  //   description: "Please come visit in store or email or call us for more information."
  // },
  // {
  //   textColor: "white",
  //   img: "banner-home-img-5",
  //   text: "",
  // },
];
// Limited time offer, fully coated polarised sunglasses regular price 200$ now on 99$ while supplies last.

export const homeServicesCards = [
  {
    text: `A comprehensive exam includes a refraction check as well as complete health
    examination of the front and back of your eyes.

    We provide the best care for your eyes which includes; full
    comprehensive exams, prescription eye glasses sunglasses, contact
    lenses, and top notch vitamins and drops especially to promote eye
    health!`,
    img: "/images/5411448.jpg",
    head: "Comprehensive Eye Exam",
  },
  {
    img: "/images/5917616.jpg",
    head: "Computer Vision Syndrome",
    text: `Eye problems caused by prolonged computer use including: Eye irritation (Dry eyes, itchy eyes, red eyes) Blurred vision. Headaches.`
  },
  {
    img: "/images/PVEC_ContactLenses.jpeg",
    head: "Contact Lens Fitting",
    text: `We have the relief you need with our Optometrist recommended selection of dry eye products.
     Relieve dry, irritated eyes with our selection of high quality eye-drops, lid and eyelash care products, and therapeutic masks.
    Perfect for the net addicts, cyberphiles and contact lens wearers out there!`,
  }
];

export const productCards = [
  {
    text: `
    Disposable Daily, Bi-Weekly, Monthly, Astigmastic, Colored or Cos-play Contact Lenses (with or without prescription) delivered with Free Shipping!
    Our speciality is Rigid Gas Permeable and Scleral Contact lens fittings.
    
    All at competitive prices with applicable manufacturer's rebates* (based on quantity ordered)`,
    img: "/images/26415.jpg",
    head: "Contact Lenses",
    link: "/glasses-contacts?query=contacts",
    linkText: "Get yours now"
  },
  {
    img: "/images/eyewears.jpg",
    head: "Eye Wear",
    text: `New Modern Trends, Timeless Classics,Bold or Conservative and even Safety Protective eyewear; our collection has it all!
    We are constantly updating our selections year round to keep our collection up-to-date`,
    link: "/glasses-contacts?query=glasses",
    linkText: "Style it now"
  },
  {
    img: "/images/eyedrops.jpg",
    head: "Eye Drops",
    text: `Over 30% of the population struggle with dry eye syndrome which can lead to many eye complications.
    We have the relief you need with our Optometrist recommended selection of dry eye products.
    Relieve dry, irritated eyes with our selection of high quality eye-drops, lid and eyelash care products, and therapeutic masks.
    Perfect for the net addicts, cyberphiles and contact lens wearers out there!`,
    link: "/products?query=eye-medic",
    linkText: "Get it now"
  }
];

export const contactsBrandsArr = [
  {
    sequence: 1,
    image: "Acuvue.jpg",
    redirectUrl: "https://www.acuvue.ca/",
    title: "Acuvue",
    backgroundImage : "acuvue_bk.jpeg"
  },
  {
    sequence: 2,
    image: "B-L.webp",
    redirectUrl: "https://www.bausch.ca/en-ca/",
    title: "Bausch+Lomb",
    backgroundImage : "Bausch-Lomb_bk2.webp"
  },
  {
    sequence: 3,
    image: "cooper-vision-logo.jpg",
    redirectUrl: "https://coopervision.ca/",
    title: "CooperVision",
    backgroundImage : "cooper_vision_bk.png"
  },
  {
    sequence: 4,
    image: "myAlcon_logo.png",
    redirectUrl: "https://www.myalcon.com/ca/en/",
    title: "My Alcon",
    backgroundImage : "alcon_bk.jpeg"
  },
];

export const eyecareProductsArr = [
  {
    sequence: 1,
    image: "PVEC_idrop.jpeg",
    redirectUrl: "",
    title: "Eye Drops",
    backgroundImage : "women_using_eyeDROPs.jpg"
  },
  {
    sequence: 2,
    image: "omega-3.png",
    redirectUrl: "",
    title: "Omega-3",
    backgroundImage : "Omega-3-Fish-Oil-Supplements.webp"
  },
  {
    sequence: 3,
    image: "PVEC_teatree.jpeg",
    redirectUrl: "",
    title: "Tea Tree Eyelid",
    backgroundImage : "tea_tree_eye.jpeg"
  },
  {
    sequence: 4,
    image: "PVEC_eyemask.jpeg",
    redirectUrl: "",
    title: "Eye Mask",
    backgroundImage : "s-l1600.jpg"
  },
];

export const eyecareProductsList = [
  {
    sequence: 1,
    image: "eyecare_1.jpeg",
    redirectUrl: "",
    title: "Eye Drops",
    backgroundImage : "women_using_eyeDROPs.jpg"
  },
  {
    sequence: 2,
    image: "eyecare_2.jpeg",
    redirectUrl: "",
    title: "Omega-3",
    backgroundImage : "Omega-3-Fish-Oil-Supplements.webp"
  },
  {
    sequence: 3,
    image: "eyecare3.jpeg",
    redirectUrl: "",
    title: "Tea Tree Eyelid",
    backgroundImage : "tea_tree_eye.jpeg"
  },
  {
    sequence: 4,
    image: "eyecare4.jpeg",
    redirectUrl: "",
    title: "Eye Mask",
    backgroundImage : "s-l1600.jpg"
  },
  {
    sequence: 5,
    image: "eyecare5.jpeg",
    redirectUrl: "",
    title: "Eye Mask",
    backgroundImage : "s-l1600.jpg"
  },
  {
    sequence: 6,
    image: "eyecare6.jpeg",
    redirectUrl: "",
    title: "Eye Mask",
    backgroundImage : "s-l1600.jpg"
  },
  {
    sequence: 7,
    image: "eyecare7.jpeg",
    redirectUrl: "",
    title: "Eye Mask",
    backgroundImage : "s-l1600.jpg"
  },
  {
    sequence: 8,
    image: "515ugeq76Q.jpg",
    redirectUrl: "",
    title: "Eye Mask",
    backgroundImage : "s-l1600.jpg"
  },
  {
    sequence: 9,
    image: "eyecare9.jpeg",
    redirectUrl: "",
    title: "Eye Mask",
    backgroundImage : "s-l1600.jpg"
  },
  {
    sequence: 10,
    image: "eyecare10.jpeg",
    redirectUrl: "",
    title: "Eye Mask",
    backgroundImage : "s-l1600.jpg"
  },
];

export const gridGlassesBrands = [
  {
    imageUrl: "/images/rayban_shop.jpeg",
    linkUrl: "https://www.ray-ban.com/canada/en",
    linkText: "Buy Ray Ban"
  },
  {
    imageUrl: "/images/lafont-shop.jpeg",
    linkUrl: "https://www.lafont.com/the-collection/",
    linkText: "Buy Lafont"
  },
  {
    imageUrl: "/images/fysh_shop2.jpeg",
    linkUrl: "https://fyshuk.com",
    linkText: "Buy Fysh"
  },
  {
    imageUrl: "/images/hugo_boss_shop.jpeg",
    linkUrl: "https://www.hugoboss.com/men-glasses/",
    linkText: "Buy Hugo Boss"
  },
];

export const gridContactsBrands = [
  {
    imageUrl: "/images/acuvue_shop.jpeg",
    linkUrl: "https://www.acuvue.ca/",
    linkText: "Buy Acuvue"
  },
  {
    imageUrl: "/images/Bausch-Lomb_bk2.webp",
    linkUrl: "https://www.bausch.ca/en-ca/",
    linkText: "Buy Bausch+Lomb"
  },
  {
    imageUrl: "/images/cooper_vision_shop.webp",
    linkUrl: "https://coopervision.ca/",
    linkText: "Buy CooperVision"
  },
  {
    imageUrl: "/images/alcon_shop.jpeg",
    linkUrl: "https://www.myalcon.com/ca/en/",
    linkText: "Buy My Alcon"
  },
];

export const gridEyecareBrands = [
  {
    imageUrl: "/images/Omega-3-Fish-Oil-Supplements.webp",
    linkUrl: "",
    linkText: "Buy Omega-3"
  },
  {
    imageUrl: "/images/lid_n_lash.jpeg",
    linkUrl: "",
    linkText: "Buy Lid 'n Lash"
  },
  {
    imageUrl: "/images/bl_eye_mask.jpeg",
    linkUrl: "",
    linkText: "Buy Eye Mask"
  },
  {
    imageUrl: "/images/Tea_tree_mask.jpeg",
    linkUrl: "",
    linkText: "Buy Tea Tree Eyelid"
  },
  
];