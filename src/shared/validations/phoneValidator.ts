const phoneRegex = /^(?:\+55\s?)?(?:\(?\d{2}\)?\s?)?(?:9?\d{4})-?\d{4}$/;

export default function isValidPhone(phone: string) {
    return phoneRegex.test(phone);
}