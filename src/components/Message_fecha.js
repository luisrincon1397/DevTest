import React from "react";
import Grid from "@mui/material/Grid";
import BadgeAvatars from "./Avatar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

function Message_fecha({ fecha, setFecha, ...props }) {
  const onchange = (e) => {
    setFecha({ ...fecha, [e.target.name]: e.target.value });
  };
  return (
    <Grid container spacing={2}>
      <Grid item xs={2}>
        <BadgeAvatars></BadgeAvatars>
      </Grid>
      <Grid item xs={10}>
        <Card>
          <CardContent className="cardCont">
            <Typography gutterBottom variant="h5" component="div">
              ¿Cuál es tu fecha de nacimiento?
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  label="Día"
                  name="dia"
                  value={fecha.dia}
                  fullWidth
                  onChange={onchange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  label="Mes"
                  name="mes"
                  value={fecha.mes}
                  fullWidth
                  onChange={onchange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  label="Año"
                  name="anio"
                  fullWidth
                  value={fecha.anio}
                  onChange={onchange}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
export default Message_fecha;
