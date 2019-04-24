export const OPEN_SNACKBAR = 'OPEN_SNACKBAR';
export const CLOSE_SNACKBAR = 'CLOSE_SNACKBAR';
export const openSnackbar = (message, variant) => ({type: OPEN_SNACKBAR, message, variant});
export const closeSnackbar = () => ({type: CLOSE_SNACKBAR});