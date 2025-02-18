import { ImporterTheme } from 'react-importer';

export default function ThemeCard({
  theme,
  onClick,
}: {
  theme: ImporterTheme;
  onClick: () => void;
}) {
  return (
    <div className="theme-card" onClick={onClick}>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div
          className="theme-color"
          style={{ backgroundColor: theme.colors.primary }}
        ></div>
        <div
          className="theme-color"
          style={{ backgroundColor: theme.colors.success }}
        ></div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div
          className="theme-color"
          style={{ backgroundColor: theme.colors.danger }}
        ></div>
        <div
          className="theme-color"
          style={{ backgroundColor: theme.colors.info }}
        ></div>
        <div
          className="theme-color"
          style={{ backgroundColor: theme.colors.warning }}
        ></div>
        <div
          className="theme-color"
          style={{ backgroundColor: theme.colors.light }}
        ></div>
      </div>
    </div>
  );
};