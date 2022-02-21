export function isEmpty(args: Object): string[] {
  const errors = [];
  Object.values(args).forEach((value, index) => {
    if ((typeof value === 'string' && !value.length) || value === undefined) {
      errors.push(`${Object.keys(args)[index]} should not be empty`);
    }
  });

  return errors;
}
