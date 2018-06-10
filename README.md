# mission.seed
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Fmission-io%2Fmission.seed.svg?type=shield)](https://app.fossa.io/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Fmission-io%2Fmission.seed?ref=badge_shield)


## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Fmission-io%2Fmission.seed.svg?type=large)](https://app.fossa.io/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Fmission-io%2Fmission.seed?ref=badge_large)

# Create 


# Docker Commands

### Build
`docker build -t mission.seed .`

### Run
`docker run -it -p 3000:3000 mission.seed` - Keep the Container after exit

`docker run -it -rm -p 3000:3000 mission.seed` - Kill the Container after exit

### List running instance
`docker ps`

# Docker-Comose Commands
### Build
`docker-compose up -d --build --remove-orphans`

### Run
`docker-compose up`