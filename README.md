# micro-frontends-react-vue

A POC with a solution for building an app with a micro-frontends architecture. It contains modules with different tech stacks (React and Vue), but also have some shared dependencies (like React or Material UI).

The modules are integrated via Webpack's [Module Federation Plugin](https://webpack.js.org/plugins/module-federation-plugin). And the run-time integration is used as it's the most flexible and performant solution right now.

As the content the project uses slightly modified free templates:

- [Album template](https://github.com/mui/material-ui/tree/v5.15.1/docs/data/material/getting-started/templates/album) from the Material UI as an example of the content in the `remote-react` module
- [Pricing Plans template](https://codepen.io/sheikh_ishaan/pen/GRgamLM) as an example of the content in the `remote-vue` module

### Project structure:

- the Host app named `host-react` that renders common header and the content of all remotes on `http://localhost:8080`
- two Remote apps (to show an example of multiple frameworks usage within microfrontends):
  - `remote-react` that can be rendered in isolation on `http://localhost:8081`
  - `remote-vue` that can be rendered in isolation on `http://localhost:8082`

The routing (in the Host module) is made with the [React Router 6 (data router)](https://reactrouter.com/en/6.21.0/upgrading/v6-data). Basically, user can navigate between different sub apps via "Other Remote" button, and additionally he can back to the landing page (remote-react app) via "The Remote in ..." title in the header:

<p align="middle">
  <img src="https://github.com/agapas/micro-frontends-react-vue/blob/main/assets/reactModule.jpg" width="800"/>
  <hr />
  <img src="https://github.com/agapas/micro-frontends-react-vue/blob/main/assets/vueModule.jpg" width="800"/>
</p>

### Deployment:

The project uses AWS S3 service for deployment and CloudFront as a CDN for better performance.
An example of deployment workflows are added in `.github/workflows` directory (for all sub apps) that run on every change to the main branch.

#### Deployment setup:

- adjust following paths in `config/webpack.prod.js` files and in the workflows to your own:

  - "/host/latest";
  - "/rr/latest";
  - "/rv/latest";
  - `on / push / paths` and `defaults / run / working-directory` (in the workflows) dependent on the folders names

- add following `Repository secrets` to the github repository (in `Settings / Secrets and variables / Actions`):

  - PRODUCTION_DOMAIN
  - AWS_S3_BUCKET_NAME
  - AWS_ACCESS_KEY_ID
  - AWS_SECRET_ACCESS_KEY
  - AWS_DISTRIBUTION_ID

- replace the value of `AWS_DEFAULT_REGION` in the workflows with your actual AWS region (it's required by the `shinyinc/action-aws-cli@v1.2` action used there)

### Additional info:

- in the webpack configuration files: the name of modules in the ModuleFederationPlugin options should be different than the id of the module root element (in the `public/index.html`). Otherwise the error will be returned (due to conflict between global variable created by webpack and the element with id returned by the browser)

- to prevent styles collision between micro-frontends: the project uses an experimental API: [unstable_ClassNameGenerator](https://mui.com/material-ui/experimental-api/classname-generator/) that is a replacement of deprecated [createGenerateClassName](https://mui.com/system/styles/api/#creategenerateclassname-options-class-name-generator)
