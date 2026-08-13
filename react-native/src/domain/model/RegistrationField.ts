export interface RegistrationField {
  name: string;
  label: string;
  type: RegistrationFieldType;
  placeholder: string;
  instructions: string;
  exposed: boolean;
  required: boolean;
  restrictions: Restrictions;
  options: ('Option', False)[];
  errorInstructions: string;
  defaultValue: boolean;
}
