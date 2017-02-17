var fn_token = async (ctx, next) => {
    ctx.body = {
        session: ctx.session,
        token: ctx.csrf
    };
    // next();
};

module.exports = {
    'GET /token': fn_token
}
