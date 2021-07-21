export default function isLocalURL(url) {
  switch (url.charAt(0)) {
    case '#':
    case '/':
    case '.':
      return true;
    default:
      return false;
  }
}
