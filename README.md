Kick off your project with this default boilerplate for CEC. This barebones starter ships with the main Gatsby configuration files you might need. 


## 🚀 Quick start

1.  **Install the Gatsby CLI.**

    The Gatsby CLI helps you create new sites using Gatsby starters (like this one!)

    ```sh
    # install the Gatsby CLI globally
    npm install -g gatsby-cli
    ```

2.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the default starter.

    ```sh
    # create a new Gatsby site using the default starter
    gatsby new my-cec-site https://github.com/dolfdijkstra/cec-starter-default
    ```
3.  **Configure connection to CEC.**

    ```sh
    cd my-cec-site/
    ```

    Edit gatsby-config.js
    ``` {
      resolve: 'gatsby-source-cec',
      options: {
        contentServer:
          'https://experiencedemo-gse00015123.uscom-east-1.oraclecloud.com',
        channelToken: '3983db029cfc8d185826fbc5bc7c5633',
        fromCache: false,
      },
    },
    ```
    Change the `contentServer` and `channelToken` settings according to your environment.
    
    Depending on your content model you probably will also have to change the graphQL and React  conde in gatsby-node.js, src/*.js and src/components/*.jsx.
 

4.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```sh
    cd my-cec-site/
    gatsby develop
    ```

5.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!
    
    *Note: You'll also see a second link: `http://localhost:8000___graphql`. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://next.gatsbyjs.org/tutorial/part-five/#introducing-graphiql).*
    
    Open the the `my-cec-site` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!
    

## Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://next.gatsbyjs.org/). Here are some places to start:

-   **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://next.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

-   **To dive straight into code samples head [to our documentation](https://next.gatsbyjs.org/docs/).** In particular, check out the “Guides”, API reference, and “Advanced Tutorials” sections in the sidebar.

## Building your site


  ```sh
  gatsby build
  ```

  In the public directory will be all the static files for your site. With `gatsby serve` you can view the built site in your browser.



