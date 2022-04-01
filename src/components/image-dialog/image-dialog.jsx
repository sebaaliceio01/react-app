import React, { useEffect, useState } from "react";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { DialogActions, DialogContent } from "@mui/material";
import { Button } from "@mui/material";

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  useEffect(() => {
    console.log(props.result);
  }, []);

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>{props.result?.photographer}</DialogTitle>
      <DialogContent>
        <img src={props.result?.src.medium} className="imagenes" />
        <div className="dialog-body">
          <p>
            <b>{props.result?.alt}</b>
          </p>
          <a href={props.result?.photographer_url} target="_blank">
            Photographer profile
          </a>
          <a href={props.result?.url} target="_blank">
            Click to download
          </a>
        </div>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={handleClose}>Cerrar</Button>
      </DialogActions>
    </Dialog>
  );
}

export default SimpleDialog;
