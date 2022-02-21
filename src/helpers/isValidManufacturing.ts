export function isValidManufacturing(manufacturing: string): void | Error {
  const manufacturingTypes: string[] = ['nacional', 'importado'];

  if (
    typeof manufacturing !== 'string' ||
    !manufacturingTypes.includes(manufacturing.toLowerCase())
  ) {
    return new Error('fabricacao should be nacional or importado');
  }
}
