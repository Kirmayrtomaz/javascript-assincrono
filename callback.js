'use strict'
const request = require('request');

const callback = (function () {

  const github = {
    org : {
      name :"",
      repo:{
        name:"",
        star:"",
        fork:"",
        issue:"",
        forks:{
          person:[]
        }
      }
    }
  };

  const org_github = function (req,res){

    let org= req.params.org || 'facebook';
    let option = {
      url :`https://api.github.com/orgs/${org}`,
      headers: {
        'User-Agent': 'request'
      }
    }

    request( option, function (error, response, body) {

      if (!error && response.statusCode == 200) {


        // org = json.parse(body) ; // Show json repo do github
        // github.org = org;
        github.org.name = JSON.parse(body).name

        option.url = `https://api.github.com/orgs/${org}/repos`;
        request( option, function (error, response, body) {

            if (!error && response.statusCode == 200) {
              const  repo = JSON.parse(body)[0];

                github.org.repo.name = repo.name;
                github.org.repo.star = repo.stargazers_count;
                github.org.repo.fork = repo.forks;
                github.org.repo.issue = repo.open_issues;

              res.send(github)

            }
          })

      }
    })
  }

  return{
    org_github,
    github
  }
})()

module.exports = callback;
