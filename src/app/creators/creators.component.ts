import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'creators',
  templateUrl: './creators.component.html',
  styleUrls: ['./creators.component.scss'],
})
export class CreatorsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  creators = [
    {
      id: 1,
      name: 'PKILB',
      img: 'https://t4.ftcdn.net/jpg/02/44/67/47/360_F_244674784_EDDlhrK0uqtP6Qlj1eHMi3b4vwTYmDXq.jpg',
      about: 'WoW god. LoL pro. MarioKart noob.',
      socials: {
        instagram: 'https://www.instagram.com/dalittleleaugers?igshid=YmMyMTA2M2Y=',
        instagramTag: 'dalittleleaugers',
        youtube: 'https://www.youtube.com/channel/UCNSokyuSZMTwtTVh_gY41_g',
        youtubeTag: 'dalittleleaugers',
        twitch: 'https://www.twitch.tv/',
        twitchTag: 'PKILB'
      },
    },
    {
      id: 2,
      name: 'Jjello Man',
      img: 'https://ih1.redbubble.net/image.505892440.1157/st,small,845x845-pad,1000x1000,f8f8f8.u4.jpg',
      about:
        'Part time Fortnite gangsta. Favorite quote to say while playing Dark Souls: "FUCK"',
      socials: {
        instagram: 'https://www.instagram.com/dalittleleaugers?igshid=YmMyMTA2M2Y=',
        instagramTag: 'jackson',
        youtube: 'https://www.youtube.com/channel/UCNSokyuSZMTwtTVh_gY41_g',
        youtubeTag: 'jacksonyoutube',
        twitch: 'https://www.twitch.tv/',
        twitchTag: 'jjtwitch'
      },
    },
    {
      id: 3,
      name: 'Nemo',
      img: 'https://images-na.ssl-images-amazon.com/images/I/51znPFzON0L.jpg',
      about: 'Smah Bros Ultimate Terry poser. Also a WoW god. ',
      socials: {
        instagram: 'https://www.instagram.com/dalittleleaugers?igshid=YmMyMTA2M2Y=',
        instagramTag: 'nehemiah',
        youtube: 'https://www.youtube.com/channel/UCNSokyuSZMTwtTVh_gY41_g',
        youtubeTag: 'nemotube',
        twitch: 'https://www.twitch.tv/',
        twitchTag: 'nbtwitch'
      },
    },
    {
      id: 4,
      name: 'Borger',
      img: 'https://pbs.twimg.com/profile_images/2777458564/b8912f9a6c32df8ea4d6fee834b2897f_400x400.jpeg',
      about:
        'Claims to dislike toxic games like Leauge, then playes Valorant and PUPG',
      socials: {
        instagram: 'https://www.instagram.com/dalittleleaugers?igshid=YmMyMTA2M2Y=',
        instagramTag: '',
        youtube: 'https://www.youtube.com/channel/UCNSokyuSZMTwtTVh_gY41_g',
        youtubeTag: '',
        twitch: 'https://www.twitch.tv/',
        twitchTag: ''
      },
    },
    {
      id: 5,
      name: 'BriRex',
      img: 'https://i.pinimg.com/736x/7a/93/12/7a9312fb39fa495faf64458d36ffebd1.jpg',
      about: "Made this website, so she's pretty rad. The best at MarioKart.",
      socials: {
        instagram: 'https://www.instagram.com/dalittleleaugers?igshid=YmMyMTA2M2Y=',
        instagramTag: '',
        youtube: 'https://www.youtube.com/channel/UCNSokyuSZMTwtTVh_gY41_g',
        youtubeTag: '',
        twitch: 'https://www.twitch.tv/',
        twitchTag: ''
      },
    },
    {
      id: 6,
      name: 'Ethan',
      img: 'https://images2.alphacoders.com/597/thumb-1920-597965.jpg',
      about:
        "No one plays the games he's on anymore because they're from like 2001.",
      socials: {
        instagram: 'https://www.instagram.com/dalittleleaugers?igshid=YmMyMTA2M2Y=',
        instagramTag: '',
        youtube: 'https://www.youtube.com/channel/UCNSokyuSZMTwtTVh_gY41_g',
        youtubeTag: '',
        twitch: 'https://www.twitch.tv/',
        twitchTag: ''
      },
    },
  ];
}
