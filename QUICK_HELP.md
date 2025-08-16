* install multiple packages - > ` npm i @mui/material @mui/icons-material @emotion/styled `
* View Source Tree in github , ` change github -> uithub in our repository URL . Example https://github.com/abdussamad007/material-react-hello1-1 -> https://uithub.com/abdussamad007/material-react-hello1-1 `  You will
  get the
* Change ` github -> gitmvp and generate AI prompt for ChatGPT `

## Push Code from VS Code to your github repository.
* In VSCode open the terminal in your project directory and execute the following commands
  
  
    ` git init `
  
    ` git add . `
  
    ` git commit -m "Initial commit" `
  
* Now Create a repository on GitHub
    1. Go to GitHub → log in.
    2. Click New repository.
    3. Give it a name (e.g., ` material-react-hello1-1 ` for this case).
    4. Do not initialize with README (you already have local files).
    5. Click Create repository.
       
` git remote add origin https://github.com/abdussamad007/material-react-hello1-1.git `
  `
  
  * Verify the remote ` git remote -v `
  
    • You should see something like:

` origin  https://github.com/abdussamad007/material-react-hello1-1.git (fetch) `

` origin  https://github.com/abdussamad007/material-react-hello1-1.git (push) `


* Push your code
  

` git branch -M main       # Rename your local branch to main (if not already) `

` git push -u origin main  # Push local code to GitHub `
`   
