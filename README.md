# full stack ci/cd

github action pipeline: 1. build, deploy, release, notify; 2. period check
pipeline build, test style, unit test, e2e test using playwright

branch rule for protection, commit to protected branch, create pull request and merge to main

deploy to fly.io: https://bloglist-app-pipeline.fly.dev/ (will shut down after free limit is reached)