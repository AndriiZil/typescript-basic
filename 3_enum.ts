enum MemberShip {
  Simple,
  Standard,
  Premium
}

const memberShip = MemberShip.Standard;
console.log(MemberShip.Standard);
console.log(MemberShip[2]);

enum SocialMedia {
  VK = 'VK',
  FACEBOOK = 'FACEBOOK',
  INSTAGRAM = 'INSTAGRAM'
}

const social = SocialMedia.INSTAGRAM;

console.log(social);
