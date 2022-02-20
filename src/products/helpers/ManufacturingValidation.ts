import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ name: 'manufacturingValidation', async: false })
export class ManufacturingValidation implements ValidatorConstraintInterface {
  validate(text: string) {
    const manufacturingTypes: string[] = ['nacional', 'importado'];

    return manufacturingTypes.includes(text.toLowerCase());
  }

  defaultMessage() {
    return 'fabricacao should be nacional or importado';
  }
}
