import { H1, P } from '../Components/Game/Game.style';

export const Card = ({ game }) => {
  // console.log(game);

  const requirements = JSON.stringify(game.minimum_system_requirements);

  return (
    <div>
      <H1>{game.title}</H1>
      <P>Genre: {game.genre}</P>
      <P>Plataform: {game.platform}</P>
      <P>Developer: {game.developer}</P>
      <P>Publisher: {game.publisher}</P>
      <P>Release Date: {game.release_date}</P>
      <P>Description: {game.short_description}</P>
      <P>System Requirements: {requirements})</P>
    </div>
  );
};

// {id: 1, title: 'Dauntless', thumbnail: 'https://www.mmobomb.com/g/1/thumbnail.jpg', status: 'Live', short_description: 'Gather your friends, forge your weapons, and hunt …tning-fast sword attacks to powerful axe strikes.', …}
// description: "<p style=\"text-align: justify;\">Gather your friends, forge your weapons, and hunt ferocious behemoths in Dauntless, the co-op multiplayer RPG from Phoenix Labs, a studio consisting of developers from some of the biggest MMORPG ever made. Set adrift in a lush fantasy world known as the Shattered Isles, \"Slayers\" must band together to contend with a harsh environment and even harsher enemies </p>\r\n<p style=\"text-align: justify;\">Each Slayer can choose his or her weapon and attack style, from lightning-fast sword attacks to powerful axe strikes. You can imbue your weapon with elemental properties to make it stronger, but no matter how good your gear is, you'll need to know your enemy and its vulnerable spots, to make every attack count. Do you have what it takes to survive the Shattered Isles? Will you become Dauntless?</p>"
// developer: "Phoenix Labs, Iron Galaxy"
// game_url: "https://www.mmobomb.com/open/dauntless"
// genre: "MMORPG"
// id: 1
// minimum_system_requirements: {os: 'Windows 7 DX11 Support', processor: 'CPU: i5 SandyBridge', memory: '4GB', graphics: 'GPU: nVidia 660Ti (DX11) or equivalent', storage: '15GB of storage space'}
// platform: "Windows"
// profile_url: "https://www.mmobomb.com/dauntless"
// publisher: "Phoenix Labs"
// release_date: "2019-05-21"
// screenshots: (4) [{…}, {…}, {…}, {…}]
// short_description: "Gather your friends, forge your weapons, and hunt ferocious behemoths in Dauntless, the co-op multiplayer RPG from Phoenix Labs, a studio consisting of developers from some of the biggest MMORPG ever made. Set adrift in a lush fantasy world known as the Shattered Isles, \"Slayers\" must band together to contend with a harsh environment and even harsher enemies Each Slayer can choose his or her weapon and attack style, from lightning-fast sword attacks to powerful axe strikes."
// status: "Live"
// thumbnail: "https://www.mmobomb.com/g/1/thumbnail.jpg"
// title: "Dauntless"
// [[Prototype]]: Object
