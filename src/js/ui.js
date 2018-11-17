class UI {
    constructor() {
        this.profile = document.getElementById('userProfile');
        this.repositories = document.getElementById('userRepos');
    }

    showMessage(message, cssClass) {

        function displayMessage() {
            const notification = document.createElement('div');
            notification.className = cssClass;
            notification.id = 'messageBar';
            notification.appendChild(document.createTextNode(message));
            const targetContainer = document.querySelector('.row');
            const profilePosition = document.querySelector('#userProfile');
            targetContainer.insertBefore(notification, profilePosition);
            setTimeout(function() {
                notification.remove();
            }, 3000);
        }

        const messageBar = document.getElementById('messageBar');
        
        if (messageBar !== null) {
            messageBar.remove();
        }
        
        displayMessage();

    }

    showProfile(user) {
        this.profile.innerHTML = `
            <div class='card mt-2 animated bounceInLeft'>
                <img src='${user.avatar_url}' class='card-img-top'/>
                <div class="card-body">
                    <h3 class="card-title">
                        ${user.name} / ${user.login}
                    </h3>
                    <a href="${user.html_url}" class="btn btn-primary btn-block" target="_blank">
                        View Profile in Github
                    </a>
                    <div class="text-center">
                        <span class="badge badge-success">
                            Followers: ${user.followers}
                        </span>
                        <span class="badge badge-primary">
                            Following: ${user.following}
                        </span>
                    </div>
                    <span class="badge badge-warning d-block mt-1">
                        Blog: <a href="${user.blog}">${user.blog}</a>
                    </span>  
                </div>
            </div>
        `;
    }

    showRepos(userRepos) {
        let repoMarkup = '';

        userRepos.forEach(userRepoItem => {
            if (userRepoItem.language === null) {
                userRepoItem.language = "Not Defined";
            }
            repoMarkup += `
            <div class="card card-body mt-2 animated bounceInUp">
                <div class="row">
                    <div class="col-md-6">
                        <a href="${userRepoItem.html_url}" target="_blank">${userRepoItem.name}</a>
                    </div>
                    <div class="col-md-6">
                        <span class="badge badge-primary">
                            Language: ${userRepoItem.language}
                        </span>
                    </div>
                </div>
            </div>
            `;
        });

        this.repositories.innerHTML = repoMarkup;
    }

}

export default UI;