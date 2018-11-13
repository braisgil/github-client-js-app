class Github {
    constructor(clientId, clientSecret) {
        this.clientId = clientId;
        this.clientSecret = clientSecret;
        this.reposCount = 7;
        this.reposSort = 'created: asc';
    }

    // USING ASYNC/AWAIT
    async fetchGithubUser(user) {
        const userUrl = `http://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`;
        const reposUrl = `http://api.github.com/users/${user}/repos?client_id=${this.client_id}&client_secret=${this.client_secret}&per_page=${this.reposCount}&sort=${this.reposSort}`;

        const userDataRequest = await fetch(userUrl);
        const userReposRequest = await fetch(reposUrl);
        if (userDataRequest.ok && userReposRequest.ok) {
            const userDataJSON = await userDataRequest.json();
            const userReposJSON = await userReposRequest.json();
            return {
                userDataJSON,
                userReposJSON
            }
        }
    }

    /* USING PROMISES
    fetchGithubUser(user) {
        const userDataRequest = fetch(
        `http://api.github.com/users/${user}?client_id=${this.clientId}&client_secret=${this.clientSecret}`
        ).then(
            response => {
                response.json().then(
                    json => {
                        let data = json;
                        console.log(data)
                    }  
                )
            }
        )
    };

    */
}

export default Github;
