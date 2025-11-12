export type Product = {
  id: number;
  name: string;
  image: string;
  category: string;
  link: string;
  description?: string
};

export const products = [{
    id: 1,
    name: "Doggies' Choice 3 in 1 Herbal Medicated Shampoo",
    image: '/images/products/products_doggies_choice_ 3in1_herbal_medicated_shampoo.png',
    category: "Doggies' Choice",
    link: "https://shopee.ph/Doggies%27-Choice-3-in-1-Herbal-Medicated-Shampoo-i.220132216.6017068835?extraParams=%7B%22display_model_id%22%3A13580406615%2C%22model_selection_logic%22%3A3%7D&sp_atk=8ff4d571-41d9-4688-9eb2-ba21740d2eaa&xptdk=8ff4d571-41d9-4688-9eb2-ba21740d2eaa",
    description: "Doggies' Choice Medicated 3-in-1 Shampoo with Conditioner. This medicated shampoo with conditioner contains Fenobucarb-BPMC, which helps fight and treat parasitic infections, Guava Extract, which keeps pet bacteria-free, and Madre de Cacao Extract that is proven to fight and cure parasitic and fungal infections mildly, treating your dog with care."
  }, {
    id: 2,
    name: "Doggies' Choice 3 in 1 Herbal Medicated Soap",
    image: 'images/products/products_doggies_choice_3in1_herbal_medicated_soap.png',
    category: "Doggies' Choice",
    link: "https://shopee.ph/Doggies'-Choice-3-in-1-Herbal-Medicated-Soap-90g-i.220132216.6259405432?extraParams=%7B%22display_model_id%22%3A51548402119%2C%22model_selection_logic%22%3A3%7D&sp_atk=2142ff94-fc4d-4c0b-861e-b95794f9d85f&xptdk=2142ff94-fc4d-4c0b-861e-b95794f9d85f",
    description: "Doggies’ Choice Medicated 3-in-1 Soap. This medicated soap contains Fenobucarb-BPMC, which helps fight and treat parasitic infections,  Guava Extract, which keeps pet bacteria-free, and Madre de Cacao Extract that is proven to fight and cure parasitic and fungal infections mildly, treating your dog with care."
  }, {
    id: 3,
    name: "Doggies' Choice Anti-Mange Medicated Shampoo",
    image: '/images/products/products_doggies_choice_anti_mange(galis)_medicated_shampoo.png',
    category: "Doggies' Choice",
    link: "https://shopee.ph/Doggies'-Choice-Anti-Mange-(GALIS)-Medicated-Shampoo-i.220132216.6559405272?extraParams=%7B%22display_model_id%22%3A115359372786%2C%22model_selection_logic%22%3A3%7D&sp_atk=1a8bc621-4796-4814-abb2-b50816f384f5&xptdk=1a8bc621-4796-4814-abb2-b50816f384f5",
     description: "Doggies' Choice Medicated Anti-Mange (Galis) Shampoo with Conditioner. This medicated shampoo contains Fenobucarb-BPMC, which helps fight and treats parasitic infections, Sulfur, a strong antibacterial agent best for skin infections, and Madre de Cacao Extract that is proven to fight and cure parasitic and fungal infections mildly like mange (galis), scabies,  and other skin diseases, treating your dog with care."
  }, {
    id: 4,
    name: "Doggies' Choice Anti-Mange Medicated Soap",
    image: '/images/products/products_doggies_choice_anti_mange(galis)_medicated_soap.png',
    category: "Doggies' Choice",
    link: "https://shopee.ph/Doggies'-Choice-Anti-Mange-(GALIS)-Medicated-Soap-90g-i.220132216.4517069227?extraParams=%7B%22display_model_id%22%3A152358740548%2C%22model_selection_logic%22%3A3%7D&sp_atk=b712a942-8925-4661-b599-ba9a91a47502&xptdk=b712a942-8925-4661-b599-ba9a91a47502",
     description: "Doggies’ Choice Medicated Anti-Mange Soap. This medicated soap contains Fenobucarb-BPMC, which helps fight and treats parasitic infections, Sulfur, a strong antibacterial agent best for skin infections, and Madre de Cacao Extract that is proven to fight and cure parasitic and fungal infections mildly like mange (galis), scabies, and other skin diseases, treating your dog with care."
  }, {
    id: 5,
    name: "Doggies' Choice Tick & Flea Medicated Shampoo",
    image: '/images/products/products_doggies_choice_tick&flea_medicated_shampoo.png',
    category: "Doggies' Choice",
    link: "https://shopee.ph/Doggies'-Choice-Tick-Flea-Medicated-Shampoo-i.220132216.6058779353?extraParams=%7B%22display_model_id%22%3A86854418141%2C%22model_selection_logic%22%3A3%7D&sp_atk=aa9e2e74-8472-4858-940d-934218748c6f&xptdk=aa9e2e74-8472-4858-940d-934218748c6f",
     description: "Doggies' Choice Medicated Tick & Flea Shampoo with Conditioner. This medicated shampoo with conditioner contains Fenobucarb-BPMC, which helps fight and treats Tick & Flea parasitic infections mildly, treating your dog with care. Plus, it has a lemon scent that makes your dog smells fresh because of its odor absorption agent."
  }, {
    id: 6,
    name: "Doggies' Choice Tick & Flea Medicated Soap",
    image: '/images/products/products_doggies_choice_tick&flea_medicated_soap.png',
    category: "Doggies' Choice",
    link: "https://shopee.ph/Doggies'-Choice-Tick-Flea-Medicated-Soap-90g-i.220132216.7217079060?extraParams=%7B%22display_model_id%22%3A152358663698%2C%22model_selection_logic%22%3A3%7D&sp_atk=a6f0dca9-bb9c-47fe-be0b-f0637d55980b&xptdk=a6f0dca9-bb9c-47fe-be0b-f0637d55980b",
     description: "Doggies’ Choice Medicated Tick & Flea Soap. This medicated soap contains Fenobucarb-BPMC, which helps fight and treats Tick & Flea parasitic infections mildly, treating your dog with care. Plus, It has a lemon scent that makes your dog smells fresh because of its odor absorption agent."
  }, {
    id: 7,
    name: "Doggies' Choice Fipronil Expert Shampoo",
    image: '/images/products/products_doggies_choice_fipronil_expert_shampoo.png',
    category: "Doggies' Choice",
    link: "https://shopee.ph/Doggies'-Choice-Ketoconazole-Expert-Shampoo-i.220132216.27506718879?extraParams=%7B%22display_model_id%22%3A226603652062%7D",
     description: "Doggies' Choice Fipronil Expert Shampoo is an antiparasitic treatment shampoo that promotes healthy skin for pets with parasitic infections."
  }, {
    id: 8,
    name: "Doggies' Choice Wound Spray",
    image: '/images/products/products_doggies_choice_wound_spray.png',
    category: "Doggies' Choice",
    link: "https://shopee.ph/Doggies'-Choice-Wound-Spray-i.220132216.24634199021?extraParams=%7B%22display_model_id%22%3A158728529012%7D",
     description: "Doggies' Choice Wound Spray is intended to treat minor superficial skin irritations in dogs."
  }, {
    id: 9,
    name: "Doggies' Choice Pet House Cleanser",
    image: '/images/products/products_doggies_choice_pet_house_cleanser.png',
    category: "Doggies' Choice",
    link: "https://shopee.ph/Doggies'-Choice-Pet-House-Cleanser-350g-i.220132216.7617082066?extraParams=%7B%22display_model_id%22%3A72044933442%7D",
     description: "Doggies’ Choice Pet House Cleanser. This pet house cleanser contains Fenobucarb-BPMC, which helps fight and treat disease-causing infestations in pet houses or pens, treating your dog with care. Plus, It has a mentholated scent that removes stench, ensuring a cleaner and freshener dwelling place for dogs."
  }, {
    id: 10,
    name: "Doggies' Choice Ear Cleaner",
    image: '/images/products/products_doggies_choice_ear_cleaner.png',
    category: "Doggies' Choice",
    link: "https://shopee.ph/Doggies'-Choice-Ear-Cleaner-i.220132216.28610869963?extraParams=%7B%22display_model_id%22%3A256569270085%7D",
     description: "Doggie's Choice Ear Cleaner is formulated with the soothing properties of tea tree oil and the cleansing efficacy of salicylic acid. This gentle solution efficiently eliminates dirt, wax, and debris. The natural antiseptic qualities of tea tree oil help in preventing infections, while salicylic acid supports ear health by gently exfoliating and ensuring a clean, fresh scent."
  }, {
    id: 11,
    name: "Doggies' Choice Tick & Flea Powder",
    image: '/images/products/products_doggies_choice_tick&flea_powder.png',
    category: "Doggies' Choice",
    link: "https://shopee.ph/Doggies'-Choice-Tick-Flea-Powder-i.220132216.7317079673?extraParams=%7B%22display_model_id%22%3A67336804550%7D",
     description: "Doggies’ Choice Tick & Flea Powder. This medicated powder contains Carbaryl, which helps fight and treat Tick & Flea parasitic infections, treating your dog with care. It has a lemon scent that makes your dog smells fresh because of its odor absorption agent."
  }, {
    id: 12,
    name: "Doggies' Choice Multi-purpose Cleaner (Concentrated Formula)",
    image: '/images/products/products_doggies_choice_multi-purpose_house_cleaner.png',
    category: "Doggies' Choice",
    link: "https://shopee.ph/Doggies'-Choice-Multi-purpose-Cleaner-(Concentrated-Formula)-i.220132216.22626890339?extraParams=%7B%22display_model_id%22%3A88620710968%7D",
     description: "Keep your house smelling incredible with Doggies' Choice Multi-purpose Cleaner. A cleaner that works around the house - and the clock! Formulated for cleaning all sealed hard floors and surfaces. Removes everyday dirt and grime and leaves clean and refreshed! Fresh Peach and Eucalyptus Scent."
  }, {
    id: 13,
    name: "Doggies' Choice Kawati Naturale Gentle Puppy Shampoo",
    image: '/images/products/products_doggies_choice_kawati_naturale_gentle_puppy_shampoo.png',
    category: "Doggies' Choice",
    link: "https://shopee.ph/Doggies%E2%80%99-Choice-Kawati-Naturale-Gentle-Puppy-Shampoo-i.220132216.13613064068?extraParams=%7B%22display_model_id%22%3A84955704173%7D",
     description: "Doggies’ Choice Kawati Naturale Gentle Puppy Shampoo. This baby powder-infused shampoo contains Madre de Cacao Extract that is proven to fight and cure parasitic and fungal infections mildly, treating your dog with care. It also has a baby powder scent to help soothe and calm puppies. Bath time is now easier for you and your pet!"
  },{
    id: 14, 
    name: "Doggies' Choice Kawati Naturale Oatmeal & Tawas Shampoo",
    image: '/images/products/products_doggies_choice_kawati_naturale_oatmeal_&_tawas_shampoo.png',
    category: "Doggies' Choice",
    link: "https://shopee.ph/Doggies%E2%80%99-Choice-Kawati-Naturale-Oatmeal-Tawas-Shampoo-i.220132216.10250680043?extraParams=%7B%22display_model_id%22%3A130591310328%7D",
     description: "Doggies’ Choice Kawati Naturale Oatmeal & Tawas Shampoo. This deodorizing shampoo contains natural ingredients that deodorize and moisturize your pet while its fur is thoroughly cleansed and volumized. It also has a Madre de Cacao Extract that is proven to fight and cure parasitic and fungal infections mildly, treating your dog with care. The Oatmeal and Tawas also leave a tropical scent perfect for your pet!"
  }, {
    id: 15,
    name: "Doggies' Choice Kawati Naturale Merry Strawberry Shampoo",
    image: '/images/products/products_doggies_choice_kawati_naturale_merry_strawberry_shampoo.png',
    category: "Doggies' Choice",
    link: "https://shopee.ph/Doggies%E2%80%99-Choice-Kawati-Naturale-Merry-Strawberry-Shampoo-i.220132216.8994010964?extraParams=%7B%22display_model_id%22%3A37338579269%7D",
     description: "Doggies’ Choice Kawati Naturale Merry Strawberry Shampoo. This strawberry-infused shampoo contains gentle ingredients such as Jojoba Wax, Lactic Acid, and Aloe Vera to gradually improve and moisturize your pet’s coat. It also has a Madre de Cacao Extract that is proven to fight and cure parasitic and fungal infections mildly, treating your dog with care. The Merry Strawberry keeps your pets smelling good all day!"
  },  {
    id: 16,
    name: "Doggies' Choice Kawati Naturale Cool Peppermint Shampoo",
    image: '/images/products/products_doggies_choice_kawati_naturale_cool_peppermint_shampoo.png',
    category: "Doggies' Choice",
    link: "https://shopee.ph/Doggies%E2%80%99-Choice-Kawati-Naturale-Cool-Peppermint-Shampoo-i.220132216.12413080641?extraParams=%7B%22display_model_id%22%3A130591438127%7D",
     description: "Doggies’ Choice Kawati Naturale Cool Peppermint Shampoo. This peppermint and menthol-infused shampoo contain gentle ingredients such as Jojoba Wax, Lactic Acid, and Aloe Vera to gradually improve and moisturize your pet’s coat while the Madre de Cacao extract protects your dog from infestations. It is proven to fight and cure parasitic and fungal infections mildly, treating your dog with care. The Cool Peppermint gives a cooling sensation to your pet!"
  },  {
    id: 17,
    name: "Doggies' Choice Kawati Naturale Volumizing Shampoo",
    image: '/images/products/products_doggies_choice_kawati_naturale_volumizing_shampoo.png',
    category: "Doggies' Choice",
    link: "https://shopee.ph/Doggies'-Choice-Kawati-Naturale-Volumizing-Shampoo-i.220132216.10650681126?extraParams=%7B%22display_model_id%22%3A120591490502%7D",
     description: "Doggies’ Choice Kawati Naturale Volumizing Shampoo. This volumizing shampoo with vanilla scent is ideal to use for breeds with harsh, curly, textured, or wired coats. It also contains a unique blend of Jojoba Wax, Aloe Vera, and Lenotol SCP Panthenol derivative that thickens the coat and adds density and volume to its hair shaft. Plus, it has a Madre de Cacao Extract that is proven to fight and cure parasitic and fungal infections mildly, treating your dog with care. The Volumizing leaves a vanilla scent that both you and your pet will enjoy!"
  }, {
    id: 18,
    name: "Doggies' Choice Anti-mange Madre de Cacao Herbal Cream",
    image: '/images/products/products_doggies_choice_anti_mange_galis_madre_de_cacao_herbal_cream.png',
    category: "Doggies' Choice",
    link: "https://shopee.ph/Doggies'-Choice-Anti-mange-(Galis)-Madre-de-Cacao-Herbal-Cream-i.220132216.3217246569?extraParams=%7B%22display_model_id%22%3A62044976504%7D",
     description: "Doggies’ Choice Anti-Mange Cream. This medicated cream contains Sulfur, a strong antibacterial agent best for skin infections, Guava Extract, which keeps pet bacteria-free, and Madre de Cacao Extract which is proven to fight and cure parasitic and fungal infections mildly like mange (galis), scabies,  and other skin diseases, treating your dog with care. "
  }, {
    id: 19,
    name: 'Kuchi Kuchi Prickly Heat Powder',
    image: '/images/products/products_kuchi_kuchi_cooling_powder.png',
    category: 'Kuchi Kuchi',
    link: "https://shopee.ph/Kuchi-Kuchi-Prickly-Heat-Powder-i.220132216.18304899949?extraParams=%7B%22display_model_id%22%3A180277471231%7D",
     description: "KUCHI KUCHI PRICKLY HEAT POWDER helps prevent summer rashes and other skin-related problems. On top of this, it helps keep you cool and smelling fresh all day long. Reduces friction on the skin. Helps absorb excess moisture. Soothes and freshen"
  }, {
    id: 20,
    name: 'Kuchi Kuchi Hug Me Baby Powder',
    image: '/images/products/products_kuchi_kuchi_hug_me_baby_powder.png',
    category: 'Kuchi Kuchi',
    link: "https://shopee.ph/Kuchi-Kuchi-Hug-Me-Baby-Powder-i.220132216.29420146881?extraParams=%7B%22display_model_id%22%3A247214044914%7D",
     description: "KUCHI KUCHI HUG ME BABY POWDER Helps keep the baby's skin soft, smooth, and dry. Our gentle formula absorbs moisture, leaving your little one comfortable all day. Enhanced with a classic baby scent, it leaves your baby smelling fresh and clean."
  }, {
    id: 21,
    name: 'Kuchi Kuchi Nappy Powder',
    image: '/images/products/products_kuchi_kuchi_nappy_powder.png',
    category: 'Kuchi Kuchi',
    link: "https://shopee.ph/Kuchi-Kuchi-Nappy-Powder-i.220132216.28351602275?extraParams=%7B%22display_model_id%22%3A176504032238%7D",
     description: "Küchi Kuchi Nappy Powder. Relieves diaper rash and skin irritation. Promotes fast relief and healing. Forms a protective barrier on the skin. Prevents moisture and reducing friction"
  },{
    id: 22, 
    name: 'Kuchi Kuchi Prickly Heat Bedtime Powder',
    image: '/images/products/products_kuchi_kuchi_prickly_heat_bedtime_powder.png',
    category: 'Kuchi Kuchi',
    link: "https://shopee.ph/Kuchi-Kuchi-Prickly-Heat-Bedtime-Powder-i.220132216.27201602045?extraParams=%7B%22display_model_id%22%3A222857268960%7D",
     description: "Küchi Kuchi Prickly Heat Bedtime Powder. Reduces friction on the skin. Keeps baby’s skin dry. Cools and freshens skin. Relieves prickly heat rash. Relieves itching and discomfort. Promotes the sweetest dreams"
  },{
    id: 23,
    name: 'Kuchi Kuchi Underarm & Foot Deodorant Powder',
    image: '/images/products/products_kuchi_kuchi_underarm_&_foot_deodorant_powder.png',
    category: 'Kuchi Kuchi',
    link: "https://shopee.ph/Kuchi-Kuchi-Underarm-Foot-Deodorant-Powder-i.220132216.20249560180?extraParams=%7B%22display_model_id%22%3A117490846884%7D",
     description: "Protect your underarm and foot using KÜCHI KUCHi Underarm & Foot Deodorant Powder that helps eliminate body odor caused by excessive sweat for all-day freshness!"
  }, {
    id: 24,
    name: 'Kuchi Kuchi Protective Cream',
    image: '/images/products/products_kuchi_kuchi_protective_cream.png',
    category: 'Kuchi Kuchi',
    link: "https://shopee.ph/Kuchi-Kuchi-Protective-Cream-i.220132216.28651606947?extraParams=%7B%22display_model_id%22%3A205145032183%7D",
     description: "Küchi Kuchi Protective Cream. Helps protect your delicate skin. Conditions and Hydrates skin. Treats diaper rash and promotes fast healing. Reduce dryness and chafing caused by friction. Create an effective gentle barrier for delicate skin"
  }, {
    id: 25,
    name: 'Oilganics Head Lice Treatment Shampoo',
    image: '/images/products/products_oilganics_head_lice_(kuto)_treatment_shampoo.png',
    category: 'Oilganics',
    link: "https://shopee.ph/Oilganics-Head-Lice-(Kuto)-Treatment-Shampoo-i.220132216.5917082645?extraParams=%7B%22display_model_id%22%3A200952175878%7D",
     description: "Oilganics Head Lice Shampoo. This head lice shampoo treatment contains QUASSINOIDS which fight and kill head lice and their eggs, MEDITERRANEAN VINEGAR which dissolves resin, and AHA-ORGANIC ACIDS which helps your hair become smooth and shiny. CLINICALLY PROVEN EFFECTIVE."
  }, {
    id: 26,
    name: 'Tai Chi Cool Stick Inhaler + Liniment',
    image: '/images/products/products_tai_chi_cool_stick_inhaler_+_liniment.png',
    category: 'Tai Chi',
    link:"https://shopee.ph/Tai-Chi-Cool-Stick-Inhaler-Liniment-i.220132216.25001901032?extraParams=%7B%22display_model_id%22%3A187170518829%7D",
     description: "For relief from nasal discomfort, itching, minor muscle or joint pain."
  }, {
    id: 27,
    name: 'Tai Chi Ginger Medicated Plaster Junior',
    image: '/images/products/products_tai_chi_ginger_medicated_plaster_junior.png',
    category: 'Tai Chi',
    link: "https://shopee.ph/Tai-Chi-Ginger-Medicated-Plaster-Junior-i.220132216.25261318501?extraParams=%7B%22display_model_id%22%3A226024607566%7D",
     description: "Soothes muscle aches, relieves pain in ligaments and joints, provides temporary relief from arthritis, rheumatism, back pain and sports-related injuries."
  }, {
    id: 28,
    name: 'Tai Chi Ginger Medicated Rub',
    image: '/images/products/products_tai_chi_ginger_medicated_rub.png',
    category: 'Tai Chi',
    link: "https://shopee.ph/Tai-Chi-Ginger-Medicated-Rub-i.220132216.4817014707?extraParams=%7B%22display_model_id%22%3A190951824156%7D",
     description: "Tai Chi Ginger Rub. This ginger rub is a topical analgesic that helps relieve minor body pains like muscle cramps, sprains, headaches, and other similar conditions, as well as itchy skin caused by insect bites."
  }, {
    id: 29,
    name: 'Tai Chi VCO Chili Liniment',
    image: '/images/products/products_tai_chi_VCO_chili_liniment.png',
    category: 'Tai Chi',
    link: "https://shopee.ph/Tai-Chi-VCO-Chili-Liniment-i.220132216.6117008085?extraParams=%7B%22display_model_id%22%3A13564975969%7D",
     description: "Tai Chi VCO Chili Liniment. This liniment contains Chili Extract, which helps to reduce and relieve body pains and other chronic pains, as well as insect bites. Plus, it also has Menthol, which acts as a cooling agent after you apply the liniment to your skin."
  }, {
    id: 30,
    name: 'Tai Chi VCO Ginger Liniment',
    image: '/images/products/products_tai_chi_VCO_ginger_liniment.png',
    category: 'Tai Chi',
    link: "https://shopee.ph/Tai-Chi-VCO-Ginger-Liniment-i.220132216.3717104180?extraParams=%7B%22display_model_id%22%3A13564797743%7D",
     description: "Tai Chi VCO Ginger Liniment. This liniment contains Ginger Extract, which helps to reduce and relieve nausea, arthritis, migraines, colds, as well as insect bites. It also has soothing and muscle-relaxing properties. Plus, it also has Menthol which acts as a cooling agent after you apply the liniment to your skin."
  }];
