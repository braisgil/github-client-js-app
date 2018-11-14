class DataStorage {
    addUser(user, repos) {
        localStorage.clear();
        localStorage.setItem('userData', JSON.stringify(user));
        localStorage.setItem('userRepos', JSON.stringify(repos));
    }
    checkUser() {
        if (localStorage.length > 0) {
            return true;
        }
    }
}

export default DataStorage;