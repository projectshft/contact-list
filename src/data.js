import { v4 as uuidv4 } from "uuid";
function contacts() {
  return [
    {
      name: "SpongeBob",
      id: uuidv4(),
      image_url: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/1200px-SpongeBob_SquarePants_character.svg.png",
      email: "sbss@gmail.com",
      phone_number: "1235555555"
    },
    {
      name: "Rocko",
      id: uuidv4(),
      image_url: "https://static.wikia.nocookie.net/rockosmodernlife/images/5/5e/Rocko_Wallaby.png/revision/latest?cb=20130920192204",
      email: "rocko@gmail.com",
      phone_number: "4444444444"
    },
    {
      name: "Doug",
      id: uuidv4(),
      image_url: "https://cdn.costumewall.com/wp-content/uploads/2015/10/doug-funnie.jpg",
      email: "the_doug@gmail.com",
      phone_number: "3333333333"
    },
    {
      name: "Angelica",
      id: uuidv4(),
      image_url: "https://nick-intl.mtvnimages.com/uri/mgid:file:gsp:scenic:/international/nick.co.uk/shows/the-splat/characters/rugrats-angelica.jpg?quality=0.75&height=0&width=480&matte=true&crop=false",
      email: "angel14@gmail.com",
      phone_number: "6666666666",
    },
    {
      name: "Arnold",
      id: uuidv4(),
      image_url: "https://images-na.ssl-images-amazon.com/images/S/sgp-catalog-images/region_US/viacom-HEYARNOLD_SEASON_002-Full-Image_GalleryBackground-en-us-1605029076421._SX1080_.jpg",
      phone_number: "7777777777",
    },
  ];
}

export default contacts;