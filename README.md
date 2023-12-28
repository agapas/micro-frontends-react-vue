# micro-frontends-react-vue

Micro-frontends can be implemented in a number of ways. This POC project shows an example of using the [Module Federation](https://webpack.js.org/plugins/) to bundle micro-frontends together and load them into a single web application. And the run-time integration is used as it's the most flexible and performant solution right now.

The POC contains micro-frontends with different tech stacks (used React and Vue, but any other framework could work here), with some shared dependencies (like React or Material UI).

As the content example, the project uses slightly modified free templates:

- [Album template](https://github.com/mui/material-ui/tree/v5.15.1/docs/data/material/getting-started/templates/album) from the Material UI as an example of the content in the `remote-react` module
- [Pricing Plans template](https://codepen.io/sheikh_ishaan/pen/GRgamLM) as an example of the content in the `remote-vue` module

### Project structure:

- the Host app named `host-react` that renders common header (with the Material UI used for styling) and integrated content of all remotes on `http://localhost:8080`
- two Remote apps, each with its own distinct functionality (to show an example of multiple frameworks usage within the micro-frontends):
  - `remote-react` that:
    - can be run in isolation on `http://localhost:8081`
    - uses the Material UI for styling
  - `remote-vue` that:
    - can be run in isolation on `http://localhost:8082`
    - uses Sass for styling

The routing is made with the [React Router 6 (data router)](https://reactrouter.com/en/6.21.0/upgrading/v6-data). Basically, user can navigate between different sub apps via "Other Remote" button, and additionally he can back to the landing page (remote-react app) via "The Remote in ..." title in the header:

<p align="middle">
  <img src="https://github.com/agapas/micro-frontends-react-vue/blob/main/assets/reactModule.jpg" width="45%"/>
  <img src="https://github.com/agapas/micro-frontends-react-vue/blob/main/assets/vueModule.jpg" width="45%"/>
</p>

### Additional info:

The project is configured to use AWS S3 service for deployment and CloudFront as a CDN (for better performance). And an example of deployment workflows is added in `.github/workflows` directory (for all micro-frontends). But this can be adjusted to any other CI/CD pipeline. For example, each micro-frontend could be deployed independently and even on different servers. One module could be deployed to AWS and another on Azure or Google Cloud. Deployment should be left up to each team so they can choose the right tool for each job.

#### Deployment setup (for AWS):

- adjust following paths in `config/webpack.prod.js` files and in the workflows to your own:

  - "/host/latest";
  - "/rr/latest";
  - "/rv/latest";
  - "paths" and "working-directory" (in the workflows) dependent on the folders names

- the workflows use following `Repository secrets`, so they should be set in github repository for this setup:

  - PRODUCTION_DOMAIN
  - AWS_S3_BUCKET_NAME
  - AWS_ACCESS_KEY_ID
  - AWS_SECRET_ACCESS_KEY
  - AWS_DISTRIBUTION_ID

- replace the value of `AWS_DEFAULT_REGION` in the workflows with your actual AWS region (it's required by the `shinyinc/action-aws-cli@v1.2` action)

### Things to consider:

Things to consider when working on a real project:

- proper routing:
  The POC uses very basic routing (in the Host app). In the real world scenario the routing will be much more advanced. Dependent on used tech stack choose a proper solution for this. It may require configuring the webserver to use a different port for each app and setting up routing rules in your operating system's network stack.

- handling authentication

- scoping styles

### Some details to worth to mention:

- to prevent styles collision between micro-frontends (when using Material UI), project uses an experimental [unstable_ClassNameGenerator](https://mui.com/material-ui/experimental-api/classname-generator/) API that is a replacement of deprecated [createGenerateClassName](https://mui.com/system/styles/api/#creategenerateclassname-options-class-name-generator)

- in the webpack configuration files:
  The `name` of modules in the ModuleFederationPlugin options should be different than the `id` of the module root element (in the `public/index.html`). Otherwise the error will be returned (due to conflict between global variable created by webpack and the element with id returned by the browser).

### Project setup

Install dependencies separately in each sub app (host-react, remote-react and remote-vue) with a command: `npm i` or `yarn`.

### Running project

- running the Remote apps (in isolation):

  - go to the Remote (remote-react or remote-vue) app directory
  - start dev server with a command: `npm start` or `yarn start`

- running the Host (together with the Remote modules):

  - run the Remote apps (follow the steps in the point above for both, remote-react and remote-vue)
  - go to the Host app directory
  - start dev server with a command: `npm start` or `yarn start`
  - check [http://localhost:8080](http://localhost:8080) in your browser (you should see the content of all micro-frontends there)

**A Note:** The apps will automatically reload if you change the source files. The only exception is when you change webpack config files, so you will need restart dev servers to see these changes.

## License

This project is licensed under the [MIT] License - see the [LICENSE.md](LICENSE) file for details.
