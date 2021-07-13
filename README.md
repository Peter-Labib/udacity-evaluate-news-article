# Evaluate A News Article with Natural Language Processing

3rd project at Advanced Front-End Web Development Nanodegree program.

this site is like a web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites. NLP is the ability of an application to understand the human language, written or oral.

You don't have to worry about NLP, because we will make use of an external api called [MeaningCloud](https://www.meaningcloud.com/developer/sentiment-analysis) to interact with their NLP system. This tool will help us classify the information available in the article, like whether the content is subjective (opinion) or objective (fact-based) and whether it is positive, neutral, or negative in tone.

## installation

Make sure Node and npm are installed from the terminal.

```
node -v
npm -v
```
1. Move to the project folder
```
cd <project directory>
```
2. Clone the repo
```
git clone <repo>
```
3. Install dependencies
```
npm install
```

## Run project

### run in development mode
To start the webpack dev server at port 8080
```
npm run build:dev
```
and then start server
```
npm run start
```

### run in production mode
Generate the dist files and then start server at port 8081
```
npm run build:prod`
```
and then start server
```
npm run start
```