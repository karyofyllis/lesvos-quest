import * as React from "react";
import Dialog from "@mui/material/Dialog";
import { Box, Stack, Typography } from "@mui/material";

const bg = require("../../assets/images/papurousDialog.png");

export default function PapyrosDialog(props) {
  const { open, handleClose, title } = props;

  return (
    <Dialog fullWidth maxWidth={"md"} onClose={handleClose} open={open} PaperComponent={Box}>
      <Stack
        p={5.5}
        rowGap={4}
        sx={{
          margin: "auto",
          height: 800,
          width: 800,
          backgroundImage: `url(${bg})`,
          backgroundRepeat: `no-repeat`,
          backgroundSize: "cover",
        }}
      >
        <Typography
          className={"shadow"}
          sx={{ color: "#ad3c17", fontWeight: "bold", textAlign: "center" }}
          variant={"h3"}
        >
          {title}
        </Typography>

        <Stack px={10} rowGap={4} mt={2}>
          {props.children}
        </Stack>
      </Stack>
    </Dialog>
  );
}
