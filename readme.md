# Basic implementation of Frozen DOM/Computed Style testing
With this application you provide:
- Two different host names (normally the site hosted on your local dev machine and the live version of the site)
- A number of pages (i.e. /home/ or /article/)
- A number of selectors for elements on those pages (i.e. #header or .article-heading)

This application will then produce a JSON file containing details for any style differences between the two pages. The JSON file can be read by Results.html which provides a quick overview and a way to drill into the details of the differences.

This is a very rough implementation and still requires work to improve the usability. Also it has yet to be heavly tested and might be unstable in certain situations (that I've yet to discover).
 
## Running the Crawler
To run crawler use the following command

```node Crawler\App.js --config your-config-file.js```

The config file is a CommonJS module export a variable called ```crawlerConfig```

```
export const crawlerConfig = {
    beforeUrl: "127.0.0.1:8080/a.html",
    afterUrl: "127.0.0.1:8080/b.html",
    pages: [
        {
            id: 'home',
            name: 'Home page',
            path: '/',
            elementsToTest: ['h1', '.element-with-class', '#elementWithId']
        }
        {
            id: 'about',
            name: 'About page',
            path: '/about/',
            elementsToTest: ['h1', '.element-with-class', '#elementWithId']
        }
    ],
    outputPath: 'c:/crawlerOutput.txt'
};
```

The ```pages``` object's ```id``` must not contain whitespace or hyphens.
 
## Viewing the results
Open ```Results/Results.html``` and load any JSON file the crawler has produced. If there were any difference you should see a list of each page where differences occurred.

The numbers next to each page show the number of style changes and the number of element/content changes. 
Potentially there are more style changes within these elements but without something to compare it to the crawler can't tell.
 
## Roadmap 
 
### Short term
 - Move the load file form to a dialog box
 - Find a cross browser replacement for document.querySelector() without effecting the page so results can be gathered from IE8
 - Break down ComputedStyleTest.ts into separate concerns
 - Create shorter XPaths by looking for a parent ID
 - Save the name of the config file used to produce the diffs
 
### Long term
 - Save data to database instead of JSON file
 - Make the consumer site faster by lazy loading data from database
