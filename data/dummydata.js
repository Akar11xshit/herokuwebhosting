class Product {
    constructor(img,price,des, qtyInStock, rating,reviews,name,calibre) {
        this.img=img;
        this.price=price;
        this.des=des;
        this.qtyInStock=qtyInStock;
        this.rating=rating;
        this.reviews=reviews;
        this.name=name;
        this.calibre=calibre;
    }
}


const products=[
      new Product(
          "/images/id0.jpg",
          3000,
          "Rolex presents four white Rolesor versions (combining Oystersteel and 18 ct white gold) of the Oyster Perpetual Datejust 31. The first watch, featuring a bezel set with 46 brilliant-cut diamonds, has an aubergine, sunray-finish dial that is adorned with a diamond-set Roman VI. The three other versions are fitted respectively with a mint green, sunray-finish dial, white lacquer dial, or dark grey, sunray-finish dial, and a fluted bezel in 18 ct white gold. The hands and index hour markers or Roman numerals on all four watches are in 18 ct white gold. The light reflections on the case sides and lugs highlight the elegant profile of the 31 mm Oyster case.",
          3,
          4.3,
          234,
          "Introducing the Oyster Perpetual Datejust 31",
          "According to its size, the Datejust is equipped with calibre 2236 (Datejust 31) or calibre 3235 (Datejust 36 and Datejust 41), which are self-winding mechanical movements entirely developed and manufactured by Rolex. Their architecture, manufacturing and innovative features make them exceptionally precise and reliable."
        ),

    new Product(
        "/images/id1.jpg",
        3500,
        "Rolex presents the new generation of its Oyster Perpetual watches and brings a new model to the range, the Oyster Perpetual 41, as well as versions of the Oyster Perpetual 36 displaying dials in vivid colours. The light reflections on the case sides highlight the elegant profile of the Oyster case, which is made from Oystersteel. Measuring 41 mm or 36 mm respectively, it is fitted with a domed bezel.",
        4,
        4.5,
        300,
        "Introducing the new generation of the Oyster Perpetual",
        "The Oyster Perpetual 41 and the new versions of the Oyster Perpetual 36 are equipped with calibre 3230, a movement entirely developed and manufactured by Rolex, launched by the brand this year. At the forefront of watchmaking technology, this self-winding mechanical movement led to the filing of several patents, and offers fundamental gains in terms of precision, power reserve, resistance to shocks and magnetic fields, convenience and reliability. It is equipped with a self-winding module via a Perpetual rotor. Thanks to its barrel architecture and the escapement’s superior efficiency, its power reserve extends to approximately 70 hours."
    ),

    new Product(
     "/images/id2.jpg",
     3000,
     "Rolex presents an 18 ct yellow gold version of its Oyster Perpetual Sky-Dweller, fitted with an Oysterflex bracelet. The watch is the first in the Classic category to include this innovative bracelet made of high-performance elastomer. It also features a bright black, sunray-finish dial with hands and hour markers in 18 ct yellow gold. The light reflections on the case sides and lugs highlight the refined profile of the 42 mm Oyster case.",
     4,
     4.3,
     1220,
     "Introducing a version of the Oyster Perpetual Sky-Dweller, fitted with an Oysterflex bracelet",
     "This new version of the Sky Dweller is equipped with calibre 9001, a movement entirely developed and manufactured by Rolex. Calibre 9001 has a blue Parachrom hairspring manufactured by Rolex in an exclusive paramagnetic alloy that makes it up to 10 times more precise than a traditional hairspring in case of shocks. It is equipped with a self-winding module via a Perpetual rotor and offers a power reserve of approximately 72 hours.     "
    ),
    new Product(
     "/images/id3.jpg",
     3500,
     "Launched in 1956, the Day-Date made its debut as the first waterproof and self-winding chronometer wristwatch to offer a modern calendar with an instantaneous day display, spelt out in full in a window on the dial, in addition to the date.",
     5,
     4.7,
     456,
     "Day Date",
     "The Day-Date 40 is equipped with a new-generation movement, calibre 3255, entirely developed and manufactured by Rolex for a superlative level of performance. This self-winding mechanical movement is at the forefront of the art of watchmaking. A consummate demonstration of Rolex technology, with 14 patents, it offers fundamental gains in terms of precision, power reserve, resistance to shocks and magnetism, ease of use and reliability."
    ),
    new Product(
     "/images/id4.jpg",
     3800,
     "With its refined glamour, Rolex’s classic women’s watch, the Lady-Datejust, stands for style and technical performance.",
     5,
     4.7,
     356,
     "Lady-Datejust",
     "The Lady-Datejust is equipped with calibre 2236, a self-winding mechanical movement entirely developed and manufactured by Rolex. Its architecture makes it exceptionally precise and reliable. Calibre 2236 is fitted with a Syloxi hairspring in silicon patented and manufactured by Rolex. Resistant to magnetic fields, the Syloxi hairspring provides great stability in the face of temperature variations and remains up to 10 times more precise than a traditional hairspring in case of shocks. Its patented geometry ensures its regularity in any position."
    ),
    new Product(
     "/images/id5.jpg",
     4800,
     "THE OYSTER PERPETUAL PEARLMASTER HOLDS A SPECIAL PLACE IN THE OYSTER COLLECTION, AS A WATCHMAKING JEWEL EXPRESSING REFINEMENT AND ELEGANCE",
     5,
     4.6,
     567,
     "Pearlmaster",
     "Fitted with the Twinlock double waterproofness system, the winding crown screws down securely against the case. The crystal, with a Cyclops lens at 3 o’clock for easy reading of the date, is made of virtually scratchproof sapphire. The waterproof case provides optimum protection for the Pearlmaster’s high-precision movement."
    ),
    new Product(
     "/images/id6.jpg",
     5800,
     "This collection combines the best of Rolex know-how and its high standards of perfection with an approach that heightens watchmaking heritage in its most timeless form.  The lines of the Cellini models are sober and refined, the materials noble, the finishings luxurious: every detail respects the codes of the art of watchmaking",
     5,
     4.9,
     675,
     "The Cellini collection celebrates the eternal elegance of traditional timepieces with a contemporary touch; the name was inspired by the Italian Renaissance artist, Benvenuto Cellini",
     "According to its size, the Datejust is equipped with calibre 2236 (Datejust 31) or calibre 3235 (Datejust 36 and Datejust 41), which are self-winding mechanical movements entirely developed and manufactured by Rolex. Their architecture, manufacturing and innovative features make them exceptionally precise and reliable.",
     "The dials also bear witness to know-how and tradition. They are either lacquered or embellished with a black or a silver-plated classic “Rayon flammé de la gloire” guilloche adorned with gold applique hour markers. In the purest traditional style, these watches are available only with black or brown leather straps and with an 18 ct gold buckle."
    ),
    new Product(
     "/images/id7.jpg",
     4600,
     "The brand was able to test these watches in real life by equipping polar, mountaineering and caving expeditions over many years. Some of the world’s most intrepid explorers, mountaineers and scientists took Explorer and Explorer II watches to places that tested their reliability in the toughest conditions.",
     5,
     4.4,
     789,
     "The Oyster Perpetual Explorer and Oyster Perpetual Explorer II evolved from Rolex’s deep involvement with exploration. They go where few people venture.",
     "The Explorer is equipped with calibre 3230 and the Explorer II with calibre 3285, both self-winding mechanical movements entirely developed and manufactured by Rolex. They feature a Parachrom hairspring that provides great stability in the face of temperature variations, and Paraflex shock absorbers offering greater resistance to shocks."
    ),
    new Product(
     "/images/id8.jpg",
     6600,
     "Rolex presents the new generation of its Oyster Perpetual Submariner and Oyster Perpetual Submariner Date, watches that exemplify the historic links between Rolex and the world of diving. Both timepieces now feature a redesigned, slightly larger 41 mm case – whose profile is highlighted by the light reflections from the case sides and lugs – and are fitted on a remodelled bracelet.",
     5,
     4.8,
     897,
     "Introducing the new generation of the Oyster Perpetual Submariner",
     "The new-generation Submariner and Submariner Date models are equipped respectively with calibre 3230 – unveiled in 2020 – and calibre 3235, self-winding mechanical movements entirely developed and manufactured by Rolex. Their architecture, manufacturing and innovative features make them singularly precise and reliable. They are fitted with the exclusive blue Parachrom hairspring that is up to 10 times more precise than a traditional hairspring in case of shocks. Both movements’ power reserve extends to approximately 70 hours."
    ),
    new Product(
     "/images/id9.jpg",
     5600,
     "Introduced in 1963, the Cosmograph Daytona was designed to meet the demands of professional racing drivers. It is an icon forever joined in name and function to the high-performance world of motor sport. More than 50 years after its creation, the Cosmograph Daytona remains in a class of its own among sport chronographs and continues to transcend time.",
     5,
     4.9,
     1234,
     "The Oyster Perpetual Cosmograph Daytona is the ultimate tool watch for those with a passion for driving and speed.",
     "This mechanical system functions on the principle of two discs, one above the other, which work together by direct friction contact and offer significant advantages: the precision of the start and stop functions as well as the smooth running of the chronograph seconds hand as soon as the pusher is pressed; and the capacity of the chronograph to function for long periods of time with no negative impact on the precision of the watch."
    ),
    new Product(
     "/images/id10.jpg",
     6300,
     "Waterproof to a depth of 4,000 feet (1,220 metres) for the Rolex Sea-Dweller, launched in 1967, and 12,800 feet (3,900 metres) for the Rolex Deepsea unveiled in 2008, they are the ultimate manifestation of Rolex’s leadership in divers’ watches and the result of decades of collaboration with diving professionals.",
     5,
     4.5,
     1345,
     "The Sea-Dweller and Rolex Deepsea are ultra-resistant divers’ watches engineered by Rolex for deep-sea exploration. ",
     "Helium molecules are so tiny that they can slowly penetrate the watch case through the gaskets, so the pressure inside the watch equalizes with the pressure inside the habitat. However, during a diver’s decompression process to be slowly brought back to normal atmospheric pressure, the gas is unable to escape from the waterproof case sufficiently quickly. The resulting pressure difference inside and outside the watch often resulted in the crystal of the watch popping off, rather like a champagne cork."
    ),
];

module.exports=products;