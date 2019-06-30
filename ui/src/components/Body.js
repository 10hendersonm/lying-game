import React from 'react'

import { makeStyles } from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles(theme => ({
  root: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: theme.palette.background.default,
  },
  contentRoot: {
    padding: theme.spacing(5),
    margin: theme.spacing(5),
    maxWidth: 800,
  },
}))

const Body = ({ children }) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Paper className={classes.contentRoot}>
        <CssBaseline />
        {children}
      </Paper>
    </div>
  )
}

export default Body
