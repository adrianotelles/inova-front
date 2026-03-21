const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function isValidEmail(email: string) {
    return emailRegex.test(email);
}