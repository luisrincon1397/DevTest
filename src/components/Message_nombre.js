import React from "react";
import Grid from "@mui/material/Grid";
// import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import BadgeAvatars from "./Avatar";

function Message_nombre({ nombre, setNombre, ...props }) {
  const onchange = (e) => {
    setNombre({ ...nombre, [e.target.name]: e.target.value });
  };
  return (
    <Grid container spacing={1}>
      <Grid item xs={2}>
        <BadgeAvatars></BadgeAvatars>
      </Grid>
      <Grid item xs={10}>
        <Card >
          <CardContent className="cardCont">
            <Typography gutterBottom variant="h5" component="div">
              ¿Cuál es tu nombre?
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  label="Nombre"
                  name="nombre"
                  fullWidth
                  value={nombre.nombre}
                  onChange={onchange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  label="Segundo Nombre"
                  name="segundo_nombre"
                  fullWidth
                  value={nombre.segundo_nombre}
                  onChange={onchange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  label="Apellido paterno"
                  name="apellido_paterno"
                  fullWidth
                  value={nombre.apellido_paterno}
                  onChange={onchange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  label="Apellido materno"
                  name="apellido_materno"
                  fullWidth
                  value={nombre.apellido_materno}
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
export default Message_nombre;
