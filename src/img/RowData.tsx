import React, {FunctionComponent} from 'react';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core/styles";

type RawDataProps = {
  gbeColor: string,
  gbeName: string,
  showProjects: Array<Boolean>,
  projectCount: number,
}

type ProjectBoxProps = {
  indexNo: number,
  showProjects: Array<Boolean>,
  projectCount: number,
}

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(1),
    color: "#D8D9DA",
    backgroundColor: '#212124'
  },
}));

export const ProjectBox: FunctionComponent<ProjectBoxProps> = ({indexNo, showProjects, projectCount}) => {
  const classes = useStyles();
  return (
    <React.Fragment>

        <Grid container direction={"row"} alignItems={"center"}>
          <Grid item xs={6}>
            {showProjects[indexNo] &&(<Paper className={classes.paper} style={{textAlign: "left"}}>Projects</Paper>)}
          </Grid>
          <Grid item xs={6} >
            {showProjects[indexNo] &&(<Paper className={classes.paper} style={{textAlign: "right"}}>{projectCount}</Paper>)}
          </Grid>
        </Grid>
    </React.Fragment>
  )
};

export const RowData: FunctionComponent<RawDataProps> = ({gbeColor, gbeName, showProjects, projectCount}) => {
  const classes = useStyles();
  return(
    <div>
      <Grid container spacing={3} direction="row" justify="center" alignItems="center">
        <Grid item xs={1}>
          <Paper className={classes.paper} style={{backgroundColor: gbeColor}} square>{gbeName}</Paper>
        </Grid>
        <Grid item xs={2}>
          <ProjectBox indexNo={0} showProjects={showProjects} projectCount={projectCount}/>
        </Grid>
        <Grid item xs={2}>
          <ProjectBox indexNo={1} showProjects={showProjects} projectCount={projectCount}/>
        </Grid>
        <Grid item xs={2}>
          <ProjectBox indexNo={2} showProjects={showProjects} projectCount={projectCount}/>
        </Grid>
        <Grid item xs={2}>
          <ProjectBox indexNo={3} showProjects={showProjects} projectCount={projectCount}/>
        </Grid>
        <Grid item xs={2}>
          <ProjectBox indexNo={4} showProjects={showProjects} projectCount={projectCount}/>
        </Grid>
      </Grid>
    </div>
  );
};
