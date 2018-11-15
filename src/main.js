import { clientId, clientSecret } from "../github.config.json";
import Github from "./js/github";
import UI from "./js/ui";
import DataStorage from "./js/datastorage";
import "./main.scss";

const github = new Github(clientId, clientSecret);
const ui = new UI();
const dataStorage = new DataStorage();

if (dataStorage.checkUser()) {
    ui.showProfile(JSON.parse(sessionStorage.getItem('userData')));
    ui.showRepos(JSON.parse(sessionStorage.getItem('userRepos')));
}

const searchForm = document.getElementById('searchForm');
searchForm.addEventListener('submit', function(e) {
    const userInput = document.getElementById('userInput').value;
    if (userInput !== '') {
        github.fetchGithubUser(userInput).then(
            function(data) {
                if (data === undefined) {
                    ui.showMessage('User Not Found', 'alert alert-danger mt-2 col-md-12');
                } else {
                    if(data.userDataJSON.id !== JSON.parse(sessionStorage.getItem('userData')).id) {
                        ui.showMessage('User Found', 'alert alert-success mt-2 col-md-12');
                        ui.showProfile(data.userDataJSON);
                        ui.showRepos(data.userReposJSON);
                        dataStorage.addUser(data.userDataJSON, data.userReposJSON);
                    } else {
                        ui.showMessage('User displayed already', 'alert alert-success mt-2 col-md-12');
                    }
                }
            }
        );
    } else {
        ui.showMessage('Search Box cannot be empty', 'alert alert-danger mt-2 col-md-12');
    }
    e.preventDefault();
});



