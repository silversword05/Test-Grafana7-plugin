// @ts-ignore
import React, {FunctionComponent} from 'react';
import { PanelProps } from '@grafana/data';
import { SimpleOptions } from 'types';
import { css, cx } from 'emotion';
 // import {useTheme, TextArea} from "@grafana/ui";
import { makeStyles } from '@material-ui/core/styles';
import { RowData } from './img/RowData';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

interface Props extends PanelProps<SimpleOptions> {}

// // @ts-ignore
// const _themeGrafana = useTheme();
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    color: "#D8D9DA",
    backgroundColor: 'rgb(98, 139, 44, 0)',
    textAlign: "center",
    justify: "center",
  }
}));

export const RowHeaders = () => {
  const classes = useStyles();
  return (
    <Grid container direction={"row"} alignItems={"center"} justify="center" spacing={3}>
      <Grid item xs={1}>
        <Paper className={classes.paper} square> </Paper>
      </Grid>
      <Grid item xs={2} justify="center" alignItems="center">
        <Paper className={classes.paper} >Design</Paper>
      </Grid>
      <Grid item xs={2} justify="center" alignItems="center">
        <Paper className={classes.paper} >Develop</Paper>
      </Grid>
      <Grid item xs={2} justify="center" alignItems="center">
        <Paper className={classes.paper} >Bug Solving</Paper>
      </Grid>
      <Grid item xs={2} justify="center" alignItems="center">
        <Paper className={classes.paper} >Verification</Paper>
      </Grid>
      <Grid item xs={2} justify="center" alignItems="center">
        <Paper className={classes.paper} >Production</Paper>
      </Grid>
    </Grid>
  );
};

export const SimplePanel: React.FC<Props> = ({ options, data, width, height }) => {
  const classes = useStyles();
  const showProjects = [true, true, true, false, true];
  return (
    <div
      className={cx(css `width: ${width}px; height: ${height}px; position: relative;`)}>
      <div className={classes.root}>
        <RowHeaders/>
        <RowData gbeColor='rgb(98, 139, 44)' gbeName='Connected Aero' showProjects={showProjects} projectCount={options.text.length}/>
        <RowData gbeColor='rgb(189, 87, 26)' gbeName='Connected Plant' showProjects={showProjects} projectCount={2}/>
        <RowData gbeColor='rgb(198, 155, 30)' gbeName='Connected Building' showProjects={showProjects} projectCount={2}/>
        <RowData gbeColor='rgb(185, 38, 28)' gbeName='Connected Cyber' showProjects={showProjects} projectCount={2}/>
        <RowData gbeColor='rgb(98, 139, 44)' gbeName='Forge Platform' showProjects={showProjects} projectCount={2}/>
      </div>
    </div>
  );
};
