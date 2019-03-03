import { createMuiTheme } from '@material-ui/core/styles';
import primary from "@material-ui/core/colors/blue"

const theme = createMuiTheme({
    palette: {
        type: 'light',
        primary: primary
    }
});


export default theme;