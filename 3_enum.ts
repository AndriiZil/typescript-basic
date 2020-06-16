enum MemberShip {
  Simple,
  Standard,
  Premium
}

const memberShip = MemberShip.Standard;
console.log(MemberShip.Standard); // => 1
console.log(MemberShip[2]); // => Premium

enum SocialMedia {
  VK = 'VK',
  FACEBOOK = 'FACEBOOK',
  INSTAGRAM = 'INSTAGRAM'
}

const social = SocialMedia.INSTAGRAM;

console.log(social); // => INSTAGRAM
