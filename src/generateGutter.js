
export const generateGutter = (breakpoint, gutters) => {
  const styles = {};

  gutters.forEach((spacing, index) => {
    if (index === 0) {
      // Skip the default style.
      return;
    }

    styles[`spacing-${breakpoint}-${spacing}`] = {
      margin: -spacing / 2,
      width: `calc(100% + ${spacing}px)`,
      '& > $item': {
        padding: spacing / 2,
      },
    };
  });

  return styles;
}
