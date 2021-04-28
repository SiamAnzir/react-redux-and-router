const auth = {
    isAuthenticated: false,
    logIn(cb){
        auth.isAuthenticated = true;
        cb();
    },
    logOut(cb){
        auth.isAuthenticated = false;
        cb();
    }
};

export default auth;