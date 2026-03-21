import { maskitoPhoneOptionsGenerator } from "@maskito/phone";
import metadata from 'libphonenumber-js/min/metadata';

const phoneMask = maskitoPhoneOptionsGenerator({ countryIsoCode: 'BR', metadata });

export default phoneMask;