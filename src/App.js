import React, { useState } from "react";
import "./App.css";
import Nombre from "./components/Message_nombre";
import Fecha from "./components/Message_fecha";
import Contacto from "./components/Message_contacto";
import { Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';
import AssignmentLateIcon from '@mui/icons-material/AssignmentLate';
function App() {
  const [arrNombre, setArrNombre] = useState({
    nombre: "",
    segundo_nombre: "",
    apellido_paterno: "",
    apellido_materno: "",
  });
  const [arrFecha, setArrFecha] = useState({ dia: "", mes: "", anio: "" });
  const [arrContacto, setArrContacto] = useState({ telefono: "", correo: "" });
  const [msgFinal, setMsgFinal] = useState(false);
  const registrarUsuario = () => {
    let obj = new Object();
    obj.nombre = arrNombre.nombre;
    obj.segundo_nombre = arrNombre.segundo_nombre;
    obj.apellido_paterno = arrNombre.apellido_paterno;
    obj.apellido_materno = arrNombre.apellido_materno;
    obj.fecha_nacimiento =
      arrFecha.dia + "/" + arrFecha.mes + "/" + arrFecha.anio;
    obj.email = arrContacto.correo;
    obj.telefono = arrContacto.telefono;
    fetch("http://127.0.0.1:4000/newuser", {
      method: "POST",
      body: JSON.stringify(obj),
      headers: {
        "Content-Type": "application/json",
        "access-control-allow-origin": "*",
      },
    }).catch((error) => console.log(error));
    setMsgFinal(true)
  };

  return (
    <div className="App">
      <div className="chat">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Card>
              <CardContent className="cardAlert">
                <Grid container spacing={2}>
                  <Grid item xs={8}>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <Typography gutterBottom variant="h4" component="div">
                          Título de formulario
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography gutterBottom variant="body2" component="div">
                          <TimerOutlinedIcon/> En menos de 5 minutos.
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={4}>
                    <AssignmentLateIcon sx={{ fontSize: 80, color: 'white' }}/>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Nombre nombre={arrNombre} setNombre={setArrNombre} />
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={11}>
            <Card>
              <CardContent className="cardAlert">
                <Typography>
                  {arrNombre.nombre +
                    " " +
                    arrNombre.segundo_nombre +
                    " " +
                    arrNombre.apellido_paterno +
                    " " +
                    arrNombre.apellido_materno}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          {arrNombre.nombre !== "" &&
            (arrNombre.apellido_paterno !== "" ||
              arrNombre.apellido_materno !== "") && (
              <React.Fragment>
                <Grid item xs={12}>
                  <Fecha fecha={arrFecha} setFecha={setArrFecha} />
                </Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={11}>
                  <Card>
                    <CardContent className="cardAlert">
                      <Typography>
                        {arrFecha.dia +
                          " " +
                          arrFecha.mes +
                          " " +
                          arrFecha.anio}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </React.Fragment>
            )}
          {(arrFecha.dia !== "" && arrFecha.mes !== "" && arrFecha.anio !== "") && (
            <React.Fragment>
              <Grid item xs={12}>
                <Contacto contacto={arrContacto} setContacto={setArrContacto} />
              </Grid>
              <Grid item xs={1}></Grid>
              <Grid item xs={11}>
                <Card>
                  <CardContent className="cardAlert">
                    <Typography>
                      {arrContacto.correo + " " + arrContacto.telefono}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </React.Fragment>
          )}
          {arrContacto.correo !== "" && arrContacto.telefono !== "" && (
            <React.Fragment>
              <Grid item xs={2}></Grid>
              <Grid item xs={10}>
                <Card>
                  <CardContent className="cardCont">
                    <Typography>Si tus datos son correctos por favor continuemos</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="secondary"
                  fullWidth
                  onClick={(e) => registrarUsuario()}
                >
                  Iniciar
                </Button>
              </Grid>
            </React.Fragment>
          )}
          {(msgFinal === true) && (
            <React.Fragment>
              <Grid item xs={1}></Grid>
              <Grid item xs={11}>
                <Card>
                  <CardContent className="cardAlert">
                    <Typography>
                      {"Fecha nacimiento: " +  arrFecha.dia + " " + arrFecha.mes+ " " + arrFecha.anio}
                    </Typography>
                    <Typography>
                      {"Correo electrónico: " +  arrContacto.correo}
                    </Typography>
                    <Typography>
                      {"Telefono celular: " + arrContacto.telefono}
                    </Typography>
                    <Typography>
                      {"Nombre: " + arrNombre.nombre + " " + arrNombre.segundo_nombre+ " " + arrNombre.apellido_paterno+ " " + arrNombre.apellido_materno}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </React.Fragment>
          )}
        </Grid>
      </div>
    </div>
  );
}

export default App;
