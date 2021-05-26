import { v4 as uuidv4 } from "uuid";
function contacts() {
  return [
    {
      name: "SpongeBob",
      id: uuidv4(),
      image_url: "https://i.dailymail.co.uk/i/newpix/2018/03/30/05/4AAF837B00000578-0-image-a-159_1522385871133.jpg",
      email: 'bob_pinapple@gmail.com',
      phone_number: "1235555555"
    },
    {
      name: "Rocko",
      id: uuidv4(),
      image_url: "https://cdn.vox-cdn.com/thumbor/7dT8hU14NtyekTg9g7CLafCGeto=/1400x1400/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/18337615/rocko.png",
      email: "rocko@gmail.com",
      phone_number: "4444444444"
    },
    {
      name: "Doug",
      id: uuidv4(),
      image_url: "https://images.squarespace-cdn.com/content/v1/58a15beee6f2e1990ac9d097/1569964283367-HLYF2LIW0Y3KPRYQVMIM/ke17ZwdGBToddI8pDm48kJAj7TXu-xMRjSHpLB4WYFlZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpx6WvZJQsPBLsoI_bgKee144L4oa4mnLR2Uqqn11Qs1kiIf4CkQA_Okt3Nmz-r5RqM/doug.jpeg?format=500w",
      email: 'doug@gmail.com', 
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
      image_url: "https://cdn.vox-cdn.com/thumbor/ms6A2qSei9tLire9yacqj2PHy7g=/0x0:2000x1334/1400x1400/filters:focal(744x446:1064x766):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/55825801/hey_arnold_main.0.jpg",
      email: 'hey_arnold@gmail.com',
      phone_number: "7777777777",
    },
  ];
}

export default contacts;