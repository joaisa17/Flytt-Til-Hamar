class Auth {
    private authenticated: boolean = false;

    async login(pwd: string) {
        if (pwd === "Hamar2022") {
            this.authenticated = true;
            return true;
        }

        return false;
    }

    logout() {
        this.authenticated = false;
        return true;
    }

    isLoggedIn() {
        return this.authenticated;
    }
}

export default new Auth();