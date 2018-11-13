import { clientId, clientSecret } from "../github.config.json";
import Github from "./js/github";
import UI from "./js/ui";
import "./main.scss";

const github = new Github(clientId, clientSecret);
const ui = new UI();

const searchForm = document.getElementById('searchForm');
searchForm.addEventListener('submit', function(e) {
    const userInput = document.getElementById('userInput').value;
    if (userInput !== '') {
        github.fetchGithubUser(userInput).then(
            function(data) {
                if (data === undefined) {
                    ui.showMessage('User Not Found', 'alert alert-danger mt-2 col-md-12');
                } else {
                    ui.showMessage('User Found', 'alert alert-success mt-2 col-md-12');
                    ui.showProfile(data.userDataJSON);
                    ui.showRepos(data.userReposJSON);
                }
            }
        );
    } else {
        ui.showMessage('Search Box cannot be empty', 'alert alert-danger mt-2 col-md-12');
    }
    e.preventDefault();
});

