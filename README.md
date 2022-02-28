# Nepali Numbers

Convert english number to nepali and vice versa

## Installation

run

```sh
    npm i nep-num
```

## Usage

### converting english to nepali

```js
import { getNepaliNumber } from "nep-num";

getNepaliNumber("123");
getNepaliNumber("Rs 123", true); // dirty = true
getNepaliNumber("123", false, "np"); // np for nepali style comma and en for english style comma
```

### converting nepali to english

```js
import { getEnglishNumber } from "nep-num";

getEnglishNumber("०१२");
getEnglishNumber("Rs ०१२", true); // dirty = true
getEnglishNumber("०१२", false, "np"); // np for nepali style comma and en for english style comma
```

### get comma

```js
import { getComma } from "nep-num";

getComma("०१२", "np"); // np for nepali style comma and en for english style comma
```

## Support

Please [open an issue](https://github.com/Sajandhakal12/nep-num/issues/new) for support.

## Contributing

Please contribute using [Github Flow](https://guides.github.com/introduction/flow/). Create a branch, add commits, and [open a pull request](https://github.com/Sajandhakal12/nep-num/compare/).

## License

MIT © [Sajandhakal12](https://github.com/Sajandhakal12)
