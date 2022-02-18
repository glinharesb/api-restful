export function isValidManufacturing(manufacturing: string): void | Error {
  const manufacturingTypes: string[] = ['nacional', 'importado'];

  if (!manufacturingTypes.includes(manufacturing?.toLowerCase())) {
    return new Error(
      `A variável 'fabricacao' deve ser do tipo 'nacional' ou 'importado'`
    );
  }
}
