import { Card, CardActionArea, Stack, Typography } from "@mui/material";
import MessageIcon from "../../assets/icons/book.png";
import AllianceIcon from "../../assets/icons/alliance.png";
import data from "../../data/data.json";
import { Fragment, useState } from "react";
import PapyrosDialog from "../@core/PapyrosDialog";

const OptionsMenu = () => {
  const [section, setSection] = useState({
    label: "",
    listItems: [],
  });
  const [openBullets, setOpenBullets] = useState(false);

  return (
    <Fragment>
      <Stack
        style={{
          backgroundColor: "#2f1805",
          width: 200,
          height: "auto",
          borderBottomRightRadius: "15px",
        }}
        p={2}
        spacing={1}
      >
        <Card className={"btn"}>
          <CardActionArea sx={{ p: 1 }}>
            <Stack columnGap={1} direction={"row"} alignItems={"center"}>
              <img src={MessageIcon} width={15} height={15} />
              <Typography
                sx={{
                  color: "white",
                  fontFamily: "gameFont",
                  fontWeight: "bold",
                }}
                variant={"body1"}
              >
                Μηνύματα
              </Typography>
            </Stack>
          </CardActionArea>
        </Card>
        <Card className={"btn"}>
          <CardActionArea sx={{ p: 1 }}>
            <Stack columnGap={1} direction={"row"} alignItems={"center"}>
              <img src={AllianceIcon} width={15} height={15} />
              <Typography
                sx={{
                  color: "white",
                  fontFamily: "gameFont",
                  fontWeight: "bold",
                }}
                variant={"body1"}
              >
                Συμμαχία
              </Typography>
            </Stack>
          </CardActionArea>
        </Card>
        {data.infoMenu.map((item) => (
          <Card className={"btn"}>
            <CardActionArea sx={{ p: 1 }} onClick={() => {
              setSection(item)
              setOpenBullets(true)
            }}>
              <Typography
                sx={{
                  color: "white",
                  fontFamily: "gameFont",
                  fontWeight: "bold",
                }}
                variant={"body1"}
              >
                {item.label}
              </Typography>
            </CardActionArea>
          </Card>
        ))}
      </Stack>
      <PapyrosDialog
        open={openBullets}
        handleClose={() => setOpenBullets(false)}
        title={section.label}
      >
        {
          <ul style={{ height: 500, overflow: "auto"}}>
            {section.listItems.map((item) => (
              <li>
                <Typography sx={{ fontFamily: "gameFont", fontSize: 32 }}>{item}</Typography>
              </li>
            ))}
          </ul>
        }
      </PapyrosDialog>
    </Fragment>
  );
};

export default OptionsMenu