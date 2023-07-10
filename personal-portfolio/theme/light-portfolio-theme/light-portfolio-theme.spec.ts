import { lightPortfolioTheme } from './light-portfolio-theme';

it('should return display correct primary color with modification', () => {
  expect(lightPortfolioTheme({ palette: { primary: { main: '#FFFF' } } }).palette.primary.main).toBe('#FFFF');
});

it('should return display correct primary color with no modification', () => {
  expect(lightPortfolioTheme().palette.primary.main).toBe('#6C5CE7');
});
