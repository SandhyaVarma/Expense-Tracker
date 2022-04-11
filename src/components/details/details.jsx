import React from 'react'
import {Card,CardHeader, CardContent, Typography} from '@material-ui/core'
import { Pie } from 'react-chartjs-2'
import useStyles from './styles'
import useTransactions from '../../useTransactions'
import {Chart, ArcElement, Tooltip,Title,Legend } from 'chart.js'
Chart.register(ArcElement, Tooltip,Title,Legend);

const Details = ({title}) => {
    const classes = useStyles();
    const {total,chartData} = useTransactions(title)
  
  return (
    <Card className={title==="Income"? classes.income :classes.expense }>
        <CardHeader  title={title} />
        <CardContent >
            <Typography variant="h5">{'\u20A8'} {total}</Typography>
            {/* <div style={{width:'80%', height:'80%'}}> */}
               <Pie data={chartData} />
            {/* </div> */}
        </CardContent>
    </Card>
  )
}

export default Details
