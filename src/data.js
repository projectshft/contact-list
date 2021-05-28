import { v4 as uuidv4 } from "uuid";
function contacts() {
  return [
    {
      name: "SpongeBob",
      id: uuidv4(),
      image_url: "https://i.dailymail.co.uk/i/newpix/2018/03/30/05/4AAF837B00000578-0-image-a-159_1522385871133.jpg",
      email: 'bob_pineapple@gmail.com',
      phone_number: "123-555-5555",
    },
    {
      name: "Rocko",
      id: uuidv4(),
      image_url: "https://cdn.vox-cdn.com/thumbor/7dT8hU14NtyekTg9g7CLafCGeto=/1400x1400/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/18337615/rocko.png",
      email: "rocko@gmail.com",
      phone_number: "444-444-4444",
    },
    {
      name: "Doug",
      id: uuidv4(),
      image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzwDO2A03EBHOmtfD4BXJ9AXrzTFFAcE8eHJRABUgqolCldbmxCIQHA16rOxqd8EurRDs&usqp=CAU",
      email: 'doug@gmail.com', 
      phone_number: "333-333-3333",
    },
    {
      name: "Angelica",
      id: uuidv4(),
      image_url: "https://nick-intl.mtvnimages.com/uri/mgid:file:gsp:scenic:/international/nick.co.uk/shows/the-splat/characters/rugrats-angelica.jpg?quality=0.75&height=0&width=480&matte=true&crop=false",
      email: "angel14@gmail.com",
      phone_number: "666-6666-666",
    },
    {
      name: "Arnold",
      id: uuidv4(),
      image_url: "https://cdn.vox-cdn.com/thumbor/ms6A2qSei9tLire9yacqj2PHy7g=/0x0:2000x1334/1400x1400/filters:focal(744x446:1064x766):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/55825801/hey_arnold_main.0.jpg",
      email: 'hey_arnold@gmail.com',
      phone_number: "777-777-7777",
    },
  ];
}; 

export default contacts;