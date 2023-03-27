# 230309 새로 공부한 내용들

1. React Layout

   ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1afdd787-ec8d-4de6-a852-47a1306f4215/Untitled.png)

: React에서 **`children`**은 컴포넌트가 렌더링될 때, 부모 컴포넌트에서 자식 컴포넌트에게 전달되는 prop입니다. **`children`**은 JSX에서 **`<Layout>`**와 같은 태그 내부에 있는 모든 것들을 포함합니다.

**`Layout`** 컴포넌트는 일반적으로 애플리케이션의 전체적인 레이아웃을 담당하는 컴포넌트입니다. **`children`**을 이용하면 **`Layout`** 컴포넌트 안에 들어가는 다른 컴포넌트들을 간편하게 배치할 수 있습니다.

예를 들어, **`Layout`** 컴포넌트가 페이지의 header와 footer를 정의하고 그 사이에 **`children`**을 배치한다면, 각 페이지에서는 **`Layout`** 컴포넌트를 사용하여 header와 footer를 재사용할 수 있습니다. 이런 식으로 **`Layout`** 컴포넌트를 사용하면 코드의 재사용성이 높아지고 유지보수가 쉬워집니다.

아래는 **`children`**을 이용한 간단한 **`Layout`** 컴포넌트의 예시입니다.

```jsx
import React from "react";

function Layout(**{ children }**) {
// 이렇게 { children } 으로 받으면 Layout 태그 내부에 있는 것들을 전부다 prop해올 수 있음
  return (
    <div>
      <header>
        <h1>Header</h1>
      </header>
      <main>**{children}**</main>
      <footer>
        <p>Footer</p>
      </footer>
    </div>
  );
}

function HomePage() {
  return (
    <Layout>
      **<h2>Home Page</h2>**  => h2태그와 p태그가 Layout에게 children으로 prop되는 것임
      **<p>Welcome to my home page!</p>**
    </Layout>
  );
}

function AboutPage() {
  return (
    <Layout>
      <h2>About Page</h2>
      <p>Learn about us and what we do.</p>
    </Layout>
  );
}

```

- 결과
  ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8ae479a7-d41d-45bf-8b77-6d890f0fccc4/Untitled.png)

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
