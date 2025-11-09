export type Product = {
  id: number;
  name: string;
  image: string;
  category: string;
  link: string;
};

export const products = [{
    id: 1,
    name: "Doggies' Choice 3 in 1 Harbor Medicated Shampoo",
    image: '/images/products/products_doggies_choice_ 3in1_herbal_medicated_shampoo.png',
    category: "Doggies' Choice",
    link: "https://shopee.ph/Doggies%27-Choice-3-in-1-Herbal-Medicated-Shampoo-i.220132216.6017068835?extraParams=%7B%22display_model_id%22%3A13580406615%2C%22model_selection_logic%22%3A3%7D&sp_atk=8ff4d571-41d9-4688-9eb2-ba21740d2eaa&xptdk=8ff4d571-41d9-4688-9eb2-ba21740d2eaa"
  }, {
    id: 2,
    name: "Doggies' Choice 3 in 1 Harbor Medicated Soap",
    image: 'images/products/products_doggies_choice_3in1_herbal_medicated_soap.png',
    category: "Doggies' Choice",
    link: "https://shopee.ph/Doggies'-Choice-3-in-1-Herbal-Medicated-Soap-90g-i.220132216.6259405432?extraParams=%7B%22display_model_id%22%3A51548402119%2C%22model_selection_logic%22%3A3%7D&sp_atk=2142ff94-fc4d-4c0b-861e-b95794f9d85f&xptdk=2142ff94-fc4d-4c0b-861e-b95794f9d85f"
  }, {
    id: 3,
    name: "Doggies' Choice Anti-Mange Medicated Shampoo",
    image: '/images/products/products_doggies_choice_anti_mange(galis)_medicated_shampoo.png',
    category: "Doggies' Choice",
    link: "https://shopee.ph/Doggies'-Choice-Anti-Mange-(GALIS)-Medicated-Shampoo-i.220132216.6559405272?extraParams=%7B%22display_model_id%22%3A115359372786%2C%22model_selection_logic%22%3A3%7D&sp_atk=1a8bc621-4796-4814-abb2-b50816f384f5&xptdk=1a8bc621-4796-4814-abb2-b50816f384f5"
  }, {
    id: 4,
    name: "Doggies' Choice Anti-Mange Medicated Soap",
    image: '/images/products/products_doggies_choice_anti_mange(galis)_medicated_soap.png',
    category: "Doggies' Choice",
    link: "https://shopee.ph/Doggies'-Choice-Anti-Mange-(GALIS)-Medicated-Soap-90g-i.220132216.4517069227?extraParams=%7B%22display_model_id%22%3A152358740548%2C%22model_selection_logic%22%3A3%7D&sp_atk=b712a942-8925-4661-b599-ba9a91a47502&xptdk=b712a942-8925-4661-b599-ba9a91a47502"
  }, {
    id: 5,
    name: "Doggies' Choice Tick & Flea Medicated Shampoo",
    image: '/images/products/products_doggies_choice_tick&flea_medicated_shampoo.png',
    category: "Doggies' Choice",
    link: "https://shopee.ph/Doggies'-Choice-Tick-Flea-Medicated-Shampoo-i.220132216.6058779353?extraParams=%7B%22display_model_id%22%3A86854418141%2C%22model_selection_logic%22%3A3%7D&sp_atk=aa9e2e74-8472-4858-940d-934218748c6f&xptdk=aa9e2e74-8472-4858-940d-934218748c6f"
  }, {
    id: 6,
    name: "Doggies' Choice Tick & Flea Medicated Soap",
    image: '/images/products/products_doggies_choice_tick&flea_medicated_soap.png',
    category: "Doggies' Choice",
    link: "https://shopee.ph/Doggies'-Choice-Tick-Flea-Medicated-Soap-90g-i.220132216.7217079060?extraParams=%7B%22display_model_id%22%3A152358663698%2C%22model_selection_logic%22%3A3%7D&sp_atk=a6f0dca9-bb9c-47fe-be0b-f0637d55980b&xptdk=a6f0dca9-bb9c-47fe-be0b-f0637d55980b"
  }, {
    id: 7,
    name: "Doggies' Choice Fipronil Expert Shampoo",
    image: '/images/products/products_doggies_choice_fipronil_expert_shampoo.png',
    category: "Doggies' Choice",
    link: "https://shopee.ph/Doggies'-Choice-Ketoconazole-Expert-Shampoo-i.220132216.27506718879?extraParams=%7B%22display_model_id%22%3A226603652062%7D"
  }, {
    id: 8,
    name: "Doggies' Choice Wound Spray",
    image: '/images/products/products_doggies_choice_wound_spray.png',
    category: "Doggies' Choice",
    link: "https://shopee.ph/Doggies'-Choice-Wound-Spray-i.220132216.24634199021?extraParams=%7B%22display_model_id%22%3A158728529012%7D"
  }, {
    id: 9,
    name: "Doggies' Choice Pet House Cleanser",
    image: '/images/products/products_doggies_choice_pet_house_cleanser.png',
    category: "Doggies' Choice",
    link: "https://shopee.ph/Doggies'-Choice-Pet-House-Cleanser-350g-i.220132216.7617082066?extraParams=%7B%22display_model_id%22%3A72044933442%7D"
  }, {
    id: 10,
    name: "Doggies' Choice Ear Cleaner",
    image: '/images/products/products_doggies_choice_ear_cleaner.png',
    category: "Doggies' Choice",
    link: "https://shopee.ph/Doggies'-Choice-Ear-Cleaner-i.220132216.28610869963?extraParams=%7B%22display_model_id%22%3A256569270085%7D"
  }, {
    id: 11,
    name: "Doggies' Choice Tick & Flea Powder",
    image: '/images/products/products_doggies_choice_tick&flea_powder.png',
    category: "Doggies' Choice",
    link: "https://shopee.ph/Doggies'-Choice-Tick-Flea-Powder-i.220132216.7317079673?extraParams=%7B%22display_model_id%22%3A67336804550%7D"
  }, {
    id: 12,
    name: "Doggies' Choice Multi-purpose Cleaner (Concentrated Formula)",
    image: '/images/products/products_doggies_choice_multi-purpose_house_cleaner.png',
    category: "Doggies' Choice",
    link: "https://shopee.ph/Doggies'-Choice-Multi-purpose-Cleaner-(Concentrated-Formula)-i.220132216.22626890339?extraParams=%7B%22display_model_id%22%3A88620710968%7D"
  }, {
    id: 13,
    name: "Doggies' Choice Kawati Naturale Gentle Puppy Shampoo",
    image: '/images/products/products_doggies_choice_kawati_naturale_gentle_puppy_shampoo.png',
    category: "Doggies' Choice",
    link: "https://shopee.ph/Doggies%E2%80%99-Choice-Kawati-Naturale-Gentle-Puppy-Shampoo-i.220132216.13613064068?extraParams=%7B%22display_model_id%22%3A84955704173%7D"
  },{
    id: 14, 
    name: "Doggies' Choice Kawati Naturale Oatmeal & Tawas Shampoo",
    image: '/images/products/products_doggies_choice_kawati_naturale_oatmeal_&_tawas_shampoo.png',
    category: "Doggies' Choice",
    link: "https://shopee.ph/Doggies%E2%80%99-Choice-Kawati-Naturale-Oatmeal-Tawas-Shampoo-i.220132216.10250680043?extraParams=%7B%22display_model_id%22%3A130591310328%7D"
  }, {
    id: 15,
    name: "Doggies' Choice Kawati Naturale Merry Strawberry Shampoo",
    image: '/images/products/products_doggies_choice_kawati_naturale_merry_strawberry_shampoo.png',
    category: "Doggies' Choice",
    link: "https://shopee.ph/Doggies%E2%80%99-Choice-Kawati-Naturale-Merry-Strawberry-Shampoo-i.220132216.8994010964?extraParams=%7B%22display_model_id%22%3A37338579269%7D"
  },  {
    id: 16,
    name: "Doggies' Choice Kawati Naturale Cool Peppermint Shampoo",
    image: '/images/products/products_doggies_choice_kawati_naturale_cool_peppermint_shampoo.png',
    category: "Doggies' Choice",
    link: "https://shopee.ph/Doggies%E2%80%99-Choice-Kawati-Naturale-Cool-Peppermint-Shampoo-i.220132216.12413080641?extraParams=%7B%22display_model_id%22%3A130591438127%7D"
  },  {
    id: 17,
    name: "Doggies' Choice Kawati Naturale Volumizing Shampoo",
    image: '/images/products/products_doggies_choice_kawati_naturale_volumizing_shampoo.png',
    category: "Doggies' Choice",
    link: "https://shopee.ph/Doggies'-Choice-Kawati-Naturale-Volumizing-Shampoo-i.220132216.10650681126?extraParams=%7B%22display_model_id%22%3A120591490502%7D"
  }, {
    id: 18,
    name: "Doggies' Choice Anti-mange Madre de Cacao Herbal Cream",
    image: '/images/products/products_doggies_choice_anti_mange_galis_madre_de_cacao_herbal_cream.png',
    category: "Doggies' Choice",
    link: "https://shopee.ph/Doggies'-Choice-Anti-mange-(Galis)-Madre-de-Cacao-Herbal-Cream-i.220132216.3217246569?extraParams=%7B%22display_model_id%22%3A62044976504%7D"
  }, {
    id: 19,
    name: 'Kuchi Kuchi Prickly Heat Powder',
    image: '/images/products/products_kuchi_kuchi_cooling_powder.png',
    category: 'Kuchi Kuchi',
    link: "https://shopee.ph/Kuchi-Kuchi-Prickly-Heat-Powder-i.220132216.18304899949?extraParams=%7B%22display_model_id%22%3A180277471231%7D"
  }, {
    id: 20,
    name: 'Kuchi Kuchi Hug Me Baby Powder',
    image: '/images/products/products_kuchi_kuchi_hug_me_baby_powder.png',
    category: 'Kuchi Kuchi',
    link: "https://shopee.ph/Kuchi-Kuchi-Hug-Me-Baby-Powder-i.220132216.29420146881?extraParams=%7B%22display_model_id%22%3A247214044914%7D"
  }, {
    id: 21,
    name: 'Kuchi Kuchi Nappy Powder',
    image: '/images/products/products_kuchi_kuchi_nappy_powder.png',
    category: 'Kuchi Kuchi',
    link: "https://shopee.ph/Kuchi-Kuchi-Nappy-Powder-i.220132216.28351602275?extraParams=%7B%22display_model_id%22%3A176504032238%7D"
  },{
    id: 22, 
    name: 'Kuchi Kuchi Prickly Heat Bedtime Powder',
    image: '/images/products/products_kuchi_kuchi_prickly_heat_bedtime_powder.png',
    category: 'Kuchi Kuchi',
    link: "https://shopee.ph/Kuchi-Kuchi-Prickly-Heat-Bedtime-Powder-i.220132216.27201602045?extraParams=%7B%22display_model_id%22%3A222857268960%7D"
  },{
    id: 23,
    name: 'Kuchi Kuchi Underarm & Foot Deodorant Powder',
    image: '/images/products/products_kuchi_kuchi_underarm_&_foot_deodorant_powder.png',
    category: 'Kuchi Kuchi',
    link: "https://shopee.ph/Kuchi-Kuchi-Underarm-Foot-Deodorant-Powder-i.220132216.20249560180?extraParams=%7B%22display_model_id%22%3A117490846884%7D"
  }, {
    id: 24,
    name: 'Kuchi Kuchi Protective Cream',
    image: '/images/products/products_kuchi_kuchi_protective_cream.png',
    category: 'Kuchi Kuchi',
    link: "https://shopee.ph/Kuchi-Kuchi-Protective-Cream-i.220132216.28651606947?extraParams=%7B%22display_model_id%22%3A205145032183%7D"
  }, {
    id: 25,
    name: 'Oilganics Head Lice Treatment Shampoo',
    image: '/images/products/products_oilganics_head_lice_(kuto)_treatment_shampoo.png',
    category: 'Oilganics',
    link: "https://shopee.ph/Oilganics-Head-Lice-(Kuto)-Treatment-Shampoo-i.220132216.5917082645?extraParams=%7B%22display_model_id%22%3A200952175878%7D"
  }, {
    id: 26,
    name: 'Tai Chi Cool Stick Inhaler + Liniment',
    image: '/images/products/products_tai_chi_cool_stick_inhaler_+_liniment.png',
    category: 'Tai Chi',
    link:"https://shopee.ph/Tai-Chi-Cool-Stick-Inhaler-Liniment-i.220132216.25001901032?extraParams=%7B%22display_model_id%22%3A187170518829%7D"
  }, {
    id: 27,
    name: 'Tai Chi Ginger Medicated Plaster Junior',
    image: '/images/products/products_tai_chi_ginger_medicated_plaster_junior.png',
    category: 'Tai Chi',
    link: "https://shopee.ph/Tai-Chi-Ginger-Medicated-Plaster-Junior-i.220132216.25261318501?extraParams=%7B%22display_model_id%22%3A226024607566%7D"
  }, {
    id: 28,
    name: 'Tai Chi Ginger Medicated Rub',
    image: '/images/products/products_tai_chi_ginger_medicated_rub.png',
    category: 'Tai Chi',
    link: "https://shopee.ph/Tai-Chi-Ginger-Medicated-Rub-i.220132216.4817014707?extraParams=%7B%22display_model_id%22%3A190951824156%7D"
  }, {
    id: 29,
    name: 'Tai Chi VCO Chili Liniment',
    image: '/images/products/products_tai_chi_VCO_chili_liniment.png',
    category: 'Tai Chi',
    link: "https://shopee.ph/Tai-Chi-VCO-Chili-Liniment-i.220132216.6117008085?extraParams=%7B%22display_model_id%22%3A13564975969%7D"
  }, {
    id: 30,
    name: 'Tai Chi VCO Ginger Liniment',
    image: '/images/products/products_tai_chi_VCO_ginger_liniment.png',
    category: 'Tai Chi',
    link: "https://shopee.ph/Tai-Chi-VCO-Ginger-Liniment-i.220132216.3717104180?extraParams=%7B%22display_model_id%22%3A13564797743%7D"
  }];