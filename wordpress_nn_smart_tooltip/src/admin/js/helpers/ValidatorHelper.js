export default class ValidatorHelper {
    static isEmpty(value) {
        return !value.trim();
    }

    static isEmail(email) {
        return email.includes('@');
    }

    static isFileMoreThanSize(formInput, size) {
        return formInput.files[0].size > size;
    }
}
