// @flow strict
const getContactHref = (name: string, contact: string) => {
  let href;

  switch (name) {
    case 'twitter':
      href = `https://twitter.com/BIIInterest`;
      break;
    case 'github':
      href = `https://github.com/${contact}`;
      break;
    case 'vkontakte':
      href = `https://vk.com/${contact}`;
      break;
    case 'telegram':
      href = `https://t.me/${contact}`;
      break;
    case 'email':
      href = `mailto:${contact}`;
      break;
    case 'linkedin':
      href = `https://sg.linkedin.com/company/bioinformatics-institute-a-star`;
      break;
    case 'instagram':
      href = `https://www.instagram.com/biiinterest/`;
      break;
    case 'line':
      href = `line://ti/p/${contact}`;
      break;
    case 'facebook':
      href = `https://www.facebook.com/BIIresearchnews/`;
      break;
    case 'gitlab':
      href = `https://www.gitlab.com/${contact}`;
      break;
    case 'weibo':
      href = `https://www.weibo.com/${contact}`;
      break;
    default:
      href = contact;
      break;
  }

  return href;
};

export default getContactHref;