// We need to change this so that when we push our app to dev it connects to the dev environment of our backend and for prod it connects to the prod environment.
// Our React app is a static single page app. This means that once a build is created for a certain environment it persists for that environment.
// only the variables that start with REACT_APP_ are embedded in our app
// Stage Environment Variable REACT_APP_STAGE = [dev, prod]
// export default {
//   MAX_ATTACHMENT_SIZE: 5000000,
//   s3: {
//     REGION: "us-east-1",
//     BUCKET: "notes-scratch-app-uploads"
//   },
//   apiGateway: {
//     REGION: "us-east-1",
//     URL: "https://qwnftfmbz6.execute-api.us-east-1.amazonaws.com/prod"
//   },
//   cognito: {
//     REGION: "eu-central-1",
//     USER_POOL_ID: "eu-central-1_QMq0GBnwX",
//     APP_CLIENT_ID: "3bmv17q5ssgcccu1kl9u4k3skf",
//     IDENTITY_POOL_ID: "eu-central-1:b378dd99-56e3-4745-beb5-c2aaf4e499c4"
//   },
//   STRIPE_KEY: "pk_test_GzyTqQof6w1eEAAY9pYHT4ez00fOQNRP46",
// };
const dev = {
  STRIPE_KEY: "pk_test_GzyTqQof6w1eEAAY9pYHT4ez00fOQNRP46",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-zip2rvviatm6"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://api.tntapplication.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_cyyXbXFvN",
    APP_CLIENT_ID: "3n7tek4iasm1se851rmuuotcri",
    IDENTITY_POOL_ID: "us-east-1:3ab77afe-1d63-4351-9e44-975021434ab2"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_GzyTqQof6w1eEAAY9pYHT4ez00fOQNRP46",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-1ad0pvfdsecuf"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://api.tntapplication.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_LAfDnFjLI",
    APP_CLIENT_ID: "6gvs1q7s7qeck5sdbs12spm46m",
    IDENTITY_POOL_ID: "us-east-1:8bc64382-0f0a-463a-b45e-bd5029a969cf"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};