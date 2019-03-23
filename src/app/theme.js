import { createMuiTheme } from '@material-ui/core/styles';
import primary from "@material-ui/core/colors/blueGrey"

const theme = createMuiTheme({
    palette: {
        type: 'light',
        primary: primary,
    },
    typography: {
        useNextVariants: true,
        fontFamily: '"Play", "Roboto", "Helvetica", "Arial", sans-serif'
    },
});

export const defaultStyles = {
    container: {
        margin: '0 auto',
        padding: theme.spacing.unit * 2,
        width: '100%',
        maxWidth: theme.breakpoints.values['xl']
    }
};

export default theme;