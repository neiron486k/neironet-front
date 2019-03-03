import { createMuiTheme } from '@material-ui/core/styles';
import primary from "@material-ui/core/colors/blue"

const theme = createMuiTheme({
    palette: {
        type: 'light',
        primary: primary
    },
    typography: {
        useNextVariants: true,
    },
});

export const defaultStyles = {
    container: {
        margin: '0 auto',
        padding: theme.spacing.unit,
        width: '100%',
        maxWidth: theme.breakpoints.values['lg']
    }
};


export default theme;