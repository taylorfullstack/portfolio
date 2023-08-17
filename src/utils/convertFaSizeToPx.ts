export default function convertFaSizeToPx(faSize: string) {
  switch (faSize) {
    case '2xs':
      return 10;
    case 'xs':
      return 12;
    case 'sm':
      return 14;
    case 'lg':
      return 20;
    case 'xl':
      return 24;
    case '2xl':
      return 32;
    default:
      return 16;
  }
}