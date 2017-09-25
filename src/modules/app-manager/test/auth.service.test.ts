import { should } from 'should';
import * as supertest from 'supertest';
import { server } from '../../../index';
const agent = supertest.agent(server.app);

describe('/auth service', () => {
    it('should login', (done) => {
        agent
            .post('/login')
            .set('Accept', 'application/json')
            .send({ UserName: 'dev', Password: 'pwd' })
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err, res) => {
                if (err) { return done(err); }
                // agent.saveCookies(res);
                // res.body.id.should.equal('1');
                done();
            });
    });
    it('should logout', (done) => {
        agent
            .post('/logout')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err, res) => {
                if (err) { return done(err); }
                done();
            });
    });
});
