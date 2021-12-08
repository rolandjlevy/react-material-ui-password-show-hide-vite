# Links

- https://mui.com/components/text-fields/#InputAdornments.js
- https://codesandbox.io/s/gnnwq?file=/demo.js

```js

<TextField
  name="password"
  id="password"
  label="Password"
  variant="outlined"
  type={passwordVisibility ? 'password' : 'text'}
  fullWidth
  disabled={loggedIn}
  InputProps={{
    endAdornment: (
      <InputAdornment position="end">
        <IconButton
          aria-label="toggle password visibility"
          onClick={() =>
            setPasswordVisibility((prevState) => !prevState)
          }
          onMouseDown={(e) => e.preventDefault()}
          edge="end"
        >
          {passwordVisibility ? (
            <VisibilityOff />
          ) : (
            <Visibility />
          )}
        </IconButton>
      </InputAdornment>
    ),
    style: { backgroundColor: '#e8f0fe' },
    classes: {
      adornedEnd: classes.adornedEnd,
    },
  }}
/>

```

```css 
  adornedEnd: {
    backgroundColor: '#e8f0fe',
  },
```

### Accordian

- https://stackoverflow.com/questions/60513173/how-to-add-an-event-listener-to-useref-in-useeffect
- https://stackoverflow.com/questions/53807894/material-ui-transition-out-and-in-on-single-button-click
- http://reactcommunity.org/react-transition-group/transition#Transition-prop-addEndListener
- https://mui.com/api/accordion/
- https://mui.com/components/accordion/
- http://reactcommunity.org/react-transition-group/transition
- https://stackoverflow.com/questions/57232334/where-to-put-callback-function-in-react-transition-group

```js
addEndListener = {(node, done) => {
  // use the css transitionend event to mark the finish of a transition
  node.addEventListener('transitionend', done, false);
}};

addEndListener={(node) => {
  node.addEventListener("transitionend", () => {
    console.log("done!");
  }, false );
}}
```