class DataStorage {
    addUser(user, repos) {
        sessionStorage.clear();
        sessionStorage.setItem('userData', JSON.stringify(user));
        sessionStorage.setItem('userRepos', JSON.stringify(repos));
    }
    checkUser() {
        if (sessionStorage.length > 0) {
            return true;
        }
    }
}

export default DataStorage;