module.exports = {
    db: 'mongodb://localhost/mean-book',
    sessionSecret: 'developmentSessionSecret',
    facebook: {
        clientID: '1128378150534994',
        clientSecret: '0cb952f287e38f16d094216dbbda89f1',
        callbackURL: 'http://localhost:3000/oauth/facebook/callback'
    },
    google: {
        clientID: '44335952623-jbirrqr395ua6d3onkc54shoct9ifff8.apps.googleusercontent.com',
        clientSecret: 'YAOq3-i655BxYiVr2duPs1Dm',
        callbackURL: 'http://localhost:3000/oauth/google/callback'
    }
};