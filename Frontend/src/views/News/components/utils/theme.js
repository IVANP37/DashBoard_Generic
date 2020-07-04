import { createMuiTheme } from '@material-ui/core/styles';

const palette = {
  primary: { main: '#303F9F' },
  secondary: { main: '#78909C' },
  info: 'orange',
};


export default createMuiTheme({
  palette,
 
  typography: {
    useNextVariants: true,
  },
  hex2rgba: (hex, alpha = 1) => {
    const testRegExp = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    const result = `rgba(${parseInt(testRegExp[1], 16)}, ${parseInt(
      testRegExp[2],
      16,
    )},${parseInt(testRegExp[3], 16)},${alpha})`;
    return result || null;
  },
  styledBy: (property, mapping) => props => mapping[props[property]],
  colorPrimary: theme => theme.palette.primary.main,
});
