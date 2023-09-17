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
    text: "Dry eye happens when your eye don't make enough tears to stay wet, or when your tears don't work correctly. This can make your eyes feel uncomfortable, and in some cases it can also cause vision problems.",
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
    seq: 1, link: "PVEC_FYSH.jpeg", addr: "https://fyshuk.com", name: "FYSH",
    backgroundImage: "fysh_bk.jpeg"
  },
  {
    seq: 2,
    link: "PVEC_Guess.jpeg",
    addr: "https://www.guess.com/us/en/women/accessories/sunglasses",
    name: "Guess",
    backgroundImage: "Guess_bk.avif"
  },
  {
    seq: 3,
    link: "PVEC_HugoBoss.png",
    addr: "https://www.hugoboss.com/men-glasses/",
    name: "Hugo Boss",
    backgroundImage: "hugo_boss_bk.webp"
  },
  {
    seq: 4,
    link: "PVEC_KateSpade.png",
    addr: "https://www.katespade.com/shop/accessories/sunglasses-reading-glasses",
    name: "Kate Spade",
    backgroundImage: "kate_spade_bk.webp"
  },
  {
    seq: 5,
    link: "PVEC_KliikDenmark.jpeg",
    addr: "https://www.kliik.com/",
    name: "KLiik",
    backgroundImage: "kliik_bk.jpeg"
  },
  {
    seq: 6,
    link: "PVEC_LaFont.png",
    addr: "https://www.lafont.com/the-collection/",
    name: "Lafont",
    backgroundImage: "lofant_bk.jpeg"
  },
  {
    seq: 7,
    link: "marc-jacobs-logo-vector.png",
    addr: "https://www.marcjacobs.com/default/the-marc-jacobs/the-accessories/sunglasses/",
    name: "Marc Jacobs",
    backgroundImage: "marc_jacobs_bk.webp"
  },
  {
    seq: 8,
    link: "mk_logo.jpeg",
    addr: "https://www.michaelkors.ca/men/accessories/sunglasses/_/N-285v",
    name: "Michael Kors",
    backgroundImage: "Michael-Kors_bk.jpeg"
  },
  {
    seq: 9,
    link: "PVEC_Moleskine.png",
    addr: "https://moleskine-eyewear.com/en/",
    name: "Moleskine",
    backgroundImage: "moleskiene_bk.jpeg"
  },
  {
    seq: 10,
    link: "PVEC_Oakley.png",
    addr: "https://www.oakley.com/en-eu",
    name: "Oakley",
    backgroundImage: "Oakley_bk.jpeg"
  },
  {
    seq: 11,
    link: "PVEC_RayBan.png",
    addr: "https://www.ray-ban.com/canada/en",
    name: "Ray Ban",
    backgroundImage: "rayban_bk.jpeg"
  },
  {
    seq: 12, link: "PVEC_Superflex.jpeg", addr: "", name: "Superflex",
    backgroundImage: "superflex_bk.jpg"
  },
  {
    seq: 13,
    name: "Tom Ford",
    link: "PVEC_TF.png",
    addr: "https://www.tomford.com/eyewear/men/optical/",
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
    textColor: "white",
    img: "banner-about-us-img",
    text: "We are now accepting new patients in our Downtown Vancouver clinic.",
  },
  {
    textColor: "white",
    img: "banner-home-img-4",
    text: <>We direct bill to all major insurance providers.<br />We also partner with First Nation Health Authority (FNHA) and People with Disability (PwD) on government assistance.</>,
  },
  {
    textColor: "white",
    img: "banner-home-img-3",
    text: "The best use of your performance vision is spotting a good deal!",
    subText: <>Clearance Sale! <br />Now on selected eyewear from <span style={{ color: 'red' }}>50-90% off </span> with fully coated lenses purchase.</>,
    subText2: <a href="https://www.alternativeeyes.com/catalog/one-sun" target="_blank" rel="noopener noreferrer">Limited time offer! <br />Fully coated polarized sun glasses reg price <span style={{ color: 'red' }}><s>200$</s></span> now for <span style={{ color: 'red' }}>99$</span> while supplies last.</a>,
    subText3: <>Are you a student or senior citizen?<br />Please ask about our special pricing just for you.</>,
    description: "Please come visit in store or email or call us for more information."
  },
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
    seq: 1,
    link: "Acuvue.jpg",
    addr: "https://www.acuvue.ca/",
    name: "Acuvue",
    backgroundImage : "acuvue_bk.jpeg"
  },
  {
    seq: 2,
    link: "B-L.webp",
    addr: "https://www.bausch.ca/en-ca/",
    name: "Bausch+Lomb",
    backgroundImage : "Bausch-Lomb_bk2.webp"
  },
  {
    seq: 3,
    link: "cooper-vision-logo.jpg",
    addr: "https://coopervision.ca/",
    name: "CooperVision",
    backgroundImage : "cooper_vision_bk.png"
  },
  {
    seq: 4,
    link: "myAlcon_logo.png",
    addr: "https://www.myalcon.com/ca/en/",
    name: "My Alcon",
    backgroundImage : "alcon_bk.jpeg"
  },
];

export const eyecareProductsArr = [
  {
    seq: 1,
    link: "PVEC_idrop.jpeg",
    addr: "",
    name: "Eye Drops",
    backgroundImage : "women_using_eyeDROPs.jpg"
  },
  {
    seq: 2,
    link: "omega-3.png",
    addr: "",
    name: "Omega-3",
    backgroundImage : "Omega-3-Fish-Oil-Supplements.webp"
  },
  {
    seq: 3,
    link: "PVEC_teatree.jpeg",
    addr: "",
    name: "Tea Tree Eyelid",
    backgroundImage : "tea_tree_eye.jpeg"
  },
  {
    seq: 4,
    link: "PVEC_eyemask.jpeg",
    addr: "",
    name: "Eye Mask",
    backgroundImage : "s-l1600.jpg"
  },
];

export const eyecareProductsList = [
  {
    seq: 1,
    link: "eyecare_1.jpeg",
    addr: "",
    name: "Eye Drops",
    backgroundImage : "women_using_eyeDROPs.jpg"
  },
  {
    seq: 2,
    link: "eyecare_2.jpeg",
    addr: "",
    name: "Omega-3",
    backgroundImage : "Omega-3-Fish-Oil-Supplements.webp"
  },
  {
    seq: 3,
    link: "eyecare3.jpeg",
    addr: "",
    name: "Tea Tree Eyelid",
    backgroundImage : "tea_tree_eye.jpeg"
  },
  {
    seq: 4,
    link: "eyecare4.jpeg",
    addr: "",
    name: "Eye Mask",
    backgroundImage : "s-l1600.jpg"
  },
  {
    seq: 5,
    link: "eyecare5.jpeg",
    addr: "",
    name: "Eye Mask",
    backgroundImage : "s-l1600.jpg"
  },
  {
    seq: 6,
    link: "eyecare6.jpeg",
    addr: "",
    name: "Eye Mask",
    backgroundImage : "s-l1600.jpg"
  },
  {
    seq: 7,
    link: "eyecare7.jpeg",
    addr: "",
    name: "Eye Mask",
    backgroundImage : "s-l1600.jpg"
  },
  {
    seq: 8,
    link: "eyecare8.jpeg",
    addr: "",
    name: "Eye Mask",
    backgroundImage : "s-l1600.jpg"
  },
  {
    seq: 9,
    link: "eyecare9.jpeg",
    addr: "",
    name: "Eye Mask",
    backgroundImage : "s-l1600.jpg"
  },
  {
    seq: 10,
    link: "eyecare10.jpeg",
    addr: "",
    name: "Eye Mask",
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