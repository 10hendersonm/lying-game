import React from 'react'

import { makeStyles } from '@material-ui/styles'
import Button from '@material-ui/core/Button'

import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
  button: {
    minWidth: 200,
    margin: theme.spacing(2),
  },
}))

const RoleDescription = ({ href, buttonText }) => {
  const classes = useStyles()
  return (
      <Link className={classes.link} to={href}>
        <Button className={classes.button} color="primary" variant="contained">
          {buttonText}
        </Button>
      </Link>
  )
}

export default RoleDescription
