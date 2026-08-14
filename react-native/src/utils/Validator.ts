export class Validator {

    isEmailOrUserNameValid(input: string): boolean {
        if (input.includes("@")) {
            const validEmailAddressRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,6}$/i;
            return validEmailAddressRegex.test(input);
        } else {
            return input.trim().length > 0 && !input.includes(" ");
        }
    }

    isPasswordValid(password: string): boolean {
        return password.length >= 2;
    }
}

export const validator = new Validator();
