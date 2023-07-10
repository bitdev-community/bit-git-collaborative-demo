import { ThemeOptions } from "@mui/material";
import { darkTheme } from "@showoff/design.theme.dark-theme";

const defaults: ThemeOptions = { palette: { primary: { main: '#CBF382' } } };

/**
 * Returns a dark theme for the portfolio with the given options (optional)
 * @param options - Options to be applied to the theme
 * @returns Configured dark theme for the application.
 */
export const darkPortfolioTheme = (options: ThemeOptions = defaults) => darkTheme(options); 
