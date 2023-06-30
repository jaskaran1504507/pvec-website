import Image from "next/image";
import React from "react";

export default function Blogs() {
  return (
    <>
      <div className="grid gap-16 mt-20 grid-cols-1 md:grid-cols-2 u-clearfix u-sheet mx-auto u-valign-middle u-sheet-1">
        <div>
          <h2
            style={{
              textAlign: "left",
              fontWeight: 400,
              fontSize: "2.25rem",
              lineHeight: 1.1,
            }}
          >
            <span
              style={{ lineHeight: 2 }}
              className="text-blue-900 font-semibold"
            >
              FAQs
            </span>
          </h2>
        </div>
      </div>
      <div id="q1" className="container mt-2">
        <div className="divide-y">
          {/* Question */}
          <div className="mt-12">
            <h2 className="mt-2 text-2xl font-bold">1. How often should you get your eyes checked?</h2>
            <div className="ml-6">
              <p>An <b>annual eye exam is recommended by the College of Optometrists</b> for
                proper eye health and vision care.</p>
              <p>The eye is the <b>only organ</b> which allows the view to the blood vessels and
                other structures linked to the general body health.</p>
              <p>
                Our <b>doctors</b> are able to <b>detect many serious health conditions</b> including:
                diabetes, hypertension, auto-immune disorders, high cholesterol, thyroid
                disease, tumours and even cancer.
              </p>
              <p>You may have <b>benefits</b> through your employer or insurance provider that <b>covers eye care</b> related expenses. Check it out!</p>
            </div>
          </div>
          
          {/* <div className="mt-12">
            <h2 className="mt-2 text-2xl font-bold">3. Feeling a little Dried out?<br />We have the Relief you need!</h2>
            <div>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-1 gap-8">
                <Image
                  src="/images/dry_eye_relief.png"
                  height="480"
                  width="560"
                />
              </div>
            </div>
          </div> */}
          {/* <div className="mt-12">
            <h2 className=" mt-2 text-2xl font-bold">4. Spend more time online than in the Sun?</h2>
            <div className="ml-6">
              <p className="text-2xl">Please ask us about the benefits of our Computer lenses and <span className="text-blue-500">Blue Light</span> Filters.</p>
              <p className="text-2xl">They’re like sunscreen for your eyes but for screens so like...Screenscreen
              </p>
            </div>
          </div> */}
          <div id="q2" className="mt-12">
            <h2 className="mt-2 text-2xl font-bold">2. What age should I get my child’s eye exams done?</h2>
            <div className="ml-6">
              <p>The Canadian Association of <b>Optometrists recommends</b> a complete eye exam for <b>kids
                starting at 6 months</b> of age, <b>then at 3 years old</b> and again prior to starting
                kindergarten.</p>
              <p>
                <b>Yearly eye exams are recommended</b> throughout their school years.
              </p>
              <p>Comprehensive eye exams will ensure not only proper vision and eye health, but also
                accurate development of eye teaming skills, depth perception, and eye movement
                skills. These are all vital for proper learning since most of a <b>child’s learning</b> is <b>based
                  on vision.</b></p>
              <p>A BC Care Card will <b>cover a portion</b> of the eye exams yearly until the age of 19.</p>
            </div>
          </div>
          <div id="q3" className="mt-12">
            <h2 className="mt-2 text-2xl font-bold">3. How do I choose the right pair of glasses?</h2>
            <div className="ml-6">
              <p>The first decision is whe you like your new eye wear to be minimalist or conservative, or bold and eye catching.
                Metal frames are more subtle, and plastic frames tend to be more attention
                grabbing. Every major fashion designer has an eye wear line so there
                are many options of colour combinations and shapes to choose from.</p>
              <p>Faces can be categorized in 6 shapes: Oval, Base up or down Triangle, Square,
                Diamond, and Round. Generally, the best way to choose a shape is to go
                opposite of your face shape. If you have a round face, rectangle frames are
                better suited to balance your look. For women, an up swept or cat eye is
                usually  attering. For colours, a tortoise shell brown or simple black is the
                most versatile and easy to dress up or dress down with. A lot of new frames
                pair a subtle colour on the front with sharp accent colours to give you a frame
                that is neutral but not boring!</p>
              <p>The other part of the equation is what prescription you need. Not all frames
                are suited for all lens types. This is where you would rely on the expertise of
                the optician. They will explain the pros and cons of picking various frame and
                lens combinations. The possibilities are endless! For more information, come
                in today (we’re open 7 days/week) and we will go over all of your options to
                best meet your needs.</p>
            </div>
          </div>
          <div id="q4" className="mt-12">
            <h2 className="mt-2 text-2xl font-bold">4. Are sunglasses just for fashion or are they necessary?</h2>
            <div className="ml-6">
              <p>They are necessary; Here is an excerpt
                from the Vancouver Coastal Health Region
                Institute:</p>
              <p>Intense, focused sunlight induces heat at the focal
                point. In the eye, the optics of the lens/cornea
                focuses light (and hence heat) on the retina (the
                light sensitive part of the eye that converts light into
                electrical signals that are passed onto the brain).
                If the heat generated is excessive then cells in the
                retina will be killed off.</p>
              <p>The most important factor is ultraviolet protection
                since longer wavelength light tends to get to the retina more easily. So
                especially look for UVA and UVB blocking lenses. If you intend to drive or sail,
                consider polarized lenses which are especially good at filtering side-glare.
                Colour is important as well, with grey, green or brown lenses causing the least
                colour distortion.</p>
              <p>Good UV filtration does not necessarily require an expensive pair of sunglasses
                and alternatively, an expensive pair is no guarantee of good UV protection.</p>
              <p>When buying a pair of Sunglasses consider these factors and keep in mind the
                quality of the lens and frame is important.</p>
              <p>For more information and to experience our selection of 200 sunglasses,
                come by and see us! We are open 7 days a week.</p>
            </div>
          </div>
          {/* <div className="mt-12">
            <h2 className="mt-2 text-2xl font-bold">...Like it Rough?</h2>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-1 gap-8">
              <Image
                src="/images/like_it_rough.png"
                height="480"
                width="6400"
              />
            </div>
            <div className="ml-6">
              <p className="text-2xl font-bold">Please ask us about our lineup of CSA approved Safety Eyewear for work or play.. because life is a contact sport!</p>
            </div>
          </div> */}
          <div className="mt-12" id="q5">
            <h2 className="text-2xl font-bold">5. Why Buy Contact Lenses In-Store vs Online?</h2>
            <div className="ml-6">
              <ul>
                <li className="text-2xl">&#x2022; Price Match with any Competitor</li>
                <li className="text-2xl">&#x2022; Nearly 1000 Frames on hand to try</li>
                <li className="text-2xl">&#x2022; Rebates up to $180 not available online</li>
                <li className="text-2xl">&#x2022; Full 90 Day Satisfaction Guarantee</li>
                <li className="text-2xl">&#x2022; Direct Billing to your Benefits Plan or Insurance Provider</li>
                <li className="text-2xl">&#x2022; Just look at our Google Reviews!</li>
                <li className="text-2xl">&#x2022; Free Trial Contacts Available Today</li>
                <li className="text-2xl">&#x2022; Convenient Hours for Pick Up (late evenings or even weekends)</li>
                <li className="text-2xl">&#x2022; Ask about our no cost, no obligation program to take home a few pairs to show your family and friends!</li>
                <li className="text-2xl">&#x2022; Order by phone: 604 689 9962 or Email 24/7:info@pveyecare.ca</li>
              </ul>
            </div>
            {/* <div>
              <h2 className="mt-10 text-xl font-bold">Our associates for varied design options</h2>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* <a href="https://fyshuk.com" target="_blank"> */}
                  {/* <Image
                  src="/images/PVEC_FYSH.jpeg"
                  height="450"
                  width="400"
                /> */}
                {/* </a> */}
                {/* <a href="https://www.gucci.com/us/en/st/capsule/women-eyewear" target="_blank"> */}
                  {/* <Image
                  src="/images/PVEC_Gucci.png"
                  height="450"
                  width="400"
                /> */}
                {/* </a> */}
                {/* <a href="https://www.armani.com/en-in/emporio-armani/man/eyewear" target="_blank"> */}
                  {/* <Image
                  src="/images/PVEC_EmporioArmani.jpeg"
                  height="450"
                  width="400"
                /> */}
                {/* </a> */}
                {/* <a href="https://www.guess.com/us/en/women/accessories/sunglasses" target="_blank"> */}
                  {/* <Image
                  src="/images/PVEC_Guess.jpeg"
                  height="450"
                  width="400"
                /> */}
                {/* </a> */}
              {/* </div>
            </div> */}
            {/* <div>
              <h2 className="mt-12 text-2xl font-bold text-cyan-500">Brands That Really Turn Heads!</h2>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-6 gap-8">
                {/* <a href="https://www.oakley.com/en-eu" target="_blank"> */}
                  {/* <Image
                  src="/images/PVEC_Oakley.png"
                  height="420"
                  width="400"
                /> */}
                {/* </a> */}
                {/* <a href="https://www.ray-ban.com/canada/en" target="_blank"> */}
                  {/* <Image
                  src="/images/PVEC_RayBan.png"
                  height="420"
                  width="400"
                /> */}
                {/* </a> */}
                {/* <a href="https://www.silhouette.com/en/home" target="_blank"> */}
                  {/* <Image
                  src="/images/Silhouette-logo.png"
                  height="420"
                  width="400"
                /> */}
                {/* </a> */}
                {/* <a href="https://www.tomford.com/eyewear/men/optical/" target="_blank"> */}
                  {/* <Image
                  src="/images/PVEC_TF.png"
                  height="420"
                  width="400"
                /> */}
                {/* </a> */}
                {/* <a href="https://www.versace.com/international/en/women/accessories/eyewear/sunglasses/" target="_blank"> */}
                  {/* <Image
                  src="/images/Versace_logo.png"
                  height="420"
                  width="400"
                /> */}
                {/* </a> */}
                {/* <a href="https://www.toryburch.com/en-us/accessories/sunglasses-eyeglasses/" target="_blank"> */}
                  {/* <Image
                  src="/images/Tory-Burch-Logo.png"
                  height="420"
                  width="400"
                /> */}
                {/* </a> */}
              {/* </div>
            </div> */}
          </div>
          
        
          <div id="q6" className="mt-12">
            <h2 className="mt-2 text-2xl font-bold">6. How can I reduce eye strain and redness from working on computer screens including my tablet and phone all day?</h2>
            <div className="ml-6">
              <p>It is likely you are suffering from digital eye fatigue. It is advised that
                every hour or so, spend a couple of minutes focusing on objects far away,
                perform various blinking exercises, or just get up and stretch your legs.
                Vitamins such as lutein, beta-carotine, and omega 3 are also helpful.</p>
              <p>In addition, the blue light emitted from these devices can also contribute to strain.

                There is new lens technology that targets this. They are referred to as “anti-
                fatigue” lenses. These lenses help reduce eye irritability, redness, and fatigue

                to heavy computer users (6 hours+ per day) by having a custom calculated
                prescription and a special coating to filter out the blue light that also allows the
                light to pass through without causing glare. These coatings can now be applied to
                ANY lens we currently carry.</p>
              <p>If you are in your late 30’s, or early 40’s, you may be an ideal candidate
                for computer glasses. These glasses enhance your vision in your closest
                surroundings. You don’t have to use a computer to benefit from computer glasses.
                Anyone that works, or has hobbies, that use their hands would benefit from a
                dedicated pair of “mid-range” eyewear. This would also apply to any musicians in
                order to help them see their sheet music more clearly with less effort.</p>
              <p>The best advice would be to come into Optimum Eye Care so we can fully assess
                your situation, and give you recommendations based on your individual needs.</p>
            </div>
          </div>
          <div id="q7" className="mt-12">
            <h2 className="mt-2 text-2xl font-bold">7. Do we do direct billing? <br />Your Benefits we mean!</h2>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-1 gap-8">
              <Image
                src="/images/insurance_providers.png"
                height="480"
                width="6400"
              />
            </div>
            <div className="ml-6">
              <p className="text-2xl font-bold">We Direct Bill to all these Providers</p>
              <p>*claim approvals take only 60 seconds*</p>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
}
