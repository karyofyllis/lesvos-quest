import {
  Card,
  CardActionArea,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import MessageIcon from "../../assets/icons/book.png";
import AllianceIcon from "../../assets/icons/alliance.png";
import data from "../../data/data.json";
import { Fragment, useState } from "react";
import PapyrosDialog from "../@core/PapyrosDialog";

const OptionsMenu = () => {
  const [section, setSection] = useState({
    label: "",
    listItems: [],
    image: {
      url: "",
      name: "",
    },
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
        <Stack py={1}>
          <Divider style={{ backgroundColor: "#ad3c17", height: 3 }} />
        </Stack>
        {data.infoMenu.map((item) => (
          <Card className={"btn"}>
            <CardActionArea
              sx={{ p: 1 }}
              onClick={() => {
                setSection(item);
                setOpenBullets(true);
              }}
            >
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
        <Stack direction={"column"} style={{ height: 500, overflow: "auto" }}>
          {
            <ul>
              {section.listItems.map((item) => (
                <li>
                  <Typography sx={{ fontFamily: "gameFont", fontSize: 32 }}>
                    {item}
                  </Typography>
                </li>
              ))}
            </ul>
          }
          {section.image && section.image.url && (
            <a
              href={section.image.url}
              target={"_blank"}
              style={{ alignSelf: "center" }}
            >
              <img width={400} src={section.image.url} />
            </a>
          )}
          {section.image && section.image.name && (
            <img
              style={{ alignSelf: "center" }}
              width={400}
              src={require("../../assets/images/" + section.image.name)}
            />
          )}
        </Stack>
      </PapyrosDialog>
    </Fragment>
  );
};

export default OptionsMenu;
