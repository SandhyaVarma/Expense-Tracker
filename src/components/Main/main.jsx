import React from 'react'
import {Card,CardHeader , CardContent , Typography , Grid, Divider} from "@material-ui/core"
import Form from './form/form'
import List from './list/list'
import useStyles from './styles'

const Main = () => {
    const classes = useStyles()
  return (
    <Card className={classes.root}>
        <CardHeader title="Expense Tracker" subheader="Powered By Speechly" />
        <CardContent>
            <Typography align="center" variant="h5">Total Balance {'\u20A8'} 500</Typography>
            <Typography variant='subtitle1' style={{lineHeight:'1.5em', marginTop:'20px'}}></Typography>
            <Divider />
            <Form/>
        </CardContent>
        <CardContent className={classes.cartContent}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                   <List/>
                </Grid>
            </Grid>

        </CardContent>
    </Card>
  )
}

export default Main