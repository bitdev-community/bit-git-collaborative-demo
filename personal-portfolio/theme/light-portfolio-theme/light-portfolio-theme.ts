import { ThemeOptions } from "@mui/material";
import { lightTheme } from "@showoff/design.theme.light-theme";

/**
 * Returns a dark theme for the portfolio with the given options (optional)
 * @param options - Options to be applied to the theme
 * @returns Configured dark theme for the application.
 */
export const lightPortfolioTheme = (options?: ThemeOptions) => lightTheme(options); 