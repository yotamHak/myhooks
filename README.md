## Overview

Collection of custom and very useful react hooks I use on my projects.

## Hooks

### `useBottomPage` - [View code](https://github.com/yotamHak/myhooks/blob/master/useBottomPage.js)

Custom hook that will alert once reaching the bottom of the page.

#### How to use

Import hook :

```jsx
import useFetch from "hooks/useBottomPage";
```

Then use like this :

```jsx
const { bottom } = useBottomPage();
```

<!-- #### Demo

[View in CodeSandbox](https://codesandbox.io/s/) -->

---

### `useFormValidation` - [View code](https://github.com/yotamHak/myhooks/blob/master/useFormValidation.js)

Useful hook for validating forms.
Requires a validation function.

#### How to use

Import hook :

```jsx
import useFormValidation from "hooks/useFormValidation";
import validateLogin from "hooks/formValidations/validateLogin.js";
```

Add :

```jsx
const { handleSubmit, handleChange, values, errors } = useFormValidation(
  INITIAL_STATE,
  validateLogin,
  handleUpdate
);
```

Then use like this :

```jsx
<Form onSubmit={handleSubmit}>
  <Input
    name="username"
    placeholder="Username"
    onChange={handleChange}
    value={values["username"]}
    key="username"
  />
  {errors.username && <span>{errors.username}</span>}

  <Input
    name="password"
    placeholder="Password"
    onChange={handleChange}
    value={values["password"]}
    key="password"
  />
  {errors.password && <span>{errors.password}</span>}

  <Button>Login</Button>
</Form>
```

<!-- #### Demo

[View in CodeSandbox](https://codesandbox.io/s/) -->

---

### `useGapi` - [View code](https://github.com/yotamHak/myhooks/blob/master/useGapi.js)

Useful hook for Google API authentication.

#### How to use

Import hook :

```jsx
import useGapi from "../../hooks/useGapi";
```

Add :

```jsx
const googleApi = useGapi({
  apiKey,
  clientId,
  discoveryDocs,
  scope,
  ux_mode,
  onLoaded,
});

const { isAuthenticated, isLoading, handleSignIn, handleSignOut } = googleApi;
```

Then use like this :

```jsx
<div>
{
  isAuthenticated ? (
    <button onClick={handleSignout}>Logout from Google</button>
  ) : (
    <button onClick={handleSignIn}>Login with Google</button>
  );
}
</div>
```

<!-- #### Demo

[View in CodeSandbox](https://codesandbox.io/s/) -->

---

### `useInterval` - [View code](https://github.com/yotamHak/myhooks/blob/master/useInterval.js)

Useful hook for an interval.

#### How to use

Import hook :

```jsx
import useInterval from "../../hooks/useInterval";
```

Add :

```jsx
const [resetInterval, setResetInterval] = useState(false);

useInterval(
  () => {
    setResetCopyFeedback(false);
  },
  resetInterval ? 3000 : null
);
```

Then use like this :

```jsx
<div>
  {resetInterval ? (
    <span>Showing!</span>
  ) : (
    <button
      onClick={() => {
        setResetInterval(true);
      }}
    >
      Show
    </button>
  )}
</div>
```

<!-- #### Demo

[View in CodeSandbox](https://codesandbox.io/s/) -->

---

### `useLocalStorage` - [View code](https://github.com/yotamHak/myhooks/blob/master/useLocalStorage.js)

Useful hook for local storage usage.

#### How to use

Import hook :

```jsx
import useLocalStorage from "../../hooks/useLocalStorage";
```

Add :

```jsx
const [state, setState] = useLocalStorage("LOCAL_STORAGE_KEY", initialValue);
```

<!-- Then use like this :

```jsx

``` -->

<!-- #### Demo

[View in CodeSandbox](https://codesandbox.io/s/) -->

---

### `usePrevious` - [View code](https://github.com/yotamHak/myhooks/blob/master/usePrevious.js)

Useful hook that will save previous state of a variable.

#### How to use

Import hook :

```jsx
import usePrevious from "../../hooks/usePrevious";
```

Add :

```jsx
const [state, setState] = useState(false);
const prevState = usePrevious(state);
```

<!-- Then use like this :

```jsx

``` -->

<!-- #### Demo

[View in CodeSandbox](https://codesandbox.io/s/) -->

---

### `useOnClickOutside` - [View code](https://github.com/yotamHak/myhooks/blob/master/useOnClickOutside.js)

Useful hook that will save previous state of a variable.

#### How to use

Import hook :

```jsx
import useOnClickOutside from "../../hooks/useOnClickOutside";
```

Add :

```jsx
const handleClickOutside = () => {
  console.log("You clicked outside.");
};

const outsideRef = useOnClickOutside(handleClickOutside);
```

Then use like this :

```jsx
<div>
  <div ref={outsideRef}> Inside </div>
</div>
```

<!-- #### Demo

[View in CodeSandbox](https://codesandbox.io/s/) -->

---
