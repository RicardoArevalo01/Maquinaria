//region Icons
/**
 * @Icons
 *  For more icons visit  https://pictogrammers.com/library/mdi/
 */

export const icons = {
  menu: 'menu',
  logout: 'logout',
  reload: 'reload',
  reloadPassword: 'lock-reset',
  eyeOpen: 'eye',
  eyeClose: 'eye-off',
  signal: 'signal',
  home: 'home',
  search: 'magnify',
  heart: 'heart',
  account: 'account',
  accountGroup: 'account-group',
  cloudAlert: 'cloud-alert',
  palette: 'palette',
  draw: 'draw',
  viewList: 'view-list',
  camera: 'camera',
  calendar: 'calendar',
  down: 'chevron-down',
  up: 'chevron-up',
  close: 'close',
  filter: 'tune-variant',
  back: 'chevron-left',
  bookOpen: 'book-open',
  folder: 'folder-multiple',
  statusCircle: 'checkbox-multiple-blank-circle',
  pause: 'pause',
  check: 'check',
  play: 'play',
  plus: 'plus',
  minus: 'minus',
  paperclip: 'paperclip',
  marker: 'map-marker',
  alert: 'alert',
  clock: 'clock',
  information: 'information',
  settings: 'cog',
  image: 'image-area',
  trash: 'trash-can',
  cart: 'cart-outline',
  undo: 'undo',
  listBox: 'view-list',
};
//#endregion

export const shadowStyle = (isDark: boolean) => ({
  shadowColor: isDark ? '#FFF' : '#000',
  shadowOffset: {
    width: 0,
    height: 3,
  },
  shadowOpacity: 0.27,
  shadowRadius: 4.65,
  elevation: 6,
});
