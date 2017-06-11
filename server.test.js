const expect = require('expect');
const request = require('supertest');

const {app} = require('./server');

describe('GET /new/:url', () => {
    it('should send shortened url if url is valid', (done) => {
        const url = 'https://developer.mozilla.org/en-US/';

        request(app)
            .get(`/new/${url}`)
            .expect(200)
            .expect((res) => {
                expect(res.body.originalUrl).toBe(url);
            })
            .end(done);
    });

    it('should send an error if url is invalid', (done) => {
        const url = 'ht://bldfgdsfabla.com';

        request(app)
            .get(`/new/${url}`)
            .expect(400)
            .expect((res) => {
                expect(res.body.error).toBe('Invalid URL');
            })
            .end(done);
    });
});
