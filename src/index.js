import { base2sub, sub2base, base2verb, verb2base, base2obj, obj2base, verbExt, objExt} from './consts'; 
import { Base64 } from 'js-base64';

const gothamEncoder = {
	decode: (str) => {
		let len = str.length;
		// remove padding words
		const lastWord = str.charAt(len - 2) + str.charAt(len - 1);
		if (lastWord === objExt) {
			// remove padding last word
			len -= 2;
			const lastSecondWord = str.charAt(len - 2) + str.charAt(len - 1);
			if (lastSecondWord === verbExt) {
				len -= 2;
			}
		}

		let gothamDecoded = '';
		for (let i = 0, j = 0 ; i < len ; i += 2, j += 1) {
			const type = j % 3;
			const curWord = str.charAt(i) + str.charAt(i + 1);
			if (type === 0) {
				// subject
				if (sub2base[curWord]) {
					gothamDecoded += sub2base[curWord];
				} else {
					return '';
				}
			} else if (type === 1) {
				// verb
				if (verb2base[curWord]) {
					gothamDecoded += verb2base[curWord];
				} else {
					return '';
				}
			} else {
				// object
				if (obj2base[curWord]) {
					gothamDecoded += obj2base[curWord];
					// skip comma
					i += 1;
				} else {
					return '';
				}
			}
		}
		return Base64.decode(gothamDecoded);
	},
	encode: (str) => {
		let base64Encoded = Base64.encode(str);
		let gothamEncoded = ''
		for(let i = 0 ; i < base64Encoded.length ; i++) {
			const type = i % 3;
			const c = base64Encoded.charAt(i);
			if (type === 0) {
				// subject
				gothamEncoded += base2sub[c];
			} else if (type === 1) {
				// verb
				gothamEncoded += base2verb[c];
			} else {
				// object
				gothamEncoded += base2obj[c];
				if (i !== base64Encoded.length - 1) {
					gothamEncoded += ',';
				}
			}
		}
		let remainNum = base64Encoded.length % 3;
		let compensateNum = remainNum ? 3 - base64Encoded.length % 3 : 0;
		while (compensateNum > 0) {
			if (compensateNum === 2) {
				gothamEncoded += verbExt;
			} else if (compensateNum === 1) {
				gothamEncoded += objExt;
			}
			compensateNum -= 1;
		}
		return gothamEncoded;
	}
}

export default gothamEncoder;