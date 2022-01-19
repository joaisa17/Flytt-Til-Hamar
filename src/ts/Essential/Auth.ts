class Auth {
    private authenticated: boolean = false;

    async login(pwd: string) {
        if (pwd === "Hamar2022") {
            this.authenticated = true;
            return true;
        }

        return false;
    }

    async logout() {
        this.authenticated = false;
        return true;
    }

    async isLoggedIn() {
        return this.authenticated;
    }
}

export default new Auth();