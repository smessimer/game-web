export default (userId) => {
  return Promise.resolve([
    {
      imgUrl: 'https://steamcdn-a.akamaihd.net/steam/apps/435150/header.jpg?t=1539352146',
      gameName: 'Divinity: Original Sin 2',
      gameLink: 'https://store.steampowered.com/app/435150/Divinity_Original_Sin_2__Definitive_Edition/',
      playTime: '22.5h',
    },
    {
      imgUrl: 'https://steamcdn-a.akamaihd.net/steam/apps/973760/header.jpg?t=1541940371',
      gameName: 'Thronebreaker: The Wither Tales',
      gameLink: 'https://store.steampowered.com/app/435150/Divinity_Original_Sin_2__Definitive_Edition/',
      playTime: '2h',
    },
    {
      imgUrl: 'https://steamcdn-a.akamaihd.net/steam/apps/264710/header.jpg?t=1540950862',
      gameName: 'Subnautica',
      gameLink: 'https://store.steampowered.com/app/435150/Divinity_Original_Sin_2__Definitive_Edition/',
      playTime: '1.5h',
    }
  ]);
}