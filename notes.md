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