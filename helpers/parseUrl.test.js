const expect = require('expect');

const {parseUrl} = require('./parseUrl.js')

describe('parseUrl.js', () => {
    it('should return url if valid url', () => {
        let res1 = parseUrl('/new/http://google.com');
        let res2 = parseUrl('/new/https://repl.it/languages/javascript');

        expect(res1).toBe('http://google.com');
        expect(res2).toBe('https://repl.it/languages/javascript');
    });

    it('should return "Invalid URL" if url is invalid', () => {
        let res1 = parseUrl('/new/blabal');
        let res2 = parseUrl('/new/htttp://something.com');
        let res3 = parseUrl('/new/www.magic.edu');

        expect(res1).toBe('Invalid URL');
        expect(res2).toBe('Invalid URL');
        expect(res3).toBe('Invalid URL');
    });
});
